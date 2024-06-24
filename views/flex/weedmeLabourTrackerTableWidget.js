function labourTrackerTableWidgetCalculation(record, options) {
    // TODO: retrieve data
    let labourTrackerData = {};

    // build table

    // build columns
    let columns = [
        {
            label: 'Position',
            name: 'position'
        },
        {
            label: 'Active workers',
            name: 'activeWorkers',
            type: 'html',
            options: {
                alignment: 'right',
                style: {
                    fontColor: 'green'
                }
            }
        },
        {
            label: 'On Break workers',
            name: 'onBreakWorkers',
            type: 'html',
            options: {
                alignment: 'right',
                style: {
                    fontColor: 'orange'
                }
            }
        },
        {
            label: 'Idle workers',
            name: 'idleWorkers',
            type: 'html',
            options: {
                alignment: 'right',
                style: {
                    fontColor: 'brown'
                }
            }
        },
        {
            label: 'Total',
            name: 'total',
            type: 'integer',
            options: {
                alignment: 'right'
            }
        }
    ];

    // build rows
    let rows = [];
    while (labourTrackerData.hasNext()) {
        let labourTrackerRecord = labourTrackerData.next();
        rows.push({
            position: labourTrackerRecord.position,
            activeWorkers: labourTrackerRecord.activeWorkersCount + ' <strong>(' + labourTrackerRecord.activeWorkersPercentage + ')</strong>',
            onBreakWorkers: labourTrackerRecord.onBreakWorkersCount + ' <strong>(' + labourTrackerRecord.onBreakWorkersPercentage + ')</strong>',
            idleWorkers: labourTrackerRecord.idleWorkersCount + ' <strong>(' + labourTrackerRecord.idleWorkersPercentage + ')</strong>',
            total: labourTrackerRecord.total
        });
    }
    return {
        columns: columns,
        rows: rows
    };
}