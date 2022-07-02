import { Router } from 'express';
import { getWallet, postWallet } from '../controllers/walletController.js';

const walletRouter = Router();
walletRouter.get('/wallet', getWallet);
walletRouter.post('/wallet', postWallet);

export default walletRouter;
