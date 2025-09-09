import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

import ConnectToDatabase from './server/infraestructure/database/mongodb.js';
import createServer from './server/infraestructure/server/server.js';
import http from 'http';

const startApp = async () => {
    const connectToDatabase = new ConnectToDatabase();
    await connectToDatabase.open();

    const app = createServer();

    const PORT = process.env.PORT || process.env.EXPRESS_PORT || 3000;
    const HOST = process.env.EXPRESS_HOST || 'localhost';

    http.createServer(app).listen(PORT, () => {
        console.log(`Servidor corriendo en puerto ${PORT}`);
    });
};

startApp();
