import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type FaucetTransactionWhereInput = {
  id?: IntFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  email?: StringNullableFilter;
  publicKey?: StringFilter;
  startedAt?: DateTimeNullableFilter;
  completedAt?: DateTimeNullableFilter;
  tries?: IntFilter;
  hash?: StringNullableFilter;
};
