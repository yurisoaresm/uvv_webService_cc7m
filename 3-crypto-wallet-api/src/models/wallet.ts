export interface Wallet {
  id: string;
  name: string;
  balance: number;
  transactions: Transaction[];
}

export interface Transaction {
  type: 'ADD' | 'REMOVE' | 'TRANSFER';
  amount: number;
  date: string;
  description?: string;
}
