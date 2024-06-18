
function materialAndInstrumentsTableRowCalculation(record, options) {
    let columns = [
        {
            label: 'Material',
            name: 'material'
        },
        {
            label: 'Description',
            name: 'description'
        },
        {
            label: 'Lot ID',
            name: 'lotId'
        },
        {
            label: 'Exp. Date',
            name: 'expDate'
        }
    ];
    let rows = [];
    record.field('notes').each(function (note) {
        rows.push({
            material: note.field('material').label(),
            description: note.field('description').isNotEmpty() ? note.field('description').val() : '-',
            lotId: note.field('lotId').val(),
            expDate: note.field('expDate').format('MM-dd-yyyy')
        });
    });
    return {
        columns: columns,
        rows: rows
    };
}