import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { body } from 'express-validator';

const router = Router();
const userController = new UserController();

// POST /api/users/register
router.post(
  '/register',
  [
    body('username').isString().notEmpty().trim().escape(),
    body('password').isString().notEmpty(),
  ],
  userController.register
);

// POST /api/users/login
router.post(
  '/login',
  [
    body('username').isString().notEmpty().trim().escape(),
    body('password').isString().notEmpty(),
  ],
  userController.login
);

export default router;
