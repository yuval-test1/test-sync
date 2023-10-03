import { Transaction } from "../transaction/Transaction";
import { AssetDescription } from "../assetDescription/AssetDescription";

export type Asset = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  identifier: string;
  metadata: string;
  name: string;
  owner: string;
  supply: bigint;
  verifiedAt: Date | null;
  createdTransaction?: Transaction;
  descriptions?: Array<AssetDescription>;
};
