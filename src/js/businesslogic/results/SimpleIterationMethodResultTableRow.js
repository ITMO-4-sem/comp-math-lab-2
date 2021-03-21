"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleIterationMethodResultTableRow = void 0;
const MethodResultTableRow_1 = require("./MethodResultTableRow");
/**
 *
 */
class SimpleIterationMethodResultTableRow extends MethodResultTableRow_1.MethodResultTableRow {
    constructor(iterationNumber, xn, xnNext, fiXnNext, fXnNext, differenceAbs) {
        super(iterationNumber);
        this.xn = xn;
        this.xnNext = xnNext;
        this.fiXnNext = fiXnNext;
        this.fXnNext = fXnNext;
        this.differenceAbs = differenceAbs;
    }
}
exports.SimpleIterationMethodResultTableRow = SimpleIterationMethodResultTableRow;
//# sourceMappingURL=SimpleIterationMethodResultTableRow.js.map