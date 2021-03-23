import {MethodResultTableRow} from "./MethodResultTableRow";

/**
 *
 */
export class SimpleIterationsMethodResultTableRow extends MethodResultTableRow {

    public readonly xn: number;
    public readonly xnNext: number;
    public readonly fiXnNext: number;
    public readonly fXnNext: number;
    public readonly differenceAbs: number;


    constructor(iterationNumber: number, xn: number, xnNext: number, fiXnNext: number, fXnNext: number, differenceAbs: number) {
        super(iterationNumber);
        this.xn = xn;
        this.xnNext = xnNext;
        this.fiXnNext = fiXnNext;
        this.fXnNext = fXnNext;
        this.differenceAbs = differenceAbs;
    }


    [Symbol.iterator](): Iterator<any> {
        return new Array<any>(this.iterationNumber, this.xn, this.xnNext, this.fiXnNext, this.fXnNext, this.differenceAbs)[Symbol.iterator]();
    }

}