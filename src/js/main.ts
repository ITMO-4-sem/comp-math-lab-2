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
import {MethodInputWithInitApprox} from "./core/inputs/MethodInputWithInitApprox";
import {NewtonMethodResultTable} from "./core/results/NewtonMethodResultTable";
import {SimpleIterationsMethod} from "./core/methods/SimpleIterationsMethod";
import {SimpleIterationsMethodResultTable} from "./core/results/SimpleIterationsMethodResultTable";
import {ThirdFunctionContainer} from "./core/functions/ThirdFunctionContainer";


console.log("kek");

// let p: P = new P(null);


let firstFuncCont: FirstFunctionContainer = new FirstFunctionContainer();
let secondFuncCont: SecondFunctionContainer = new SecondFunctionContainer()
let thirdFuncCont: ThirdFunctionContainer = new ThirdFunctionContainer();
let input: MethodInput = new MethodInput(-3, -1, 0.001);
let inputWithInitApprox: MethodInputWithInitApprox = new MethodInputWithInitApprox(-30, 200, -2,0.001);

// let validationResult: ValidationResult = FunctionInputValidator.validate(input,  firstFuncCont);
// console.log(validationResult);


let chordsMeth: ChordsMethod = new ChordsMethod();
let newtonMeth: NewtonMethod = new NewtonMethod();
let simpleIterationsMeth: SimpleIterationsMethod = new SimpleIterationsMethod();

let chordsMethResultTab: ChordsMethodResultTable = chordsMeth.calculate(input, thirdFuncCont);
let newtonMethResultTab: NewtonMethodResultTable = newtonMeth.calculate(inputWithInitApprox, thirdFuncCont);
let simpleIterationsMethResultTab: SimpleIterationsMethodResultTable = simpleIterationsMeth.calculate(inputWithInitApprox, thirdFuncCont);

console.log("Simple iterations methods res table : ", simpleIterationsMethResultTab);
console.log(" x = ", simpleIterationsMethResultTab.getFinalX());
console.log(" x = ", chordsMethResultTab.getFinalX());
console.log(" x = ", newtonMethResultTab.getFinalX());

console.log("*********************")
// console.log(MethodResultTableRenderer.render(chordsMethResultTab, 3, headings.chordsMethodResultTableHeadings))

console.log("Finished")
