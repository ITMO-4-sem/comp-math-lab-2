import {FunctionContainer} from "./FunctionContainer";

/**
 *
 */
export class FirstFunctionContainer implements FunctionContainer {

    getFunctionRepresentation(): string {
        return "-2.4 x^3  +  1.27 x^2  +  8.63 x  +  2.31";
    }

    calc(x: number): number {
        return (
            ( -2.4 * Math.pow(x, 3) ) + ( 1.27 * Math.pow(x, 2) ) + ( 8.63 * x ) + 2.31
        );
    }

    calcFirstDerivative(x: number): number {
        return (
            ( -7.2 * Math.pow(x, 2) ) + ( 2.54 * x ) + 8.63
        );
    }

    calcSecondDerivative(x: number): number {
        return (
            ( -14.4 * x ) + 2.54
        );
    }

    calcFI(x: number): number {
        throw new Error("No impl;")
        return 0;
    }




}