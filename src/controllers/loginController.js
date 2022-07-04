import bcrypt from 'bcrypt';
import db from '../database/db.js';
import { v4 as uuid } from 'uuid';

export async function login(req, res) {
    const user = req.body;
    const userFound = await db
        .collection('users')
        .findOne({ email: user.email });
    const autorization = bcrypt.compareSync(user.password, userFound.password);
    if (userFound && autorization) {
        const token = uuid();
        await db
            .collection('session')
            .insertOne({ token: token, userId: userFound._id });
        const responseLogin = {
            token: token,
            name: userFound.name,
        };
        res.send(responseLogin);
    } else {
        res.sendStatus(401);
    }
}
