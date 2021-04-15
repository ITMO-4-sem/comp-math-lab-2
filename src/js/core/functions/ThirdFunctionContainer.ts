import {FunctionContainer} from "./FunctionContainer";

/**
 *
 */
export class ThirdFunctionContainer implements FunctionContainer {

    getFunctionRepresentation(): string {
        return "-2^x - x - 2";
    }

    calc(x: number): number {
        return (
            - Math.pow(2, x) - x - 2
        );
    }

    calcFirstDerivative(x: number): number {
        return (
            - Math.pow(2, x) * Math.log(2) - 1
        );
    }

    calcSecondDerivative(x: number): number {
        return (
            Math.pow(2, x) + Math.pow(Math.log(2), 2)
        )
    }

    calcFI(x: number): number {
        return (
            - Math.pow(2, x) - 2
        );
    }

    // calcFI(x: number, alpha: number): number {
    //     return (
    //         x + alpha * this.calc(x)
    //     )
    // }




}