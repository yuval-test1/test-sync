import { SortOrder } from "../../util/SortOrder";

export type AssetDescriptionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  type?: SortOrder;
  value?: SortOrder;
  asset_id?: SortOrder;
  transaction_id?: SortOrder;
};
