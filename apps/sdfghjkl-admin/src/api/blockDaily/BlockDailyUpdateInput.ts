import { Decimal } from "decimal.js";

export type BlockDailyUpdateInput = {
  averageBlockSize?: Decimal;
  date?: Date;
  averageBlockTimeMs?: number;
  blocksCount?: number;
  blocksWithGraffitiCount?: number;
  cumulativeUniqueGraffiti?: number;
  transactionsCount?: number;
  chainSequence?: number;
  uniqueGraffitiCount?: number;
  averageDifficulty?: Decimal;
};
