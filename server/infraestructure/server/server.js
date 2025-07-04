const express = require('express');
const cors = require('cors');

const menusRoute = require('../../application/routes/menusRoute');
const restaurantesRoute = require('../../application/routes/restauranteRoute');

const createServer = () => {
    const app = express();

    // 🛡️ Middleware CORS
    app.use(cors({
        origin: 'https://localhost:5173', 
        credentials: true
    }));

    app.use(express.json());

    // RUTAS
    app.use('/api', menusRoute);
    app.use('/seats', restaurantesRoute);

    return app;
};

module.exports = createServer;
