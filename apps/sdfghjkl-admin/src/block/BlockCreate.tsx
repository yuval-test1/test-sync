import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  NumberInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BlockTransactionTitle } from "../blockTransaction/BlockTransactionTitle";

export const BlockCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Hash" source="hash" />
        <BooleanInput label="Main" source="main" />
        <NumberInput step={1} label="Network Version" source="networkVersion" />
        <NumberInput
          step={1}
          label="Transactions Count"
          source="transactionsCount"
        />
        <DateTimeInput label="Timestamp" source="timestamp" />
        <TextInput label="Graffiti" source="graffiti" />
        <NumberInput step={1} label="Size" source="size" />
        <NumberInput label="Difficulty" source="difficulty" />
        <NumberInput
          step={1}
          label="Time Since Last Block Ms"
          source="timeSinceLastBlockMs"
        />
        <NumberInput label="Work" source="work" />
        <NumberInput step={1} label="Sequence" source="sequence" />
        <TextInput label="Previous Block Hash" source="previousBlockHash" />
        <ReferenceArrayInput
          source="blocksTransactions"
          reference="BlockTransaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BlockTransactionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
