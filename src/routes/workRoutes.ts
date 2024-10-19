import express from 'express';
import {
  createWork,
  deleteWork,
  getWorkById,
  getWorks,
  updateWork
} from '../controllers/workController';

const router = express.Router();

// Rotta per creare una nuova opera senza immagini
router.post('/works', createWork);

// Rotta per ottenere tutte le opere
router.get('/', getWorks);

// Rotta per ottenere un'opera specifica per ID
router.get('/works/:id', getWorkById);

// Rotta per aggiornare un'opera specifica per ID senza immagini
router.put('/works/:id', updateWork);

// Rotta per eliminare un'opera specifica per ID
router.delete('/works/:id', deleteWork);

export default router;
