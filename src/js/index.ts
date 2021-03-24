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
import {MethodInputWithInitApprox} from "./core/inputs/MethodInputWithInitApprox";
import {MethodResultTableRenderer} from "./ui/renderers/MethodResultTableRenderer";
import tablesHeadings from "./ui/renderers/tablesheadings.config";

const form: HTMLFormElement = document.getElementById("form") as HTMLFormElement;

// @ts-ignore
const aInput: HTMLInputElement = document.getElementById("a") as HTMLInputElement;
// @ts-ignore
const bInput: HTMLInputElement = document.getElementById("b") as HTMLInputElement;
// @ts-ignore
const initApproxInput: HTMLInputElement = document.getElementById("init-approx") as HTMLInputElement;
// @ts-ignore
const accuracyInput: HTMLInputElement = document.getElementById("accuracy") as HTMLInputElement;


// @ts-ignore
const newtonRadio: HTMLInputElement = document.getElementById("newton") as HTMLInputElement;
// @ts-ignore
const chordsRadio: HTMLInputElement = document.getElementById("chords") as HTMLInputElement;
// @ts-ignore
const simpleIterationsRadio: HTMLInputElement = document.getElementById("simple-iterations") as HTMLInputElement;
const messageBlock: HTMLDivElement = document.getElementById("message-block") as HTMLDivElement;
const messageContent: HTMLDivElement = document.getElementById("message-content") as HTMLDivElement;

const table: HTMLDivElement = document.getElementById("table-full") as HTMLDivElement;
const tableBlock: HTMLDivElement = document.getElementById("table-block") as HTMLDivElement;

const initApproxGroupBlock: HTMLDivElement = document.getElementById("init-approx-group") as HTMLDivElement;

// @ts-ignore
const fileInput: HTMLInputElement = document.getElementById("file") as HTMLInputElement;


const mainTableX: HTMLTableDataCellElement = document.getElementById("table-main-x") as HTMLTableDataCellElement;
const mainTableFX: HTMLTableDataCellElement = document.getElementById("table-main-fX") as HTMLTableDataCellElement;
const mainTableIterNumber: HTMLTableDataCellElement = document.getElementById("table-main-iterations-number") as HTMLTableDataCellElement;

const plot: HTMLDivElement = document.getElementById('plot') as HTMLDivElement;


let xPlotValues: Array<number>;
let yPlotValues: Array<number>;

newtonRadio.addEventListener("click", () => displayInput(initApproxGroupBlock, true, true));
chordsRadio.addEventListener("click", () => displayInput(initApproxGroupBlock, false, true));
simpleIterationsRadio.addEventListener("click", () => displayInput(initApproxGroupBlock, true, true));

// fadeOutElement(messageBlock, 6);


const firstFuncCont: FirstFunctionContainer = new FirstFunctionContainer();
const secondFuncCont: SecondFunctionContainer = new SecondFunctionContainer();
const thirdFuncCont: ThirdFunctionContainer = new ThirdFunctionContainer();

const chordsMethod: ChordsMethod = new ChordsMethod();
const newtonMethod: NewtonMethod = new NewtonMethod();
const simpleIterationsMethod: SimpleIterationsMethod = new SimpleIterationsMethod();





// InClUdE html в самом конце
includeHTML(); // в html должно быть '<div include-html="./ime.html"></div>  '



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

    console.log("FuncCon:", funcCont.getFunctionRepresentation(), "Methd:", method);

    let resultTable: MethodResultTable;

    try {
        if ( ! (method instanceof ChordsMethod) ) {
            resultTable = method.calculate(new MethodInputWithInitApprox(a, b, initApprox, accuracy), funcCont)
        } else {
            resultTable = method.calculate(new MethodInput(a, b, accuracy), funcCont)
        }

        const decPlacesNumber: number = accuracy.toString().length - 2;
        console.log(tableHeading);
        console.log(MethodResultTableRenderer.render(resultTable, decPlacesNumber, tableHeading))

        table.innerHTML = MethodResultTableRenderer.render(resultTable, accuracy.toString().length - 2, tableHeading);

        mainTableX.innerText = (+resultTable.getFinalX().toFixed(decPlacesNumber)).toString();
        mainTableFX.innerText = (+resultTable.getFinalXFunc().toFixed(decPlacesNumber)).toString();
        mainTableIterNumber.innerText = (+resultTable.getNumberOfIterations().toFixed(decPlacesNumber)).toString();

        displayElement(tableBlock, true);

        xPlotValues = [];
        yPlotValues = [];

        let shift: number = Math.abs(b - a) / 4;

        for (let i = a - shift; i < b + shift; i+=0.001) {
            xPlotValues.push(i);
            yPlotValues.push(funcCont.calc(i))
        }

        drawPlot();

        fileInput.value = "";

    } catch (e) {
        showMessage(e);
        fadeOutElement(messageBlock, 12);
    }
})

//
fileInput.addEventListener("change", () => {
    getDataFromFile();
});

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
            if (! display) {
                child.value = "";
            }
        }
    }
    displayElement(element, display);


}


function fadeOutElement(element: HTMLElement, s: number = 0) {

    console.log("hhhhhhhhhhh")
    element.classList.add("fade-out");
    element.style.animation = `fadeOut ease ${s}s`
    setTimeout(() => {
        element.classList.add("hidden");
        element.classList.remove("fade-out");
        // element.style.animation = "";


    }, s * 1000)

}

function replaceAndReturn(str: string, from: string, to: string) {
    str.replace(from, to);
    return str;
}


//Make the DIV element draggable:
dragElement(document.getElementById("draggable-block") as HTMLDivElement);

function dragElement(elmnt: HTMLElement) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "-header")) {
        /* if present, the header is where you move the DIV from:*/

        // @ts-ignore
        document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
    } else {
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
    Plotly.newPlot( plot, [{
            x: xPlotValues,
            y: yPlotValues }], {
            margin: { t: 0 } },
        {displayModeBar: false,
            scrollZoom: true});
}

function getDataFromFile() {
    // @ts-ignore
    if (fileInput == null || fileInput.files.length == 0) {
        throw Error("No files chosen.");
    }

    // @ts-ignore
    let file: File = fileInput.files[0];

    let reader: FileReader = new FileReader();

    reader.readAsText(file);

    reader.onload = () => {
        let result = (reader.result as string).split(" ");
        console.log("result splitted = ", result)

        if (result.length < 3 || result.length > 4) {
            showMessage("File contains Invalid number of parameters.");
            fadeOutElement(messageBlock, 8);

        } else {
            for (let num of result) {
                if ( ! isNumeric(num)) {
                    showMessage(`Error: '${num}' is not a number.`)
                    fadeOutElement(messageBlock, 8);
                    console.log("eror")
                    return;
                }
            }

            chordsRadio.click();
            aInput.value = parseFloat(result[0]).toString(); // is because isNumeric( '0.01asdasd' ) retutn 'true'
            bInput.value = parseFloat(result[1]).toString(); // js wtf parseFloat('0.01asdasd') = '0.01'
            accuracyInput.value = parseFloat(result[2]).toString();

            if ( result.length == 4) {
                initApproxInput.value = parseFloat(result[2]).toString();
                accuracyInput.value = parseFloat(result[3]).toString();

                newtonRadio.click();
            }
        }
    }

    reader.onerror = () => {
        showMessage("Can't read the file.")
        fadeOutElement(messageBlock, 8);
    }

}


function isNumeric(str: string) {
     // we only process strings!
    return !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}



function includeHTML() {
    let z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include-html");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
};