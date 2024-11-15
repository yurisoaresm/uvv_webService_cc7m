import express from 'express';

import { UserController } from '../controllers/userController';

const router = express.Router();

router.post('/users', UserController.createUser);
router.get('/users', UserController.getUsers);
router.get('/users/:nickname', UserController.getUserByNickname);
router.get('/horoscope/:nickname', UserController.getHoroscope);

export default router;
