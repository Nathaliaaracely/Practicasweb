import { Flashcard } from '../entities/flashcard.entity';
import { IFlashcardRepository } from '../repositories/flashcard.repository';
import { v4 as uuidv4 } from 'uuid';

export interface CreateFlashcardDto {
  question: string;
  answer: string;
  imageUrl?: string;
  categoryIds?: string[];
  difficultyLevel?: number;
  isBasic?: boolean;
}

export interface CreateFlashcardUseCase {
  execute(dto: CreateFlashcardDto): Promise<Flashcard>;
}

export class CreateFlashcard implements CreateFlashcardUseCase {
  constructor(private readonly repository: IFlashcardRepository) {}

  async execute(dto: CreateFlashcardDto): Promise<Flashcard> {
    const flashcard = new Flashcard();
    flashcard.id = uuidv4();
    flashcard.question = dto.question;
    flashcard.answer = dto.answer;
    flashcard.imageUrl = dto.imageUrl;
    flashcard.categoryIds = dto.categoryIds ?? [];
    flashcard.difficultyLevel = dto.difficultyLevel ?? 1;
    flashcard.isBasic = dto.isBasic ?? false;
    flashcard.createdAt = new Date();
    flashcard.updatedAt = new Date();

    return this.repository.create(flashcard);
  }
}