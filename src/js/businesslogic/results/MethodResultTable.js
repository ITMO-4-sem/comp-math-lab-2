"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodResultTable = void 0;
/**
 *
 */
class MethodResultTable {
    constructor() {
        this.table = new Array();
    }
    addRow(row) {
        this.table.push(row);
        this.table.sort((oneRow, anotherRow) => {
            return oneRow.iterationNumber - anotherRow.iterationNumber;
        });
    }
    getTable() {
        return this.table;
    }
    getRowByIterationNumber(itNumber) {
        for (let row of this.table) {
            if (row.iterationNumber == itNumber) {
                return row;
            }
        }
        return null;
    }
}
exports.MethodResultTable = MethodResultTable;
//# sourceMappingURL=MethodResultTable.js.map