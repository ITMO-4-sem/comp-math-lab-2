import {MethodInput} from "../inputs/MethodInput";
import {FunctionContainer} from "../functions/FunctionContainer";

/**
 *
 */
export interface Method {

    calculate(input: MethodInput, funcCont: FunctionContainer): MethodResultTable;

}