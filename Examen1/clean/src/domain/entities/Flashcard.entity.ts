export class Flashcard {
  id!: string;
  question!: string;
  answer!: string;
  imageUrl?: string;
  categoryIds: string[] = [];
  difficultyLevel: number = 1;
  isBasic: boolean = false;
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
}