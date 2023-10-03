import { JsonValue } from "type-fest";
import { BlockTransaction } from "../blockTransaction/BlockTransaction";
import { Asset } from "../asset/Asset";
import { AssetDescription } from "../assetDescription/AssetDescription";

export type Transaction = {
  id: number;
  updatedAt: Date;
  fee: number;
  expiration: number | null;
  createdAt: Date;
  hash: string;
  size: number;
  notes: JsonValue;
  spends: JsonValue;
  networkVersion: number;
  blocksTransactions?: Array<BlockTransaction>;
  createdAssets?: Array<Asset>;
  assetDescriptions?: Array<AssetDescription>;
};
