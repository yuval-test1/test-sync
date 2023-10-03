import { SortOrder } from "../../util/SortOrder";

export type BlockDailyOrderByInput = {
  averageBlockSize?: SortOrder;
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  date?: SortOrder;
  averageBlockTimeMs?: SortOrder;
  blocksCount?: SortOrder;
  blocksWithGraffitiCount?: SortOrder;
  cumulativeUniqueGraffiti?: SortOrder;
  transactionsCount?: SortOrder;
  chainSequence?: SortOrder;
  uniqueGraffitiCount?: SortOrder;
  averageDifficulty?: SortOrder;
};
