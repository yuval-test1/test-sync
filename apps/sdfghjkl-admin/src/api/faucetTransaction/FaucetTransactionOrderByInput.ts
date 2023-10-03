import { SortOrder } from "../../util/SortOrder";

export type FaucetTransactionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  publicKey?: SortOrder;
  startedAt?: SortOrder;
  completedAt?: SortOrder;
  tries?: SortOrder;
  hash?: SortOrder;
};
