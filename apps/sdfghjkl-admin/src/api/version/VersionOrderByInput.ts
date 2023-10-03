import { SortOrder } from "../../util/SortOrder";

export type VersionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  version?: SortOrder;
};
