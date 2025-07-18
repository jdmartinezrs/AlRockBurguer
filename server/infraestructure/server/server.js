import express  from 'express';
import cors from 'cors';
import menusRoute  from '../../application/routes/menusRoute.js';
import restaurantesRoute from '../../application/routes/restauranteRoute.js';
import clientesRoute from '../../application/routes/clientesRouter.js';

const createServer = () => {
    const app = express();

  
app.use(cors({
  origin: 'http://localhost:5173',   
  credentials: true
}));

    app.use(express.json());

    app.use('/api', menusRoute);
    app.use('/seats', restaurantesRoute);
    app.use('/clientes', clientesRoute);

    return app;
};
export default createServer;
