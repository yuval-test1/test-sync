import { InputJsonValue } from "../../types";
import { BlockTransactionUpdateManyWithoutTransactionsInput } from "./BlockTransactionUpdateManyWithoutTransactionsInput";
import { AssetUpdateManyWithoutTransactionsInput } from "./AssetUpdateManyWithoutTransactionsInput";
import { AssetDescriptionUpdateManyWithoutTransactionsInput } from "./AssetDescriptionUpdateManyWithoutTransactionsInput";

export type TransactionUpdateInput = {
  fee?: number;
  expiration?: number | null;
  hash?: string;
  size?: number;
  notes?: InputJsonValue;
  spends?: InputJsonValue;
  networkVersion?: number;
  blocksTransactions?: BlockTransactionUpdateManyWithoutTransactionsInput;
  createdAssets?: AssetUpdateManyWithoutTransactionsInput;
  assetDescriptions?: AssetDescriptionUpdateManyWithoutTransactionsInput;
};
