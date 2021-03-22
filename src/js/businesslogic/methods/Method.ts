import {MethodInput} from "../inputs/MethodInput";
import {FunctionContainer} from "../functions/FunctionContainer";
import {MethodResultTable} from "../results/MethodResultTable";

/**
 *
 */
export interface Method {

    calculate(input: MethodInput, funcCont: FunctionContainer): MethodResultTable;

}