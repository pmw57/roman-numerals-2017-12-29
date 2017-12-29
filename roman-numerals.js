module.exports = (function iife() {
    "use strict";
    function convert(n) {
        if (!n || n < 1) {
            return "";
        }
        if (n === 1) {
            return "I";
        }
        if (n === 2) {
            return "II";
        }
        return "III";
    }
    return {
        convert
    };
}());
