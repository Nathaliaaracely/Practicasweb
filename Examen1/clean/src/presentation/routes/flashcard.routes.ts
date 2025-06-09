import { Router, Request, Response } from 'express';
import { FlashcardMemoryDatasource } from '../../infrastructure/datasources/flashcard-memory.datasource';
import { CreateFlashcard } from '../../domain/use-cases/create-flashcard';

// Instancias necesarias
const router = Router();
const repo = new FlashcardMemoryDatasource();
const createFlashcardUseCase = new CreateFlashcard(repo);

// Ruta para crear una flashcard
router.post('/flashcards', async (req: Request, res: Response) => {
  try {
    const flashcard = await createFlashcardUseCase.execute(req.body);
    res.status(201).json(flashcard);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// Ruta para listar todas las flashcards
router.get('/flashcards', async (_req: Request, res: Response) => {
  const flashcards = await repo.findAll();
  res.json(flashcards);
});

export default router;