import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const BlockList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Blocks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
