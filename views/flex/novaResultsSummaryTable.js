
function resultsSummaryTableWidgetCalculation(record, options) {
    // TODO: retrieve data
    let resultsData = sys.data.aggregate('samples', {})

    // build table

    // build rows
    let rows = [];
    while (resultsData.hasNext()) {
        let result = resultsData.next();
        let partitionId = result.partitionId;
        let partitionCell = `<slingr-action action="openResults" recordId="${partitionId}">Open results</slingr-action>`;
        rows.push({
            cells: [
                {headerName: "partitionId", value: partitionCell},
                {headerName: "dwc242406180013", value: result.sample3.raw + '<br>' + result.sample3.result, options: {style: {backgroundColor: result.sample3.hasIssues() ? 'red' : 'inherit'}}},
                {headerName: "dwc242406180012", value: result.sample2.raw + '<br>' + result.sample2.result, options: {style: {backgroundColor: result.sample2.hasIssues() ? 'red' : 'inherit'}}},
                {headerName: "dwc242406180011", value: result.sample1.raw + '<br>' + result.sample1.result, options: {style: {backgroundColor: result.sample1.hasIssues() ? 'red' : 'inherit'}}},
            ]
        });
    }
    return {
        header: [
            {name: "partitionId", label: "Partition ID", options: {style: {fontWeight: "bold"}}},
            {name: "dwc242406180013", label: "DWC24-240618001-3", options: {style: {fontWeight: "bold"}}},
            {name: "dwc242406180012", label: "DWC24-240618001-2", options: {style: {fontWeight: "bold"}}},
            {name: "dwc242406180011", label: "DWC24-240618001-1", options: {style: {fontWeight: "bold"}}}
        ],
        body: rows
    };
}