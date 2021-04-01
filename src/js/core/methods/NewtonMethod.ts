import {Method} from "./Method";
import {MethodInputWithInitApprox} from "../inputs/MethodInputWithInitApprox";
import {FunctionContainer} from "../functions/FunctionContainer";
import {NewtonMethodResultTable} from "../results/NewtonMethodResultTable";
import {ValidationResult} from "../validators/ValidationResult";
import {FunctionInputValidator} from "../validators/FunctionInputValidator";
import {ChordsMethodResultTable} from "../results/ChordsMethodResultTable";
import {ChordsMethodResultTableRow} from "../results/ChordsMethodResultTableRow";
import {NewtonMethodResultTableRow} from "../results/NewtonMethodResultTableRow";

/**
 * Метод Ньютона.
 */
export class NewtonMethod extends Method {
    calculate(input: MethodInputWithInitApprox, fc: FunctionContainer): NewtonMethodResultTable {

        let inputValidationResult: ValidationResult = FunctionInputValidator.validate(input, fc);

        if ( inputValidationResult.isFailure() ) {
            throw new Error( inputValidationResult.message );
        }

        let resultTable: NewtonMethodResultTable = new NewtonMethodResultTable();

        let epsilon: number = input.getAccuracy();

        let xnPrev: number;
        let xn: number = input.getInitApprox();
        let fXnPrev: number;
        let fXnPrevFirstDer: number;
        let fXn: number;

        let diffAbs: number | null = null; // By default there were no 'previous x'.

        let iterationNumber: number = -1;

        do {
            iterationNumber++;

            xnPrev = xn; // Saves the previous 'xn' value

            fXnPrev = fc.calc(xnPrev);
            fXnPrevFirstDer = fc.calcFirstDerivative(xnPrev);

            xn = xnPrev - fXnPrev / fXnPrevFirstDer;

            if ( xn < input.getA() || xn > input.getB() ) {

                throw new Error("Итерационный процесс не сходится. Пожалуйста, укажите другое начальное приближение.")
            }

            fXn = fc.calc(xn);

            if ( xn != null && xnPrev != null ) {
                diffAbs = Math.abs(xn - xnPrev);
            }

            resultTable.addRow(new NewtonMethodResultTableRow(
                iterationNumber,
                xnPrev,
                fXnPrev,
                fXnPrevFirstDer,
                xn,
                fXn,
                diffAbs,
            ));


        } while ( ! this.isAccuracyProficient(xn, xnPrev, epsilon));


        return resultTable;
    }

}