import express from 'express';

import { WalletController } from '../controllers/walletController';

const router = express.Router();

router.post('/wallets', WalletController.createWalletHandler);
router.get('/wallets/', WalletController.getManyWalletsHandler);
router.get('/wallets/:id', WalletController.getWalletHandler);
router.put('/wallets/:id', WalletController.updateBalanceHandler);
router.delete('/wallets/:id', WalletController.deleteWalletHandler);
router.post('/wallets/transfer', WalletController.transferFundsHandler);

export default router;
