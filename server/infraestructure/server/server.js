import express  from 'express';
import cors from 'cors';
import menusRoute  from '../../application/routes/menusRoute.js';
import restaurantesRoute from '../../application/routes/restauranteRoute.js';
import clientesRoute from '../../application/routes/clientesRouter.js';

const createServer = () => {
    const app = express();

    // 🛡️ Middleware CORS
  
app.use(cors({
  origin: 'http://localhost:5173',   // no uses https si el frontend es http
  credentials: true
}));

    app.use(express.json());

    // RUTAS
    app.use('/api', menusRoute);
    app.use('/seats', restaurantesRoute);
    app.use('/clientes', clientesRoute);

    return app;
};

export default createServer;
