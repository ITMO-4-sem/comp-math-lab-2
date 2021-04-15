import config from "./validator.config";
import {MethodInput} from "../inputs/MethodInput";
import {FunctionContainer} from "../functions/FunctionContainer";
import {ValidationResult} from "./ValidationResult";
import {ValidationResultStatus} from "./ValidationResultStatus";

/**
 *
 */
export class FunctionInputValidator {

    public static validate(input: MethodInput, funcCont: FunctionContainer): ValidationResult {
        return this.hasUniqueRoot(input, funcCont);
    }


    private static hasUniqueRoot(input: MethodInput, fc: FunctionContainer): ValidationResult {

        if ( fc.calc(input.getA()) * fc.calc(input.getB()) > 0 ) // The function values on the end of isolation interval are of the same sign.
            // "The specified isolation interval has 0 or even number of roots. The root must be unique."
            return new ValidationResult(ValidationResultStatus.FAIL, "Указанный интервал содержит ноль или четное число корней. Корень должен быть единственным.");

        let rootsNumberCounter: number = 0;
        let step: number = (input.getB() - input.getA()) / config.divisionsNumber;

        let prevSign = this.getSign(fc.calc(input.getA()));
        let sign;

        for ( let x = input.getA(); x <= input.getB(); x+= step) {
            sign = this.getSign(fc.calc(x));
            if ( prevSign * sign < 0 ) { // The function has changed its sign.
                rootsNumberCounter++;
                prevSign = sign;
            }
        }

        if ( fc.calc(input.getB()) == 0 ) { // Is useful as probably 'a += step * divisionsNumber' != 'b' because of imperfections in roundings.
            rootsNumberCounter++;
        }

        if ( rootsNumberCounter != 1 ) {
            // "The specified isolation interval has more than one root. The root must be unique."
            return new ValidationResult(ValidationResultStatus.FAIL, "Указанный интервал изоляции содержит больше одного корня. Корень должен быть единственным.");
        }

        return new ValidationResult(ValidationResultStatus.OK);

    }

    private static getSign(x: number): Sign {
        if ( x < 0 ) {
            return -1;
        } else if ( x > 0) {
            return 1;
        } else {
            return 0;
        }
    }
}

type Sign = -1 | 1 | 0;