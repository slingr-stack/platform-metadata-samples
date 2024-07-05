function resultsSummaryTableWidgetCalculation(record, options) {
    // TODO: retrieve data
    let samples = sys.data.aggregate('samples', {});
    let partitions = sys.data.aggregate('partitions', {});

    // build header
    let header = [
        {name: "partitionId", label: "Partition ID", options: {style: {fontWeight: "bold"}}}
    ];
    partitions.forEach(function (partition) {
        header.push(
            {
                name: partition.id(),
                label: partition.label(),
                value: `<slingr-action action="openPartition" recordId="${partition.id()}">Open partition</slingr-action>`,
                options: {style: {fontWeight: "bold"}}
            }
        );
    });

    // build body
    let rows = [];
    while (samples.hasNext()) {
        let sample = samples.next();
        let samplePartitions = sample.field('partitions').val();
        let row = [{headerName: "partitionId", value: sample.label()}];
        samplePartitions.forEach(function (samplePartition) {
            row.push({
                headerName: samplePartition.id,
                value: samplePartition.raw + '<br>' + samplePartition.result,
                options: {style: {backgroundColor: samplePartition.hasIssues() ? 'red' : 'inherit'}}
            });
        });
        rows.push({cells: row});
    }
    return {
        header: header,
        body: rows
    };
}