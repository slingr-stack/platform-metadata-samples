
function materialsTableWidgetCalculation(record, options) {
    let columns = [
        {
            label: 'Instrument Type',
            name: 'instrumentType'
        },
        {
            label: 'Description',
            name: 'description'
        },
        {
            label: 'Instrument',
            name: 'instrument'
        },
        {
            label: 'Calibration',
            name: 'calibration'
        }
    ];
    let rows = [];
    record.field('instruments').each(function (instrument) {
        rows.push({
            instrumentType: instrument.field('type').label(),
            description: instrument.field('description').isNotEmpty() ? instrument.field('description').val() : '-',
            instrument: instrument.field('instrument').label(),
            calibration: instrument.field('calibrationDue').isNotEmpty() ? note.field('calibrationDue').format() : '-'
        });
    });
    return {
        columns: columns,
        rows: rows
    };
}