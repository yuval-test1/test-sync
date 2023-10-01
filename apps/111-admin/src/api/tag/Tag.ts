import { Post } from "../post/Post";

export type Tag = {
  posts?: Array<Post>;
  createdAt: Date;
  id: string;
  name: string;
  slug: string | null;
  updatedAt: Date;
};
