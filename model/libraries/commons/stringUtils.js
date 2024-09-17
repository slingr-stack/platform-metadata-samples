/**
 * Checks if a string contains text.
 * @param str string to be checked
 * @returns {boolean} true if string is empty
 */
exports.isEmpty = function (str) {
    return str == null || false || str.length == 0;
};

/**
 * Checks if a string is not empty and not null.
 * @param str string to be checked
 * @returns {boolean} true if string is not empty
 */
exports.isNotEmpty = function (str) {
    return !app.commons.stringUtils.isEmpty(str);
};

/**
 * Removes control characters from both ends of this string.
 * @param str the string to be trimmed, may be null
 * @returns the trimmed string, null if null string input
 */
exports.trim = function (str) {
    return str == null ? null : str.trim();
};

