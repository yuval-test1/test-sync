import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Transactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
