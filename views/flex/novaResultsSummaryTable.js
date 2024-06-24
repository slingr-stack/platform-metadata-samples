
function resultsSummaryTableWidgetCalculation(record, options) {
    // TODO: retrieve data
    let resultsData = sys.data.find('samples', {})

    // build table

    // build columns
    let columns = [
        {
            label: 'Partition ID',
            name: 'partitionId',
            type: 'html',
            options: {
                sticky: true
            }
        },
        {
            label: 'Customer',
            name: 'customer',
            type: 'html'
        },
        {
            label: 'Sample Matrix',
            name: 'sampleMatrix',
            type: 'html'
        },
        {
            label: 'Sample type',
            name: 'sampleType',
            type: 'html'
        },
        {
            label: 'Sample name',
            name: 'sampleName',
            type: 'html'
        },
        {
            label: 'Order number',
            name: 'orderNumber',
            type: 'html'
        },
        {
            label: 'Dilution Factor',
            name: 'dilutionFactor',
            type: 'html'
        }
    ];
    // build columns dynamically based on data
    while (resultsData.hasNext()) {
        let result = resultsData.next();
        let existingColumn = columns.find(column => column.name === result.field('partitionId').id());
        if (!existingColumn) {
            columns.push({
                label: result.field('partitionId').label(),
                name: result.field('partitionId').id(),
                type: 'html'
            });
        }
    }

    // build rows
    let rows = [];
    while (samplesData.hasNext()) {
        let result = samplesData.next();
        let partitionCell = result.field('partitionId').id(); // TODO: action
        let row = {
            partitionId: partitionCell,
            customer: result.field('customer').label(),
            sampleMatrix: result.field('sampleMatrix').val(),
            sampleType: result.field('sampleType').val(),
            sampleName: result.field('sampleName').val(),
            orderNumber: result.field('orderNumber').val(),
            dilutionFactor: result.field('dilutionFactor').val(),
        };
        rows.push(row);
    }
    return {
        columns: columns,
        rows: rows
    };
}