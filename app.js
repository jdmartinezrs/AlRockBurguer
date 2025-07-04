require('dotenv').config({ path: './.env' });
const fs = require('fs');
const https = require('https');
const ConnectToDatabase = require('./server/infraestructure/database/mongodb');
const createServer = require('./server/infraestructure/server/server');

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
