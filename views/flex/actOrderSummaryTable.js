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
    let getLabelClass = function (status) {
        if (status === 'verified' || status === 'pushished') {
            return 'slingr-label-success';
        }
        return 'slingr-label-info';
    }

    // build rows
    let rows = [];
    while (samplesData.hasNext()) {
        let sample = samplesData.next();
        let sampleIdCell = sample.field('sampleId').val();
        if (sample.reportAvailable) {
            let fileUrl = '/api/data/samples/' + sample.id() + '/files/' + sample.field('report').id();
            sampleIdCell += '<br><a href="' + fileUrl + '"><i class="slingr-icon-download"></i></a>';
        }
        let statusLabelClass = getLabelClass(sample.field('status').val());
        let statusCell = '<div class="slingr-label ' + statusLabelClass + '">' + sample.field('status').val() + '</div>';
        let wacCell = '-';
        if (sample.wacAvailable) {
            let wacStatusLabelClass = getLabelClass(sample.field('wacStatus').val());
            wacCell = '<div class="slingr-label ' + wacStatusLabelClass + '">' + sample.field('wacStatus').val() + '</div>';
        }
        let mstCell = '-';
        if (sample.mstAvailable) {
            let mstStatusLabelClass = getLabelClass(sample.field('mstStatus').val());
            mstCell = '<div class="slingr-label ' + mstStatusLabelClass + '">' + sample.field('mstStatus').val() + '</div>';
        }
        let fmCell = '-';
        if (sample.fmAvailable) {
            let fmStatusLabelClass = getLabelClass(sample.field('fmStatus').val());
            fmCell = '<div class="slingr-label ' + fmStatusLabelClass + '">' + sample.field('fmtStatus').val() + '</div>';
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