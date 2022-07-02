import { Router } from 'express';
// import walletRouter from './walletRouter.js';
import authRouter from './authRouter.js';

const router = Router();
router.use(authRouter);
// router.use(walletRouter);
export default router;
