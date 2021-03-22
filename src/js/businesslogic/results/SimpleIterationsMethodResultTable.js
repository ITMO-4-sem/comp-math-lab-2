"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleIterationsMethodResultTable = void 0;
const MethodResultTable_1 = require("./MethodResultTable");
/**
 *
 */
class SimpleIterationsMethodResultTable extends MethodResultTable_1.MethodResultTable {
    getTable() {
        return super.getTable();
    }
    getRowByIterationNumber(itNumber) {
        return super.getRowByIterationNumber(itNumber);
    }
    getFinalX() {
        return this.table[this.table.length - 1].xnNext;
    }
    getFinalXFunc() {
        return this.table[this.table.length - 1].fXnNext;
    }
}
exports.SimpleIterationsMethodResultTable = SimpleIterationsMethodResultTable;
//# sourceMappingURL=SimpleIterationsMethodResultTable.js.map