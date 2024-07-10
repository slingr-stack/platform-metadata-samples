
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
            {name: "instrumentType", label: "Material", style: "font-weight: bold;"},
            {name: "description", label: "Description", style: "font-weight: bold;"},
            {name: "instrument", label: "Instrument", style: "font-weight: bold;"},
            {name: "calibration", label: "Calibration", style: "font-weight: bold;"}
        ],
        body: rows
    };
}