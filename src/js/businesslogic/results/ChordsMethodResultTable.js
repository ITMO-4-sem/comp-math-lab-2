"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChordsMethodResultTable = void 0;
const MethodResultTable_1 = require("./MethodResultTable");
/**
 *
 */
class ChordsMethodResultTable extends MethodResultTable_1.MethodResultTable {
    getTable() {
        return super.getTable();
    }
    getRowByIterationNumber(itNumber) {
        return super.getRowByIterationNumber(itNumber);
    }
    getFinalX() {
        return this.table[this.table.length - 1].x;
    }
    getFinalXFunc() {
        return this.table[this.table.length - 1].fX;
    }
}
exports.ChordsMethodResultTable = ChordsMethodResultTable;
//# sourceMappingURL=ChordsMethodResultTable.js.map