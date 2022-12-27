import { config } from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { routerAuth } from './routes/Auth';
config();

const app = express();
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routerAuth);
const PORT = Number(process.env.PORT) ?? 3333;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`http://0.0.0.0:${PORT}`);
});
