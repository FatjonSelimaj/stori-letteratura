import express from 'express';
import {
  createLiterature,
  getLiteratures,
  getLiteratureById,
  updateLiterature,
  deleteLiterature
} from '../controllers/literatureController';

const router = express.Router();

// Rotta per creare una nuova relazione letteraria
router.post('/literatures', createLiterature);

// Rotta per ottenere tutte le relazioni letterarie
router.get('/literatures', getLiteratures);

// Rotta per ottenere una relazione letteraria per ID
router.get('/literatures/:id', getLiteratureById);

// Rotta per aggiornare una relazione letteraria per ID
router.put('/literatures/:id', updateLiterature);

// Rotta per eliminare una relazione letteraria per ID
router.delete('/literatures/:id', deleteLiterature);

export default router;
