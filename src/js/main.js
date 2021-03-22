"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FirstFunctionContainer_1 = require("./businesslogic/functions/FirstFunctionContainer");
const MethodInput_1 = require("./businesslogic/inputs/MethodInput");
const ChordsMethod_1 = require("./businesslogic/methods/ChordsMethod");
const Renderer_1 = require("./ui/renderers/Renderer");
const tablesheadings_config_1 = __importDefault(require("./ui/renderers/tablesheadings.config"));
console.log("kek");
// let p: P = new P(null);
let firstFuncCont = new FirstFunctionContainer_1.FirstFunctionContainer();
let input = new MethodInput_1.MethodInput(-2, -1, 0.0001);
// let validationResult: ValidationResult = FunctionInputValidator.validate(input,  firstFuncCont);
// console.log(validationResult);
let chordsMeth = new ChordsMethod_1.ChordsMethod();
let chordsMethResultTab = chordsMeth.calculate(input, firstFuncCont);
console.log("Chords methods res table : ", chordsMethResultTab);
console.log("Chords methods res table : ", chordsMethResultTab);
console.log(" x = ", chordsMethResultTab.getFinalX());
console.log("*********************");
console.log(Renderer_1.Renderer.render(chordsMethResultTab, 3, tablesheadings_config_1.default.chordsMethodResultTableHeadings));
console.log("Finished");
//# sourceMappingURL=main.js.map