import {Method} from "./Method";
import {NewtonMethodInput} from "../inputs/NewtonMethodInput";
import {FunctionContainer} from "../functions/FunctionContainer";
import {NewtonMethodResultTable} from "../results/NewtonMethodResultTable";

/**
 * Метод Ньютона.
 */
export class NewtonMethod implements Method {
    calculate(input: NewtonMethodInput, funcCont: FunctionContainer): NewtonMethodResultTable {
        throw new Error("No implementation yet.")
        return new NewtonMethodResultTable();
    }

}