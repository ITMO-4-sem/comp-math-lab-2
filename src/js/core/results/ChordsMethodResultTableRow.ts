import {MethodResultTableRow} from "./MethodResultTableRow";

/**
 *
 */
export class ChordsMethodResultTableRow extends MethodResultTableRow implements Iterable<any> {

    public readonly a: number;
    public readonly b: number;
    public readonly x: number;
    public readonly fA: number;
    public readonly fB: number;
    public readonly fX: number;
    public readonly differenceAbs: number | null;


    constructor(iterationNumber: number, a: number, b: number, x: number, fA: number, fB: number, fX: number, diffAbs: number | null) {
        super(iterationNumber);
        this.a = a;
        this.b = b;
        this.x = x;
        this.fA = fA;
        this.fB = fB;
        this.fX = fX;
        this.differenceAbs = diffAbs;
    }

    [Symbol.iterator](): Iterator<any> {
        return new Array<any>(this.iterationNumber, this.a, this.b, this.x, this.fA, this.fB, this.fX, this.differenceAbs)[Symbol.iterator]();
    }

    // public getFieldsAsObj(): Object {
    //     return {
    //         iterNum: this.iterationNumber,
    //         a: this.a,
    //         b: this.b,
    //         x: this.x,
    //         fA: this.fA,
    //         fB: this.fB,
    //         fX: this.fX,
    //         diffAbs: this.differenceAbs
    //     };
    // }

    // getFieldsAsObj(): Array<any> {
    //     return new Array<any>(this.a, this.b, this.x, this.fA, this.fB, this.fX, this.differenceAbs);
    // }



}