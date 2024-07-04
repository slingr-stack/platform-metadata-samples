
function materialsTableWidgetCalculation(record, options) {
    let rows = [];
    record.field('notes').each(function (note) {
        rows.push({
            cells: [
                {headerName: "material", value: note.field('material').label()},
                {headerName: "description", value: note.field('description').val()},
                {headerName: "lotId", value: note.field('lotId').val()},
                {headerName: "expDate", value: note.field('expDate').isNotEmpty() ? note.field('expDate').format() : '-'}
            ]
        })
    });
    return {
        header: [
            {name: "material", label: "Material", options: {style: {fontWeight: "bold"}}},
            {name: "description", label: "Description", options: {style: {fontWeight: "bold"}}},
            {name: "lotId", label: "Lot ID", options: {style: {fontWeight: "bold"}}},
            {name: "expDate", label: "Exp. Date", options: {style: {fontWeight: "bold"}}}
        ],
        body: rows
    };
}