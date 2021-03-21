"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodInput = void 0;
/**
 *
 */
class MethodInput {
    constructor(a, b, accuracy = MethodInput.ACCURACY_DEFAULT) {
        this.accuracy = 0.1;
        if (a >= b)
            throw new Error("The 'a', a left border must be to the left of the 'b', a right border.");
        if (accuracy > 1) {
            throw new Error("Accuracy (epsilon) must be below 1.");
        }
        this.a = a;
        this.b = b;
        this.accuracy = accuracy;
    }
    getA() {
        return this.a;
    }
    getB() {
        return this.b;
    }
    getAccuracy() {
        return this.accuracy;
    }
}
exports.MethodInput = MethodInput;
MethodInput.ACCURACY_DEFAULT = 0.01;
//# sourceMappingURL=MethodInput.js.map