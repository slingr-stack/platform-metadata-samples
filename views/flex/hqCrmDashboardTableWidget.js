
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
                {headerName: "leadSource", value: leadRecord.name, style: "text-align: center"},
                {headerName: "jan", value: leadRecord.jan, style: "text-align: center"},
                {headerName: "feb", value: leadRecord.feb, style: "text-align: center"},
                {headerName: "mar", value: leadRecord.mar, style: "text-align: center"},
                {headerName: "ytd", value: leadRecord.ytd, style: "text-align: center"},
                {headerName: "ytdVsTgt", value: leadRecord.ytdVsTgt, style: "text-align: center; color: green"}
            ]
        });
    }
    rows.push({
        cells: [
            {headerName: "leadSource", value: "Grand total", style: "font-weight: bold; text-align: center"},
            {headerName: "jan", value: leadsTotals.jan, style: "font-weight: bold; text-align: center"},
            {headerName: "feb", value: leadsTotals.feb, style: "font-weight: bold; text-align: center"},
            {headerName: "mar", value: leadsTotals.mar, style: "font-weight: bold; text-align: center"},
            {headerName: "ytd", value: leadsTotals.ytd, style: "font-weight: bold; text-align: center"},
            {headerName: "ytdVsTgt", value: leadsTotals.ytdVsTgt, style: "color: green; font-weight: bold; text-align: center"}
        ]
    });
    return {
        header: [
            {name: "leadSource", label: "Lead source", style: "font-weight: bold; text-align: center"},
            {name: "jan", label: "Jan", style: "font-weight: bold; text-align: center"},
            {name: "feb", label: "Feb", style: "font-weight: bold; text-align: center"},
            {name: "mar", label: "Mar", style: "font-weight: bold; text-align: center"},
            {name: "ytd", label: "YTD", style: "font-weight: bold; text-align: center"},
            {name: "ytdVsTgt", label: "YTD vs TGT", style: "font-weight: bold; text-align: center"}
        ],
        body: rows
    };
}