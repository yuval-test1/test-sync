import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type AssetDescriptionWhereInput = {
  id?: IntFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  type?: "BURN" | "MINT";
  value?: BigIntFilter;
  asset?: AssetWhereUniqueInput;
  transaction?: TransactionWhereUniqueInput;
};
