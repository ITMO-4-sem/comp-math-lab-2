class NewtonMethodResultTable extends MethodResultTable {

    getTable(): Array<NewtonMethodResultTableRow> {
        return super.getTable() as Array<NewtonMethodResultTableRow>;
    }

    getRowByIterationNumber(itNumber: number): NewtonMethodResultTableRow | null {
        return super.getRowByIterationNumber(itNumber) as NewtonMethodResultTableRow;
    }

    public getFinalX(): number {
        return (this.table[this.table.length - 1] as NewtonMethodResultTableRow).xnNext;
    }

    getFinalXFunc(): number {
        return (this.table[this.table.length - 1] as NewtonMethodResultTableRow).fXnNext;
    }
}
