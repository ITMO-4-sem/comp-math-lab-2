import {ValidationResultStatus} from "./ValidationResultStatus";

/**
 *
 */
export class ValidationResult {

    public readonly status: ValidationResultStatus;
    public readonly message: string;

    public static readonly MESSAGE_DEFAULT = "";

    constructor(status: ValidationResultStatus, message: string = ValidationResult.MESSAGE_DEFAULT) {
        this.status = status;
        this.message = message;
    }

    public isSuccess(): boolean {
        return this.status == ValidationResultStatus.OK;
    }

    public isFailure(): boolean {
        return this.status == ValidationResultStatus.FAIL;
    }
}