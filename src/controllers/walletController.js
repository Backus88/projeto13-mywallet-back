import db from '../database/db.js';

export async function getWallet(req, res) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');
    const data = await db.collection('session').findOne({ token: token });
    if (data) {
        const wallet = await db
            .collection('wallet')
            .findOne({ userId: data.userId });
        res.status(200).send(wallet.wallet);
    } else {
        res.sendStatus(401);
    }
}

export async function postWallet(req, res) {
    const { authorization } = req.headers;
    const operation = req.body;
    const token = authorization?.replace('Bearer ', '');
    const canPost = await db.collection('session').findOne({ token: token });
    if (canPost) {
        await db.collection('wallet').updateOne(
            { userId: canPost.userId },
            {
                $inc: { total: operation.value },
                $push: {
                    wallet: {
                        description: operation.description,
                        date: operation.date,
                        value: operation.value,
                    },
                },
            }
        );
        res.sendStatus(200);
    }
}
