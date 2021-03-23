"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FirstFunctionContainer_1 = require("./core/functions/FirstFunctionContainer");
const SecondFunctionContainer_1 = require("./core/functions/SecondFunctionContainer");
const ThirdFunctionContainer_1 = require("./core/functions/ThirdFunctionContainer");
const ChordsMethod_1 = require("./core/methods/ChordsMethod");
const NewtonMethod_1 = require("./core/methods/NewtonMethod");
const SimpleIterationsMethod_1 = require("./core/methods/SimpleIterationsMethod");
const MethodInput_1 = require("./core/inputs/MethodInput");
const NewtonMethodInput_1 = require("./core/inputs/NewtonMethodInput");
const MethodResultTableRenderer_1 = require("./ui/renderers/MethodResultTableRenderer");
const tablesheadings_config_1 = __importDefault(require("./ui/renderers/tablesheadings.config"));
const form = document.getElementById("form");
// @ts-ignore
const newtonRadio = document.getElementById("newton");
// @ts-ignore
const chordsRadio = document.getElementById("chords");
// @ts-ignore
const simpleIterationsRadio = document.getElementById("simple-iterations");
const messageBlock = document.getElementById("message-block");
const messageContent = document.getElementById("message-content");
const tableBlock = document.getElementById("table");
const initApproxGroupBlock = document.getElementById("init-approx-group");
newtonRadio.addEventListener("click", () => displayInput(initApproxGroupBlock, true, true));
chordsRadio.addEventListener("click", () => displayInput(initApproxGroupBlock, false, true));
simpleIterationsRadio.addEventListener("click", () => displayInput(initApproxGroupBlock, false, true));
fadeOutElement(messageBlock, 6);
const firstFuncCont = new FirstFunctionContainer_1.FirstFunctionContainer();
const secondFuncCont = new SecondFunctionContainer_1.SecondFunctionContainer();
const thirdFuncCont = new ThirdFunctionContainer_1.ThirdFunctionContainer();
const chordsMethod = new ChordsMethod_1.ChordsMethod();
const newtonMethod = new NewtonMethod_1.NewtonMethod();
const simpleIterationsMethod = new SimpleIterationsMethod_1.SimpleIterationsMethod();
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    // @ts-ignore
    const func = formData.get("function");
    // @ts-ignore
    const a = parseFloat(formData.get("a"));
    // @ts-ignore
    const b = parseFloat(formData.get("b"));
    // @ts-ignore
    const initApprox = parseFloat(formData.get("init-approx"));
    // @ts-ignore
    const accuracy = parseFloat(formData.get("accuracy"));
    let tableHeading;
    let funcCont;
    switch (func) {
        case "first-function": {
            funcCont = firstFuncCont;
            break;
        }
        case "second-function": {
            funcCont = secondFuncCont;
            break;
        }
        case "third-function": {
            funcCont = thirdFuncCont;
            break;
        }
        default: {
            funcCont = firstFuncCont;
            break;
        }
    }
    let method;
    switch (formData.get("method")) {
        case "chords": {
            method = chordsMethod;
            tableHeading = tablesheadings_config_1.default.chordsMethodResultTableHeadings;
            // alert("chords")
            break;
        }
        case "newton": {
            method = newtonMethod;
            tableHeading = tablesheadings_config_1.default.newtonMethodResultTableHeadings;
            // alert("newton")
            break;
        }
        case "simple-iterations": {
            method = simpleIterationsMethod;
            tableHeading = tablesheadings_config_1.default.simpleIterationsMethodResultTableHeadings;
            // alert("simpit")
            break;
        }
        default: {
            method = chordsMethod;
            tableHeading = tablesheadings_config_1.default.chordsMethodResultTableHeadings;
            break;
        }
    }
    console.log("FuncCon:", funcCont.getFunctionRepresentation(), "Methd:", method);
    let resultTable;
    try {
        if (method instanceof NewtonMethod_1.NewtonMethod) {
            resultTable = method.calculate(new NewtonMethodInput_1.NewtonMethodInput(a, b, initApprox, accuracy), funcCont);
        }
        else {
            resultTable = method.calculate(new MethodInput_1.MethodInput(a, b, accuracy), funcCont);
        }
        console.log(tableHeading);
        console.log(MethodResultTableRenderer_1.MethodResultTableRenderer.render(resultTable, tableHeading));
        tableBlock.innerHTML = MethodResultTableRenderer_1.MethodResultTableRenderer.render(resultTable, accuracy.toString().length - 2, tableHeading);
    }
    catch (e) {
        showMessage(e);
        fadeOutElement(messageBlock, 12);
    }
});
function showMessage(message) {
    messageContent.innerText = message;
    displayElement(messageBlock, true);
}
function displayElement(element, display) {
    if (display) {
        element.classList.remove("hidden");
    }
    else {
        element.classList.add("hidden");
    }
}
function displayInput(element, display, isRequired = false) {
    for (let child of element.children) {
        if (child instanceof HTMLInputElement) {
            child.required = (display && isRequired);
        }
    }
    displayElement(element, display);
}
function fadeOutElement(element, s = 0) {
    element.classList.add("fade-out");
    element.style.animation = `fadeOut ease ${s}s`;
    setTimeout(() => {
        element.classList.add("hidden");
        element.classList.remove("fade-out");
    }, s * 1000);
}
function replaceAndReturn(str, from, to) {
    str.replace(from, to);
    return str;
}
//# sourceMappingURL=index.js.map