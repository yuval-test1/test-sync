import { DecimalFilter } from "../../util/DecimalFilter";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type BlockDailyWhereInput = {
  averageBlockSize?: DecimalFilter;
  id?: IntFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  date?: DateTimeFilter;
  averageBlockTimeMs?: IntFilter;
  blocksCount?: IntFilter;
  blocksWithGraffitiCount?: IntFilter;
  cumulativeUniqueGraffiti?: IntFilter;
  transactionsCount?: IntFilter;
  chainSequence?: IntFilter;
  uniqueGraffitiCount?: IntFilter;
  averageDifficulty?: DecimalFilter;
};
