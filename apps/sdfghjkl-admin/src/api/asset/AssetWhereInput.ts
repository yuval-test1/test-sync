import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";
import { AssetDescriptionListRelationFilter } from "../assetDescription/AssetDescriptionListRelationFilter";

export type AssetWhereInput = {
  id?: IntFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  identifier?: StringFilter;
  metadata?: StringFilter;
  name?: StringFilter;
  owner?: StringFilter;
  supply?: BigIntFilter;
  verifiedAt?: DateTimeNullableFilter;
  createdTransaction?: TransactionWhereUniqueInput;
  descriptions?: AssetDescriptionListRelationFilter;
};
