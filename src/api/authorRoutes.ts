import express from 'express';
import {
  createAuthor,
  getAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor
} from '../controllers/authorController';

const router = express.Router();

// Rotta per creare un nuovo autore
router.post('/authors', createAuthor);

// Rotta per ottenere tutti gli autori
router.get('/', getAuthors);

// Rotta per ottenere un autore specifico per ID
router.get('/authors/:id', getAuthorById);

// Rotta per aggiornare un autore specifico per ID
router.put('/authors/:id', updateAuthor);

// Rotta per eliminare un autore specifico per ID
router.delete('/authors/:id', deleteAuthor);

export default router;
