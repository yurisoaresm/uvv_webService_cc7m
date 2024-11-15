import { Request, Response } from 'express';

import logger from '../lib/logger';
import { WalletService } from '../services/walletService';

export class WalletController {
  static createWalletHandler(req: Request, res: Response) {
    const { name } = req.body;

    logger.info(`Criando carteira [${name}]`);
    const wallet = WalletService.createWallet(name);

    logger.info(`Carteira [${name}] criada com sucesso`);
    res.status(201).json(wallet);
  }

  static getWalletHandler(req: Request, res: Response) {
    const { id } = req.params;

    logger.info(`Buscando carteira [${id}]`);
    const wallet = WalletService.getWallet(id);
    if (wallet) {
      logger.info(`Carteira [${id}] encontrada`);
      res.json(wallet);
    } else {
      logger.error('Carteira não encontrada');
      res.status(404).send('Carteira não encontrada');
    }
  }

  static getManyWalletsHandler(req: Request, res: Response) {
    logger.info('Buscando todas as carteiras');

    const wallets = WalletService.getManyWallets();

    logger.info(`${wallets.length} carteiras encontradas`);
    res.json(wallets);
  }

  static updateBalanceHandler(req: Request, res: Response) {
    const { id } = req.params;
    const { amount, type } = req.body;

    logger.info(`Atualizando saldo da carteira [${id}] - operação: [${type}] - valor: [${amount}]`);

    try {
      const foundWallet = WalletService.getWallet(id);

      if (!foundWallet) {
        logger.error('Carteira não encontrada');
        res.status(404).send('Carteira não encontrada');
        return;
      }

      const wallet = WalletService.updateBalance(foundWallet.id, amount, type);

      logger.info(`Saldo atualizado: [${wallet?.balance}]`);
      res.json(wallet);
    } catch (exception) {
      const error = exception as Error;
      logger.error(`Erro ao atualizar saldo: ${error.message}`);
      res.status(400).send(error.message);
    }
  }

  static deleteWalletHandler(req: Request, res: Response) {
    const { id } = req.params;

    logger.info(`Deletando carteira ${id}`);
    const success = WalletService.deleteWallet(id);
    if (success) {
      logger.info('Carteira deletada com sucesso');
      res.status(204).send();
    } else {
      logger.error('Carteira não encontrada');
      res.status(404).send('Carteira não encontrada');
    }
  }

  static transferFundsHandler(req: Request, res: Response) {
    const { fromId, toId, amount } = req.body;

    logger.info(`Transferindo ${amount} da carteira ${fromId} para a carteira ${toId}`);
    const success = WalletService.transferFunds(fromId, toId, amount);
    if (success) {
      logger.info('Transferência realizada com sucesso');
      res.status(200).send('Transferência realizada com sucesso');
    } else {
      logger.error('Transferência falhou');
      res.status(400).send('Transferência falhou');
    }
  }
}
