"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewtonMethodInput = void 0;
const MethodInput_1 = require("./MethodInput");
/**
 *
 */
class NewtonMethodInput extends MethodInput_1.MethodInput {
    constructor(a, b, initialApprox, accuracy = MethodInput_1.MethodInput.ACCURACY_DEFAULT) {
        super(a, b, accuracy);
        if ((initialApprox < a) || (initialApprox > b))
            throw new Error("'Initial approximation' must be between the 'a', a left border, and the 'b', a right border.");
        this.initialApprox = initialApprox;
    }
}
exports.NewtonMethodInput = NewtonMethodInput;
//# sourceMappingURL=NewtonMethodInput.js.map