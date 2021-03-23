import {MethodResultTable} from "../../core/results/MethodResultTable";


export class MethodResultTableRenderer {

    public static readonly HEADINGS_DEFAULT: null = null;
    public static readonly ROUNDING_DEFAULT: null = null;


    public static render(
        resultTable: MethodResultTable | null,
        rounding: number | null = this.ROUNDING_DEFAULT,
        headings: Array<any> | null = MethodResultTableRenderer.HEADINGS_DEFAULT): string {

        let result: string = "<table>";

        if ( headings != null && headings.length != 0) {
            result += "<thead><tr>"

            for (let heading of headings) {
                result += `<th>${heading}</th>`
            }
            result += "</tr></thead>";
        }

        result += "<tbody>"

        if ( resultTable != null ) {
            for (let row of resultTable) {
                result += "<tr>"
                for (let elem of row) {
                    if (elem == null)
                        elem = "-"
                    if ( typeof elem == 'number' && rounding != null ) {
                        elem = +elem.toFixed(rounding)
                        // elem = Math.round(elem * 10 * rounding) / (10 * rounding)
                    }

                    result += `<td>${elem}</td>`
                }
                result += "</tr>"
            }
        }

        result += "</tbody></table>"

        return result;
    }
}