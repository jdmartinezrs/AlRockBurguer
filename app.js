require('dotenv').config({ path: './.env' });
const ConnectToDatabase = require('./server/infraestructure/database/mongodb');
const createServer = require('./server/infraestructure/server/server');


const startApp = async () => {
    const connectToDatabase = new ConnectToDatabase();
    await connectToDatabase.open();

    const app = createServer();

    app.listen({ port: process.env.EXPRESS_PORT, host: process.env.EXPRESS_HOST }, () => {
        console.log(`🚀 Servidor corriendo en: http://${process.env.EXPRESS_HOST}:${process.env.EXPRESS_PORT}`);
    });
};

startApp();
