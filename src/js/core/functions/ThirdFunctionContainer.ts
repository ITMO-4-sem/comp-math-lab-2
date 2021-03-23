import {FunctionContainer} from "./FunctionContainer";

/**
 *
 */
export class ThirdFunctionContainer implements FunctionContainer {

    getFunctionRepresentation(): string {
        return "third function MMm";
    }

    calc(x: number): number {
        return 0
    }

    calcFirstDerivative(x: number): number {
        return 0
    }

    calcSecondDerivative(x: number): number {
        return 0
    }

    calcFI(x: number): number {
        return 0;
    }




}