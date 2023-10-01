import { PostListRelationFilter } from "../post/PostListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TagWhereInput = {
  posts?: PostListRelationFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  name?: StringFilter;
  slug?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
};
