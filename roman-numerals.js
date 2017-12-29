module.exports = (function iife() {
    "use strict";
    function convert(n) {
        var CONVERSION_FACTORS = [
            [1000, "M"],
            [900, "CM"],
            [500, "D"],
            [400, "CD"],
            [100, "C"],
            [90, "XC"],
            [50, "L"],
            [40, "XL"],
            [10, "X"],
            [9, "IX"],
            [5, "V"],
            [4, "IV"],
            [1, "I"]
        ];
        if (!n || n < 1) {
            return "";
        }
        return CONVERSION_FACTORS.find(function ([arabic, ignore]) {
            if (arabic <= n) {
                n -= arabic;
                return true;
            }
        }).pop() + convert(n);
    }
    return {
        convert
    };
}());
