function filterSalesDashboardInteraction(record, interaction) {
    record.field('fromDate').val(interaction.field('fromDate').val());
    record.field('toDate').val(interaction.field('toDate').val());
}

function filterSalesDashboardInteractionValidation(record, interaction) {
    let errors = [];
    let fromDate = interaction.field('fromDate').val();
    let toDate = interaction.field('toDate').val();

    // check if fromDate is missing
    if (!fromDate) {
        errors.push({
            path: 'fromDate',
            code: 'required',
            message: 'To date is required'
        });
    }
    // check if toDate is missing
    if (!toDate) {
        errors.push({
            path: 'toDate',
            code: 'required',
            message: 'To date is required'
        });
    }
    // validate that toDate is greater than fromDate
    if (toDate && toDate <= fromDate) {
        errors.push({
            path: 'toDate',
            code: 'invalid',
            message: 'To Date must be greater than From Date'
        });
    }

    return errors;
}
