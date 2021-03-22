import {FunctionInputValidator} from "./businesslogic/validators/FunctionInputValidator";
import {FirstFunctionContainer} from "./businesslogic/functions/FirstFunctionContainer";
import {MethodInput} from "./businesslogic/inputs/MethodInput";
import {ValidationResult} from "./businesslogic/validators/ValidationResult";
import {ChordsMethod} from "./businesslogic/methods/ChordsMethod";
import {ChordsMethodResultTable} from "./businesslogic/results/ChordsMethodResultTable";
import {ChordsMethodResultTableRow} from "./businesslogic/results/ChordsMethodResultTableRow";
import {Renderer} from "./ui/renderers/Renderer";
import headings from "./ui/renderers/tablesheadings.config";


console.log("kek");

// let p: P = new P(null);


let firstFuncCont: FirstFunctionContainer = new FirstFunctionContainer();
let input: MethodInput = new MethodInput(-2, -1, 0.0001);
// let validationResult: ValidationResult = FunctionInputValidator.validate(input,  firstFuncCont);
// console.log(validationResult);


let chordsMeth: ChordsMethod = new ChordsMethod();

let chordsMethResultTab: ChordsMethodResultTable = chordsMeth.calculate(input, firstFuncCont);

console.log("Chords methods res table : ", chordsMethResultTab);
console.log("Chords methods res table : ", chordsMethResultTab);
console.log(" x = ", chordsMethResultTab.getFinalX());

console.log("*********************")
console.log(Renderer.render(chordsMethResultTab, 3, headings.chordsMethodResultTableHeadings))

console.log("Finished")
