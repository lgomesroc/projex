import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.post('/register', UserController.createUser);
router.post('/login', UserController.login);

export default router;
