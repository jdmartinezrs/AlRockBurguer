const express = require('express');

const menusRoute = require('../../application/routes/menusRoute');
const restaurantesRoute = require('../../application/routes/restauranteRoute');
const createServer = () => {
    const app = express();
    
    app.use(express.json());   
    // RUTAS
    app.use('/api', menusRoute);
    app.use('/seats', restaurantesRoute);
    
    
    return app;
};


module.exports = createServer;


