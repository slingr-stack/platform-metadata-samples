
function materialsTableWidgetCalculation(record, options) {
    let rows = [];
    record.field('materials').each(function (material) {
        rows.push({
            cells: [
                {headerName: "material", value: material.field('material').label()},
                {headerName: "description", value: material.field('description').val()},
                {headerName: "lotId", value: material.field('lotId').val()},
                {headerName: "expDate", value: material.field('expDate').isNotEmpty() ? material.field('expDate').format() : '-'}
            ]
        });
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