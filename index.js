/*jslint browser */
var romanNumerals = require("./roman-numerals.js");

var results = document.querySelector(".results");
var numbers = new Array(100).fill().map((v, i) => i + 1);
results.innerHTML = numbers.map(romanNumerals.convert)
    .join(", ");