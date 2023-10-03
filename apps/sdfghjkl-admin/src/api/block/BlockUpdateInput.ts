import { Decimal } from "decimal.js";
import { BlockTransactionUpdateManyWithoutBlocksInput } from "./BlockTransactionUpdateManyWithoutBlocksInput";

export type BlockUpdateInput = {
  hash?: string;
  main?: boolean;
  networkVersion?: number;
  transactionsCount?: number;
  timestamp?: Date;
  graffiti?: string;
  size?: number | null;
  difficulty?: Decimal | null;
  timeSinceLastBlockMs?: number | null;
  work?: Decimal | null;
  sequence?: number;
  previousBlockHash?: string;
  blocksTransactions?: BlockTransactionUpdateManyWithoutBlocksInput;
};
