export class AppError extends Error {
  constructor(message: string, public statusCode: number = 500) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class EntityNotFoundError extends AppError {
  constructor(entityType: string, identifier: string) {
    super(`Entity of type "${entityType}" identified by "${identifier}" was not found.`, 404);
  }
}

export class InvalidSlugError extends AppError {
  constructor(slug: string) {
    super(`The slug format "${slug}" is invalid. Slugs must only contain lowercase letters, numbers, and single hyphens.`, 400);
  }
}

export class RelationshipError extends AppError {
  constructor(message: string) {
    super(message, 400);
  }
}

export class ValidationError extends AppError {
  constructor(public errors: Record<string, string[]>) {
    super('Validation failed.', 400);
  }
}
