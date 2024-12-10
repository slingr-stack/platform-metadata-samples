function filterSalesDashboardByPersonInteraction(record, interaction, context) {
    record.field('person').val(interaction.field('salesPerson').val());
}

