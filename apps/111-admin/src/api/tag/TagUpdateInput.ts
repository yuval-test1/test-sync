import { PostUpdateManyWithoutTagsInput } from "./PostUpdateManyWithoutTagsInput";

export type TagUpdateInput = {
  posts?: PostUpdateManyWithoutTagsInput;
  name?: string;
  slug?: string | null;
};
