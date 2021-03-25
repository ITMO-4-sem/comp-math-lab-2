/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/core/functions/FirstFunctionContainer.js":
/*!*********************************************************!*\
  !*** ./src/js/core/functions/FirstFunctionContainer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.FirstFunctionContainer = void 0;\r\n/**\r\n *\r\n */\r\nclass FirstFunctionContainer {\r\n    getFunctionRepresentation() {\r\n        return \"-2.4 x^3  +  1.27 x^2  +  8.63 x  +  2.31\";\r\n    }\r\n    calc(x) {\r\n        return ((-2.4 * Math.pow(x, 3)) + (1.27 * Math.pow(x, 2)) + (8.63 * x) + 2.31);\r\n    }\r\n    calcFirstDerivative(x) {\r\n        return ((-7.2 * Math.pow(x, 2)) + (2.54 * x) + 8.63);\r\n    }\r\n    calcSecondDerivative(x) {\r\n        return ((-14.4 * x) + 2.54);\r\n    }\r\n    calcFI(x) {\r\n        return (Math.cbrt(1 / 2.4 * ((1.27 * Math.pow(x, 2)) + (8.63 * x) + 2.31)));\r\n        // return (\r\n        //     Math.sqrt( 1/1.27 * ( ( 2.4 * Math.pow(x, 3) ) - ( 8.63 * x ) - 2.31) )\r\n        // );\r\n        // return (\r\n        //     1/8.63 * (2.4 * Math.pow(x, 3) - 1.27 * Math.pow(x, 2) - 2.31)\r\n        // );\r\n    }\r\n}\r\nexports.FirstFunctionContainer = FirstFunctionContainer;\r\n//# sourceMappingURL=FirstFunctionContainer.js.map\n\n//# sourceURL=webpack://comp-math-lab-2/./src/js/core/functions/FirstFunctionContainer.js?");

/***/ }),

/***/ "./src/js/core/functions/SecondFunctionContainer.js":
/*!**********************************************************!*\
  !*** ./src/js/core/functions/SecondFunctionContainer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.SecondFunctionContainer = void 0;\r\n/**\r\n *\r\n */\r\nclass SecondFunctionContainer {\r\n    getFunctionRepresentation() {\r\n        return \"x^3  -  x  +  4\";\r\n    }\r\n    calc(x) {\r\n        return (Math.pow(x, 3) - x + 4);\r\n    }\r\n    calcFirstDerivative(x) {\r\n        return (3 * Math.pow(x, 2) - 1);\r\n    }\r\n    calcSecondDerivative(x) {\r\n        return (x * x);\r\n    }\r\n    calcFI(x) {\r\n        return 12 / 11 * x - 1 / 11 * Math.pow(x, 3) - 4 / 11;\r\n    }\r\n}\r\nexports.SecondFunctionContainer = SecondFunctionContainer;\r\n//# sourceMappingURL=SecondFunctionContainer.js.map\n\n//# sourceURL=webpack://comp-math-lab-2/./src/js/core/functions/SecondFunctionContainer.js?");

/***/ }),

/***/ "./src/js/core/functions/ThirdFunctionContainer.js":
/*!*********************************************************!*\
  !*** ./src/js/core/functions/ThirdFunctionContainer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ThirdFunctionContainer = void 0;\r\n/**\r\n *\r\n */\r\nclass ThirdFunctionContainer {\r\n    getFunctionRepresentation() {\r\n        return \"-2^x - x - 2\";\r\n    }\r\n    calc(x) {\r\n        return (-Math.pow(2, x) - x - 2);\r\n    }\r\n    calcFirstDerivative(x) {\r\n        return (-Math.pow(2, x) * Math.log(2) - 1);\r\n    }\r\n    calcSecondDerivative(x) {\r\n        return (Math.pow(2, x) + Math.pow(Math.log(2), 2));\r\n    }\r\n    calcFI(x) {\r\n        return (-Math.pow(2, x) - 2);\r\n    }\r\n}\r\nexports.ThirdFunctionContainer = ThirdFunctionContainer;\r\n//# sourceMappingURL=ThirdFunctionContainer.js.map\n\n//# sourceURL=webpack://comp-math-lab-2/./src/js/core/functions/ThirdFunctionContainer.js?");

/***/ }),

/***/ "./src/js/core/inputs/MethodInput.js":
/*!*******************************************!*\
  !*** ./src/js/core/inputs/MethodInput.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MethodInput = void 0;\r\n/**\r\n *\r\n */\r\nclass MethodInput {\r\n    constructor(a, b, accuracy = MethodInput.ACCURACY_DEFAULT) {\r\n        this.accuracy = 0.1;\r\n        if (a >= b)\r\n            throw new Error(\"The 'a', a left border must be to the left of the 'b', a right border.\");\r\n        if (accuracy > 1) {\r\n            throw new Error(\"Accuracy (epsilon) must be below 1.\");\r\n        }\r\n        this.a = a;\r\n        this.b = b;\r\n        this.accuracy = accuracy;\r\n    }\r\n    getA() {\r\n        return this.a;\r\n    }\r\n    getB() {\r\n        return this.b;\r\n    }\r\n    getAccuracy() {\r\n        return this.accuracy;\r\n    }\r\n}\r\nexports.MethodInput = MethodInput;\r\nMethodInput.ACCURACY_DEFAULT = 0.01;\r\n//# sourceMappingURL=MethodInput.js.map\n\n//# sourceURL=webpack://comp-math-lab-2/./src/js/core/inputs/MethodInput.js?");

/***/ }),

/***/ "./src/js/core/inputs/MethodInputWithInitApprox.js":
/*!*********************************************************!*\
  !*** ./src/js/core/inputs/MethodInputWithInitApprox.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MethodInputWithInitApprox = void 0;\r\nconst MethodInput_1 = __webpack_require__(/*! ./MethodInput */ \"./src/js/core/inputs/MethodInput.js\");\r\n/**\r\n *\r\n */\r\nclass MethodInputWithInitApprox extends MethodInput_1.MethodInput {\r\n    constructor(a, b, initialApprox, accuracy = MethodInput_1.MethodInput.ACCURACY_DEFAULT) {\r\n        super(a, b, accuracy);\r\n        if ((initialApprox < a) || (initialApprox > b))\r\n            throw new Error(\"'Initial approximation' must be between the 'a', a left border, and the 'b', a right border.\");\r\n        this.initialApprox = initialApprox;\r\n    }\r\n    getInitApprox() {\r\n        return this.initialApprox;\r\n    }\r\n}\r\nexports.MethodInputWithInitApprox = MethodInputWithInitApprox;\r\n//# sourceMappingURL=MethodInputWithInitApprox.js.map\n\n//# sourceURL=webpack://comp-math-lab-2/./src/js/core/inputs/MethodInputWithInitApprox.js?");

/***/ }),

/***/ "./src/js/core/methods/ChordsMethod.js":
/*!*********************************************!*\
  !*** ./src/js/core/methods/ChordsMethod.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ChordsMethod = void 0;\r\nconst Method_1 = __webpack_require__(/*! ./Method */ \"./src/js/core/methods/Method.js\");\r\nconst ChordsMethodResultTable_1 = __webpack_require__(/*! ../results/ChordsMethodResultTable */ \"./src/js/core/results/ChordsMethodResultTable.js\");\r\nconst ChordsMethodResultTableRow_1 = __webpack_require__(/*! ../results/ChordsMethodResultTableRow */ \"./src/js/core/results/ChordsMethodResultTableRow.js\");\r\nconst FunctionInputValidator_1 = __webpack_require__(/*! ../validators/FunctionInputValidator */ \"./src/js/core/validators/FunctionInputValidator.js\");\r\n/**\r\n * Метод хорд\r\n */\r\nclass ChordsMethod extends Method_1.Method {\r\n    calculate(input, fc) {\r\n        let inputValidationResult = FunctionInputValidator_1.FunctionInputValidator.validate(input, fc);\r\n        if (inputValidationResult.isFailure()) {\r\n            throw new Error(inputValidationResult.message);\r\n        }\r\n        let resultTable = new ChordsMethodResultTable_1.ChordsMethodResultTable();\r\n        let a = input.getA();\r\n        let b = input.getB();\r\n        let epsilon = input.getAccuracy();\r\n        let xnPrev = null;\r\n        let xn = null;\r\n        let fA;\r\n        let fB;\r\n        let fX;\r\n        let diffAbs = null; // By default there were no 'previous x'.\r\n        let iterationNumber = -1;\r\n        do {\r\n            iterationNumber++;\r\n            xnPrev = xn; // Saves the previous 'xn' value\r\n            fA = fc.calc(a);\r\n            fB = fc.calc(b);\r\n            xn = a - (b - a) / (fB - fA) * fA;\r\n            fX = fc.calc(xn);\r\n            if (xnPrev != null) {\r\n                diffAbs = Math.abs(xn - xnPrev);\r\n            }\r\n            resultTable.addRow(new ChordsMethodResultTableRow_1.ChordsMethodResultTableRow(iterationNumber, a, b, xn, fA, fB, fX, diffAbs));\r\n            if (fc.calc(a) * fc.calc(xn) < 0) { // Function has different signs on the interval [a; xn]\r\n                b = xn;\r\n            }\r\n            else if (fc.calc(xn) * fc.calc(b) < 0) { // Function has different signs on the interval [xn; b]\r\n                a = xn;\r\n            }\r\n            else {\r\n                throw new Error(`Function has the same signs on the ends of both intervals: '[${a}; ${xn}]' and '[${xn}; ${b}]'. Most probably there is no or more then one root in these intervals.`);\r\n            }\r\n        } while (!this.isAccuracyProficient(xn, xnPrev, epsilon));\r\n        return resultTable;\r\n    }\r\n}\r\nexports.ChordsMethod = ChordsMethod;\r\n//# sourceMappingURL=ChordsMethod.js.map\n\n//# sourceURL=webpack://comp-math-lab-2/./src/js/core/methods/ChordsMethod.js?");

/***/ }),

/***/ "./src/js/core/methods/Method.js":
/*!***************************************!*\
  !*** ./src/js/core/methods/Method.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Method = void 0;\r\n/**\r\n *\r\n */\r\nclass Method {\r\n    isAccuracyProficient(xn, xnPrev, accuracy) {\r\n        if (xnPrev == null) {\r\n            return false;\r\n        }\r\n        return (Math.abs(xn - xnPrev) <= accuracy);\r\n    }\r\n}\r\nexports.Method = Method;\r\n//# sourceMappingURL=Method.js.map\n\n//# sourceURL=webpack://comp-math-lab-2/./src/js/core/methods/Method.js?");

/***/ }),

/***/ "./src/js/core/methods/NewtonMethod.js":
/*!*********************************************!*\
  !*** ./src/js/core/methods/NewtonMethod.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.NewtonMethod = void 0;\r\nconst Method_1 = __webpack_require__(/*! ./Method */ \"./src/js/core/methods/Method.js\");\r\nconst NewtonMethodResultTable_1 = __webpack_require__(/*! ../results/NewtonMethodResultTable */ \"./src/js/core/results/NewtonMethodResultTable.js\");\r\nconst FunctionInputValidator_1 = __webpack_require__(/*! ../validators/FunctionInputValidator */ \"./src/js/core/validators/FunctionInputValidator.js\");\r\nconst NewtonMethodResultTableRow_1 = __webpack_require__(/*! ../results/NewtonMethodResultTableRow */ \"./src/js/core/results/NewtonMethodResultTableRow.js\");\r\n/**\r\n * Метод Ньютона.\r\n */\r\nclass NewtonMethod extends Method_1.Method {\r\n    calculate(input, fc) {\r\n        let inputValidationResult = FunctionInputValidator_1.FunctionInputValidator.validate(input, fc);\r\n        if (inputValidationResult.isFailure()) {\r\n            throw new Error(inputValidationResult.message);\r\n        }\r\n        let resultTable = new NewtonMethodResultTable_1.NewtonMethodResultTable();\r\n        let epsilon = input.getAccuracy();\r\n        let xnPrev;\r\n        let xn = input.getInitApprox();\r\n        let fXnPrev;\r\n        let fXnPrevFirstDer;\r\n        let fXn;\r\n        let diffAbs = null; // By default there were no 'previous x'.\r\n        let iterationNumber = -1;\r\n        do {\r\n            iterationNumber++;\r\n            xnPrev = xn; // Saves the previous 'xn' value\r\n            fXnPrev = fc.calc(xnPrev);\r\n            fXnPrevFirstDer = fc.calcFirstDerivative(xnPrev);\r\n            xn = xnPrev - fXnPrev / fXnPrevFirstDer;\r\n            fXn = fc.calc(xn);\r\n            if (xn != null && xnPrev != null) {\r\n                diffAbs = Math.abs(xn - xnPrev);\r\n            }\r\n            resultTable.addRow(new NewtonMethodResultTableRow_1.NewtonMethodResultTableRow(iterationNumber, xnPrev, fXnPrev, fXnPrevFirstDer, xn, fXn, diffAbs));\r\n        } while (!this.isAccuracyProficient(xn, xnPrev, epsilon));\r\n        return resultTable;\r\n    }\r\n}\r\nexports.NewtonMethod = NewtonMethod;\r\n//# sourceMappingURL=NewtonMethod.js.map\n\n//# sourceURL=webpack://comp-math-lab-2/./src/js/core/methods/NewtonMethod.js?");

/***/ }),

/***/ "./src/js/core/methods/SimpleIterationsMethod.js":
/*!*******************************************************!*\
  !*** ./src/js/core/methods/SimpleIterationsMethod.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.SimpleIterationsMethod = void 0;\r\nconst Method_1 = __webpack_require__(/*! ./Method */ \"./src/js/core/methods/Method.js\");\r\nconst SimpleIterationsMethodResultTable_1 = __webpack_require__(/*! ../results/SimpleIterationsMethodResultTable */ \"./src/js/core/results/SimpleIterationsMethodResultTable.js\");\r\nconst FunctionInputValidator_1 = __webpack_require__(/*! ../validators/FunctionInputValidator */ \"./src/js/core/validators/FunctionInputValidator.js\");\r\nconst SimpleIterationsMethodResultTableRow_1 = __webpack_require__(/*! ../results/SimpleIterationsMethodResultTableRow */ \"./src/js/core/results/SimpleIterationsMethodResultTableRow.js\");\r\n/**\r\n * Метод простых итераций.\r\n */\r\nclass SimpleIterationsMethod extends Method_1.Method {\r\n    calculate(input, fc) {\r\n        let inputValidationResult = FunctionInputValidator_1.FunctionInputValidator.validate(input, fc);\r\n        if (inputValidationResult.isFailure()) {\r\n            throw new Error(inputValidationResult.message);\r\n        }\r\n        let resultTable = new SimpleIterationsMethodResultTable_1.SimpleIterationsMethodResultTable();\r\n        let epsilon = input.getAccuracy();\r\n        let xnPrev;\r\n        let xn = input.getInitApprox();\r\n        let fiXn;\r\n        let fXn;\r\n        let fiXnPrev;\r\n        let diffAbs = null; // By default there were no 'previous x'.\r\n        let iterationNumber = -1;\r\n        do {\r\n            iterationNumber++;\r\n            xnPrev = xn; // Saves the previous 'xn' value\r\n            fiXnPrev = fc.calcFI(xnPrev);\r\n            xn = fiXnPrev;\r\n            fiXn = fc.calcFI(xn);\r\n            fXn = fc.calc(xn);\r\n            if (xn != null && xnPrev != null) {\r\n                diffAbs = Math.abs(xn - xnPrev);\r\n            }\r\n            resultTable.addRow(new SimpleIterationsMethodResultTableRow_1.SimpleIterationsMethodResultTableRow(iterationNumber, xnPrev, xn, fiXn, fXn, diffAbs));\r\n            console.log(`a = ${input.getA()}, b = ${input.getB()}`);\r\n        } while (!this.isAccuracyProficient(xn, xnPrev, epsilon));\r\n        return resultTable;\r\n    }\r\n}\r\nexports.SimpleIterationsMethod = SimpleIterationsMethod;\r\n//# sourceMappingURL=SimpleIterationsMethod.js.map\n\n//# sourceURL=webpack://comp-math-lab-2/./src/js/core/methods/SimpleIterationsMethod.js?");

/***/ }),

/***/ "./src/js/core/results/ChordsMethodResultTable.js":
/*!********************************************************!*\
  !*** ./src/js/core/results/ChordsMethodResultTable.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ChordsMethodResultTable = void 0;\r\nconst MethodResultTable_1 = __webpack_require__(/*! ./MethodResultTable */ \"./src/js/core/results/MethodResultTable.js\");\r\n/**\r\n *\r\n */\r\nclass ChordsMethodResultTable extends MethodResultTable_1.MethodResultTable {\r\n    getTable() {\r\n        return super.getTable();\r\n    }\r\n    getRowByIterationNumber(itNumber) {\r\n        return super.getRowByIterationNumber(itNumber);\r\n    }\r\n    getFinalX() {\r\n        return this.table[this.table.length - 1].x;\r\n    }\r\n    getFinalXFunc() {\r\n        return this.table[this.table.length - 1].fX;\r\n    }\r\n}\r\nexports.ChordsMethodResultTable = ChordsMethodResultTable;\r\n//# sourceMappingURL=ChordsMethodResultTable.js.map\n\n//# sourceURL=webpack://comp-math-lab-2/./src/js/core/results/ChordsMethodResultTable.js?");

/***/ }),

/***/ "./src/js/core/results/ChordsMethodResultTableRow.js":
/*!***********************************************************!*\
  !*** ./src/js/core/results/ChordsMethodResultTableRow.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ChordsMethodResultTableRow = void 0;\r\nconst MethodResultTableRow_1 = __webpack_require__(/*! ./MethodResultTableRow */ \"./src/js/core/results/MethodResultTableRow.js\");\r\n/**\r\n *\r\n */\r\nclass ChordsMethodResultTableRow extends MethodResultTableRow_1.MethodResultTableRow {\r\n    constructor(iterationNumber, a, b, x, fA, fB, fX, diffAbs) {\r\n        super(iterationNumber);\r\n        this.a = a;\r\n        this.b = b;\r\n        this.x = x;\r\n        this.fA = fA;\r\n        this.fB = fB;\r\n        this.fX = fX;\r\n        this.differenceAbs = diffAbs;\r\n    }\r\n    [Symbol.iterator]() {\r\n        return new Array(this.iterationNumber, this.a, this.b, this.x, this.fA, this.fB, this.fX, this.differenceAbs)[Symbol.iterator]();\r\n    }\r\n}\r\nexports.ChordsMethodResultTableRow = ChordsMethodResultTableRow;\r\n//# sourceMappingURL=ChordsMethodResultTableRow.js.map\n\n//# sourceURL=webpack://comp-math-lab-2/./src/js/core/results/ChordsMethodResultTableRow.js?");

/***/ }),

/***/ "./src/js/core/results/MethodResultTable.js":
/*!**************************************************!*\
  !*** ./src/js/core/results/MethodResultTable.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MethodResultTable = void 0;\r\n/**\r\n *\r\n */\r\nclass MethodResultTable {\r\n    constructor() {\r\n        this.table = new Array();\r\n    }\r\n    addRow(row) {\r\n        this.table.push(row);\r\n        this.table.sort((oneRow, anotherRow) => {\r\n            return oneRow.iterationNumber - anotherRow.iterationNumber;\r\n        });\r\n    }\r\n    getTable() {\r\n        return this.table;\r\n    }\r\n    getRowByIterationNumber(itNumber) {\r\n        for (let row of this.table) {\r\n            if (row.iterationNumber == itNumber) {\r\n                return row;\r\n            }\r\n        }\r\n        return null;\r\n    }\r\n    getLastRow() {\r\n        return this.table[this.table.length - 1];\r\n    }\r\n    getNumberOfIterations() {\r\n        return this.table.length;\r\n    }\r\n    [Symbol.iterator]() {\r\n        return this.table[Symbol.iterator]();\r\n    }\r\n}\r\nexports.MethodResultTable = MethodResultTable;\r\n//# sourceMappingURL=MethodResultTable.js.map\n\n//# sourceURL=webpack://comp-math-lab-2/./src/js/core/results/MethodResultTable.js?");

/***/ }),

/***/ "./src/js/core/results/MethodResultTableRow.js":
/*!*****************************************************!*\
  !*** ./src/js/core/results/MethodResultTableRow.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MethodResultTableRow = void 0;\r\n/**\r\n *\r\n */\r\nclass MethodResultTableRow {\r\n    constructor(iterationNumber) {\r\n        this.iterationNumber = iterationNumber;\r\n    }\r\n}\r\nexports.MethodResultTableRow = MethodResultTableRow;\r\n//# sourceMappingURL=MethodResultTableRow.js.map\n\n//# sourceURL=webpack://comp-math-lab-2/./src/js/core/results/MethodResultTableRow.js?");

/***/ }),

/***/ "./src/js/core/results/NewtonMethodResultTable.js":
/*!********************************************************!*\
  !*** ./src/js/core/results/NewtonMethodResultTable.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.NewtonMethodResultTable = void 0;\r\nconst MethodResultTable_1 = __webpack_require__(/*! ./MethodResultTable */ \"./src/js/core/results/MethodResultTable.js\");\r\n/**\r\n *\r\n */\r\nclass NewtonMethodResultTable extends MethodResultTable_1.MethodResultTable {\r\n    getTable() {\r\n        return super.getTable();\r\n    }\r\n    getRowByIterationNumber(itNumber) {\r\n        return super.getRowByIterationNumber(itNumber);\r\n    }\r\n    getFinalX() {\r\n        return this.table[this.table.length - 1].xnNext;\r\n    }\r\n    getFinalXFunc() {\r\n        return this.table[this.table.length - 1].fXnNext;\r\n    }\r\n}\r\nexports.NewtonMethodResultTable = NewtonMethodResultTable;\r\n//# sourceMappingURL=NewtonMethodResultTable.js.map\n\n//# sourceURL=webpack://comp-math-lab-2/./src/js/core/results/NewtonMethodResultTable.js?");

/***/ }),

/***/ "./src/js/core/results/NewtonMethodResultTableRow.js":
/*!***********************************************************!*\
  !*** ./src/js/core/results/NewtonMethodResultTableRow.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.NewtonMethodResultTableRow = void 0;\r\nconst MethodResultTableRow_1 = __webpack_require__(/*! ./MethodResultTableRow */ \"./src/js/core/results/MethodResultTableRow.js\");\r\n/**\r\n *\r\n */\r\nclass NewtonMethodResultTableRow extends MethodResultTableRow_1.MethodResultTableRow {\r\n    constructor(iterationNumber, xn, fXn, fFstDerXn, xnNext, fXnNext, differenceAbs) {\r\n        super(iterationNumber);\r\n        this.xn = xn;\r\n        this.fXn = fXn;\r\n        this.fFstDerXn = fFstDerXn;\r\n        this.xnNext = xnNext;\r\n        this.fXnNext = fXnNext;\r\n        this.differenceAbs = differenceAbs;\r\n    }\r\n    [Symbol.iterator]() {\r\n        return new Array(this.iterationNumber, this.xn, this.fXn, this.fFstDerXn, this.xnNext, this.fXnNext, this.differenceAbs)[Symbol.iterator]();\r\n    }\r\n}\r\nexports.NewtonMethodResultTableRow = NewtonMethodResultTableRow;\r\n//# sourceMappingURL=NewtonMethodResultTableRow.js.map\n\n//# sourceURL=webpack://comp-math-lab-2/./src/js/core/results/NewtonMethodResultTableRow.js?");

/***/ }),

/***/ "./src/js/core/results/SimpleIterationsMethodResultTable.js":
/*!******************************************************************!*\
  !*** ./src/js/core/results/SimpleIterationsMethodResultTable.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.SimpleIterationsMethodResultTable = void 0;\r\nconst MethodResultTable_1 = __webpack_require__(/*! ./MethodResultTable */ \"./src/js/core/results/MethodResultTable.js\");\r\n/**\r\n *\r\n */\r\nclass SimpleIterationsMethodResultTable extends MethodResultTable_1.MethodResultTable {\r\n    getTable() {\r\n        return super.getTable();\r\n    }\r\n    getRowByIterationNumber(itNumber) {\r\n        return super.getRowByIterationNumber(itNumber);\r\n    }\r\n    getFinalX() {\r\n        return this.table[this.table.length - 1].xnNext;\r\n    }\r\n    getFinalXFunc() {\r\n        return this.table[this.table.length - 1].fXnNext;\r\n    }\r\n}\r\nexports.SimpleIterationsMethodResultTable = SimpleIterationsMethodResultTable;\r\n//# sourceMappingURL=SimpleIterationsMethodResultTable.js.map\n\n//# sourceURL=webpack://comp-math-lab-2/./src/js/core/results/SimpleIterationsMethodResultTable.js?");

/***/ }),

/***/ "./src/js/core/results/SimpleIterationsMethodResultTableRow.js":
/*!*********************************************************************!*\
  !*** ./src/js/core/results/SimpleIterationsMethodResultTableRow.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.SimpleIterationsMethodResultTableRow = void 0;\r\nconst MethodResultTableRow_1 = __webpack_require__(/*! ./MethodResultTableRow */ \"./src/js/core/results/MethodResultTableRow.js\");\r\n/**\r\n *\r\n */\r\nclass SimpleIterationsMethodResultTableRow extends MethodResultTableRow_1.MethodResultTableRow {\r\n    constructor(iterationNumber, xn, xnNext, fiXnNext, fXnNext, differenceAbs) {\r\n        super(iterationNumber);\r\n        this.xn = xn;\r\n        this.xnNext = xnNext;\r\n        this.fiXnNext = fiXnNext;\r\n        this.fXnNext = fXnNext;\r\n        this.differenceAbs = differenceAbs;\r\n    }\r\n    [Symbol.iterator]() {\r\n        return new Array(this.iterationNumber, this.xn, this.xnNext, this.fiXnNext, this.fXnNext, this.differenceAbs)[Symbol.iterator]();\r\n    }\r\n}\r\nexports.SimpleIterationsMethodResultTableRow = SimpleIterationsMethodResultTableRow;\r\n//# sourceMappingURL=SimpleIterationsMethodResultTableRow.js.map\n\n//# sourceURL=webpack://comp-math-lab-2/./src/js/core/results/SimpleIterationsMethodResultTableRow.js?");

/***/ }),

/***/ "./src/js/core/validators/FunctionInputValidator.js":
/*!**********************************************************!*\
  !*** ./src/js/core/validators/FunctionInputValidator.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.FunctionInputValidator = void 0;\r\nconst validator_config_1 = __importDefault(__webpack_require__(/*! ./validator.config */ \"./src/js/core/validators/validator.config.js\"));\r\nconst ValidationResult_1 = __webpack_require__(/*! ./ValidationResult */ \"./src/js/core/validators/ValidationResult.js\");\r\nconst ValidationResultStatus_1 = __webpack_require__(/*! ./ValidationResultStatus */ \"./src/js/core/validators/ValidationResultStatus.js\");\r\n/**\r\n *\r\n */\r\nclass FunctionInputValidator {\r\n    static validate(input, funcCont) {\r\n        return this.hasUniqueRoot(input, funcCont);\r\n    }\r\n    static hasUniqueRoot(input, fc) {\r\n        if (fc.calc(input.getA()) * fc.calc(input.getB()) > 0) // The function values on the end of isolation interval are of the same sign.\r\n            return new ValidationResult_1.ValidationResult(ValidationResultStatus_1.ValidationResultStatus.FAIL, \"The specified isolation interval has 0 or even number of roots. The root must be unique.\");\r\n        let rootsNumberCounter = 0;\r\n        let step = (input.getB() - input.getA()) / validator_config_1.default.divisionsNumber;\r\n        let prevSign = this.getSign(fc.calc(input.getA()));\r\n        let sign;\r\n        for (let x = input.getA(); x <= input.getB(); x += step) {\r\n            sign = this.getSign(fc.calc(x));\r\n            if (prevSign * sign < 0) { // The function has changed its sign.\r\n                rootsNumberCounter++;\r\n                prevSign = sign;\r\n            }\r\n        }\r\n        if (fc.calc(input.getB()) == 0) { // Is useful as probably 'a += step * divisionsNumber' != 'b' because of imperfections in roundings.\r\n            rootsNumberCounter++;\r\n        }\r\n        if (rootsNumberCounter != 1) {\r\n            return new ValidationResult_1.ValidationResult(ValidationResultStatus_1.ValidationResultStatus.FAIL, \"The specified isolation interval has more than one root. The root must be unique.\");\r\n        }\r\n        return new ValidationResult_1.ValidationResult(ValidationResultStatus_1.ValidationResultStatus.OK);\r\n    }\r\n    static getSign(x) {\r\n        if (x < 0) {\r\n            return -1;\r\n        }\r\n        else if (x > 0) {\r\n            return 1;\r\n        }\r\n        else {\r\n            return 0;\r\n        }\r\n    }\r\n}\r\nexports.FunctionInputValidator = FunctionInputValidator;\r\n//# sourceMappingURL=FunctionInputValidator.js.map\n\n//# sourceURL=webpack://comp-math-lab-2/./src/js/core/validators/FunctionInputValidator.js?");

/***/ }),

/***/ "./src/js/core/validators/ValidationResult.js":
/*!****************************************************!*\
  !*** ./src/js/core/validators/ValidationResult.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ValidationResult = void 0;\r\nconst ValidationResultStatus_1 = __webpack_require__(/*! ./ValidationResultStatus */ \"./src/js/core/validators/ValidationResultStatus.js\");\r\n/**\r\n *\r\n */\r\nclass ValidationResult {\r\n    constructor(status, message = ValidationResult.MESSAGE_DEFAULT) {\r\n        this.status = status;\r\n        this.message = message;\r\n    }\r\n    isSuccess() {\r\n        return this.status == ValidationResultStatus_1.ValidationResultStatus.OK;\r\n    }\r\n    isFailure() {\r\n        return this.status == ValidationResultStatus_1.ValidationResultStatus.FAIL;\r\n    }\r\n}\r\nexports.ValidationResult = ValidationResult;\r\nValidationResult.MESSAGE_DEFAULT = \"\";\r\n//# sourceMappingURL=ValidationResult.js.map\n\n//# sourceURL=webpack://comp-math-lab-2/./src/js/core/validators/ValidationResult.js?");

/***/ }),

/***/ "./src/js/core/validators/ValidationResultStatus.js":
/*!**********************************************************!*\
  !*** ./src/js/core/validators/ValidationResultStatus.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ValidationResultStatus = void 0;\r\nvar ValidationResultStatus;\r\n(function (ValidationResultStatus) {\r\n    ValidationResultStatus[\"OK\"] = \"OK\";\r\n    ValidationResultStatus[\"FAIL\"] = \"FAIL\";\r\n})(ValidationResultStatus = exports.ValidationResultStatus || (exports.ValidationResultStatus = {}));\r\n//# sourceMappingURL=ValidationResultStatus.js.map\n\n//# sourceURL=webpack://comp-math-lab-2/./src/js/core/validators/ValidationResultStatus.js?");

/***/ }),

/***/ "./src/js/core/validators/validator.config.js":
/*!****************************************************!*\
  !*** ./src/js/core/validators/validator.config.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    divisionsNumber: 10000,\r\n};\r\n//# sourceMappingURL=validator.config.js.map\n\n//# sourceURL=webpack://comp-math-lab-2/./src/js/core/validators/validator.config.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst FirstFunctionContainer_1 = __webpack_require__(/*! ./core/functions/FirstFunctionContainer */ \"./src/js/core/functions/FirstFunctionContainer.js\");\r\nconst SecondFunctionContainer_1 = __webpack_require__(/*! ./core/functions/SecondFunctionContainer */ \"./src/js/core/functions/SecondFunctionContainer.js\");\r\nconst ThirdFunctionContainer_1 = __webpack_require__(/*! ./core/functions/ThirdFunctionContainer */ \"./src/js/core/functions/ThirdFunctionContainer.js\");\r\nconst ChordsMethod_1 = __webpack_require__(/*! ./core/methods/ChordsMethod */ \"./src/js/core/methods/ChordsMethod.js\");\r\nconst NewtonMethod_1 = __webpack_require__(/*! ./core/methods/NewtonMethod */ \"./src/js/core/methods/NewtonMethod.js\");\r\nconst SimpleIterationsMethod_1 = __webpack_require__(/*! ./core/methods/SimpleIterationsMethod */ \"./src/js/core/methods/SimpleIterationsMethod.js\");\r\nconst MethodInput_1 = __webpack_require__(/*! ./core/inputs/MethodInput */ \"./src/js/core/inputs/MethodInput.js\");\r\nconst MethodInputWithInitApprox_1 = __webpack_require__(/*! ./core/inputs/MethodInputWithInitApprox */ \"./src/js/core/inputs/MethodInputWithInitApprox.js\");\r\nconst MethodResultTableRenderer_1 = __webpack_require__(/*! ./ui/renderers/MethodResultTableRenderer */ \"./src/js/ui/renderers/MethodResultTableRenderer.js\");\r\nconst tablesheadings_config_1 = __importDefault(__webpack_require__(/*! ./ui/renderers/tablesheadings.config */ \"./src/js/ui/renderers/tablesheadings.config.js\"));\r\nconsole.log(\"build.js mounted\");\r\nconst form = document.getElementById(\"form\");\r\n// @ts-ignore\r\nconst aInput = document.getElementById(\"a\");\r\n// @ts-ignore\r\nconst bInput = document.getElementById(\"b\");\r\n// @ts-ignore\r\nconst initApproxInput = document.getElementById(\"init-approx\");\r\n// @ts-ignore\r\nconst accuracyInput = document.getElementById(\"accuracy\");\r\n// @ts-ignore\r\nconst newtonRadio = document.getElementById(\"newton\");\r\n// @ts-ignore\r\nconst chordsRadio = document.getElementById(\"chords\");\r\n// @ts-ignore\r\nconst simpleIterationsRadio = document.getElementById(\"simple-iterations\");\r\nconst messageBlock = document.getElementById(\"message-block\");\r\nconst messageContent = document.getElementById(\"message-content\");\r\nconst table = document.getElementById(\"table-full\");\r\nconst tableBlock = document.getElementById(\"table-block\");\r\nconst initApproxGroupBlock = document.getElementById(\"init-approx-group\");\r\nconst containerBlock = document.getElementById(\"container\");\r\n// @ts-ignore\r\nconst fileInput = document.getElementById(\"file\");\r\nconst mainTableX = document.getElementById(\"table-main-x\");\r\nconst mainTableFX = document.getElementById(\"table-main-fX\");\r\nconst mainTableIterNumber = document.getElementById(\"table-main-iterations-number\");\r\nconst plot = document.getElementById('plot');\r\nlet xPlotValues;\r\nlet yPlotValues;\r\nnewtonRadio.addEventListener(\"click\", () => displayInput(initApproxGroupBlock, true, true));\r\nchordsRadio.addEventListener(\"click\", () => displayInput(initApproxGroupBlock, false, true));\r\nsimpleIterationsRadio.addEventListener(\"click\", () => displayInput(initApproxGroupBlock, true, true));\r\n// fadeOutElement(messageBlock, 6);\r\nconst firstFuncCont = new FirstFunctionContainer_1.FirstFunctionContainer();\r\nconst secondFuncCont = new SecondFunctionContainer_1.SecondFunctionContainer();\r\nconst thirdFuncCont = new ThirdFunctionContainer_1.ThirdFunctionContainer();\r\nconst chordsMethod = new ChordsMethod_1.ChordsMethod();\r\nconst newtonMethod = new NewtonMethod_1.NewtonMethod();\r\nconst simpleIterationsMethod = new SimpleIterationsMethod_1.SimpleIterationsMethod();\r\n// InClUdE html в самом конце\r\nincludeHTML(); // в html должно быть '<div include-html=\"./ime.html\"></div>  '\r\ncontainerBlock.addEventListener(\"click\", () => {\r\n    hideMessage();\r\n});\r\nform.addEventListener(\"submit\", (event) => {\r\n    console.log(\"I am in a form element\");\r\n    event.preventDefault();\r\n    const formData = new FormData(form);\r\n    // @ts-ignore\r\n    const func = formData.get(\"function\");\r\n    // @ts-ignore\r\n    const a = parseFloat(formData.get(\"a\"));\r\n    // @ts-ignore\r\n    const b = parseFloat(formData.get(\"b\"));\r\n    // @ts-ignore\r\n    const initApprox = parseFloat(formData.get(\"init-approx\"));\r\n    // @ts-ignore\r\n    const accuracy = parseFloat(formData.get(\"accuracy\"));\r\n    let tableHeading;\r\n    let funcCont;\r\n    switch (func) {\r\n        case \"first-function\": {\r\n            funcCont = firstFuncCont;\r\n            break;\r\n        }\r\n        case \"second-function\": {\r\n            funcCont = secondFuncCont;\r\n            break;\r\n        }\r\n        case \"third-function\": {\r\n            funcCont = thirdFuncCont;\r\n            break;\r\n        }\r\n        default: {\r\n            funcCont = firstFuncCont;\r\n            break;\r\n        }\r\n    }\r\n    let method;\r\n    switch (formData.get(\"method\")) {\r\n        case \"chords\": {\r\n            method = chordsMethod;\r\n            tableHeading = tablesheadings_config_1.default.chordsMethodResultTableHeadings;\r\n            // alert(\"chords\")\r\n            break;\r\n        }\r\n        case \"newton\": {\r\n            method = newtonMethod;\r\n            tableHeading = tablesheadings_config_1.default.newtonMethodResultTableHeadings;\r\n            // alert(\"newton\")\r\n            break;\r\n        }\r\n        case \"simple-iterations\": {\r\n            method = simpleIterationsMethod;\r\n            tableHeading = tablesheadings_config_1.default.simpleIterationsMethodResultTableHeadings;\r\n            // alert(\"simpit\")\r\n            break;\r\n        }\r\n        default: {\r\n            method = chordsMethod;\r\n            tableHeading = tablesheadings_config_1.default.chordsMethodResultTableHeadings;\r\n            break;\r\n        }\r\n    }\r\n    console.log(\"FuncCon:\", funcCont.getFunctionRepresentation(), \"Methd:\", method);\r\n    let resultTable;\r\n    try {\r\n        if (!(method instanceof ChordsMethod_1.ChordsMethod)) {\r\n            resultTable = method.calculate(new MethodInputWithInitApprox_1.MethodInputWithInitApprox(a, b, initApprox, accuracy), funcCont);\r\n        }\r\n        else {\r\n            resultTable = method.calculate(new MethodInput_1.MethodInput(a, b, accuracy), funcCont);\r\n        }\r\n        const decPlacesNumber = accuracy.toString().length - 2;\r\n        console.log(tableHeading);\r\n        console.log(MethodResultTableRenderer_1.MethodResultTableRenderer.render(resultTable, decPlacesNumber, tableHeading));\r\n        table.innerHTML = MethodResultTableRenderer_1.MethodResultTableRenderer.render(resultTable, accuracy.toString().length - 2, tableHeading);\r\n        mainTableX.innerText = (+resultTable.getFinalX().toFixed(decPlacesNumber)).toString();\r\n        mainTableFX.innerText = (+resultTable.getFinalXFunc().toFixed(decPlacesNumber)).toString();\r\n        mainTableIterNumber.innerText = (+resultTable.getNumberOfIterations().toFixed(decPlacesNumber)).toString();\r\n        displayElement(tableBlock, true);\r\n        xPlotValues = [];\r\n        yPlotValues = [];\r\n        let shift = Math.abs(b - a) / 4;\r\n        for (let i = a - shift; i < b + shift; i += 0.001) {\r\n            xPlotValues.push(i);\r\n            yPlotValues.push(funcCont.calc(i));\r\n        }\r\n        drawPlot();\r\n        fileInput.value = \"\";\r\n    }\r\n    catch (e) {\r\n        console.log('errr');\r\n        showMessage(e);\r\n        // fadeOutElement(messageBlock, 12);\r\n    }\r\n});\r\n//\r\nfileInput.addEventListener(\"change\", () => {\r\n    getDataFromFile();\r\n});\r\nfunction showMessage(message) {\r\n    setMessage(message);\r\n    displayElement(messageBlock, true);\r\n}\r\nfunction hideMessage() {\r\n    displayElement(messageBlock, false);\r\n    // setTimeout( () => {\r\n    //     clearMessage();\r\n    // }, 4000)\r\n}\r\nfunction clearMessage() {\r\n    setMessage(\"\");\r\n}\r\nfunction setMessage(message) {\r\n    messageContent.innerText = message;\r\n}\r\nfunction displayElement(element, display) {\r\n    if (display) {\r\n        element.classList.remove(\"hidden\");\r\n    }\r\n    else {\r\n        element.classList.add(\"hidden\");\r\n    }\r\n}\r\nfunction displayInput(element, display, isRequired = false) {\r\n    console.log(\"-- 1\");\r\n    prepareInputsToDisplay(element, display);\r\n    displayElement(element, display);\r\n}\r\nfunction prepareInputsToDisplay(element, display) {\r\n    if (element instanceof HTMLInputElement) {\r\n        element.disabled = !display; // to prevent hiding a 'required' input. -- user won't be able to submit a form.\r\n        return;\r\n    }\r\n    for (let child of element.children) {\r\n        prepareInputsToDisplay(child, display);\r\n    }\r\n}\r\n// function fadeOutElement(element: HTMLElement, s: number = 0) {\r\n//\r\n//     console.log(\"hhhhhhhhhhh\")\r\n//     element.classList.add(\"fade-out\");\r\n//     element.style.animation = `fadeOut ease ${s}s`\r\n//     setTimeout(() => {\r\n//         element.classList.add(\"hidden\");\r\n//         element.classList.remove(\"fade-out\");\r\n//         // element.style.animation = \"\";\r\n//\r\n//\r\n//     }, s * 1000)\r\n//\r\n// }\r\nfunction replaceAndReturn(str, from, to) {\r\n    str.replace(from, to);\r\n    return str;\r\n}\r\n//Make the DIV element draggable:\r\ndragElement(document.getElementById(\"draggable-block\"));\r\nfunction dragElement(elmnt) {\r\n    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;\r\n    if (document.getElementById(elmnt.id + \"-header\")) {\r\n        /* if present, the header is where you move the DIV from:*/\r\n        // @ts-ignore\r\n        document.getElementById(elmnt.id + \"-header\").onmousedown = dragMouseDown;\r\n    }\r\n    else {\r\n        /* otherwise, move the DIV from anywhere inside the DIV:*/\r\n        elmnt.onmousedown = dragMouseDown;\r\n    }\r\n    // @ts-ignore\r\n    function dragMouseDown(e) {\r\n        e = e || window.event;\r\n        e.preventDefault();\r\n        // get the mouse cursor position at startup:\r\n        pos3 = e.clientX;\r\n        pos4 = e.clientY;\r\n        document.onmouseup = closeDragElement;\r\n        // call a function whenever the cursor moves:\r\n        document.onmousemove = elementDrag;\r\n    }\r\n    // @ts-ignore\r\n    function elementDrag(e) {\r\n        e = e || window.event;\r\n        e.preventDefault();\r\n        // calculate the new cursor position:\r\n        pos1 = pos3 - e.clientX;\r\n        pos2 = pos4 - e.clientY;\r\n        pos3 = e.clientX;\r\n        pos4 = e.clientY;\r\n        // set the element's new position:\r\n        elmnt.style.top = (elmnt.offsetTop - pos2) + \"px\";\r\n        elmnt.style.left = (elmnt.offsetLeft - pos1) + \"px\";\r\n    }\r\n    function closeDragElement() {\r\n        /* stop moving when mouse button is released:*/\r\n        document.onmouseup = null;\r\n        document.onmousemove = null;\r\n    }\r\n}\r\nfunction drawPlot() {\r\n    // @ts-ignore\r\n    Plotly.newPlot(plot, [{\r\n            x: xPlotValues,\r\n            y: yPlotValues\r\n        }], {\r\n        margin: { t: 0 }\r\n    }, { displayModeBar: false,\r\n        scrollZoom: true });\r\n}\r\nfunction getDataFromFile() {\r\n    // @ts-ignore\r\n    if (fileInput == null || fileInput.files.length == 0) {\r\n        throw Error(\"No files chosen.\");\r\n    }\r\n    // @ts-ignore\r\n    let file = fileInput.files[0];\r\n    let reader = new FileReader();\r\n    reader.readAsText(file);\r\n    reader.onload = () => {\r\n        let result = reader.result.split(\" \");\r\n        console.log(\"result splitted = \", result);\r\n        if (result.length < 3 || result.length > 4) {\r\n            showMessage(\"File contains Invalid number of parameters.\");\r\n            // fadeOutElement(messageBlock, 8);\r\n        }\r\n        else {\r\n            for (let num of result) {\r\n                if (!isNumeric(num)) {\r\n                    showMessage(`Error: '${num}' is not a number.`);\r\n                    // fadeOutElement(messageBlock, 8);\r\n                    console.log(\"eror\");\r\n                    return;\r\n                }\r\n            }\r\n            chordsRadio.click();\r\n            aInput.value = parseFloat(result[0]).toString(); // is because isNumeric( '0.01asdasd' ) retutn 'true'\r\n            bInput.value = parseFloat(result[1]).toString(); // js wtf parseFloat('0.01asdasd') = '0.01'\r\n            accuracyInput.value = parseFloat(result[2]).toString();\r\n            if (result.length == 4) {\r\n                initApproxInput.value = parseFloat(result[2]).toString();\r\n                accuracyInput.value = parseFloat(result[3]).toString();\r\n                newtonRadio.click();\r\n            }\r\n        }\r\n    };\r\n    reader.onerror = () => {\r\n        showMessage(\"Can't read the file.\");\r\n        // fadeOutElement(messageBlock, 8);\r\n    };\r\n}\r\nfunction isNumeric(str) {\r\n    // we only process strings!\r\n    return !isNaN(parseFloat(str)); // ...and ensure strings of whitespace fail\r\n}\r\nfunction includeHTML() {\r\n    let z, i, elmnt, file, xhttp;\r\n    /*loop through a collection of all HTML elements:*/\r\n    z = document.getElementsByTagName(\"*\");\r\n    for (i = 0; i < z.length; i++) {\r\n        elmnt = z[i];\r\n        /*search for elements with a certain atrribute:*/\r\n        file = elmnt.getAttribute(\"include-html\");\r\n        if (file) {\r\n            /*make an HTTP request using the attribute value as the file name:*/\r\n            xhttp = new XMLHttpRequest();\r\n            xhttp.onreadystatechange = function () {\r\n                if (this.readyState == 4) {\r\n                    if (this.status == 200) {\r\n                        elmnt.innerHTML = this.responseText;\r\n                    }\r\n                    if (this.status == 404) {\r\n                        elmnt.innerHTML = \"Page not found.\";\r\n                    }\r\n                    /*remove the attribute, and call this function once more:*/\r\n                    elmnt.removeAttribute(\"include-html\");\r\n                    includeHTML();\r\n                }\r\n            };\r\n            xhttp.open(\"GET\", file, true);\r\n            xhttp.send();\r\n            /*exit the function:*/\r\n            return;\r\n        }\r\n    }\r\n}\r\n;\r\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://comp-math-lab-2/./src/js/index.js?");

/***/ }),

/***/ "./src/js/ui/renderers/MethodResultTableRenderer.js":
/*!**********************************************************!*\
  !*** ./src/js/ui/renderers/MethodResultTableRenderer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MethodResultTableRenderer = void 0;\r\nclass MethodResultTableRenderer {\r\n    static render(resultTable, rounding = this.ROUNDING_DEFAULT, headings = MethodResultTableRenderer.HEADINGS_DEFAULT) {\r\n        let result = \"<table>\";\r\n        if (headings != null && headings.length != 0) {\r\n            result += \"<thead><tr>\";\r\n            for (let heading of headings) {\r\n                result += `<th>${heading}</th>`;\r\n            }\r\n            result += \"</tr></thead>\";\r\n        }\r\n        result += \"<tbody>\";\r\n        if (resultTable != null) {\r\n            for (let row of resultTable) {\r\n                result += \"<tr>\";\r\n                for (let elem of row) {\r\n                    if (elem == null)\r\n                        elem = \"-\";\r\n                    if (typeof elem == 'number' && rounding != null) {\r\n                        elem = +elem.toFixed(rounding);\r\n                        // elem = Math.round(elem * 10 * rounding) / (10 * rounding)\r\n                    }\r\n                    result += `<td>${elem}</td>`;\r\n                }\r\n                result += \"</tr>\";\r\n            }\r\n        }\r\n        result += \"</tbody></table>\";\r\n        return result;\r\n    }\r\n}\r\nexports.MethodResultTableRenderer = MethodResultTableRenderer;\r\nMethodResultTableRenderer.HEADINGS_DEFAULT = null;\r\nMethodResultTableRenderer.ROUNDING_DEFAULT = null;\r\n//# sourceMappingURL=MethodResultTableRenderer.js.map\n\n//# sourceURL=webpack://comp-math-lab-2/./src/js/ui/renderers/MethodResultTableRenderer.js?");

/***/ }),

/***/ "./src/js/ui/renderers/tablesheadings.config.js":
/*!******************************************************!*\
  !*** ./src/js/ui/renderers/tablesheadings.config.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    chordsMethodResultTableHeadings: [\r\n        \"№ итерации\",\r\n        \"a\",\r\n        \"b\",\r\n        \"x\",\r\n        \"F(a)\",\r\n        \"F(b)\",\r\n        \"F(x)\",\r\n        \"|xn - xn-1|\",\r\n    ],\r\n    newtonMethodResultTableHeadings: [\r\n        \"№ итерации\",\r\n        \"xn\",\r\n        \"F(xn)\",\r\n        \"F'(xn)\",\r\n        \"xn+1\",\r\n        \"|xn+1 - xn|\",\r\n    ],\r\n    simpleIterationsMethodResultTableHeadings: [\r\n        \"№ итерации\",\r\n        \"xn\",\r\n        \"xn+1\",\r\n        \"Fi(xn+1)\",\r\n        \"f(xn+1)\",\r\n        \"|xn+1 - xn|\",\r\n    ],\r\n};\r\n//# sourceMappingURL=tablesheadings.config.js.map\n\n//# sourceURL=webpack://comp-math-lab-2/./src/js/ui/renderers/tablesheadings.config.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;