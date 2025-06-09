// src/domain/repositories/category.repository.ts
import { Category } from '../entities/category.entity';

export interface ICategoryRepository {
  create(category: Category): Promise<Category>;
  findById(id: string): Promise<Category | null>;
  findAll(): Promise<Category[]>;
  findByName(name: string): Promise<Category | null>;
}