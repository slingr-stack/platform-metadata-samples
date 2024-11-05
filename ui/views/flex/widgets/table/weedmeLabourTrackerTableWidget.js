function labourTrackerTableWidgetCalculation(record, options) {
    // TODO: retrieve data
    let labourTrackerData = {};

    // build rows
    let rows = [];
    while (labourTrackerData.hasNext()) {
        let labourTrackerRecord = labourTrackerData.next();
        rows.push({
            position: labourTrackerRecord.position,
            activeWorkers: {
                value: labourTrackerRecord.activeWorkersCount + ' <strong>(' + labourTrackerRecord.activeWorkersPercentage + ')</strong>',
                css: "color: green; text-align: right"
            },
            onBreakWorkers: {
                value: labourTrackerRecord.onBreakWorkersCount + ' <strong>(' + labourTrackerRecord.onBreakWorkersPercentage + ')</strong>',
                css: "color: orange; text-align: right"
            },
            idleWorkers: {
                value: labourTrackerRecord.idleWorkersCount + ' <strong>(' + labourTrackerRecord.idleWorkersPercentage + ')</strong>',
                css: "color: brown; text-align: right"
            },
            total: {value: labourTrackerRecord.total, css: "text-align: right"}
        });
    }
    return {
        header: [
            {name: "position", label: "Position", css: "font-weight: bold;"},
            {name: "activeWorkers", label: "Active workers", css: "font-weight: bold;"},
            {name: "onBreakWorkers", label: "On break workers", css: "font-weight: bold;"},
            {name: "idleWorkers", label: "Idle workers", css: "font-weight: bold;"},
            {name: "total", label: "Total", css: "font-weight: bold;"}
        ],
        body: rows
    };
}