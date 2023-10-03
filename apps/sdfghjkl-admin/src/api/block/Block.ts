import { Decimal } from "decimal.js";
import { BlockTransaction } from "../blockTransaction/BlockTransaction";

export type Block = {
  id: number;
  hash: string;
  main: boolean;
  networkVersion: number;
  transactionsCount: number;
  timestamp: Date;
  graffiti: string;
  size: number | null;
  difficulty: Decimal | null;
  timeSinceLastBlockMs: number | null;
  work: Decimal | null;
  createdAt: Date;
  updatedAt: Date;
  sequence: number;
  previousBlockHash: string;
  blocksTransactions?: Array<BlockTransaction>;
};
