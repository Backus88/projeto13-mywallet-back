import { Router } from 'express';
import { getWallet, postWallet } from '../controllers/walletController.js';
import validateWallet from '../middleware/validateWallet.js';

const walletRouter = Router();
walletRouter.get('/wallet', getWallet);
walletRouter.post('/wallet', validateWallet, postWallet);

export default walletRouter;
