require('dotenv').config({ path: './.env' });
const ConnectToDatabase = require('./infrastucture/database/mongodb.js');
const createServer = require('./infrastucture/server/server');


const startApp = async () => {
    const connectToDatabase = new ConnectToDatabase();
    await connectToDatabase.open();

    const app = createServer();

    app.listen({ port: process.env.EXPRESS_PORT, host: process.env.EXPRESS_HOST }, () => {
        console.log(`🚀 Servidor corriendo en: http://${process.env.EXPRESS_HOST}:${process.env.EXPRESS_PORT}`);
    });
};

startApp();
