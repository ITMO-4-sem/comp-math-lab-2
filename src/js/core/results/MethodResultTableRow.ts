/**
 *
 */
export abstract class MethodResultTableRow implements Iterable<any>{

    public readonly iterationNumber: number;

    constructor(iterationNumber: number) {
        this.iterationNumber = iterationNumber;
    }

    abstract [Symbol.iterator](): Iterator<any>;

}