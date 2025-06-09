// src/domain/repositories/study-session.repository.ts
import { StudySession } from '../entities/study-session.entity';
import { FlashcardReview } from '../entities/flashcard-review.entity';

export interface IStudySessionRepository {
  startSession(userId: string, categoryId?: string): Promise<StudySession>;
  endSession(sessionId: string): Promise<StudySession>;
  logFlashcardReview(review: FlashcardReview): Promise<void>;
  getUserSessions(userId: string): Promise<StudySession[]>;
}