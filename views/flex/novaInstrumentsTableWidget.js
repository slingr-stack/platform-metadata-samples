
function instrumentsTableWidgetCalculation(record, options) {
    let rows = [];
    record.field('instruments').each(function (instrument) {
        rows.push({
            cells: [
                {headerName: "instrumentType", value: instrument.field('type').label()},
                {headerName: "description", value: instrument.field('description').val()},
                {headerName: "instrument", value: instrument.field('instrument').val()},
                {headerName: "calibration", value: instrument.field('calibrationDue').isNotEmpty() ? material.field('calibrationDue').format() : '-'}
            ]
        });
    });
    return {
        header: [
            {name: "instrumentType", label: "Material", options: {style: {fontWeight: "bold"}}},
            {name: "description", label: "Description", options: {style: {fontWeight: "bold"}}},
            {name: "instrument", label: "Instrument", options: {style: {fontWeight: "bold"}}},
            {name: "calibration", label: "Calibration", options: {style: {fontWeight: "bold"}}}
        ],
        rows: rows
    };
}