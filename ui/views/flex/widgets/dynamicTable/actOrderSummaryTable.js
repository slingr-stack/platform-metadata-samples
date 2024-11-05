function statusSummaryTableWidgetCalculation(record, options) {
    let samplesData = sys.data.find('samples', {order: record.id()})

    // build table

    let getLabelType = function (status) {
        if (status === 'verified' || status === 'pushished') {
            return 'success';
        }
        return 'default';
    };

    // build rows
    let rows = [];
    while (samplesData.hasNext()) {
        let sample = samplesData.next();
        let sampleIdCell = sample.field('sampleId').val();
        if (sample.reportAvailable) {
            let fileId = sample.field('report').id();
            let fileName = sample.field('report').name();
            sampleIdCell += `<slingr-file-link fileId="${fileId}">${fileName}</slingr-file-link>`
        }
        let statusCellType = getLabelType(sample.field('status').val());
        let statusCell = `<slingr-label type="${statusCellType}">${sample.field('status').label()}</slingr-label>`;
        let wacCell = '-';
        if (sample.wacAvailable) {
            let wacStatusCellType = getLabelType(sample.field('wacStatus').val());
            wacCell = `<slingr-label type="${wacStatusCellType}">${sample.field('wacStatus').label()}</slingr-label>`;
        }
        let mstCell = '-';
        if (sample.mstAvailable) {
            let mstStatusCellType = getLabelType(sample.field('mstStatus').val());
            mstCell = `<slingr-label type="${mstStatusCellType}">${sample.field('mstStatus').label()}</slingr-label>`;
        }
        let fmCell = '-';
        if (sample.fmAvailable) {
            let fmtStatusCellType = getLabelType(sample.field('fmtStatus').val());
            fmCell = `<slingr-label type="${fmtStatusCellType}">${sample.field('fmStatus').label()}</slingr-label>`;
        }
        rows.push({
            sampleId: sampleIdCell,
            name: sample.field('name').val(),
            lotId: sample.field('lotId').val(),
            batchId: sample.field('batchId').val(),
            matrix: sample.field('matrix').val(),
            type: sample.field('type').val(),
            status: statusCell,
            wac: wacCell,
            mst: mstCell,
            fm: fmCell
        });
    }
    return {
        header: [
            {name: "sampleId", label: "Sample ID"},
            {name: "name", label: "Name"},
            {name: "lotId", label: "Lot ID"},
            {name: "batchId", label: "Batch ID"},
            {name: "matrix", label: "Matrix"},
            {name: "type", label: "Type"},
            {name: "disposalStatus", label: "Disposal status"},
            {name: "status", label: "Status"},
            {name: "wac", label: "WAC"},
            {name: "mst", label: "MST"},
            {name: "fm", label: "FM"},
        ],
        body: rows
    };
}