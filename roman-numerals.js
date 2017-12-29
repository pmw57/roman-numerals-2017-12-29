module.exports = (function iife() {
    "use strict";
    function convert(n) {
        if (!n || n < 1) {
            return "";
        }
        return "I";
    }
    return {
        convert
    };
}());
