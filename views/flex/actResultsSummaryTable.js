
function resultsSummaryTableWidgetCalculation(record, options) {
    // TODO: retrieve data
    let resultsData = sys.data.aggregate('samples', {})

    // build table

    // build columns
    let columns = [
        {
            label: 'Partition ID',
            name: 'partitionId',
            type: 'text',
            options: {
                sticky: true
            }
        },
        {
            label: 'Sample name',
            name: 'sampleName',
            type: 'text'
        },
        {
            label: 'Sample results',
            name: 'sampleResults',
            type: 'html'
        },
        {
            label: 'Position batch',
            name: 'positionBatch',
            type: 'text'
        },
        {
            label: 'Customer',
            name: 'customer',
            type: 'text'
        },
        {
            label: 'Customer',
            name: 'customer',
            type: 'text'
        },
        {
            label: 'Sample matrix',
            name: 'sampleMatrix',
            type: 'text'
        },
        {
            label: 'Sample type',
            name: 'sampleType',
            type: 'text'
        },
        {
            label: 'Order ID',
            name: 'orderId',
            type: 'text'
        },
        {
            label: 'Partition weight',
            name: 'partitionWeight',
            type: 'text'
        },
        {
            label: 'Dilution factor',
            name: 'dilutionFactor',
            type: 'html'
        },
        {
            label: 'Notes',
            name: 'notes',
            type: 'html'
        },
        {
            label: 'Internal notes',
            name: 'internalNotes',
            type: 'html'
        },
        {
            label: 'Arsenic',
            name: 'arsenic',
            type: 'html'
        },
        {
            label: 'Cadmium',
            name: 'cadmium',
            type: 'html'
        }
    ];
    let getIconType = function (value) {
        if (value < 0.5) {
            return 'check';
        }
        return 'close';
    };
    let getIconColor = function (value) {
        if (value < 0.5) {
            return 'success';
        }
        return 'default';
    };
    // build rows
    let rows = [];
    let rowCounter = 0;
    while (resultsData.hasNext()) {
        rowCounter++;
        let result = resultsData.next();
        let partitionId = result.partitionId;
        let row = {
            partitionId: partitionId,
            sampleName: result.sampleName,
            sampleResults: `<slingr-entity-action action="openResults" recordId="${partitionId}">Results</slingr-entity-action>`,
            positionBatch: result.positionBatch,
            customer: result.customer,
            sampleMatrix: result.sampleMatrix,
            sampleType: result.sampleType,
            orderId: result.orderId,
            partitionWeight: result.partitionWeight,
            dilutionFactor: `${result.dilutionFactor} <slingr-entity-action action="changeDilutionFactor" recordId="${result.id}">Change</slingr-entity-action>`,
            notes: `${result.notesCount} <slingr-entity-action action="viewNotes" recordId="${result.id}">ViewEdit</slingr-entity-action>`,
            internalNotes: `${result.internalNotesCount} <slingr-entity-action action="viewInternalNotes" recordId="${result.id}">ViewEdit</slingr-entity-action>`,
            arsenic: `${result.arsenic} <slingr-icon type="${getIconType(result.arsenic)}" color="${getIconColor(result.arsenic)}"></slingr-icon>`,
            cadmium: `${result.cadmium} <slingr-icon type="${getIconType(result.cadmium)}" color="${getIconColor(result.cadmium)}"></slingr-icon>`
        };
        let rowOptions = {};
        if (rowCounter <= 2) {
            rowOptions.sticky = true;
        }
        rows.push({
            options: rowOptions,
            cells: row
        });
    }
    return {
        columns: columns,
        rows: rows
    };
}