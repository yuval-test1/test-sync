import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  id?: SortOrder;
  updatedAt?: SortOrder;
  fee?: SortOrder;
  expiration?: SortOrder;
  createdAt?: SortOrder;
  hash?: SortOrder;
  size?: SortOrder;
  notes?: SortOrder;
  spends?: SortOrder;
  networkVersion?: SortOrder;
};
