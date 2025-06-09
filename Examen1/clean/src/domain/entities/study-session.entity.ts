// src/domain/entities/study-session.entity.ts
import { FlashcardReview } from './flashcard-review.entity';

export class StudySession {
  id!: string;
  userId!: string;
  categoryId?: string; // Categoría filtrada (opcional)
  startTime!: Date;
  endTime?: Date;
  flashcardsReviewed!: FlashcardReview[]; // Detalle de las flashcards vistas
}