function sampleSummaryTableWidgetCalculation(record, options) {
    // TODO: retrieve data
    let analysesData = sys.data.aggregate('analyses', []);

    // build table

    // build rows
    let rows = [];
    while (analysesData.hasNext()) {
        let analysisRecord = analysesData.next();
        rows.push({
            id: analysisRecord.id(),
            cells: {
                analysisCategory: analysisRecord.field('name').val(),
                status: analysisRecord.field('status').label(),
                done: analysisRecord.pending + '/' + analysisRecord.done,
                verified: analysisRecord.pendingVerification + '/' + analysisRecord.verified
            }
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