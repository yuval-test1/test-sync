import { Asset } from "../asset/Asset";
import { Transaction } from "../transaction/Transaction";

export type AssetDescription = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  type?: "BURN" | "MINT";
  value: bigint;
  asset?: Asset;
  transaction?: Transaction;
};
