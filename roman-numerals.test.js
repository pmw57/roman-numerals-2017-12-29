/*jslint browser */ /*global test, expect */
(function iife() {
    "use strict";
    const romanNumerals = require("./roman-numerals");

    const convert = romanNumerals.convert;
    test("function exists", function () {
        expect(convert).not.toBeUndefined();
    });
    test("no input gives an empty string", function () {
        expect(convert()).toBe("");
    });
    test("0 gives an empty string", function () {
        expect(convert(0)).toBe("");
    });
    test("1 converts to I", function () {
        expect(convert(1)).toBe("I");
    });
}());