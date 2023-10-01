import { Post } from "../post/Post";

export type Author = {
  posts?: Array<Post>;
  createdAt: Date;
  firstName: string;
  id: string;
  lastName: string | null;
  profileImage: string | null;
  slug: string | null;
  twitter: string | null;
  updatedAt: Date;
};
