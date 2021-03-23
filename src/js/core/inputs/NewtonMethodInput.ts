import {MethodInput} from "./MethodInput";

/**
 *
 */
export class NewtonMethodInput extends MethodInput {

    private readonly initialApprox: number;


    constructor(a: number, b: number, initialApprox: number, accuracy: number = MethodInput.ACCURACY_DEFAULT) {
        super(a, b, accuracy);

        if ( (initialApprox < a) || (initialApprox > b) )
            throw new Error("'Initial approximation' must be between the 'a', a left border, and the 'b', a right border.");

        this.initialApprox = initialApprox;
    }

    public getInitApprox(): number {
        return this.initialApprox;
    }
}