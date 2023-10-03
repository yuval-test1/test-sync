import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BlockTransactionTitle } from "../blockTransaction/BlockTransactionTitle";
import { AssetTitle } from "../asset/AssetTitle";
import { AssetDescriptionTitle } from "../assetDescription/AssetDescriptionTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Fee" source="fee" />
        <NumberInput step={1} label="Expiration" source="expiration" />
        <TextInput label="Hash" source="hash" />
        <NumberInput step={1} label="Size" source="size" />
        <div />
        <div />
        <NumberInput step={1} label="Network Version" source="networkVersion" />
        <ReferenceArrayInput
          source="blocksTransactions"
          reference="BlockTransaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BlockTransactionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="createdAssets"
          reference="Asset"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AssetTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="assetDescriptions"
          reference="AssetDescription"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AssetDescriptionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
