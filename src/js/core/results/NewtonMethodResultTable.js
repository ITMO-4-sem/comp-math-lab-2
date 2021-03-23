"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewtonMethodResultTable = void 0;
const MethodResultTable_1 = require("./MethodResultTable");
/**
 *
 */
class NewtonMethodResultTable extends MethodResultTable_1.MethodResultTable {
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
exports.NewtonMethodResultTable = NewtonMethodResultTable;
//# sourceMappingURL=NewtonMethodResultTable.js.map