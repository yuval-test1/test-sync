import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type VersionWhereInput = {
  id?: IntFilter;
  createdAt?: DateTimeFilter;
  version?: StringFilter;
};
