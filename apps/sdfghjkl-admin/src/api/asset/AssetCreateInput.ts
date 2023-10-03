import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";
import { AssetDescriptionCreateNestedManyWithoutAssetsInput } from "./AssetDescriptionCreateNestedManyWithoutAssetsInput";

export type AssetCreateInput = {
  identifier: string;
  metadata: string;
  name: string;
  owner: string;
  supply: bigint;
  verifiedAt?: Date | null;
  createdTransaction: TransactionWhereUniqueInput;
  descriptions?: AssetDescriptionCreateNestedManyWithoutAssetsInput;
};
