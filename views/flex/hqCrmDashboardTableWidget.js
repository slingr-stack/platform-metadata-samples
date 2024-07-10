function newMeetingsTableWidgetCalculation(record, options) {
    // TODO: retrieve data
    let leadsData = sys.data.aggregate('leads', []);
    let leadsTotals = sys.data.aggregate('leads', []);

    // build data rows
    let rows = [];
    while (leadsData.hasNext()) {
        let leadRecord = leadsData.next();
        rows.push({
            leadSource: {value: leadRecord.name, style: "text-align: center"},
            jan: {value: leadRecord.jan, style: "text-align: center"},
            feb: {value: leadRecord.feb, style: "text-align: center"},
            mar: {value: leadRecord.mar, style: "text-align: center"},
            ytd: {value: leadRecord.ytd, style: "text-align: center"},
            ytdVsTgt: {value: leadRecord.ytdVsTgt, style: "text-align: center; color: green"}
        });
    }
    rows.push({
        leadSource: {value: "Grand total", style: "font-weight: bold; text-align: center"},
        jan: {value: leadsTotals.jan, style: "font-weight: bold; text-align: center"},
        feb: {value: leadsTotals.feb, style: "font-weight: bold; text-align: center"},
        mar: {value: leadsTotals.mar, style: "font-weight: bold; text-align: center"},
        ytd: {value: leadsTotals.ytd, style: "font-weight: bold; text-align: center"},
        ytdVsTgt: {value: leadsTotals.ytdVsTgt, style: "color: green; font-weight: bold; text-align: center"}
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