import {FunctionInputValidator} from "./businesslogic/validators/FunctionInputValidator";
import {FirstFunctionContainer} from "./businesslogic/functions/FirstFunctionContainer";
import {MethodInput} from "./businesslogic/inputs/MethodInput";
import {ValidationResult} from "./businesslogic/validators/ValidationResult";


console.log("kek");

// let p: P = new P(null);


let firstFuncCont: FirstFunctionContainer = new FirstFunctionContainer();
let input: MethodInput = new MethodInput(-1, 6, 0.1);
let validationResult: ValidationResult = FunctionInputValidator.validate(input,  firstFuncCont);

console.log(validationResult)
console.log("Finished")