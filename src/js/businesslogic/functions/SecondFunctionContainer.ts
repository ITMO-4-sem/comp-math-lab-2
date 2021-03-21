import {FunctionContainer} from "./FunctionContainer";

/**
 *
 */
export class SecondFunctionContainer implements FunctionContainer {

    getFunctionRepresentation(): string {
        return "";
    }

    calc(x: number): number {
        return 0;
    }

    calcFirstDerivative(x: number): number {
        return 0;
    }

    calcSecondDerivative(x: number): number {
        return 0;
    }

    calcFI(x: number): number {
        return 0;
    }


}