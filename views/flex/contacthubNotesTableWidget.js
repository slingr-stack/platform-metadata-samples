function notesTableWidgetCalculation(record, options) {
    let rows = [];
    let filters = options.filters || {};
    let notes = record.field('notes').val();
    let from = options.from || 0;
    let to = options.to || notes.length;
    // apply filtering based on the 'note' column
    notes = notes.filter(function(noteItem) {
        let noteValue = noteItem.note
        if (filters.note && noteValue.toLowerCase().includes(filters.note.toLowerCase())) {
            return true;
        }
        return !filters.note;
    });
    // retrieve only the requested batch
    let notesBatch = notes.slice(from, to);
    notesBatch.forEach(function (noteItem) {
        rows.push({
            user: noteItem.user,
            note: noteItem.note
        });
    });
    return {
        header: [
            {name: "user", label: "User", options: {style: {fontWeight: "bold"}}},
            {name: "note", label: "Note", options: {style: {fontWeight: "bold"}}}
        ],
        body: rows
    };
}