import { Router } from 'express';
import { createUser } from '../controllers/createController.js';
import { login } from '../controllers/loginController.js';

const authRouter = Router();
authRouter.post('/register', createUser);
authRouter.post('/login', login);

export default authRouter;
