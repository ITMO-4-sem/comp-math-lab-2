"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChordsMethodResultTableRow = void 0;
const MethodResultTableRow_1 = require("./MethodResultTableRow");
/**
 *
 */
class ChordsMethodResultTableRow extends MethodResultTableRow_1.MethodResultTableRow {
    constructor(iterationNumber, a, b, x, fA, fB, fX, diffAbs) {
        super(iterationNumber);
        this.a = a;
        this.b = b;
        this.x = x;
        this.fA = fA;
        this.fB = fB;
        this.fX = fX;
        this.differenceAbs = diffAbs;
    }
    [Symbol.iterator]() {
        return new Array(this.iterationNumber, this.a, this.b, this.x, this.fA, this.fB, this.fX, this.differenceAbs)[Symbol.iterator]();
    }
}
exports.ChordsMethodResultTableRow = ChordsMethodResultTableRow;
//# sourceMappingURL=ChordsMethodResultTableRow.js.map