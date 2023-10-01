import { PostCreateNestedManyWithoutTagsInput } from "./PostCreateNestedManyWithoutTagsInput";

export type TagCreateInput = {
  posts?: PostCreateNestedManyWithoutTagsInput;
  name: string;
  slug?: string | null;
};
