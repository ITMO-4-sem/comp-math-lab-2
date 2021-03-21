"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChordsMethodResultTableRow = void 0;
const MethodResultTableRow_1 = require("./MethodResultTableRow");
/**
 *
 */
class ChordsMethodResultTableRow extends MethodResultTableRow_1.MethodResultTableRow {
    constructor(numberOfIteration, a, b, x, fA, fB, fX, diffAbs) {
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
exports.ChordsMethodResultTableRow = ChordsMethodResultTableRow;
//# sourceMappingURL=ChordsMethodResultTableRow.js.map