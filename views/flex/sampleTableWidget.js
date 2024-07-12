function generateTable(options) {
    return {
        header: [
            {name: "id", label: "ID", css: "font-weight: bold; text-align: center"},
            {name: "name", label: "Name", css: "font-weight: bold; text-align: center"},
            {name: "age", label: "Age", css: "font-weight: bold; text-align: center"},
            {name: "country", label: "Country", css: "font-weight: bold; text-align: center"}
        ],
        body: [
            {
                id: "1",
                name: "Alice",
                age: {value: 30, css: "text-align: right"},
                country: "USA"
            },
            {
                id: "2",
                name: "Bob",
                age: {value: 40, css: "text-align: right"},
                country: "Canda"
            }
        ]
    };
}
