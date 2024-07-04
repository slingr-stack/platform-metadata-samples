
function newMeetingsTableWidgetCalculation(record, options) {
    // TODO: retrieve data
    let leadsData = sys.data.aggregate('leads', []);
    let leadsTotals = sys.data.aggregate('leads', []);

    // build data rows
    let rows = [];
    while (leadsData.hasNext()) {
        let leadRecord = leadsData.next();
        rows.push({
            cells: [
                {headerName: "leadSource", value: leadRecord.name, options: {style: {textAlign: "center"}}},
                {headerName: "jan", value: leadRecord.jan, options: {style: {textAlign: "center"}}},
                {headerName: "feb", value: leadRecord.feb, options: {style: {textAlign: "center"}}},
                {headerName: "mar", value: leadRecord.mar, options: {style: {textAlign: "center"}}},
                {headerName: "ytd", value: leadRecord.ytd, options: {style: {textAlign: "center"}}},
                {headerName: "ytdVsTgt", value: leadRecord.ytdVsTgt, options: {style: {color: "green", textAlign: "center"}}}
            ]
        });
    }
    rows.push({
        cells: [
            {headerName: "leadSource", value: "Grand total", options: {style: {textAlign: "center", fontWeight: "bold"}}},
            {headerName: "jan", value: leadsTotals.jan, options: {style: {textAlign: "center", fontWeight: "bold"}}},
            {headerName: "feb", value: leadsTotals.feb, options: {style: {textAlign: "center", fontWeight: "bold"}}},
            {headerName: "mar", value: leadsTotals.mar, options: {style: {textAlign: "center", fontWeight: "bold"}}},
            {headerName: "ytd", value: leadsTotals.ytd, options: {style: {textAlign: "center", fontWeight: "bold"}}},
            {headerName: "ytdVsTgt", value: leadsTotals.ytdVsTgt, options: {style: {color: "green", textAlign: "center", fontWeight: "bold"}}}
        ]
    });
    return {
        header: [
            {name: "leadSource", label: "Lead source", options: {style: {fontWeight: "bold", textAlign: "center"}}},
            {name: "jan", label: "Jan", options: {style: {fontWeight: "bold", textAlign: "center"}}},
            {name: "feb", label: "Feb", options: {style: {fontWeight: "bold", textAlign: "center"}}},
            {name: "mar", label: "Mar", options: {style: {fontWeight: "bold", textAlign: "center"}}},
            {name: "ytd", label: "YTD", options: {style: {fontWeight: "bold", textAlign: "center"}}},
            {name: "ytdVsTgt", label: "YTD vs TGT", options: {style: {fontWeight: "bold", textAlign: "center"}}}
        ],
        body: rows
    };
}