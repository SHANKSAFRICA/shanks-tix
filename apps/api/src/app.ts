import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { prisma } from '@shankstix/db';
import { env } from './env.js';

export const app = express();

app.set('trust proxy', 1);
app.use(helmet());
app.use(cors({ origin: [env.WEB_URL, env.ADMIN_URL], credentials: true }));
app.use(compression());
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: 'ok', db: 'ok' });
  } catch {
    res.status(503).json({ status: 'degraded', db: 'unreachable' });
  }
});

app.use((_req, res) => {
  res.status(404).json({ message: 'Not found' });
});
