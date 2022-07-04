import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
let db;

try {
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    db = client.db(process.env.DB_NAME);
    console.log('Connected to the database!');
} catch (error) {
    console.log('Database connection error', error);
}

export default db;
