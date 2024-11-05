function activityLogTableWidgetCalculation(record, options) {
    let activityData = sys.data.find('activityLogs', { userId: record.id() });
    let rows = [];
    while (activityData.hasNext()) {
        let activity = activityData.next();
        let dateCell = activity.field('date').format('MM/dd/yyyy HH:mm');
        let activityCell = activity.field('description').val();
        rows.push({
            date: dateCell,
            activity: activityCell
        });
    }

    return {
        header: [
            { name: "date", label: "Date", options: { sortable: true } },
            { name: "activity", label: "Activity" }
        ],
        body: rows
    };
}
