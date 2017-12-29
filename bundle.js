(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*jslint browser */
var romanNumerals = require("./roman-numerals.js");

var results = document.querySelector(".results");
var numbers = new Array(100).fill().map((v, i) => i + 1);
results.innerHTML = numbers.map(romanNumerals.convert)
    .join(", ");
},{"./roman-numerals.js":2}],2:[function(require,module,exports){
module.exports = (function iife() {
    "use strict";
    function convert(n) {
        var CONVERSION_FACTORS = [
            [1000, "M"],
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

},{}]},{},[1]);
