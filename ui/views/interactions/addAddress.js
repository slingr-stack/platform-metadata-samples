
function addAddressInteraction(record, interaction) {
    record.field('addresses').add({
        addressLine1: interaction.field('addressLine1').val(),
        addressLine2: interaction.field('addressLine2').val(),
        city: interaction.field('city').val(),
        state: interaction.field('state').val()
    });
}
