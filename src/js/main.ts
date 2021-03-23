import {FunctionInputValidator} from "./core/validators/FunctionInputValidator";
import {FirstFunctionContainer} from "./core/functions/FirstFunctionContainer";
import {MethodInput} from "./core/inputs/MethodInput";
import {ValidationResult} from "./core/validators/ValidationResult";
import {ChordsMethod} from "./core/methods/ChordsMethod";
import {ChordsMethodResultTable} from "./core/results/ChordsMethodResultTable";
import {ChordsMethodResultTableRow} from "./core/results/ChordsMethodResultTableRow";
import headings from "./ui/renderers/tablesheadings.config";
import {MethodResultTableRenderer} from "./ui/renderers/MethodResultTableRenderer";
import {SecondFunctionContainer} from "./core/functions/SecondFunctionContainer";
import {NewtonMethod} from "./core/methods/NewtonMethod";
import {NewtonMethodResultTableRow} from "./core/results/NewtonMethodResultTableRow";
import {NewtonMethodInput} from "./core/inputs/NewtonMethodInput";
import {NewtonMethodResultTable} from "./core/results/NewtonMethodResultTable";


console.log("kek");

// let p: P = new P(null);


let firstFuncCont: FirstFunctionContainer = new FirstFunctionContainer();
let secondFuncCont: SecondFunctionContainer = new SecondFunctionContainer();
let input: MethodInput = new MethodInput(-2, -1, 0.01);
let newtonInput: NewtonMethodInput = new NewtonMethodInput(-2, -1, -2,0.01);

// let validationResult: ValidationResult = FunctionInputValidator.validate(input,  firstFuncCont);
// console.log(validationResult);


let chordsMeth: ChordsMethod = new ChordsMethod();
let newtonMeth: NewtonMethod = new NewtonMethod();

let chordsMethResultTab: ChordsMethodResultTable = chordsMeth.calculate(input, secondFuncCont);
let newtonMethResultTab: NewtonMethodResultTable = newtonMeth.calculate(newtonInput, secondFuncCont);


console.log("Newton methods res table : ", newtonMethResultTab);
console.log(" x = ", newtonMethResultTab.getFinalX());

console.log("*********************")
// console.log(MethodResultTableRenderer.render(chordsMethResultTab, 3, headings.chordsMethodResultTableHeadings))

console.log("Finished")
