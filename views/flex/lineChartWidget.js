function expensesPerMonthChartWidgetCalculation(record, options) {
    let aggregateResult = sys.data.aggregate('expenses', [
        { group: { by: 'month', totalExpenses: 'sum(amount)' } },
        { sort: { 'month': 'asc' } }
    ]);
    let labels = [];
    let data = [];
    while (aggregateResult.hasNext()) {
        let result = aggregateResult.next();
        labels.push(result.month);
        data.push(result.totalExpenses);
    }
    // build chart
    let chartConfig = {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Total expenses per month',
                data: data,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
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