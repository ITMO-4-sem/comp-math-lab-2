"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstFunctionContainer = void 0;
/**
 *
 */
class FirstFunctionContainer {
    getFunctionRepresentation() {
        return "-2.4 x^3  +  1.27 x^2  +  8.63 x  +  2.31";
    }
    calc(x) {
        return ((-2.4 * Math.pow(x, 3)) + (1.27 * Math.pow(x, 2)) + (8.63 * x) + 2.31);
    }
    calcFirstDerivative(x) {
        return ((-7.2 * Math.pow(x, 2)) + (2.54 * x) + 8.63);
    }
    calcSecondDerivative(x) {
        return ((-14.4 * x) + 2.54);
    }
    calcFI(x) {
        return (Math.cbrt(1 / 2.4 * ((1.27 * Math.pow(x, 2)) + (8.63 * x) + 2.31)));
        // return (
        //     Math.sqrt( 1/1.27 * ( ( 2.4 * Math.pow(x, 3) ) - ( 8.63 * x ) - 2.31) )
        // );
        // return (
        //     1/8.63 * (2.4 * Math.pow(x, 3) - 1.27 * Math.pow(x, 2) - 2.31)
        // );
    }
}
exports.FirstFunctionContainer = FirstFunctionContainer;
//# sourceMappingURL=FirstFunctionContainer.js.map