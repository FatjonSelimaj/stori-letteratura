import express from 'express';
import {
  createArticle,
  getArticles,
  getArticleById,
  getArticlesByCategory,
  updateArticle,
  deleteArticle
} from '../controllers/articleController';

const router = express.Router();

// Rotta per creare un nuovo articolo
router.post('/articles', createArticle);

// Rotta per ottenere tutti gli articoli
router.get('/', getArticles);

// Rotta per ottenere articoli per categoria
router.get('/articles/category/:category', getArticlesByCategory);

// Rotta per ottenere un articolo specifico per ID
router.get('/articles/:id', getArticleById);

// Rotta per aggiornare un articolo specifico per ID
router.put('/articles/:id', updateArticle);

// Rotta per eliminare un articolo specifico per ID
router.delete('/articles/:id', deleteArticle);

export default router;
