
function userInfoModelCalculation(record, parentField, action) {
    let user = sys.context.getCurrentUserRecord();
    return {
        user: user.toJson()
    };
}