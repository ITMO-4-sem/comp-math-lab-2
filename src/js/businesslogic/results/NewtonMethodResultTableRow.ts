import {MethodResultTableRow} from "./MethodResultTableRow";

/**
 *
 */
export class NewtonMethodResultTableRow extends MethodResultTableRow {

    public readonly xn: number;
    public readonly fXn: number;
    public readonly fFstDerXn: number;
    public readonly xnNext: number;
    public readonly fXnNext: number;
    public readonly differenceAbs: number;


    constructor(iterationNumber: number, xn: number, fXn: number, fFstDerXn: number, xnNext: number, fXnNext: number, differenceAbs: number) {
        super(iterationNumber);
        this.xn = xn;
        this.fXn = fXn;
        this.fFstDerXn = fFstDerXn;
        this.xnNext = xnNext;
        this.fXnNext = fXnNext;
        this.differenceAbs = differenceAbs;
    }


    [Symbol.iterator](): Iterator<any> {
        return new Array<any>(this.iterationNumber, this.xn, this.fXn, this.fFstDerXn, this.xnNext, this.fXnNext, this.differenceAbs)[Symbol.iterator]();
    }

}