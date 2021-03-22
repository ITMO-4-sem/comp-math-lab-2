import {Method} from "./Method";
import {MethodInput} from "../inputs/MethodInput";
import {FunctionContainer} from "../functions/FunctionContainer";
import {ChordsMethodResultTable} from "../results/ChordsMethodResultTable";
import {ChordsMethodResultTableRow} from "../results/ChordsMethodResultTableRow";
import {FunctionInputValidator} from "../validators/FunctionInputValidator";
import {ValidationResult} from "../validators/ValidationResult";

/**
 * Метод хорд
 */
export class ChordsMethod implements Method {

    calculate(input: MethodInput, fc: FunctionContainer): ChordsMethodResultTable {

        let inputValidationResult: ValidationResult = FunctionInputValidator.validate(input, fc);

        if ( inputValidationResult.isFailure() ) {
            throw new Error( inputValidationResult.message );
        }

        let resultTable: ChordsMethodResultTable = new ChordsMethodResultTable();

        let a = input.getA();
        let b = input.getB();

        let epsilon: number = input.getAccuracy();

        let xnPrev: number | null = null;
        let xn: number | null = null;
        let fA: number;
        let fB: number;
        let fX: number;
        let diffAbs: number | null = null; // By default there were no 'previous x'.

        let iterationNumber: number = -1;

        do {
            iterationNumber++;

            xnPrev = xn; // Saves the previous 'xn' value

            fA = fc.calc(a);
            fB = fc.calc(b);
            xn = a - (b - a) / (fB - fA) * fA;
            fX = fc.calc(xn);

            if ( xnPrev != null ) {
                diffAbs = Math.abs(xn - xnPrev);
            }

            resultTable.addRow(new ChordsMethodResultTableRow(
                iterationNumber,
                a,
                b,
                xn,
                fA,
                fB,
                fX,
                diffAbs,
            ));

            if ( fc.calc(a) * fc.calc(xn) < 0 ) { // Function has different signs on the interval [a; xn]
                b = xn;
            } else if (fc.calc(xn) * fc.calc(b) < 0 ) { // Function has different signs on the interval [xn; b]
                a = xn;
            } else {
                throw new Error(`Function has the same signs on the ends of both intervals: '[${a}; ${xn}]' and '[${xn}; ${b}]'. Most probably there is no or more then one root in these intervals.`);
            }

        } while ( ! this.isAccuracyProficient(xn, xnPrev, epsilon));


        return resultTable;
    }


    private isAccuracyProficient(xn: number, xnPrev: number | null, accuracy: number): boolean {
        if ( xnPrev == null ) {
            return false;
        }
        return ( Math.abs(xn - xnPrev) <= accuracy );
    }

}