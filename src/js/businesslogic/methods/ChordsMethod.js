"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChordsMethod = void 0;
const ChordsMethodResultTable_1 = require("../results/ChordsMethodResultTable");
const ChordsMethodResultTableRow_1 = require("../results/ChordsMethodResultTableRow");
const FunctionInputValidator_1 = require("../validators/FunctionInputValidator");
/**
 * Метод хорд
 */
class ChordsMethod {
    calculate(input, fc) {
        let inputValidationResult = FunctionInputValidator_1.FunctionInputValidator.validate(input, fc);
        if (inputValidationResult.isFailure()) {
            throw new Error(inputValidationResult.message);
        }
        let resultTable = new ChordsMethodResultTable_1.ChordsMethodResultTable();
        let a = input.getA();
        let b = input.getB();
        let epsilon = input.getAccuracy();
        let xnPrev = null;
        let xn = null;
        let fA;
        let fB;
        let fX;
        let diffAbs = null; // By default there were no 'previous x'.
        let iterationNumber = -1;
        do {
            iterationNumber++;
            xnPrev = xn; // Saves the previous 'xn' value
            fA = fc.calc(a);
            fB = fc.calc(b);
            xn = a - (b - a) / (fB - fA) * fA;
            fX = fc.calc(xn);
            if (xnPrev != null) {
                diffAbs = Math.abs(xn - xnPrev);
            }
            resultTable.addRow(new ChordsMethodResultTableRow_1.ChordsMethodResultTableRow(iterationNumber, a, b, xn, fA, fB, fX, diffAbs));
            if (fc.calc(a) * fc.calc(xn) < 0) { // Function has different signs on the interval [a; xn]
                b = xn;
            }
            else if (fc.calc(xn) * fc.calc(b) < 0) { // Function has different signs on the interval [xn; b]
                a = xn;
            }
            else {
                throw new Error(`Function has the same signs on the ends of both intervals: '[${a}; ${xn}]' and '[${xn}; ${b}]'. Most probably there is no or more then one root in these intervals.`);
            }
        } while (!this.isAccuracyProficient(xn, xnPrev, epsilon));
        return resultTable;
    }
    isAccuracyProficient(xn, xnPrev, accuracy) {
        if (xnPrev == null) {
            return false;
        }
        return (Math.abs(xn - xnPrev) <= accuracy);
    }
}
exports.ChordsMethod = ChordsMethod;
//# sourceMappingURL=ChordsMethod.js.map