import {SimpleIterationMethodResultTableRow} from "./SimpleIterationMethodResultTableRow";
import {MethodResultTable} from "./MethodResultTable";

/**
 *
 */
export class SimpleIterationMethodResultTable extends MethodResultTable {

    getTable(): Array<SimpleIterationMethodResultTableRow> {
        return super.getTable() as Array<SimpleIterationMethodResultTableRow>;
    }

    getRowByIterationNumber(itNumber: number): SimpleIterationMethodResultTableRow | null {
        return super.getRowByIterationNumber(itNumber) as SimpleIterationMethodResultTableRow;
    }

    public getFinalX(): number {
        return (this.table[this.table.length - 1] as SimpleIterationMethodResultTableRow).xnNext;
    }

    getFinalXFunc(): number {
        return (this.table[this.table.length - 1] as SimpleIterationMethodResultTableRow).fXnNext;
    }
}