import mongoose from 'mongoose';

export default class Connect {
  static instance;
  #host;
  #port;
  #dbName;
  uri;

  constructor() {
    if (typeof Connect.instance === 'object') {
      return Connect.instance;
    }

    this.#host = process.env.MONGO_HOST;
    this.#port = process.env.MONGO_PORT;
    this.#dbName = process.env.MONGO_DB_NAME;

    this.uri = `mongodb://${this.#host}:${this.#port}/${this.#dbName}`;

    Connect.instance = this;
    return this;
  }

  async open() {
    try {
      await mongoose.connect(this.uri);
      console.log('✅ MongoDB conectado exitosamente:', this.uri);
    } catch (error) {
      console.error('❌ Error al conectar a MongoDB:', error);
      await this.reconnect();
    }
  }

  async reconnect() {
    console.log('🔄 Reintentando conexión a MongoDB...');
    await this.open();
  }

  async close() {
    try {
      await mongoose.disconnect();
      console.log('🛑 Conexión a MongoDB cerrada');
    } catch (err) {
      console.error('⚠️ Error al cerrar conexión a MongoDB:', err);
    }
  }
}