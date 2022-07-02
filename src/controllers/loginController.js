import bcrypt from 'bcrypt';
import db from '../database/db.js';
import { v4 as uuid } from 'uuid';

export async function login(req, res) {
    const user = req.body;
    const userFound = await db
        .collection('users')
        .findOne({ email: user.email });
    console.log(userFound);
    const autorization = bcrypt.compareSync(user.password, userFound.password);
    console.log(autorization);
    if (userFound && autorization) {
        const token = uuid();
        await db
            .collection('session')
            .insertOne({ token: token, userId: userFound._id });
        res.send(token);
    } else {
        res.sendStatus(401);
    }
}
