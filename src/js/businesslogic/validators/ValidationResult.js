"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationResult = void 0;
const ValidationResultStatus_1 = require("./ValidationResultStatus");
/**
 *
 */
class ValidationResult {
    constructor(status, message = ValidationResult.MESSAGE_DEFAULT) {
        this.status = status;
        this.message = message;
    }
    isSuccess() {
        return this.status == ValidationResultStatus_1.ValidationResultStatus.OK;
    }
    isFailure() {
        return this.status == ValidationResultStatus_1.ValidationResultStatus.FAIL;
    }
}
exports.ValidationResult = ValidationResult;
ValidationResult.MESSAGE_DEFAULT = "";
//# sourceMappingURL=ValidationResult.js.map