"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecondFunctionContainer = void 0;
/**
 *
 */
class SecondFunctionContainer {
    getFunctionRepresentation() {
        return "x^3  -  x  +  4";
    }
    calc(x) {
        return (Math.pow(x, 3) - x + 4);
    }
    calcFirstDerivative(x) {
        return (3 * Math.pow(x, 2) - 1);
    }
    calcSecondDerivative(x) {
        return (x * x);
    }
    calcFI(x) {
        return 12 / 11 * x - 1 / 11 * Math.pow(x, 3) - 4 / 11;
    }
}
exports.SecondFunctionContainer = SecondFunctionContainer;
//# sourceMappingURL=SecondFunctionContainer.js.map