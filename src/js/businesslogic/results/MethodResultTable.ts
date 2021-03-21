import {MethodResultTableRow} from "./MethodResultTableRow";

/**
 *
 */
export abstract class MethodResultTable {

    abstract getFinalX(): number;
    abstract  getFinalXFunc(): number;

    protected table: Array<MethodResultTableRow> = new Array<MethodResultTableRow>();


    constructor() {}


    public addRow(row: MethodResultTableRow) {
        this.table.push(row);
        this.table.sort( (oneRow, anotherRow) => {
            return oneRow.iterationNumber - anotherRow.iterationNumber;
        } )
    }

    public getTable(): Array<MethodResultTableRow> {
        return this.table;
    }

    public getRowByIterationNumber( itNumber: number): MethodResultTableRow | null {
        for (let row of this.table ) {
            if (row.iterationNumber == itNumber) {
                return row;
            }
        }

        return null;
    }

}