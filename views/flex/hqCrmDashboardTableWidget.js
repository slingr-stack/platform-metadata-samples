function newMeetingsTableWidgetCalculation(record, options) {
    // TODO: retrieve data
    let leadsData = sys.data.aggregate('leads', []);
    let leadsTotals = sys.data.aggregate('leads', []);

    // build data rows
    let rows = [];
    while (leadsData.hasNext()) {
        let leadRecord = leadsData.next();
        rows.push({
            leadSource: {value: leadRecord.name, css: "text-align: center"},
            jan: {value: leadRecord.jan, css: "text-align: center"},
            feb: {value: leadRecord.feb, css: "text-align: center"},
            mar: {value: leadRecord.mar, css: "text-align: center"},
            ytd: {value: leadRecord.ytd, css: "text-align: center"},
            ytdVsTgt: {value: leadRecord.ytdVsTgt, css: "text-align: center; color: green"}
        });
    }
    rows.push({
        leadSource: {value: "Grand total", css: "font-weight: bold; text-align: center"},
        jan: {value: leadsTotals.jan, css: "font-weight: bold; text-align: center"},
        feb: {value: leadsTotals.feb, css: "font-weight: bold; text-align: center"},
        mar: {value: leadsTotals.mar, css: "font-weight: bold; text-align: center"},
        ytd: {value: leadsTotals.ytd, css: "font-weight: bold; text-align: center"},
        ytdVsTgt: {value: leadsTotals.ytdVsTgt, css: "color: green; font-weight: bold; text-align: center"}
    });
    return {
        header: [
            {name: "leadSource", label: "Lead source", css: "font-weight: bold; text-align: center"},
            {name: "jan", label: "Jan", css: "font-weight: bold; text-align: center"},
            {name: "feb", label: "Feb", css: "font-weight: bold; text-align: center"},
            {name: "mar", label: "Mar", css: "font-weight: bold; text-align: center"},
            {name: "ytd", label: "YTD", css: "font-weight: bold; text-align: center"},
            {name: "ytdVsTgt", label: "YTD vs TGT", css: "font-weight: bold; text-align: center"}
        ],
        body: rows
    };
}