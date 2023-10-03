import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const BlockDailyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Average Block Size" source="averageBlockSize" />
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Date" source="date" />
        <TextField label="Average Block Time Ms" source="averageBlockTimeMs" />
        <TextField label="Blocks Count" source="blocksCount" />
        <TextField
          label="Blocks With Graffiti Count"
          source="blocksWithGraffitiCount"
        />
        <TextField
          label="Cumulative Unique Graffiti"
          source="cumulativeUniqueGraffiti"
        />
        <TextField label="Transactions Count" source="transactionsCount" />
        <TextField label="Chain Sequence" source="chainSequence" />
        <TextField label="Unique Graffiti Count" source="uniqueGraffitiCount" />
        <TextField label="Average Difficulty" source="averageDifficulty" />
      </SimpleShowLayout>
    </Show>
  );
};
