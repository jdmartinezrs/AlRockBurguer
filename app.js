import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import fs  from 'fs';
import  https from 'https';
import ConnectToDatabase from './server/infraestructure/database/mongodb.js';
import createServer from './server/infraestructure/server/server.js';

const startApp = async () => {
    const connectToDatabase = new ConnectToDatabase();
    await connectToDatabase.open();

    const app = createServer();

    const sslOptions = {
        key: fs.readFileSync('./certs/key.pem'),
        cert: fs.readFileSync('./certs/cert.pem')
    };

    https.createServer(sslOptions, app).listen(process.env.EXPRESS_PORT, process.env.EXPRESS_HOST, () => {
        console.log(`🚀 Servidor corriendo en: https://${process.env.EXPRESS_HOST}:${process.env.EXPRESS_PORT}`);
    });
};

startApp();
