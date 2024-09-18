function navigateToDashboardInteraction(record, interaction) {
    sys.ui.sendMessage({
        name: 'navigate',
        view: 'dashboard'
    });
}