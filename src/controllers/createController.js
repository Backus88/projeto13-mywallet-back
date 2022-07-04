import bcrypt from 'bcrypt';
import db from '../database/db.js';
const intialTotal = 0;

export async function createUser(req, res) {
    const user = req.body;
    const findUser = await db
        .collection('users')
        .findOne({ email: user.email });
    if (findUser) {
        res.sendStatus(409);
    } else {
        const passwordHash = bcrypt.hashSync(user.password, 10);
        await db
            .collection('users')
            .insertOne({ ...user, password: passwordHash });
        const newUser = await db
            .collection('users')
            .findOne({ password: passwordHash });
        console.log(newUser);
        await db.collection('wallet').insertOne({
            userId: newUser._id,
            total: intialTotal,
            wallet: [],
        });
        res.sendStatus(201);
    }
}
