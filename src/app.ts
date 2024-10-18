import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Importa le rotte
import articleRoutes from './api/articleRoutes';
import authorRoutes from './api/authorRoutes';
import workRoutes from './api/workRoutes';  // Importa la rotta per "works"
import literatureRoutes from './api/literatureRoutes';
import historySectionRoutes from './api/historySectionRoutes';

dotenv.config();

const app = express();

// Middleware per il parsing del JSON nel corpo delle richieste
app.use(express.json());

// Abilita CORS
app.use(cors({ origin: true }));

// Registra le rotte con prefisso /api
app.use('/api/articles', articleRoutes);
app.use('/api', articleRoutes);
app.use('/api/authors', authorRoutes);
app.use('/api', authorRoutes);
app.use('/api/works', workRoutes);  // Registra la rotta /api/works
app.use('/api', workRoutes);  // Registra la rotta /api/works
app.use('/api/literatures', literatureRoutes);
app.use('/api', literatureRoutes);
app.use('/api/history-sections', historySectionRoutes);
app.use('/api', historySectionRoutes);

// Gestisci le rotte non trovate
app.use((req, res, next) => {
    res.status(404).send('Errore 404: Risorsa non trovata');
});

app.use((req, res) => {
    res.status(404).send('Errore 404: Risorsa non trovata');
});

// Esporta l'handler per Vercel
export default app;
