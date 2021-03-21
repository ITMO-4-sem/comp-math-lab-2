"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FunctionInputValidator_1 = require("./businesslogic/validators/FunctionInputValidator");
const FirstFunctionContainer_1 = require("./businesslogic/functions/FirstFunctionContainer");
const MethodInput_1 = require("./businesslogic/inputs/MethodInput");
console.log("kek");
// let p: P = new P(null);
let firstFuncCont = new FirstFunctionContainer_1.FirstFunctionContainer();
let input = new MethodInput_1.MethodInput(-1, 6, 0.1);
let validationResult = FunctionInputValidator_1.FunctionInputValidator.validate(input, firstFuncCont);
console.log(validationResult);
console.log("Finished");
//# sourceMappingURL=main.js.map