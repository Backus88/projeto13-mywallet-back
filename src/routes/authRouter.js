import { Router } from 'express';
import { createUser } from '../controllers/createController.js';
import { login } from '../controllers/loginController.js';
import validateRegister from '../middleware/validateRegister.js';
import validateLogin from '../middleware/validateLogin.js';

const authRouter = Router();
authRouter.post('/register', validateRegister, createUser);
authRouter.post('/login', validateLogin, login);

export default authRouter;
