
function sampleSummaryTableWidgetCalculation(record, options) {
    // TODO: retrieve data
    let analysesData = sys.data.aggregate('analyses', []);

    // build table

    // build columns
    let columns = [
        {
            label: 'Analysis category',
            name: 'analysisCategory',
            options: {
                alignment: 'center'
            }
        },
        {
            label: 'Status',
            name: 'status',
            options: {
                alignment: 'center'
            }
        },
        {
            label: 'Done',
            name: 'done',
            options: {
                alignment: 'center'
            }
        },
        {
            label: 'Verified',
            name: 'verified',
            options: {
                alignment: 'center'
            }
        }
    ];

    // build rows
    let rows = [];
    while (analysesData.hasNext()) {
        let analysisRecord = analysesData.next();
        rows.push({
            analysisCategory:  analysisRecord.category,
            status:  analysisRecord.status,
            done: analysisRecord.pending + '/' + analysisRecord.done,
            verified: analysisRecord.pendingVerification + '/' + analysisRecord.verified,
        });
    }

    return {
        columns: columns,
        rows: rows
    };
}