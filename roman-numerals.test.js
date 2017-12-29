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
}());