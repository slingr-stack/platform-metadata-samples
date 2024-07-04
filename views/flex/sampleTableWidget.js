function generateTable() {
    return {
        header: [
            {name: "id", label: "ID", options: {style: {fontWeight: "bold", alignment: "center"}}},
            {name: "name", label: "Name", options: {style: {fontWeight: "bold", alignment: "center"}}},
            {name: "age", label: "Age", options: {style: {fontWeight: "bold", alignment: "center"}}},
            {name: "country", label: "Country", options: {style: {fontWeight: "bold", alignment: "center"}}}
        ],
        body: [
            {
                id: "row1",
                cells: [
                    {headerName: "id", value: "1"},
                    {headerName: "name", value: "Alice"},
                    {headerName: "age", value: "30", options: {style: {alignment: "right"}}},
                    {headerName: "country", value: "USA"}
                ]
            },
            {
                id: "row2",
                cells: [
                    {headerName: "id", value: "2"},
                    {headerName: "name", value: "Bob"},
                    {headerName: "age", value: "25", options: {style: {alignment: "right"}}},
                    {headerName: "country", value: "Canada"}
                ]
            }
        ]
    };
}
