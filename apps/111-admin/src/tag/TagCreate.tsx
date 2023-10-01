import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { PostTitle } from "../post/PostTitle";

export const TagCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="posts"
          reference="Post"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PostTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <TextInput label="Slug" source="slug" />
      </SimpleForm>
    </Create>
  );
};
