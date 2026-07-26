import { characterApplication } from './character.application';
import { locationApplication } from './location.application';
import { vehicleApplication } from './vehicle.application';
import { weaponApplication } from './weapon.application';
import { businessApplication } from './business.application';
import { EntityType } from '../types/database';

export class PageRegistry {
  private registry = new Map<EntityType, (slug: string) => Promise<any>>();

  constructor() {
    this.registerDefaults();
  }

  private registerDefaults() {
    this.registry.set('character', (slug) => characterApplication.characterPage(slug));
    this.registry.set('location', (slug) => locationApplication.locationPage(slug));
    this.registry.set('vehicle', (slug) => vehicleApplication.vehiclePage(slug));
    this.registry.set('weapon', (slug) => weaponApplication.weaponPage(slug));
    this.registry.set('business', (slug) => businessApplication.businessPage(slug));
  }

  /**
   * Registers a new page loader handler dynamically.
   */
  register(type: EntityType, loader: (slug: string) => Promise<any>): void {
    this.registry.set(type, loader);
  }

  /**
   * Resolves and executes a page loader based on its registered entity type.
   */
  async loadPage(type: EntityType, slug: string): Promise<any> {
    const loader = this.registry.get(type);
    if (!loader) {
      throw new Error(`No page loader registered for entity type: "${type}"`);
    }
    return loader(slug);
  }
}

export const pageRegistry = new PageRegistry();
