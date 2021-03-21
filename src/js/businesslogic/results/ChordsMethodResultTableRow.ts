import {MethodResultTableRow} from "./MethodResultTableRow";

/**
 *
 */
export class ChordsMethodResultTableRow extends MethodResultTableRow {

    public readonly a: number;
    public readonly b: number;
    public readonly x: number;
    public readonly fA: number;
    public readonly fB: number;
    public readonly fX: number;
    public readonly differenceAbs: number;


    constructor(numberOfIteration: number, a: number, b: number, x: number, fA: number, fB: number, fX: number, diffAbs: number) {
        super(numberOfIteration);
        this.a = a;
        this.b = b;
        this.x = x;
        this.fA = fA;
        this.fB = fB;
        this.fX = fX;
        this.differenceAbs = diffAbs;
    }
}