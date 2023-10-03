import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BLOCK_TITLE_FIELD } from "./BlockTitle";
import { TRANSACTION_TITLE_FIELD } from "../transaction/TransactionTitle";

export const BlockShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Hash" source="hash" />
        <BooleanField label="Main" source="main" />
        <TextField label="Network Version" source="networkVersion" />
        <TextField label="Transactions Count" source="transactionsCount" />
        <TextField label="Timestamp" source="timestamp" />
        <TextField label="Graffiti" source="graffiti" />
        <TextField label="Size" source="size" />
        <TextField label="Difficulty" source="difficulty" />
        <TextField
          label="Time Since Last Block Ms"
          source="timeSinceLastBlockMs"
        />
        <TextField label="Work" source="work" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Sequence" source="sequence" />
        <TextField label="Previous Block Hash" source="previousBlockHash" />
        <ReferenceManyField
          reference="BlockTransaction"
          target="block_id"
          label="BlockTransactions"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Block" source="block.id" reference="Block">
              <TextField source={BLOCK_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Index" source="index" />
            <ReferenceField
              label="Transaction"
              source="transaction.id"
              reference="Transaction"
            >
              <TextField source={TRANSACTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
