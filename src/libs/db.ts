import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Defina a variável MONGODB_URI no .env.local');
}

declare global {
  var mongooseConn: Promise<typeof mongoose> | undefined;
}

let cached = global.mongooseConn;

if (!cached) {
  cached = mongoose.connect(MONGODB_URI);
  global.mongooseConn = cached;
}

export async function connectToDatabase() {
  await cached;
}
