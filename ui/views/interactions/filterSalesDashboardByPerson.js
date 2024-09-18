function filterSalesDashboardByPersonInteraction(record, interaction) {
    record.field('person').val(interaction.field('salesPerson').val());
}

