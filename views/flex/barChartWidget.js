function salesPerProductChartWidgetCalculation(record, options) {
    let aggregateResult = sys.data.aggregate('sales', [
        { group: { by: 'product', totalSales: 'sum(quantity * price)' } }
    ]);
    let labels = [];
    let data = [];
    while (aggregateResult.hasNext()) {
        let result = aggregateResult.next();
        labels.push(result.product);
        data.push(result.totalSales);
    }
    // build chart
    let chartConfig = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Total sales per product',
                data: data,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };
    return chartConfig;
}