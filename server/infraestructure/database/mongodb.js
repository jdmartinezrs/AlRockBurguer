import mongoose from 'mongoose';

export default class Connect {
  static instance;
  #host;
  #port;
  #dbName;
  #user;
  #pwd;
  uri;

  constructor() {
    if (typeof Connect.instance === 'object') {
      return Connect.instance;
    }

    this.#host = process.env.MONGO_HOST;
    this.#port = process.env.MONGO_PORT;
    this.#dbName = process.env.MONGO_DB_NAME;
    this.#user = process.env.MONGO_USER;
    this.#pwd = process.env.MONGO_PWD;

    if (!this.#host || !this.#port || !this.#dbName) {
      throw new Error('❌ Variables de entorno MONGO_* incompletas o no definidas.');
    }

    if (this.#user && this.#pwd) {
      this.uri = `mongodb://${this.#user}:${this.#pwd}@${this.#host}:${this.#port}/${this.#dbName}?authSource=${this.#dbName}`;
    } else {
      this.uri = `mongodb://${this.#host}:${this.#port}/${this.#dbName}`;
    }

    Connect.instance = this;
    return this;
  }

  async open() {
    try {
      await mongoose.connect(this.uri);
      console.log('✅ MongoDB conectado exitosamente:', this.uri);
    } catch (error) {
      console.error('❌ Error al conectar a MongoDB:', error.message);
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
      console.error('⚠️ Error al cerrar conexión a MongoDB:', err.message);
    }
  }
}
