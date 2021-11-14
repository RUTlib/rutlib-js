"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRut = exports.formatRut = exports.getLastDigitOfRut = exports.validateRut = exports.cleanRut = void 0;
function cleanRut(rut) {
    /**
     * Delete all non-numeric characters from a RUT.
     * @param rut  RUT string
     * @return {string} RUT without non-numeric characters.
     */
    return typeof rut === 'string'
        ? rut.replace(/^0+|[^0-9kK]+/g, '').toUpperCase()
        : '';
}
exports.cleanRut = cleanRut;
function validateRut(rut) {
    /**
     * Verify if a RUT is valid.
     * @param rut  RUT string
     * @return {boolean} true if RUT is valid, false otherwise.
     */
    if (/^0+/.test(rut)) {
        return false;
    }
    if (!/^0*(\d{1,3}(\.?\d{3})*)-?([\dkK])$/.test(rut)) {
        return false;
    }
    var cleanedRut = cleanRut(rut);
    var rutNumbers = parseInt(cleanedRut.slice(0, -1), 10);
    var rutLastDigit = cleanedRut.slice(-1);
    var M = 0, S = 1;
    for (; rutNumbers; rutNumbers = Math.floor(rutNumbers / 10))
        S = (S + (rutNumbers % 10) * (9 - (M++ % 6))) % 11;
    var lastDigitValid = (S ? S - 1 : 'K').toString();
    return lastDigitValid === rutLastDigit;
}
exports.validateRut = validateRut;
function getLastDigitOfRut(rutNumbers) {
    /**
     * Get de verificator digit from a number .
     * @param rutNumbers  RUT numbers
     * @return {string} as verificator digit.
     */
    var M = 0, S = 1;
    for (; rutNumbers; rutNumbers = Math.floor(rutNumbers / 10))
        S = (S + (rutNumbers % 10) * (9 - (M++ % 6))) % 11;
    var lastDigitValid = (S ? S - 1 : 'K').toString();
    return lastDigitValid;
}
exports.getLastDigitOfRut = getLastDigitOfRut;
function formatRut(rut, withDots) {
    if (withDots === void 0) { withDots = true; }
    /**
     * Format a RUT to a valid format.
     * @param rut  RUT string
     * @param withDots  true if RUT should be formatted with dots, false otherwise.
     * @return {string} RUT formatted.
     */
    rut = cleanRut(rut);
    var rutFormatted;
    if (withDots) {
        rutFormatted = rut.slice(-4, -1) + '-' + rut.substr(rut.length - 1);
        for (var i = 4; i < rut.length; i += 3) {
            rutFormatted = rut.slice(-3 - i, -i) + '.' + rutFormatted;
        }
    }
    else {
        rutFormatted = rut.slice(0, -1) + '-' + rut.substr(rut.length - 1);
    }
    return rutFormatted;
}
exports.formatRut = formatRut;
function generateRut(length, formated) {
    if (length === void 0) { length = 8; }
    if (formated === void 0) { formated = true; }
    /**
     * Generate a RUT with a random number.
     * @param length  RUT length
     * @param formated  true if RUT should be formatted, false otherwise.
     * @return {string} RUT generated.
     */
    if (length === 0) {
        return '';
    }
    var rutNumbers = Math.floor(Math.random() * Math.pow(10, length));
    var lengthRutNumbers = rutNumbers.toString().length;
    while (lengthRutNumbers < length) {
        rutNumbers = Math.floor(Math.random() * Math.pow(10, length));
    }
    var rutLastDigit = getLastDigitOfRut(rutNumbers);
    var rutGenerated = formatRut(rutNumbers.toString() + rutLastDigit, formated);
    return rutGenerated;
}
exports.generateRut = generateRut;
//# sourceMappingURL=index.js.map