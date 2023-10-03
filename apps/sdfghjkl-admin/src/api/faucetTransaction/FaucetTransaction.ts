export type FaucetTransaction = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  publicKey: string;
  startedAt: Date | null;
  completedAt: Date | null;
  tries: number;
  hash: string | null;
};
