module.exports = (function iife() {
    "use strict";
    function convert(n) {
        if (!n || n < 1) {
            return "";
        }
        if (n === 1) {
            return "I";
        }
        return "II";
    }
    return {
        convert
    };
}());
