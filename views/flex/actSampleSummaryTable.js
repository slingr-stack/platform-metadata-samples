
function sampleSummaryTableWidgetCalculation(record, options) {
    // TODO: retrieve data
    let analysesData = sys.data.aggregate('analyses', []);

    // build table

    // build rows
    let rows = [];
    while (analysesData.hasNext()) {
        let analysisRecord = analysesData.next();
        rows.push({
            cells: [
                {headerName: "analysisCategory", value: analysisRecord.field('name').val()},
                {headerName: "status", value: analysisRecord.field('status').label()},
                {headerName: "done", value: analysisRecord.pending + '/' + analysisRecord.done},
                {headerName: "verified", value: analysisRecord.pendingVerification + '/' + analysisRecord.verified}
            ]
        });
    }

    return {
        header: [
            {name: "analysisCategory", label: "Analysis category", style: "font-weight: bold; text-align: center"},
            {name: "status", label: "Status", style: "font-weight: bold; text-align: center"},
            {name: "done", label: "Feb", style: "font-weight: bold; text-align: center"},
            {name: "verified", label: "Mar", style: "font-weight: bold; text-align: center"},
        ],
        body: rows
    };
}