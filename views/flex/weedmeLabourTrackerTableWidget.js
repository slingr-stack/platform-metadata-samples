function labourTrackerTableWidgetCalculation(record, options) {
    // TODO: retrieve data
    let labourTrackerData = {};

    // build rows
    let rows = [];
    while (labourTrackerData.hasNext()) {
        let labourTrackerRecord = labourTrackerData.next();
        rows.push({
            cells: [
                {headerName: "position", value: labourTrackerRecord.position},
                {headerName: "activeWorkers", options: {style: {textAlign: "right", color: "green"}}, value: labourTrackerRecord.activeWorkersCount + ' <strong>(' + labourTrackerRecord.activeWorkersPercentage + ')</strong>'},
                {headerName: "onBreakWorkers", options: {style: {textAlign: "right", color: "orange"}}, value: labourTrackerRecord.onBreakWorkersCount + ' <strong>(' + labourTrackerRecord.onBreakWorkersPercentage + ')</strong>'},
                {headerName: "idleWorkers", options: {style: {textAlign: "right", color: "brown"}}, value: labourTrackerRecord.idleWorkersCount + ' <strong>(' + labourTrackerRecord.idleWorkersPercentage + ')</strong>'},
                {headerName: "total", options: {style: {textAlign: "right"}}, value: labourTrackerRecord.total}
            ]
        });
    }
    return {
        header: [
            {name: "position", label: "Position", options: {style: {fontWeight: "bold"}}},
            {name: "activeWorkers", label: "Active workers", options: {style: {fontWeight: "bold"}}},
            {name: "onBreakWorkers", label: "On break workers", options: {style: {fontWeight: "bold"}}},
            {name: "idleWorkers", label: "Idle workers", options: {style: {fontWeight: "bold"}}},
            {name: "total", label: "Total", options: {style: {fontWeight: "bold"}}}
        ],
        rows: rows
    };
}