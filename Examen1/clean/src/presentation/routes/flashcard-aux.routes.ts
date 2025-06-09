import { Router, Request, Response } from 'express';
import { FlashcardService } from '../../domain/services/flashcard.service';

const router = Router();
const service = new FlashcardService();

router.get('/flashcards-aux', async (_req: Request, res: Response) => {
  const flashcards = await service.getAll();
  res.json(flashcards);
});

router.post('/flashcards-aux', async (req: Request, res: Response) => {
  try {
    const flashcard = await service.create(req.body);
    res.status(201).json(flashcard);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export default router;