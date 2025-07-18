import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

import ConnectToDatabase from './server/infraestructure/database/mongodb.js';
import createServer from './server/infraestructure/server/server.js';
import http from 'http'; // <== Agrega esta importación

const startApp = async () => {
    const connectToDatabase = new ConnectToDatabase();
    await connectToDatabase.open();

    const app = createServer();

    http.createServer(app).listen(process.env.EXPRESS_PORT, process.env.EXPRESS_HOST, () => {
        console.log(`🚀 Servidor corriendo en: http://${process.env.EXPRESS_HOST}:${process.env.EXPRESS_PORT}`);
    });
};

startApp();
