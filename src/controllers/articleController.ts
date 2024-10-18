import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { ObjectId } from 'mongodb'; // Per la validazione degli ObjectId

const prisma = new PrismaClient();

// Creare un articolo senza immagini
export const createArticle = async (req: Request, res: Response) => {
  const { title, content, category } = req.body;

  try {
    // Controlla se l'articolo con lo stesso titolo esiste già
    const existingArticle = await prisma.article.findFirst({
      where: { title },
    });

    if (existingArticle) {
      return res.status(409).json({ error: 'Article with this title already exists' });
    }

    // Creazione dell'articolo
    const article = await prisma.article.create({
      data: {
        title,
        content,
        category,
      },
    });

    return res.status(201).json(article);
  } catch (error) {
    console.error('Error creating article:', error);
    return res.status(500).json({ error: 'Failed to create article' });
  }
};

// Recuperare tutti gli articoli
export const getArticles = async (req: Request, res: Response) => {
  try {
    const articles = await prisma.article.findMany();
    return res.status(200).json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    return res.status(500).json({ error: 'Failed to fetch articles' });
  }
};

// Recuperare articoli per categoria
export const getArticlesByCategory = async (req: Request, res: Response) => {
  const { category } = req.params;
  try {
    const articles = await prisma.article.findMany({
      where: { category },
    });
    return res.status(200).json(articles);
  } catch (error) {
    console.error('Error fetching articles by category:', error);
    return res.status(500).json({ error: 'Failed to fetch articles' });
  }
};

// Aggiornare un articolo senza immagini
export const updateArticle = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content, category } = req.body;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid article ID format' });
  }

  try {
    const existingArticle = await prisma.article.findUnique({ where: { id } });
    if (!existingArticle) {
      return res.status(404).json({ error: 'Article not found' });
    }

    const updatedArticle = await prisma.article.update({
      where: { id },
      data: {
        title,
        content,
        category,
      },
    });

    return res.status(200).json(updatedArticle);
  } catch (error) {
    console.error('Error updating article:', error);
    return res.status(500).json({ error: 'Failed to update article' });
  }
};

// Eliminare un articolo
export const deleteArticle = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid article ID format' });
  }

  try {
    const existingArticle = await prisma.article.findUnique({ where: { id } });
    if (!existingArticle) {
      return res.status(404).json({ error: 'Article not found' });
    }

    await prisma.article.delete({
      where: { id },
    });

    return res.status(204).send(); // Nessun contenuto
  } catch (error) {
    console.error('Error deleting article:', error);
    return res.status(500).json({ error: 'Failed to delete article' });
  }
};

// Recuperare un singolo articolo per ID
export const getArticleById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid article ID format' });
  }

  try {
    const article = await prisma.article.findUnique({
      where: { id },
    });

    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }

    return res.status(200).json(article);
  } catch (error) {
    console.error('Error fetching article:', error);
    return res.status(500).json({ error: 'Failed to fetch article' });
  }
};
