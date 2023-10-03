import { Decimal } from "decimal.js";

export type BlockDaily = {
  averageBlockSize: Decimal;
  id: number;
  createdAt: Date;
  updatedAt: Date;
  date: Date;
  averageBlockTimeMs: number;
  blocksCount: number;
  blocksWithGraffitiCount: number;
  cumulativeUniqueGraffiti: number;
  transactionsCount: number;
  chainSequence: number;
  uniqueGraffitiCount: number;
  averageDifficulty: Decimal;
};
