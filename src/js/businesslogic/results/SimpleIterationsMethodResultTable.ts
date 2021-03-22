import {SimpleIterationsMethodResultTableRow} from "./SimpleIterationsMethodResultTableRow";
import {MethodResultTable} from "./MethodResultTable";

/**
 *
 */
export class SimpleIterationsMethodResultTable extends MethodResultTable {

    getTable(): Array<SimpleIterationsMethodResultTableRow> {
        return super.getTable() as Array<SimpleIterationsMethodResultTableRow>;
    }

    getRowByIterationNumber(itNumber: number): SimpleIterationsMethodResultTableRow | null {
        return super.getRowByIterationNumber(itNumber) as SimpleIterationsMethodResultTableRow;
    }

    public getFinalX(): number {
        return (this.table[this.table.length - 1] as SimpleIterationsMethodResultTableRow).xnNext;
    }

    getFinalXFunc(): number {
        return (this.table[this.table.length - 1] as SimpleIterationsMethodResultTableRow).fXnNext;
    }
}