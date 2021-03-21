/**
 *
 */
export abstract class MethodResultTableRow {

    public readonly iterationNumber: number;

    constructor(iterationNumber: number) {
        this.iterationNumber = iterationNumber;
    }
}