module.exports = (function iife() {
    "use strict";
    function convert(n) {
        var CONVERSION_FACTORS = [
            [4, "IV"],
            [5, "V"],
            [9, "IX"],
            [10, "X"]
        ];
        if (!n || n < 1) {
            return "";
        }
        if (n >= 9) {
            return CONVERSION_FACTORS.find(function ([arabic, ignore]) {
                return (arabic >= n);
            }).pop();
        }
        if (n === 5) {
            return CONVERSION_FACTORS[1][1];
        }
        if (n === 4) {
            return CONVERSION_FACTORS[0][1];
        }
        return convert(n - 1) + "I";
    }
    return {
        convert
    };
}());
