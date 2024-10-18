import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';

const prisma = new PrismaClient();

// Crea una nuova opera senza immagini
export const createWork = async (req: Request, res: Response) => {
  const { title, genre, authorId, links } = req.body;

  try {
    const existingWork = await prisma.work.findFirst({ where: { title } });
    if (existingWork) {
      return res.status(409).json({ error: 'Work with this title already exists.' });
    }

    const work = await prisma.work.create({
      data: { title, genre, authorId, links }
    });

    return res.status(201).json(work);
  } catch (error) {
    console.error('Failed to create work:', error);
    return res.status(400).json({ error: 'Failed to create work.' });
  }
};

// Recupera tutte le opere
export const getWorks = async (req: Request, res: Response) => {
  try {
    const works = await prisma.work.findMany();
    res.status(200).json(works);
  } catch (error) {
    console.error('Error fetching works:', error);
    res.status(500).json({ error: 'Failed to fetch works' });
  }
};

// Recupera una specifica opera per ID
export const getWorkById = async (req: Request, res: Response) => {
  const { id } = req.params;

  // Verifica se l'ID passato è un ObjectId valido
  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  try {
    const work = await prisma.work.findUnique({
      where: { id },
    });

    if (!work) {
      return res.status(404).json({ error: 'Work not found' });
    }

    res.status(200).json(work);
  } catch (error) {
    console.error('Error fetching work by ID:', error);
    res.status(500).json({ error: 'Failed to fetch work' });
  }
};

// Aggiorna un'opera per ID senza immagini
export const updateWork = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, genre, authorId, links } = req.body;

  try {
    const work = await prisma.work.update({
      where: { id },
      data: { title, genre, authorId, links }
    });

    res.status(200).json(work);
  } catch (error) {
    console.error('Failed to update work:', error);
    res.status(400).json({ error: 'Failed to update work.' });
  }
};

// Elimina un'opera per ID
export const deleteWork = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.work.delete({
      where: { id }
    });

    res.status(204).send();
  } catch (error) {
    console.error('Error deleting work:', error);
    res.status(500).json({ error: 'Failed to delete work' });
  }
};
