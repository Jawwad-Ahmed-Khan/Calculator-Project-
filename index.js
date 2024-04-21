"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([
    { message: "first Input:", type: "number", name: "f1" },
    { message: "2nd Input:", type: "number", name: "f2" },
    { message: "Opertor Selection:", type: "list", name: "operator", choices: ["+", "-", "x", "/"] },
]);
switch (answer.operator) {
    case "+":
        console.log("".concat(answer.f1, " + ").concat(answer.f2, " = "), answer.f1 + answer.f2);
        break;
    case "-":
        console.log("".concat(answer.f1, " - ").concat(answer.f2, " = "), answer.f1 - answer.f2);
        break;
    case "x":
        console.log("".concat(answer.f1, " x ").concat(answer.f2, " = "), answer.f1 * answer.f2);
        break;
    case "/":
        console.log("".concat(answer.f1, " / ").concat(answer.f2, " = "), answer.f1 / answer.f2);
        break;
    default:
        console.log("Invalid Choice");
        break;
}
