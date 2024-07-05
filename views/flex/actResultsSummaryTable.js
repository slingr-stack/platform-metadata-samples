function resultsSummaryTableWidgetCalculation(record, options) {
    // TODO: retrieve data
    let resultsData = sys.data.aggregate('samples', {});
    let partitions = sys.data.find('partitions', {}).toArray();
    let samples = sys.data.find('samples', {}).toArray();

    // build header
    let headers = [];
    // partitions header
    let partitionHeader = [
        {name: "partitionId", label: "Partition id"}
    ];
    partitions.forEach(function (partition) {
        partitionHeader.push(
            {name: partition.id(), label: partition.label()}
        );
    });
    headers.push({
        cells: partitionHeader
    });
    // samples header
    let samplesHeader = [
        {name: "sampleName", label: "Sample name"}
    ];
    samples.forEach(function (sample) {
        samplesHeader.push(
            {name: sample.id(), label: sample.label()}
        );
    });
    headers.push({
        cells: samplesHeader
    });
    // samples result header
    let sampleResultsHeader = [
        {name: "sampleResults", label: "Sample results"}
    ];
    samples.forEach(function (sample) {
        let sampleId = sample.id();
        sampleResultsHeader.push(
            {
                name: sampleId,
                label: sample.label(),
                value: `<slingr-action action="openResults" recordId="${sampleId}">Results</slingr-action>`
            }
        );
    });
    headers.push({
        cells: sampleResultsHeader
    });

    // build body
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
    // position batch row
    let positionBatchRow = [{headerName: "partitionId", value: "Position batch"}];
    partitions.forEach(function (partition) {
        let partitionId = partition.id();
        positionBatchRow.push(
            {
                headerName: partition.id(),
                value: resultsData[partitionId].positionBatch
            }
        );
    });
    rows.push({cells: positionBatchRow});
    // customers row
    let customerRow = [{headerName: "partitionId", value: "Customer"}];
    partitions.forEach(function (partition) {
        let partitionId = partition.id();
        customerRows.push(
            {
                headerName: partition.id(),
                value: resultsData[partitionId].customer
            }
        );
    });
    rows.push({cells: customerRow});
    // dilution factor
    let dilutionFactorRow = [{headerName: "partitionId", value: "Dilution factor"}];
    partitions.forEach(function (partition) {
        let partitionId = partition.id();
        let dilutionFactor = resultsData[partitionId].dilutionFactor;
        dilutionFactorRow.push(
            {
                headerName: partition.id(),
                value: `${dilutionFactor} <slingr-action action="changeDilutionFactor" recordId="${partitionId}">Change</slingr-action>`
            }
        );
    });
    rows.push({cells: dilutionFactorRow});
    // notes
    let notesRow = [{headerName: "partitionId", value: "Notes"}];
    partitions.forEach(function (partition) {
        let partitionId = partition.id();
        let notesCount = resultsData[partitionId].notes.length;
        notesRow.push(
            {
                headerName: partition.id(),
                value: `${notesCount} <slingr-action action="viewNotes" recordId="${partitionId}">ViewEdit</slingr-action>`,
            }
        );
    });
    rows.push({cells: notesRow});
    // arsenic
    let arsenicRow = [{headerName: "partitionId", value: "Arsenic"}];
    partitions.forEach(function (partition) {
        let partitionId = partition.id();
        let arsenicResult = resultsData[partitionId].arsenicResult;
        arsenicRow.push(
            {
                headerName: partition.id(),
                value: `${arsenicResult} <slingr-icon type="${getIconType(arsenicResult)}" color="${getIconColor(arsenicResult)}"></slingr-icon>`,
            }
        );
    });
    rows.push({cells: arsenicRow});
    // cadmium
    let cadmiumRow = [{headerName: "partitionId", value: "Cadmium"}];
    partitions.forEach(function (partition) {
        let partitionId = partition.id();
        let cadmiumResult = resultsData[partitionId].cadmiumResult;
        cadmiumRow.push(
            {
                headerName: partition.id(),
                value: `${cadmiumResult} <slingr-icon type="${getIconType(cadmiumResult)}" color="${getIconColor(cadmiumResult)}"></slingr-icon>`,
            }
        );
    });
    rows.push({cells: cadmiumRow});

    return {
        header: headers,
        body: rows
    }
}