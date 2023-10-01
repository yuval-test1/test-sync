import { PostUpdateManyWithoutAuthorsInput } from "./PostUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  posts?: PostUpdateManyWithoutAuthorsInput;
  firstName?: string;
  lastName?: string | null;
  profileImage?: string | null;
  slug?: string | null;
  twitter?: string | null;
};
