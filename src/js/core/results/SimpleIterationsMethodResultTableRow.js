"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleIterationsMethodResultTableRow = void 0;
const MethodResultTableRow_1 = require("./MethodResultTableRow");
/**
 *
 */
class SimpleIterationsMethodResultTableRow extends MethodResultTableRow_1.MethodResultTableRow {
    constructor(iterationNumber, xn, xnNext, fiXnNext, fXnNext, differenceAbs) {
        super(iterationNumber);
        this.xn = xn;
        this.xnNext = xnNext;
        this.fiXnNext = fiXnNext;
        this.fXnNext = fXnNext;
        this.differenceAbs = differenceAbs;
    }
    [Symbol.iterator]() {
        return new Array(this.iterationNumber, this.xn, this.xnNext, this.fiXnNext, this.fXnNext, this.differenceAbs)[Symbol.iterator]();
    }
}
exports.SimpleIterationsMethodResultTableRow = SimpleIterationsMethodResultTableRow;
//# sourceMappingURL=SimpleIterationsMethodResultTableRow.js.map