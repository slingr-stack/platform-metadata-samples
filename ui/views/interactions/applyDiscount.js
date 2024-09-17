function applyDiscountInteraction(record, interaction) {
    let discountCode = interaction.field('discountCode').val();
    let discountValue = getDiscountValue(discountCode); // custom logic to retrieve discount
    record.field('totalPrice').val(record.field('totalPrice').val() - discountValue);
}
