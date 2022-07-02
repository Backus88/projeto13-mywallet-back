import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);
await client.connect();
const db = client.db(process.env.DB_NAME);
console.log('Connected to the database!');

export default db;
