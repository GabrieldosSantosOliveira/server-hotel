import { Router } from 'express';

import { AuthController } from '../controller/Auth';
const routerAuth = Router();
routerAuth.post(
  '/createUserWithGoogleProvider',
  AuthController.CreateUserWithGoogleProvider
);
export { routerAuth };
