import walletSchema from '../schemas/walletSchema.js';

export default function validateWallet(req, res, next) {
    const validation = walletSchema.validate(req.body);
    if (validation.error) {
        return res.status(422).send(validation.error);
    }

    next();
}
