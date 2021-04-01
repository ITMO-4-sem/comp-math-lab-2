import {Method} from "./Method";
import {FunctionContainer} from "../functions/FunctionContainer";
import {MethodInput} from "../inputs/MethodInput";
import {SimpleIterationsMethodResultTable} from "../results/SimpleIterationsMethodResultTable";
import {MethodInputWithInitApprox} from "../inputs/MethodInputWithInitApprox";
import {ValidationResult} from "../validators/ValidationResult";
import {FunctionInputValidator} from "../validators/FunctionInputValidator";
import {NewtonMethodResultTable} from "../results/NewtonMethodResultTable";
import {NewtonMethodResultTableRow} from "../results/NewtonMethodResultTableRow";
import {SimpleIterationsMethodResultTableRow} from "../results/SimpleIterationsMethodResultTableRow";

/**
 * Метод простых итераций.
 */
export class SimpleIterationsMethod extends Method {
    calculate(input: MethodInputWithInitApprox, fc: FunctionContainer): SimpleIterationsMethodResultTable {
        let inputValidationResult: ValidationResult = FunctionInputValidator.validate(input, fc);

        if ( inputValidationResult.isFailure() ) {
            throw new Error( inputValidationResult.message );
        }

        let resultTable: SimpleIterationsMethodResultTable = new SimpleIterationsMethodResultTable();

        let epsilon: number = input.getAccuracy();

        let xnPrev: number;
        let xn: number = input.getInitApprox();
        let fiXn: number;
        let fXn: number;
        let fiXnPrev: number;

        let diffAbs: number | null = null; // By default there were no 'previous x'.

        let iterationNumber: number = -1;

        do {
            iterationNumber++;

            xnPrev = xn; // Saves the previous 'xn' value

            fiXnPrev = fc.calcFI(xnPrev);

            xn = fiXnPrev;

            if ( xn < input.getA() || xn > input.getB() ) {
                // "The iteration process doesn't coverage. Please, specify a different interval [a; b]. " +
                //                     "Probably, it's not possible to calculate the root using the 'Method of simple iterations' with the set 'fi' function."
                throw new Error("Итерационный процесс не сходится. Пожалуйста, укажите другой интервал [a; b]. " +
                    "Возможно, невозможно найти корень методом 'Простых итераций' с выбранной функцией 'fi'.")
            }

            fiXn = fc.calcFI(xn);
            fXn = fc.calc(xn);

            if ( xn != null && xnPrev != null ) {
                diffAbs = Math.abs(xn - xnPrev);
            }

            resultTable.addRow(new SimpleIterationsMethodResultTableRow(
                iterationNumber,
                xnPrev,
                xn,
                fiXn,
                fXn,
                diffAbs,
            ));

            // console.log(`a = ${input.getA()}, b = ${input.getB()}`)


        } while ( ! this.isAccuracyProficient(xn, xnPrev, epsilon));


        return resultTable;
    }

}