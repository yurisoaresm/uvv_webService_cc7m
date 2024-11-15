import 'dotenv/config';
import express from 'express';

import userRoutes from './routes/userRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log('>>> Astro API <<<');
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
