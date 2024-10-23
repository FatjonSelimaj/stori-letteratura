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

// Middleware per il parsing del JSON nel corpo delle richieste
app.use(express.json());

// Configurazione CORS: accetta richieste solo da origini specifiche in produzione
const allowedOrigins = ['https://stori-letteratura.vercel.app/', 'https://storia-letteratura-admin-frontend.vercel.app/', 'https://storia-letteratura-follower.vercel.app/'];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Se necessario inviare cookie o credenziali
}));

// Registra le rotte con prefisso /api
app.use('/api/articles', articleRoutes);
app.use('/api/authors', authorRoutes);
app.use('/api/works', workRoutes);
app.use('/api/literatures', literatureRoutes);
app.use('/api/history-sections', historySectionRoutes);

// Gestisci le rotte non trovate
app.use((req, res, next) => {
    res.status(404).send('Errore 404: Risorsa non trovata');
});

// Avvia il server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;
