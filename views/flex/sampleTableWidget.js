function generateTable() {
    return {
        header: [
            { name: "id", label: "ID", options: { style: { fontWeight: "bold", alignment: "center" } } },
            { name: "name", label: "Name", options: { style: { fontWeight: "bold", alignment: "center" } } },
            { name: "age", label: "Age", options: { style: { fontWeight: "bold", alignment: "center" } } },
            { name: "country", label: "Country", options: { style: { fontWeight: "bold", alignment: "center" } } }
        ],
        body: [
            {
                id: "row1",
                cells: [
                    { headerName: "id", value: "1", options: { style: { fontWeight: "normal", alignment: "left" } } },
                    { headerName: "name", value: "Alice", options: { style: { fontWeight: "normal", alignment: "left" } } },
                    { headerName: "age", value: "30", options: { style: { fontWeight: "normal", alignment: "right" } } },
                    { headerName: "country", value: "USA", options: { style: { fontWeight: "normal", alignment: "left" } } }
                ]
            },
            {
                id: "row2",
                cells: [
                    { headerName: "id", value: "2", options: { style: { fontWeight: "normal", alignment: "left" } } },
                    { headerName: "name", value: "Bob", options: { style: { fontWeight: "normal", alignment: "left" } } },
                    { headerName: "age", value: "25", options: { style: { fontWeight: "normal", alignment: "right" } } },
                    { headerName: "country", value: "Canada", options: { style: { fontWeight: "normal", alignment: "left" } } }
                ]
            }
        ]
    };
}
