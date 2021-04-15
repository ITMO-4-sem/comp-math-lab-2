"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionInputValidator = void 0;
const validator_config_1 = __importDefault(require("./validator.config"));
const ValidationResult_1 = require("./ValidationResult");
const ValidationResultStatus_1 = require("./ValidationResultStatus");
/**
 *
 */
class FunctionInputValidator {
    static validate(input, funcCont) {
        return this.hasUniqueRoot(input, funcCont);
    }
    static hasUniqueRoot(input, fc) {
        if (fc.calc(input.getA()) * fc.calc(input.getB()) > 0) // The function values on the end of isolation interval are of the same sign.
            // "The specified isolation interval has 0 or even number of roots. The root must be unique."
            return new ValidationResult_1.ValidationResult(ValidationResultStatus_1.ValidationResultStatus.FAIL, "Указанный интервал содержит ноль или четное число корней. Корень должен быть единственным.");
        let rootsNumberCounter = 0;
        let step = (input.getB() - input.getA()) / validator_config_1.default.divisionsNumber;
        let prevSign = this.getSign(fc.calc(input.getA()));
        let sign;
        for (let x = input.getA(); x <= input.getB(); x += step) {
            sign = this.getSign(fc.calc(x));
            if (prevSign * sign < 0) { // The function has changed its sign.
                rootsNumberCounter++;
                prevSign = sign;
            }
        }
        if (fc.calc(input.getB()) == 0) { // Is useful as probably 'a += step * divisionsNumber' != 'b' because of imperfections in roundings.
            rootsNumberCounter++;
        }
        if (rootsNumberCounter != 1) {
            // "The specified isolation interval has more than one root. The root must be unique."
            return new ValidationResult_1.ValidationResult(ValidationResultStatus_1.ValidationResultStatus.FAIL, "Указанный интервал изоляции содержит больше одного корня. Корень должен быть единственным.");
        }
        return new ValidationResult_1.ValidationResult(ValidationResultStatus_1.ValidationResultStatus.OK);
    }
    static getSign(x) {
        if (x < 0) {
            return -1;
        }
        else if (x > 0) {
            return 1;
        }
        else {
            return 0;
        }
    }
}
exports.FunctionInputValidator = FunctionInputValidator;
//# sourceMappingURL=FunctionInputValidator.js.map