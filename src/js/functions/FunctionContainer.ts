interface FunctionContainer {
    getFunctionRepresentation(): string;
    calc( x: number ): number;
    calcFirstDerivative(x: number): number;
    calcSecondDerivative(x: number): number;
}