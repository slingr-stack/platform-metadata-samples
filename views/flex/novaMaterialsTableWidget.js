
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
            {name: "material", label: "Material", style: "font-weight: bold;"},
            {name: "description", label: "Description", style: "font-weight: bold;"},
            {name: "lotId", label: "Lot ID", style: "font-weight: bold;"},
            {name: "expDate", label: "Exp. Date", style: "font-weight: bold;"}
        ],
        body: rows
    };
}