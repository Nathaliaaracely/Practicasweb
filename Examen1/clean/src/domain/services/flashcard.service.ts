import { Flashcard } from '../entities/flashcard.entity';

export class FlashcardService {
    private flashcards: Flashcard[] = [];

    create(flashcard: Flashcard): Flashcard {
        this.flashcards.push(flashcard);
        return flashcard;
    }

    findAll(): Flashcard[] {
        return this.flashcards;
    }

    findById(id: string): Flashcard | undefined {
        return this.flashcards.find(fc => fc.id === id);
    }

    update(id: string, updated: Partial<Flashcard>): Flashcard | undefined {
        const index = this.flashcards.findIndex(fc => fc.id === id);
        if (index === -1) return undefined;
        this.flashcards[index] = { ...this.flashcards[index], ...updated };
        return this.flashcards[index];
    }

    delete(id: string): boolean {
        const index = this.flashcards.findIndex(fc => fc.id === id);
        if (index === -1) return false;
        this.flashcards.splice(index, 1);
        return true;
    }
}