function resultsSummaryTableWidgetCalculation(record, options) {
    // TODO: retrieve data
    let resultsData = sys.data.aggregate('samples', {});
    let partitions = sys.data.find('partitions', {}).toArray();
    let samples = sys.data.find('samples', {}).toArray();

    // build header
    let headers = [{name: "partitionId", label: "Partition id"}];
    partitions.forEach(function (partition) {
        headers.push(
            {name: partition.id(), label: partition.label()}
        );
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
    // samples row
    let sampleRow = {partitionId: "Sample name"};
    partitions.forEach(function (partition) {
        let partitionId = partition.id();
        sampleRow[partitionId] = `<slingr-action action="openResults" recordId="${partitionId}">Results</slingr-action>`;
    });
    rows.push(sampleRow);
    // position batch row
    let positionBatchRow = {partitionId: "Position batch"};
    partitions.forEach(function (partition) {
        let partitionId = partition.id();
        positionBatchRow[partitionId] = resultsData[partitionId].positionBatch;
    });
    rows.push(positionBatchRow);
    // customers row
    let customerRow = {partitionId: "Customer"};
    partitions.forEach(function (partition) {
        let partitionId = partition.id();
        customerRow[partitionId] = resultsData[partitionId].customer
    });
    rows.push(customerRow);
    // dilution factor
    let dilutionFactorRow = {partitionId: "Dilution factor"};
    partitions.forEach(function (partition) {
        let partitionId = partition.id();
        let dilutionFactor = resultsData[partitionId].dilutionFactor;
        dilutionFactorRow[partitionId] = `${dilutionFactor} <slingr-action action="changeDilutionFactor" recordId="${partitionId}">Change</slingr-action>`;
    });
    rows.push(dilutionFactorRow);
    // notes
    let notesRow = {partitionId: "Notes"};
    partitions.forEach(function (partition) {
        let partitionId = partition.id();
        let notesCount = resultsData[partitionId].notes.length;
        notesRow[partitionId] = `${notesCount} <slingr-action action="viewNotes" recordId="${partitionId}">ViewEdit</slingr-action>`;
    });
    rows.push(notesRow);
    // arsenic
    let arsenicRow = {partitionId: "Arsenic"};
    partitions.forEach(function (partition) {
        let partitionId = partition.id();
        let arsenicResult = resultsData[partitionId].arsenicResult;
        arsenicRow[partitionId] = `${arsenicResult} <slingr-icon type="${getIconType(arsenicResult)}" color="${getIconColor(arsenicResult)}"></slingr-icon>`;
    });
    rows.push(arsenicRow);
    // cadmium
    let cadmiumRow = {partitionId: "Cadmium"};
    partitions.forEach(function (partition) {
        let partitionId = partition.id();
        let cadmiumResult = resultsData[partitionId].cadmiumResult;
        cadmiumRow[partitionId] = `${cadmiumResult} <slingr-icon type="${getIconType(cadmiumResult)}" color="${getIconColor(cadmiumResult)}"></slingr-icon>`;
    });
    rows.push(arsenicRow);

    return {
        header: headers,
        body: rows
    }
}