import {MethodResultTable} from "./MethodResultTable";
import {ChordsMethodResultTableRow} from "./ChordsMethodResultTableRow";

/**
 *
 */
export class ChordsMethodResultTable extends MethodResultTable {


    getTable(): Array<ChordsMethodResultTableRow> {
        return super.getTable() as Array<ChordsMethodResultTableRow>;
    }

    getRowByIterationNumber(itNumber: number): ChordsMethodResultTableRow | null {
        return super.getRowByIterationNumber(itNumber) as ChordsMethodResultTableRow;
    }

    public getFinalX(): number {
        return (this.table[this.table.length - 1] as ChordsMethodResultTableRow).x;
    }

    public getFinalXFunc(): number {
        return (this.table[this.table.length - 1] as ChordsMethodResultTableRow).fX;
    }
}