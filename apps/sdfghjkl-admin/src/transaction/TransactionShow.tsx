import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BLOCK_TITLE_FIELD } from "../block/BlockTitle";
import { TRANSACTION_TITLE_FIELD } from "./TransactionTitle";
import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";

export const TransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Fee" source="fee" />
        <TextField label="Expiration" source="expiration" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Hash" source="hash" />
        <TextField label="Size" source="size" />
        <TextField label="Notes" source="notes" />
        <TextField label="Spends" source="spends" />
        <TextField label="Network Version" source="networkVersion" />
        <ReferenceManyField
          reference="BlockTransaction"
          target="transaction_id"
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
        <ReferenceManyField
          reference="Asset"
          target="created_transaction_id"
          label="Assets"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Identifier" source="identifier" />
            <TextField label="Metadata" source="metadata" />
            <TextField label="Name" source="name" />
            <TextField label="Owner" source="owner" />
            <TextField label="Supply" source="supply" />
            <TextField label="Verified At" source="verifiedAt" />
            <ReferenceField
              label="Created Transaction"
              source="transaction.id"
              reference="Transaction"
            >
              <TextField source={TRANSACTION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="AssetDescription"
          target="transaction_id"
          label="AssetDescriptions"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Type" source="type" />
            <TextField label="Value" source="value" />
            <ReferenceField label="Asset" source="asset.id" reference="Asset">
              <TextField source={ASSET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Transaction"
              source="transaction.id"
              reference="Transaction"
            >
              <TextField source={TRANSACTION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
