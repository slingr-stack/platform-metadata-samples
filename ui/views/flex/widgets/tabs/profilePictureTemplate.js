function profilePictureModelCalculation(record, parentField, action) {
    let user = sys.context.getCurrentUserRecord();
    return {
        user: {
            fullName: user.field('fullName').val(),
            profilePictureUrl: user.field('profilePictureUrl').val()
        }
    };
}
