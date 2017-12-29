module.exports = (function iife() {
    "use strict";
    function convert(n) {
        if (!n || n < 1) {
            return "";
        }
        if (n === 4) {
            return "IV";
        }
        if (n === 5) {
            return "V";
        }
        return convert(n - 1) + "I";
    }
    return {
        convert
    };
}());
