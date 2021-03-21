import {Method} from "./Method";
import {FunctionContainer} from "../functions/FunctionContainer";
import {MethodInput} from "../inputs/MethodInput";
import {SimpleIterationMethodResultTable} from "../results/SimpleIterationMethodResultTable";

/**
 * Метод простых итераций.
 */
class SimpleIterationsMethod implements Method {
    calculate(input: MethodInput, funcCont: FunctionContainer): SimpleIterationMethodResultTable {
        throw new Error("No implementation yet.")
        return new SimpleIterationMethodResultTable();
    }

}