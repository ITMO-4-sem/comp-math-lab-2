import {MethodInput} from "./MethodInput";

/**
 *
 */
export class MethodInputWithInitApprox extends MethodInput {

    private readonly initialApprox: number;


    constructor(a: number, b: number, initialApprox: number, accuracy: number = MethodInput.ACCURACY_DEFAULT) {
        super(a, b, accuracy);

        if ( (initialApprox < a) || (initialApprox > b) )
            // 'Initial approximation' must be between the 'a', a left border, and the 'b', a right border.
            throw new Error("'Начальное приближение' должно быть между 'a', левой границей, и 'b', правой границей.");

        this.initialApprox = initialApprox;
    }

    public getInitApprox(): number {
        return this.initialApprox;
    }
}