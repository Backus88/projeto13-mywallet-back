import db from '../database/db.js';

export async function getWallet(req, res) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');
    const dataWallet = await db.collection('session').findOne({ token: token });
    if (dataWallet) {
        const wallet = await db
            .collection('wallet')
            .findOne({ userId: dataWallet.userId });
        console.log(wallet);
        res.status(200).send(wallet);
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
                $inc: { total: parseFloat(operation.value) },
                $push: {
                    wallet: {
                        description: operation.description,
                        date: operation.date,
                        value: parseFloat(operation.value),
                    },
                },
            }
        );
        res.sendStatus(200);
    }
}

export async function deleteSession(req, res) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');
    try {
        await db.collection('session').deleteOne({ token: token });
        res.sendStatus(200);
    } catch (error) {
        res.send(error).status(401);
    }
}
