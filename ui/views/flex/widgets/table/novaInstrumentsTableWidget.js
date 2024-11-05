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
            {name: "instrumentType", label: "Material", css: "font-weight: bold;"},
            {name: "description", label: "Description", css: "font-weight: bold;"},
            {name: "instrument", label: "Instrument", css: "font-weight: bold;"},
            {name: "calibration", label: "Calibration", css: "font-weight: bold;"}
        ],
        body: rows
    };
}