import { Router } from 'express';
import {
    getWallet,
    postWallet,
    deleteSession,
} from '../controllers/walletController.js';
import validateWallet from '../middleware/validateWallet.js';

const walletRouter = Router();
walletRouter.get('/wallet', getWallet);
walletRouter.post('/wallet', validateWallet, postWallet);
walletRouter.delete('/wallet', deleteSession);

export default walletRouter;
