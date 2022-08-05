import React from "react";
import {
    useDataGrid,
    DataGrid,
    GridColumns,
    List,
    EditButton,
    Stack
} from "@pankod/refine-mui";

import { Event } from "../../interfaces";

export const EventList: React.FC = () => {
    const { dataGridProps } = useDataGrid<Event>();

    const columns = React.useMemo<GridColumns<Event>>(
        () => [
            { field: "id", headerName: "Id", flex: 1, minWidth: 50 },
            {
                field: "type",
                headerName: "Type",
                minWidth: 150,
                flex: 1,
            },
            {
                field: "eventName",
                headerName: "Event name",
                minWidth: 300,
            },
            {
              field: "description",
              headerName: "Description",
              minWidth: 400,
          },
          {
              headerName: "Actions",
              field: "actions",
              minWidth: 50,
              renderCell: function render(params) {
                  return (
                      <Stack direction="row" spacing={1}>
                          <EditButton hideText recordItemId={params.row.id} />
                      </Stack>
                  );
              },
          },
        ],
        [],
    );

    return (
        <List>
            <DataGrid {...dataGridProps} columns={columns} autoHeight />
        </List>
    );
};