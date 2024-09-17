/*
 Entity: users
WARNING! This file is generated by Slingr. You shouldn't add new functions or delete the functions
manually unless you know what you are doing. To be safe, only modify the scripts inside functions.
*/

function fullNameValueCalculation(record, parentField, action) {
    return (!record.field('firstName').isEmpty() ? record.field('firstName').val() : '') + ' ' + (!record.field('lastName').isEmpty() ? record.field('lastName').val() : '');
}

function emailStandardizedValueCalculation(record, parentField, action) {
    return !record.field('email').isEmpty() ? record.field('email').val().trim().toLowerCase() : null;
}

function sendWelcomeEmailVisible(record, parentField, action) {
    return record.isNew();
}

function authenticationGeneratePasswordVisible(record, parentField, action) {
    return record.isNew() && !record.field('sendWelcomeEmail').val();
}

function authenticationNewPasswordRequired(record, parentField, action) {
    return record.isNew() && !record.field('authentication.generatePassword').val();
}

function authenticationNewPasswordReadAccess(record, parentField, action) {
    return record.isNew() && !record.field('authentication.generatePassword').val();
}

function authenticationNewPasswordWriteAccess(record, parentField, action) {
    return record.isNew() && !record.field('authentication.generatePassword').val();
}

function authenticationPasswordConfirmationRequired(record, parentField, action) {
    return record.isNew() && !record.field('authentication.generatePassword').val();
}

function authenticationPasswordConfirmationReadAccess(record, parentField, action) {
    return record.isNew() && !record.field('authentication.generatePassword').val();
}

function authenticationPasswordConfirmationWriteAccess(record, parentField, action) {
    return record.isNew() && !record.field('authentication.generatePassword').val();
}

function authenticationPasswordRequired(record, parentField, action) {
    return !record.isNew();
}

function identityProvidersRequired(record, parentField, action) {
    return !record.isNew();
}

function resetPasswordAction(record, oldRecord, action) {
    return sys.internal.users.resetPassword(record, {notifyUser: true});
}

function activateAction(record, oldRecord, action) {
    return sys.internal.users.activate(record);
}

function deactivateAction(record, oldRecord, action) {
    return sys.internal.users.deactivate(record);
}

function unblockAction(record, oldRecord, action) {
    return sys.internal.users.unblock(record);
}
