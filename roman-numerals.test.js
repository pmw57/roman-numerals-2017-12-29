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
    let convertedValues = [
        [1, "I"],
        [2, "II"],
        [3, "III"],
        [4, "IV"],
        [5, "V"]
    ];
    convertedValues.forEach(function ([arabic, roman]) {
        test(`${arabic} converts to ${roman}`, function () {
            expect(convert(arabic)).toBe(roman);
        });
    });
}());