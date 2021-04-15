"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewtonMethod = void 0;
const Method_1 = require("./Method");
const NewtonMethodResultTable_1 = require("../results/NewtonMethodResultTable");
const FunctionInputValidator_1 = require("../validators/FunctionInputValidator");
const NewtonMethodResultTableRow_1 = require("../results/NewtonMethodResultTableRow");
const method_config_js_1 = __importDefault(require("./method.config.js"));
/**
 * Метод Ньютона.
 */
class NewtonMethod extends Method_1.Method {
    calculate(input, fc) {
        let inputValidationResult = FunctionInputValidator_1.FunctionInputValidator.validate(input, fc);
        if (inputValidationResult.isFailure()) {
            throw new Error(inputValidationResult.message);
        }
        let resultTable = new NewtonMethodResultTable_1.NewtonMethodResultTable();
        let epsilon = input.getAccuracy();
        let xnPrev;
        let xn = input.getA();
        let tmp;
        for (let x = input.getA(); x <= input.getB(); x += method_config_js_1.default.step) {
            tmp = fc.calc(x) * fc.calcSecondDerivative(x);
            if (tmp > 0) {
                xn = x;
                // console.log(`NewTon , x = ${xn}`)
                break;
            }
        }
        let fXnPrev;
        let fXnPrevFirstDer;
        let fXn;
        let diffAbs = null; // By default there were no 'previous x'.
        let iterationNumber = -1;
        do {
            iterationNumber++;
            xnPrev = xn; // Saves the previous 'xn' value
            fXnPrev = fc.calc(xnPrev);
            fXnPrevFirstDer = fc.calcFirstDerivative(xnPrev);
            xn = xnPrev - fXnPrev / fXnPrevFirstDer;
            if (xn < input.getA() || xn > input.getB()) {
                throw new Error("Итерационный процесс не сходится. Пожалуйста, укажите другой интервал.");
            }
            fXn = fc.calc(xn);
            if (xn != null && xnPrev != null) {
                diffAbs = Math.abs(xn - xnPrev);
            }
            resultTable.addRow(new NewtonMethodResultTableRow_1.NewtonMethodResultTableRow(iterationNumber, xnPrev, fXnPrev, fXnPrevFirstDer, xn, fXn, diffAbs));
        } while (!this.isAccuracyProficient(xn, xnPrev, epsilon));
        return resultTable;
    }
}
exports.NewtonMethod = NewtonMethod;
//# sourceMappingURL=NewtonMethod.js.map