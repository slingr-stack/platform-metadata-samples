function statusSummaryTableWidgetCalculation(record, options) {
    let samplesData = sys.data.find('samples', {order: record.id()})

    // build table

    // build columns
    let columns = [
        {
            label: 'Sample ID',
            name: 'sampleId',
            type: 'html'
        },
        {
            label: 'Name',
            name: 'name'
        },
        {
            label: 'Lot ID',
            name: 'lotId'
        },
        {
            label: 'Batch ID',
            name: 'batchId'
        },
        {
            label: 'Matrix',
            name: 'matrix'
        },
        {
            label: 'Type',
            name: 'Type'
        },
        {
            label: 'Disposal Status',
            name: 'disposalStatus'
        },
        {
            label: 'Status',
            name: 'status',
            type: 'html'
        },
        {
            label: 'WAC',
            name: 'wac',
            type: 'html'
        },
        {
            label: 'MST',
            name: 'mst',
            type: 'html'
        },
        {
            label: 'FM',
            name: 'fm',
            type: 'html'
        }
    ];
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
        let row = {
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
        };
        rows.push(row);
    }
    return {
        columns: columns,
        rows: rows
    };
}