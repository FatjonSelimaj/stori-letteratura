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

app.use((_req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://storia-letteratura-follower.vercel.app');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});


// Middleware per il parsing del JSON
app.use(express.json());

// Registra le rotte con prefisso /api
app.use('/api/articles', articleRoutes);
app.use('/api/authors', authorRoutes);
app.use('/api/works', workRoutes);
app.use('/api/literatures', literatureRoutes);
app.use('/api/history-sections', historySectionRoutes);

// Gestisci le rotte non trovate (404)
app.use((_req, res, _next) => {
    res.status(404).send('Errore 404: Risorsa non trovata');
});

// Avvia il server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;  // Esportazione necessaria per Vercel
