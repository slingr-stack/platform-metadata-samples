function ordersStatsWidgetCalculation(record, options) {
    // example variables based on calculations or conditions
    let totalOrders = 1500;
    let percentIncrease = 60;
    let isHighIncrease = percentIncrease > 50;
    // determine styles based on conditions
    let valueStyleClass = "primary";
    if (isHighIncrease) {
        valueStyleClass = "danger";
    }
    // determine icon and its style
    let icon = "shopping-cart";
    let iconStyleClass = "success";
    if (isHighIncrease) {
        icon = "alert-triangle";
        iconStyleClass = "warning";
    }
    // footnote based on conditions
    let footNote = `<strong>%${percentIncrease}+</strong> since last week`;
    if (isHighIncrease) {
        footNote = `High increase: ${footNote}`;
    }

    return {
        value: totalOrders.toString(),
        valueStyle: valueStyleClass,
        icon: icon,
        iconStyle: iconStyleClass,
        footnote: footNote
    };
}