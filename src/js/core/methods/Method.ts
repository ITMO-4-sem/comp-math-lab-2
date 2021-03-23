import {MethodInput} from "../inputs/MethodInput";
import {FunctionContainer} from "../functions/FunctionContainer";
import {MethodResultTable} from "../results/MethodResultTable";

/**
 *
 */
export abstract class Method {

    abstract calculate(input: MethodInput, funcCont: FunctionContainer): MethodResultTable;

    protected isAccuracyProficient(xn: number, xnPrev: number | null, accuracy: number): boolean {
        if ( xnPrev == null ) {
            return false;
        }
        return ( Math.abs(xn - xnPrev) <= accuracy );
    }
}