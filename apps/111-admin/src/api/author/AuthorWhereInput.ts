import { PostListRelationFilter } from "../post/PostListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AuthorWhereInput = {
  posts?: PostListRelationFilter;
  createdAt?: DateTimeFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  profileImage?: StringNullableFilter;
  slug?: StringNullableFilter;
  twitter?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
};
