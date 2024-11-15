import { randomUUID } from 'node:crypto';

import { Wallet, Transaction } from '../models/wallet';

const wallets: Wallet[] = [];

export class WalletService {
  static createWallet(name: string): Wallet {
    const newWallet: Wallet = {
      id: randomUUID(),
      name,
      balance: 0,
      transactions: [],
    };

    wallets.push(newWallet);
    return newWallet;
  }

  static getWallet(id: string): Wallet | undefined {
    return wallets.find((wallet) => wallet.id === id);
  }

  static getManyWallets(): Wallet[] {
    return wallets;
  }

  static updateBalance(id: string, amount: number, type: 'ADD' | 'REMOVE'): Wallet | undefined {
    const wallet = this.getWallet(id);

    if (wallet) {
      if (type === 'ADD') {
        wallet.balance += amount;
      } else if (type === 'REMOVE' && wallet.balance >= amount) {
        wallet.balance -= amount;
      } else {
        throw new Error('Saldo insuficiente para remoção');
      }

      const transaction: Transaction = {
        type,
        amount,
        date: new Date().toISOString(),
      };
      wallet.transactions.push(transaction);
    }
    return wallet;
  }

  static deleteWallet(id: string): boolean {
    const index = wallets.findIndex((wallet) => wallet.id === id);
    if (index !== -1) {
      wallets.splice(index, 1);
      return true;
    }
    return false;
  }

  static transferFunds(fromId: string, toId: string, amount: number): boolean {
    const fromWallet = this.getWallet(fromId);
    const toWallet = this.getWallet(toId);

    if (fromWallet && toWallet && fromWallet.balance >= amount) {
      fromWallet.balance -= amount;
      toWallet.balance += amount;

      const transaction: Transaction = {
        type: 'TRANSFER',
        amount,
        date: new Date().toISOString(),
        description: `Transferência de ${fromId} para ${toId}`,
      };
      fromWallet.transactions.push(transaction);
      toWallet.transactions.push(transaction);
      return true;
    }
    return false;
  }
}
