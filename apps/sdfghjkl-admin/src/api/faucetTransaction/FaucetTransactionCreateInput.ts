export type FaucetTransactionCreateInput = {
  email?: string | null;
  publicKey: string;
  startedAt?: Date | null;
  completedAt?: Date | null;
  tries: number;
  hash?: string | null;
};
