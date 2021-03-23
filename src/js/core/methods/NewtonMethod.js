"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewtonMethod = void 0;
const Method_1 = require("./Method");
const NewtonMethodResultTable_1 = require("../results/NewtonMethodResultTable");
const FunctionInputValidator_1 = require("../validators/FunctionInputValidator");
const NewtonMethodResultTableRow_1 = require("../results/NewtonMethodResultTableRow");
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
        let xn = input.getInitApprox();
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