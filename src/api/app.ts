import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Importa le rotte
import articleRoutes from '../routes/articleRoutes';
import authorRoutes from '../routes/authorRoutes';
import workRoutes from '../routes/workRoutes';  // Importa la rotta per "works"
import literatureRoutes from '../routes/literatureRoutes';
import historySectionRoutes from '../routes/historySectionRoutes';

dotenv.config();

const app = express();

// Middleware per il parsing del JSON nel corpo delle richieste
app.use(express.json());

// Abilita CORS
app.use(cors({ origin: true }));

// Registra le rotte con prefisso /api
app.use('api/articles', articleRoutes);
app.use('api', articleRoutes);
app.use('api/authors', authorRoutes);
app.use('api', authorRoutes);
app.use('api/works', workRoutes);  // Registra la rotta /api/works
app.use('api', workRoutes);  // Registra la rotta /api/works
app.use('api/literatures', literatureRoutes);
app.use('api', literatureRoutes);
app.use('api/history-sections', historySectionRoutes);
app.use('api', historySectionRoutes);

// Gestisci le rotte non trovate
app.use((req, res, next) => {
    res.status(404).send('Errore 404: Risorsa non trovata');
});

export default app;