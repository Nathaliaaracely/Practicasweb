// src/domain/repositories/flashcard.repository.ts
import { Flashcard } from '../entities/flashcard.entity';

export interface IFlashcardRepository {
  create(flashcard: Flashcard): Promise<Flashcard>;
  update(id: string, flashcard: Partial<Flashcard>): Promise<Flashcard>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Flashcard | null>;
  findAll(): Promise<Flashcard[]>;
  findByCategory(categoryId: string): Promise<Flashcard[]>;
}