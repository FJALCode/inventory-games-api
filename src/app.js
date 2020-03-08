import express, { json } from 'express';
import morgan from 'morgan';
import routes from './routes/routes'
import CONFIG from './config/morgan'

// initialization
const app = express();

// middlewares
app.use(morgan(CONFIG.MODE));
app.use(json());

// routes
app.use(routes);



export default app;