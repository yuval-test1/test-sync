import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type AssetDescriptionUpdateInput = {
  type?: "BURN" | "MINT";
  value?: bigint;
  asset?: AssetWhereUniqueInput;
  transaction?: TransactionWhereUniqueInput;
};
