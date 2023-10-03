import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  NumberInput,
  ReferenceInput,
} from "react-admin";
import { AssetTitle } from "../asset/AssetTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";

export const AssetDescriptionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "BURN", value: "BURN" },
            { label: "MINT", value: "MINT" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="Value" source="value" />
        <ReferenceInput source="asset.id" reference="Asset" label="Asset">
          <SelectInput optionText={AssetTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="transaction.id"
          reference="Transaction"
          label="Transaction"
        >
          <SelectInput optionText={TransactionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
