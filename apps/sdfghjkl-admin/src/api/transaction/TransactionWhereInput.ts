import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BlockTransactionListRelationFilter } from "../blockTransaction/BlockTransactionListRelationFilter";
import { AssetListRelationFilter } from "../asset/AssetListRelationFilter";
import { AssetDescriptionListRelationFilter } from "../assetDescription/AssetDescriptionListRelationFilter";

export type TransactionWhereInput = {
  id?: IntFilter;
  updatedAt?: DateTimeFilter;
  fee?: FloatFilter;
  expiration?: IntNullableFilter;
  createdAt?: DateTimeFilter;
  hash?: StringFilter;
  size?: IntFilter;
  notes?: JsonFilter;
  spends?: JsonFilter;
  networkVersion?: IntFilter;
  blocksTransactions?: BlockTransactionListRelationFilter;
  createdAssets?: AssetListRelationFilter;
  assetDescriptions?: AssetDescriptionListRelationFilter;
};
