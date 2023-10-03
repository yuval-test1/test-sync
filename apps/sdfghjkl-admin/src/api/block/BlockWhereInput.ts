import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { BlockTransactionListRelationFilter } from "../blockTransaction/BlockTransactionListRelationFilter";

export type BlockWhereInput = {
  id?: IntFilter;
  hash?: StringFilter;
  main?: BooleanFilter;
  networkVersion?: IntFilter;
  transactionsCount?: IntFilter;
  timestamp?: DateTimeFilter;
  graffiti?: StringFilter;
  size?: IntNullableFilter;
  difficulty?: DecimalNullableFilter;
  timeSinceLastBlockMs?: IntNullableFilter;
  work?: DecimalNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  sequence?: IntFilter;
  previousBlockHash?: StringFilter;
  blocksTransactions?: BlockTransactionListRelationFilter;
};
