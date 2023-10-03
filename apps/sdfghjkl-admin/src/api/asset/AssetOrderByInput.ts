import { SortOrder } from "../../util/SortOrder";

export type AssetOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  identifier?: SortOrder;
  metadata?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  supply?: SortOrder;
  verifiedAt?: SortOrder;
  created_transaction_id?: SortOrder;
};
