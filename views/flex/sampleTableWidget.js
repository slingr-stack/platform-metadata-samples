function generateTable(options) {
    return {
        header: [
            {name: "id", label: "ID", style: "font-weight: bold; text-align: center"},
            {name: "name", label: "Name", style: "font-weight: bold; text-align: center"},
            {name: "age", label: "Age", style: "font-weight: bold; text-align: center"},
            {name: "country", label: "Country", style: "font-weight: bold; text-align: center"}
        ],
        body: [
            {
                id: "row1",
                cells: [
                    {headerName: "id", value: "1"},
                    {headerName: "name", value: "Alice"},
                    {headerName: "age", value: "30", style: "text-align: right"},
                    {headerName: "country", value: "USA"}
                ]
            },
            {
                id: "row2",
                cells: [
                    {headerName: "id", value: "2"},
                    {headerName: "name", value: "Bob"},
                    {headerName: "age", value: "25", style: "text-align: right"},
                    {headerName: "country", value: "Canada"}
                ]
            }
        ]
    };
}
