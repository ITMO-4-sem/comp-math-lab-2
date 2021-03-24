"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThirdFunctionContainer = void 0;
/**
 *
 */
class ThirdFunctionContainer {
    getFunctionRepresentation() {
        return "-2^x - x - 2";
    }
    calc(x) {
        return (-Math.pow(2, x) - x - 2);
    }
    calcFirstDerivative(x) {
        return (-Math.pow(2, x) * Math.log(2) - 1);
    }
    calcSecondDerivative(x) {
        return (Math.pow(2, x) + Math.pow(Math.log(2), 2));
    }
    calcFI(x) {
        return (-Math.pow(2, x) - 2);
    }
}
exports.ThirdFunctionContainer = ThirdFunctionContainer;
//# sourceMappingURL=ThirdFunctionContainer.js.map