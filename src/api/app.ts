import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Importa le rotte
import articleRoutes from '../routes/articleRoutes';
import authorRoutes from '../routes/authorRoutes';
import workRoutes from '../routes/workRoutes';
import literatureRoutes from '../routes/literatureRoutes';
import historySectionRoutes from '../routes/historySectionRoutes';

dotenv.config();

const app = express();

app.use(cors({
  origin: ['https://storia-letteratura-follower.vercel.app'], // Dominio frontend autorizzato
  credentials: true,  // Permetti invio di cookie o credenziali
}));

// Middleware per il parsing del JSON
app.use(express.json());

// Registra le rotte con prefisso /api
app.use('/api/articles', articleRoutes);
app.use('/api/authors', authorRoutes);
app.use('/api/works', workRoutes);
app.use('/api/literatures', literatureRoutes);
app.use('/api/history-sections', historySectionRoutes);

app.use((req, res, next) => {
    res.status(404).send('Errore 404: Risorsa non trovata');
  });
  
  // Esporta l'app per Vercel
  export default app;
