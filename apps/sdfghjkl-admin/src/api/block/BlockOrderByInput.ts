import { SortOrder } from "../../util/SortOrder";

export type BlockOrderByInput = {
  id?: SortOrder;
  hash?: SortOrder;
  main?: SortOrder;
  networkVersion?: SortOrder;
  transactionsCount?: SortOrder;
  timestamp?: SortOrder;
  graffiti?: SortOrder;
  size?: SortOrder;
  difficulty?: SortOrder;
  timeSinceLastBlockMs?: SortOrder;
  work?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  sequence?: SortOrder;
  previousBlockHash?: SortOrder;
};
