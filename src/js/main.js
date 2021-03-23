"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FirstFunctionContainer_1 = require("./core/functions/FirstFunctionContainer");
const MethodInput_1 = require("./core/inputs/MethodInput");
const ChordsMethod_1 = require("./core/methods/ChordsMethod");
const SecondFunctionContainer_1 = require("./core/functions/SecondFunctionContainer");
const NewtonMethod_1 = require("./core/methods/NewtonMethod");
const NewtonMethodInput_1 = require("./core/inputs/NewtonMethodInput");
console.log("kek");
// let p: P = new P(null);
let firstFuncCont = new FirstFunctionContainer_1.FirstFunctionContainer();
let secondFuncCont = new SecondFunctionContainer_1.SecondFunctionContainer();
let input = new MethodInput_1.MethodInput(-2, -1, 0.01);
let newtonInput = new NewtonMethodInput_1.NewtonMethodInput(-2, -1, -2, 0.01);
// let validationResult: ValidationResult = FunctionInputValidator.validate(input,  firstFuncCont);
// console.log(validationResult);
let chordsMeth = new ChordsMethod_1.ChordsMethod();
let newtonMeth = new NewtonMethod_1.NewtonMethod();
let chordsMethResultTab = chordsMeth.calculate(input, secondFuncCont);
let newtonMethResultTab = newtonMeth.calculate(newtonInput, secondFuncCont);
console.log("Newton methods res table : ", newtonMethResultTab);
console.log(" x = ", newtonMethResultTab.getFinalX());
console.log("*********************");
// console.log(MethodResultTableRenderer.render(chordsMethResultTab, 3, headings.chordsMethodResultTableHeadings))
console.log("Finished");
//# sourceMappingURL=main.js.map