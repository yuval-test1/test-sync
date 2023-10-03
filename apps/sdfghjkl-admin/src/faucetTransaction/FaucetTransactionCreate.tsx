import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const FaucetTransactionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" />
        <TextInput label="Public Key" source="publicKey" />
        <DateTimeInput label="Started At" source="startedAt" />
        <DateTimeInput label="Completed At" source="completedAt" />
        <NumberInput step={1} label="Tries" source="tries" />
        <TextInput label="Hash" source="hash" />
      </SimpleForm>
    </Create>
  );
};
