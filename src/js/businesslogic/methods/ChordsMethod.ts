import {Method} from "./Method";
import {MethodInput} from "../inputs/MethodInput";
import {FunctionContainer} from "../functions/FunctionContainer";
import {ChordsMethodResultTable} from "../results/ChordsMethodResultTable";

/**
 * Метод хорд
 */
class ChordsMethod implements Method {

    calculate(input: MethodInput, funcCont: FunctionContainer): ChordsMethodResultTable {
        throw new Error("No implementation yet.")
        return new ChordsMethodResultTable();
    }

}