function instrumentsTableWidgetCalculation(record, options) {
    let rows = [];
    record.field('instruments').each(function (instrument) {
        rows.push({
            instrumentType: instrument.field('type').label(),
            description: instrument.field('description').val(),
            instrument: instrument.field('instrument').val(),
            calibration: instrument.field('calibrationDue').isNotEmpty() ? material.field('calibrationDue').format() : '-'
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