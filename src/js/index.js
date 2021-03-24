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
const table = document.getElementById("table-full");
const tableBlock = document.getElementById("table-block");
const initApproxGroupBlock = document.getElementById("init-approx-group");
const mainTableX = document.getElementById("table-main-x");
const mainTableFX = document.getElementById("table-main-fX");
const mainTableIterNumber = document.getElementById("table-main-iterations-number");
const plot = document.getElementById('plot');
let xPlotValues;
let yPlotValues;
newtonRadio.addEventListener("click", () => displayInput(initApproxGroupBlock, true, true));
chordsRadio.addEventListener("click", () => displayInput(initApproxGroupBlock, false, true));
simpleIterationsRadio.addEventListener("click", () => displayInput(initApproxGroupBlock, false, true));
// fadeOutElement(messageBlock, 6);
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
        const decPlacesNumber = accuracy.toString().length - 2;
        console.log(tableHeading);
        console.log(MethodResultTableRenderer_1.MethodResultTableRenderer.render(resultTable, decPlacesNumber, tableHeading));
        table.innerHTML = MethodResultTableRenderer_1.MethodResultTableRenderer.render(resultTable, accuracy.toString().length - 2, tableHeading);
        mainTableX.innerText = (+resultTable.getFinalX().toFixed(decPlacesNumber)).toString();
        mainTableFX.innerText = (+resultTable.getFinalXFunc().toFixed(decPlacesNumber)).toString();
        mainTableIterNumber.innerText = (+resultTable.getNumberOfIterations().toFixed(decPlacesNumber)).toString();
        displayElement(tableBlock, true);
        xPlotValues = [];
        yPlotValues = [];
        let shift = Math.abs(b - a) / 4;
        for (let i = a - shift; i < b + shift; i += accuracy) {
            xPlotValues.push(i);
            yPlotValues.push(funcCont.calc(i));
        }
        drawPlot();
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
    console.log("hhhhhhhhhhh");
    element.classList.add("fade-out");
    element.style.animation = `fadeOut ease ${s}s`;
    setTimeout(() => {
        element.classList.add("hidden");
        element.classList.remove("fade-out");
        // element.style.animation = "";
    }, s * 1000);
}
function replaceAndReturn(str, from, to) {
    str.replace(from, to);
    return str;
}
//Make the DIV element draggable:
dragElement(document.getElementById("draggable-block"));
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "-header")) {
        /* if present, the header is where you move the DIV from:*/
        // @ts-ignore
        document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
    }
    else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }
    // @ts-ignore
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }
    // @ts-ignore
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
function drawPlot() {
    // @ts-ignore
    Plotly.newPlot(plot, [{
            x: xPlotValues,
            y: yPlotValues
        }], {
        margin: { t: 0 }
    }, { displayModeBar: false,
        scrollZoom: true });
}
//# sourceMappingURL=index.js.map