class SimpleIterationMethodResultTableRow extends MethodResultTableRow {

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
}