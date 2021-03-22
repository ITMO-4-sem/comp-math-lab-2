"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewtonMethodResultTableRow = void 0;
const MethodResultTableRow_1 = require("./MethodResultTableRow");
/**
 *
 */
class NewtonMethodResultTableRow extends MethodResultTableRow_1.MethodResultTableRow {
    constructor(iterationNumber, xn, fXn, fFstDerXn, xnNext, fXnNext, differenceAbs) {
        super(iterationNumber);
        this.xn = xn;
        this.fXn = fXn;
        this.fFstDerXn = fFstDerXn;
        this.xnNext = xnNext;
        this.fXnNext = fXnNext;
        this.differenceAbs = differenceAbs;
    }
    [Symbol.iterator]() {
        return new Array(this.iterationNumber, this.xn, this.fXn, this.fFstDerXn, this.xnNext, this.fXnNext, this.differenceAbs)[Symbol.iterator]();
    }
}
exports.NewtonMethodResultTableRow = NewtonMethodResultTableRow;
//# sourceMappingURL=NewtonMethodResultTableRow.js.map