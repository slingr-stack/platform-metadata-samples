
function newMeetingsTableWidgetCalculation(record, options) {
    // TODO: retrieve data
    let leadsData = sys.data.aggregate('leads', []);
    let leadsTotals = sys.data.aggregate('leads', []);

    // build table

    // build columns
    let columns = [
        {
            label: 'Lead source',
            name: 'leadSource',
            options: {
                align: 'center'
            }
        }
    ];
    while (leadsData.hasNext()) {
        let leadRecord = leadsData.next();
        let periods = leadRecord.periods;
        for (let periodIndex = 0; periodIndex < periods.length; periodIndex++) {
            let existingColumn = columns.find(column => column.name === periods[periodIndex].name);
            if (!existingColumn) {
                columns.push({
                    label: periods[periodIndex].label,
                    name: periods[periodIndex].name,
                    type: 'integer',
                    options: {
                        align: 'center'
                    }
                });
            }
        }
    }
    columns.push({
        label: 'YTD',
        name: 'ytd',
        type: 'integer',
        options: {
            align: 'center'
        }
    });
    columns.push({
        label: 'YTD vs TGT',
        name: 'ytdVsTgt',
        type: 'percentage',
        options: {
            align: 'center',
            style: {
                fontColor: 'green'
            }
        }
    });

    // build rows
    let rows = [];
    while (leadsData.hasNext()) {
        let leadRecord = leadsData.next();
        let row = {
            leadSource: leadRecord.name
        }
        let periods = leadRecord.periods;
        for (let periodIndex = 0; periodIndex < periods.length; periodIndex++) {
            row[periods[periodIndex].name] = periods[periodIndex].total
        }
        row['ytd'] = leadRecord.ytd;
        row['ytdVsTgt'] = leadRecord.ytdVsTgt;
        rows.push(row);
    }
    let totalRow = {
        leadSource: 'Grand Total',
    };
    let totalPeriods = leadsTotals.periods;
    for (let periodIndex = 0; periodIndex < totalPeriods.length; periodIndex++) {
        totalRow[periodIndex.name] = totalRow[periodIndex].total
    }
    totalRow['ytd'] = leadsTotals.ytd;
    totalRow['ytdVsTgt'] = leadsTotals.ytdVsTgt;
    rows.push({
        cells: totalRow,
        options: {
            style: {
                fontWeight: 'bold'
            }
        }
    });

    return {
        columns: columns,
        rows: rows
    };
}