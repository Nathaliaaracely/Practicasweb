// src/domain/entities/flashcard-review.entity.ts
export class FlashcardReview {
  id!: string;
  flashcardId!: string;
  sessionId!: string;
  reviewedAt!: Date;
  wasCorrect!: boolean; // Si el usuario acertó la respuesta
  nextReviewDate!: Date; // Para algoritmo de memoria espaciada
}