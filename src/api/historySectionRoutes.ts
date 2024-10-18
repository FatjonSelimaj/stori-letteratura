import express from 'express';
import {
  createHistorySection,
  getHistorySections,
  getHistorySectionById,
  updateHistorySection,
  deleteHistorySection
} from '../controllers/historySectionController';

const router = express.Router();

// Rotta per creare una nuova sezione storica
router.post('/history-sections', createHistorySection);

// Rotta per ottenere tutte le sezioni storiche
router.get('/', getHistorySections);

// Rotta per ottenere una sezione storica per ID
router.get('/history-sections/:id', getHistorySectionById);

// Rotta per aggiornare una sezione storica per ID
router.put('/history-sections/:id', updateHistorySection);

// Rotta per eliminare una sezione storica per ID
router.delete('/history-sections/:id', deleteHistorySection);

export default router;
