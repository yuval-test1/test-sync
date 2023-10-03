import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";
import { AssetDescriptionUpdateManyWithoutAssetsInput } from "./AssetDescriptionUpdateManyWithoutAssetsInput";

export type AssetUpdateInput = {
  identifier?: string;
  metadata?: string;
  name?: string;
  owner?: string;
  supply?: bigint;
  verifiedAt?: Date | null;
  createdTransaction?: TransactionWhereUniqueInput;
  descriptions?: AssetDescriptionUpdateManyWithoutAssetsInput;
};
