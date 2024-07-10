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
                style: "color: green; text-align: right"
            },
            onBreakWorkers: {
                value: labourTrackerRecord.onBreakWorkersCount + ' <strong>(' + labourTrackerRecord.onBreakWorkersPercentage + ')</strong>',
                style: "color: orange; text-align: right"
            },
            idleWorkers: {
                value: labourTrackerRecord.idleWorkersCount + ' <strong>(' + labourTrackerRecord.idleWorkersPercentage + ')</strong>',
                style: "color: brown; text-align: right"
            },
            total: {value: labourTrackerRecord.total, style: "text-align: right"}
        });
    }
    return {
        header: [
            {name: "position", label: "Position", style: "font-weight: bold;"},
            {name: "activeWorkers", label: "Active workers", style: "font-weight: bold;"},
            {name: "onBreakWorkers", label: "On break workers", style: "font-weight: bold;"},
            {name: "idleWorkers", label: "Idle workers", style: "font-weight: bold;"},
            {name: "total", label: "Total", style: "font-weight: bold;"}
        ],
        body: rows
    };
}