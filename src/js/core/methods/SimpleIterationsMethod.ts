import {Method} from "./Method";
import {FunctionContainer} from "../functions/FunctionContainer";
import {MethodInput} from "../inputs/MethodInput";
import {SimpleIterationsMethodResultTable} from "../results/SimpleIterationsMethodResultTable";

/**
 * Метод простых итераций.
 */
export class SimpleIterationsMethod extends Method {
    calculate(input: MethodInput, funcCont: FunctionContainer): SimpleIterationsMethodResultTable {
        throw new Error("No implementation yet.")
        return new SimpleIterationsMethodResultTable();
    }

}