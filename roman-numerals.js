module.exports = (function iife() {
    "use strict";
    function convert(n) {
        var CONVERSION_FACTORS = [
            [10, "X"],
            [9, "IX"],
            [5, "V"],
            [4, "IV"]
        ];
        if (!n || n < 1) {
            return "";
        }
        if (n >= 9) {
            return CONVERSION_FACTORS.find(function ([arabic, ignore]) {
                return (arabic <= n);
            }).pop();
        }
        if (n === 5) {
            return CONVERSION_FACTORS[2][1];
        }
        if (n === 4) {
            return CONVERSION_FACTORS[3][1];
        }
        return convert(n - 1) + "I";
    }
    return {
        convert
    };
}());
