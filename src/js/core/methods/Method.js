"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Method = void 0;
/**
 *
 */
class Method {
    isAccuracyProficient(xn, xnPrev, accuracy) {
        if (xnPrev == null) {
            return false;
        }
        return (Math.abs(xn - xnPrev) <= accuracy);
    }
}
exports.Method = Method;
//# sourceMappingURL=Method.js.map