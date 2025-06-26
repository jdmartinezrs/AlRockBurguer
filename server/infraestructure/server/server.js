const express = require('express');

const menusRoute = require('../../application/routes/menusRoute');

const createServer = () => {
    const app = express();
    
    app.use(express.json());   
    // RUTAS
    app.use('/api', menusRoute);
    
    
    return app;
};


module.exports = createServer;


