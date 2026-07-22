import { db } from '../db';
import { appCache } from '../cache';
import { eq, sql } from 'drizzle-orm';
import { PgTable } from 'drizzle-orm/pg-core';

export abstract class BaseRepository<
  TTable extends PgTable<any>,
  TSelect,
  TInsert
> {
  constructor(
    protected table: TTable,
    protected entityName: string // e.g. 'characters', 'locations'
  ) {}

  protected getCacheKey(idOrSlug: string): string {
    return `${this.entityName}:${idOrSlug}`;
  }

  async findById(id: string): Promise<TSelect | null> {
    const cacheKey = this.getCacheKey(id);
    const cached = appCache.get<TSelect>(cacheKey);
    if (cached) return cached;

    const [result] = await db
      .select()
      .from(this.table as any)
      // @ts-ignore
      .where(eq(this.table.id, id))
      .limit(1);

    if (result) {
      appCache.set(cacheKey, result);
    }
    return (result as TSelect) || null;
  }

  async findBySlug(slug: string): Promise<TSelect | null> {
    // @ts-ignore
    if (!this.table.slug) {
      throw new Error(`Entity "${this.entityName}" does not have a slug column.`);
    }

    const cacheKey = this.getCacheKey(slug);
    const cached = appCache.get<TSelect>(cacheKey);
    if (cached) return cached;

    const [result] = await db
      .select()
      .from(this.table as any)
      // @ts-ignore
      .where(eq(this.table.slug, slug))
      .limit(1);

    if (result) {
      appCache.set(cacheKey, result);
    }
    return (result as TSelect) || null;
  }

  async findAll(): Promise<TSelect[]> {
    const cacheKey = `${this.entityName}:all`;
    const cached = appCache.get<TSelect[]>(cacheKey);
    if (cached) return cached;

    const results = await db.select().from(this.table as any);
    appCache.set(cacheKey, results);
    return results as TSelect[];
  }

  async findPublished(): Promise<TSelect[]> {
    // @ts-ignore
    if (!this.table.status) {
      return this.findAll();
    }

    const cacheKey = `${this.entityName}:published`;
    const cached = appCache.get<TSelect[]>(cacheKey);
    if (cached) return cached;

    const results = await db
      .select()
      .from(this.table as any)
      // @ts-ignore
      .where(eq(this.table.status, 'published'));

    appCache.set(cacheKey, results);
    return results as TSelect[];
  }

  async exists(id: string): Promise<boolean> {
    const item = await this.findById(id);
    return item !== null;
  }

  async count(): Promise<number> {
    const cacheKey = `${this.entityName}:count`;
    const cached = appCache.get<number>(cacheKey);
    if (cached !== null) return cached;

    const [countResult] = await db
      .select({ value: sql<number>`count(*)` })
      .from(this.table as any);

    const num = Number(countResult?.value || 0);
    appCache.set(cacheKey, num);
    return num;
  }

  async create(data: TInsert): Promise<TSelect> {
    const [result] = await db
      .insert(this.table as any)
      .values(data as any)
      .returning();

    // Invalidate all caches for this entity type on mutation
    appCache.deletePattern(`${this.entityName}:`);
    return result as TSelect;
  }

  async update(id: string, data: Partial<TInsert>): Promise<TSelect | null> {
    const [result] = await db
      .update(this.table as any)
      .set(data as any)
      // @ts-ignore
      .where(eq(this.table.id, id))
      .returning();

    if (result) {
      appCache.deletePattern(`${this.entityName}:`);
    }
    return (result as TSelect) || null;
  }

  async delete(id: string): Promise<boolean> {
    const result = await db
      .delete(this.table as any)
      // @ts-ignore
      .where(eq(this.table.id, id))
      .returning();

    if (result.length > 0) {
      appCache.deletePattern(`${this.entityName}:`);
      return true;
    }
    return false;
  }
}
