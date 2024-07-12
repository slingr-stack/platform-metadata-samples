function materialsTableWidgetCalculation(record, options) {
    let rows = [];
    record.field('materials').each(function (material) {
        rows.push({
            material: material.field('material').label(),
            description: material.field('description').val(),
            lotId: material.field('lotId').val(),
            expDate: material.field('expDate').isNotEmpty() ? material.field('expDate').format() : '-'
        });
    });
    return {
        header: [
            {name: "material", label: "Material", css: "font-weight: bold;"},
            {name: "description", label: "Description", css: "font-weight: bold;"},
            {name: "lotId", label: "Lot ID", css: "font-weight: bold;"},
            {name: "expDate", label: "Exp. Date", css: "font-weight: bold;"}
        ],
        body: rows
    };
}