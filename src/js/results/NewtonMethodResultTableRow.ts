class NewtonMethodResultTableRow extends MethodResultTableRow {

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
}