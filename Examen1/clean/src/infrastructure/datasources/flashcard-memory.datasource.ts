import { Flashcard } from '../../domain/entities/flashcard.entity';
import { IFlashcardRepository } from '../../domain/repositories/flashcard.repository';

export class FlashcardMemoryDatasource implements IFlashcardRepository {
  private flashcards: Flashcard[] = [];

  async create(flashcard: Flashcard): Promise<Flashcard> {
    this.flashcards.push(flashcard);
    return flashcard;
  }

  async update(id: string, data: Partial<Flashcard>): Promise<Flashcard> {
    const idx = this.flashcards.findIndex(f => f.id === id);
    if (idx === -1) throw new Error('Not found');
    this.flashcards[idx] = { ...this.flashcards[idx], ...data, updatedAt: new Date() };
    return this.flashcards[idx];
  }

  async delete(id: string): Promise<void> {
    this.flashcards = this.flashcards.filter(f => f.id !== id);
  }

  async findById(id: string): Promise<Flashcard | null> {
    return this.flashcards.find(f => f.id === id) ?? null;
  }

  async findAll(): Promise<Flashcard[]> {
    return this.flashcards;
  }

  async findByCategory(categoryId: string): Promise<Flashcard[]> {
    return this.flashcards.filter(f => f.categoryIds.includes(categoryId));
  }
}