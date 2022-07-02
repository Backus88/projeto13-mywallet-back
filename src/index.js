import express from 'express';
import cors from 'cors';
import router from './routes/router.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.listen(process.env.SERVER_PORT, () => {
    console.log('Server is listening on port 5000.');
});
