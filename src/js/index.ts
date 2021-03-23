import {FirstFunctionContainer} from "./core/functions/FirstFunctionContainer";
import {SecondFunctionContainer} from "./core/functions/SecondFunctionContainer";
import {ThirdFunctionContainer} from "./core/functions/ThirdFunctionContainer";
import {ChordsMethod} from "./core/methods/ChordsMethod";
import {NewtonMethod} from "./core/methods/NewtonMethod";
import {SimpleIterationsMethod} from "./core/methods/SimpleIterationsMethod";
import {Method} from "./core/methods/Method";
import {FunctionContainer} from "./core/functions/FunctionContainer";
import {MethodResultTable} from "./core/results/MethodResultTable";
import {MethodInput} from "./core/inputs/MethodInput";
import {NewtonMethodInput} from "./core/inputs/NewtonMethodInput";
import {MethodResultTableRenderer} from "./ui/renderers/MethodResultTableRenderer";
import tablesHeadings from "./ui/renderers/tablesheadings.config";

const form: HTMLFormElement = document.getElementById("form") as HTMLFormElement;
// @ts-ignore
const newtonRadio: HTMLInputElement = document.getElementById("newton") as HTMLInputElement;
// @ts-ignore
const chordsRadio: HTMLInputElement = document.getElementById("chords") as HTMLInputElement;
// @ts-ignore
const simpleIterationsRadio: HTMLInputElement = document.getElementById("simple-iterations") as HTMLInputElement;
const messageBlock: HTMLDivElement = document.getElementById("message-block") as HTMLDivElement;
const messageContent: HTMLDivElement = document.getElementById("message-content") as HTMLDivElement;

const tableBlock: HTMLDivElement = document.getElementById("table") as HTMLDivElement;


const initApproxGroupBlock: HTMLDivElement = document.getElementById("init-approx-group") as HTMLDivElement;

newtonRadio.addEventListener("click", () => displayInput(initApproxGroupBlock, true, true));
chordsRadio.addEventListener("click", () => displayInput(initApproxGroupBlock, false, true));
simpleIterationsRadio.addEventListener("click", () => displayInput(initApproxGroupBlock, false, true));

fadeOutElement(messageBlock, 6);


const firstFuncCont: FirstFunctionContainer = new FirstFunctionContainer();
const secondFuncCont: SecondFunctionContainer = new SecondFunctionContainer();
const thirdFuncCont: ThirdFunctionContainer = new ThirdFunctionContainer();

const chordsMethod: ChordsMethod = new ChordsMethod();
const newtonMethod: NewtonMethod = new NewtonMethod();
const simpleIterationsMethod: SimpleIterationsMethod = new SimpleIterationsMethod();



form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    // @ts-ignore
    const func: string = formData.get("function");

    // @ts-ignore
    const a: number = parseFloat(formData.get("a"));

    // @ts-ignore
    const b: number = parseFloat(formData.get("b"));

    // @ts-ignore
    const initApprox: number | null = parseFloat(formData.get("init-approx"));

    // @ts-ignore
    const accuracy: number = parseFloat(formData.get("accuracy"));

    let tableHeading;


    let funcCont: FunctionContainer;
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


    let method: Method;
    switch (formData.get("method")) {
        case "chords" : {
            method = chordsMethod;
            tableHeading = tablesHeadings.chordsMethodResultTableHeadings;
            // alert("chords")
            break;
        }
        case "newton": {
            method = newtonMethod;
            tableHeading = tablesHeadings.newtonMethodResultTableHeadings;
            // alert("newton")

            break;
        }
        case "simple-iterations": {
            method = simpleIterationsMethod;
            tableHeading = tablesHeadings.simpleIterationsMethodResultTableHeadings;
            // alert("simpit")

            break;
        }
        default: {
            method = chordsMethod;
            tableHeading = tablesHeadings.chordsMethodResultTableHeadings;
            break;
        }
    }

    console.log("FuncCon:" , funcCont.getFunctionRepresentation(), "Methd:", method);

    let resultTable: MethodResultTable;

    try {
        if (method instanceof NewtonMethod) {
            resultTable = method.calculate(new NewtonMethodInput(a, b, initApprox, accuracy), funcCont)
        } else {
            resultTable = method.calculate(new MethodInput(a, b, accuracy), funcCont)
        }

        console.log(tableHeading);
        console.log(MethodResultTableRenderer.render(resultTable, tableHeading))

        tableBlock.innerHTML = MethodResultTableRenderer.render(resultTable, accuracy.toString().length - 2, tableHeading);

    } catch (e) {
        showMessage(e);
        fadeOutElement(messageBlock, 12);
    }
})




function showMessage(message: string) {
    messageContent.innerText = message;
    displayElement(messageBlock, true);
}

function displayElement(element: HTMLElement, display: boolean) {
    if (display) {
        element.classList.remove("hidden");
    } else {
        element.classList.add("hidden");
    }
}

function displayInput(element: HTMLElement, display: boolean, isRequired: boolean = false) {

    for (let child of element.children) {
        if (child instanceof HTMLInputElement) {
            child.required = (display && isRequired);
        }
    }
    displayElement(element, display);


}


function fadeOutElement(element: HTMLElement, s: number = 0) {
    element.classList.add("fade-out");
    element.style.animation = `fadeOut ease ${s}s`
    setTimeout( () => {
        element.classList.add("hidden");
        element.classList.remove("fade-out");

    }, s * 1000)
}

function replaceAndReturn(str: string, from: string, to: string) {
    str.replace(from, to);
    return str;
}

