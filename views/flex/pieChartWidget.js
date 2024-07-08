function inventoryChartWidgetCalculation(record, options) {
    let aggregateResult = sys.data.aggregate('inventory', [
        {group: {by: 'category', count: 'count()'}}
    ]);
    let labels = [];
    let data = [];
    while (aggregateResult.hasNext()) {
        let result = aggregateResult.next();
        labels.push(result.category);
        data.push(result.count);
    }
    // build chart
    let chartConfig = {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Inventory Distribution',
                data: data,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                hoverOffset: 4
            }]
        }
    };
    return chartConfig;
}