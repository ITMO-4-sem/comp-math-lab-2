"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleIterationsMethod = void 0;
const Method_1 = require("./Method");
const SimpleIterationsMethodResultTable_1 = require("../results/SimpleIterationsMethodResultTable");
const FunctionInputValidator_1 = require("../validators/FunctionInputValidator");
const SimpleIterationsMethodResultTableRow_1 = require("../results/SimpleIterationsMethodResultTableRow");
/**
 * Метод простых итераций.
 */
class SimpleIterationsMethod extends Method_1.Method {
    calculate(input, fc) {
        let inputValidationResult = FunctionInputValidator_1.FunctionInputValidator.validate(input, fc);
        if (inputValidationResult.isFailure()) {
            throw new Error(inputValidationResult.message);
        }
        let resultTable = new SimpleIterationsMethodResultTable_1.SimpleIterationsMethodResultTable();
        let epsilon = input.getAccuracy();
        let xnPrev;
        let xn = input.getInitApprox();
        let fiXn;
        let fXn;
        let fiXnPrev;
        let diffAbs = null; // By default there were no 'previous x'.
        let iterationNumber = -1;
        do {
            iterationNumber++;
            xnPrev = xn; // Saves the previous 'xn' value
            fiXnPrev = fc.calcFI(xnPrev);
            xn = fiXnPrev;
            fiXn = fc.calcFI(xn);
            fXn = fc.calc(xn);
            if (xn != null && xnPrev != null) {
                diffAbs = Math.abs(xn - xnPrev);
            }
            resultTable.addRow(new SimpleIterationsMethodResultTableRow_1.SimpleIterationsMethodResultTableRow(iterationNumber, xnPrev, xn, fiXn, fXn, diffAbs));
            console.log(`a = ${input.getA()}, b = ${input.getB()}`);
        } while (!this.isAccuracyProficient(xn, xnPrev, epsilon));
        return resultTable;
    }
}
exports.SimpleIterationsMethod = SimpleIterationsMethod;
//# sourceMappingURL=SimpleIterationsMethod.js.map