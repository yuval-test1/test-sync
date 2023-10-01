import { PostCreateNestedManyWithoutAuthorsInput } from "./PostCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  posts?: PostCreateNestedManyWithoutAuthorsInput;
  firstName: string;
  lastName?: string | null;
  profileImage?: string | null;
  slug?: string | null;
  twitter?: string | null;
};
