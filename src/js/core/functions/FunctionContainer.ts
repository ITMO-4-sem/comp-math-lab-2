/**
 *
 */
export interface FunctionContainer {
    getFunctionRepresentation(): string;
    calc( x: number ): number;
    // calcFI( x: number, alpha: number ): number;
    calcFI( x: number): number;
    calcFirstDerivative(x: number): number;
    calcSecondDerivative(x: number): number;
}