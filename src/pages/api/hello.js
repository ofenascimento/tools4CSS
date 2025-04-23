// lib/mongo.js
import mongoose from 'mongoose';

const MONGO_URI = 'mongodb://localhost:27017/meubanco'; // ou use o link do Atlas

if (!MONGO_URI) throw new Error('MONGO_URI não definida');

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, {
      bufferCommands: false,
    }).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
