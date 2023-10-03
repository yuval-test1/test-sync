import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const FaucetTransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Email" source="email" />
        <TextField label="Public Key" source="publicKey" />
        <TextField label="Started At" source="startedAt" />
        <TextField label="Completed At" source="completedAt" />
        <TextField label="Tries" source="tries" />
        <TextField label="Hash" source="hash" />
      </SimpleShowLayout>
    </Show>
  );
};
