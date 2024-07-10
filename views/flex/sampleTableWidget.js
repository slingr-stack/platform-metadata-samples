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
                id: "1",
                name: "Alice",
                age: {value: 30, style: "text-align: right"},
                country: "USA"
            },
            {
                id: "2",
                name: "Bob",
                age: {value: 40, style: "text-align: right"},
                country: "Canda"
            }
        ]
    };
}
