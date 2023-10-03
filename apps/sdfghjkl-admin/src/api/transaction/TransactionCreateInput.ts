import { InputJsonValue } from "../../types";
import { BlockTransactionCreateNestedManyWithoutTransactionsInput } from "./BlockTransactionCreateNestedManyWithoutTransactionsInput";
import { AssetCreateNestedManyWithoutTransactionsInput } from "./AssetCreateNestedManyWithoutTransactionsInput";
import { AssetDescriptionCreateNestedManyWithoutTransactionsInput } from "./AssetDescriptionCreateNestedManyWithoutTransactionsInput";

export type TransactionCreateInput = {
  fee: number;
  expiration?: number | null;
  hash: string;
  size: number;
  notes: InputJsonValue;
  spends: InputJsonValue;
  networkVersion: number;
  blocksTransactions?: BlockTransactionCreateNestedManyWithoutTransactionsInput;
  createdAssets?: AssetCreateNestedManyWithoutTransactionsInput;
  assetDescriptions?: AssetDescriptionCreateNestedManyWithoutTransactionsInput;
};
