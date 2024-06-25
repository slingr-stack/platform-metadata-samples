
function resultsSummaryTableWidgetCalculation(record, options) {
    // TODO: retrieve data
    let resultsData = sys.data.aggregate('samples', {})

    // build table

    // build columns
    let columns = [
        {
            label: 'Partition ID',
            name: 'partitionId',
            type: 'html',
            options: {
                sticky: true
            }
        }
    ];
    // build columns dynamically based on data
    while (resultsData.hasNext()) {
        let result = resultsData.next();
        let services = result.analysisServices;
        for (let serviceIndex = 0; serviceIndex < services.length; serviceIndex++) {
            let existingColumn = columns.find(column => column.name === services[serviceIndex].name);
            if (!existingColumn) {
                columns.push({
                    label: services[serviceIndex].label,
                    name: services[serviceIndex].name,
                    type: 'html'
                });
            }
        }
    }

    // build rows
    let rows = [];
    while (resultsData.hasNext()) {
        let result = resultsData.next();
        let partitionId = result.partitionId;
        let partitionCell = `<slingr-entity-action action="openResults" recordId="${partitionId}">Open results</slingr-entity-action>`;
        let row = {
            partitionId: partitionCell,
        };
        let services = result.analysisServices;
        for (let serviceIndex = 0; serviceIndex < services.length; serviceIndex++) {
            let serviceValueCell = {
                value: services[serviceIndex].raw + '<br>' + services[serviceIndex].result,
                style: {}
            };
            // highlight cell value
            if (services[serviceIndex].raw > 0.5) {
                serviceValueCell.style.backgroundColor = 'red';
            }
            row[services[serviceIndex].name] = serviceValueCell
        }
        rows.push(row);
    }
    return {
        columns: columns,
        rows: rows
    };
}