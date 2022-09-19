import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  desc?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
