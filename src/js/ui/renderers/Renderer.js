"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Renderer = void 0;
class Renderer {
    static render(resultTable, rounding = this.ROUNDING_DEFAULT, headings = Renderer.HEADINGS_DEFAULT) {
        let result = "<table>";
        if (headings != null && headings.length != 0) {
            result += "<thead><tr>";
            for (let heading of headings) {
                result += `<th>${heading}</th>`;
            }
            result += "</tr></thead>";
        }
        result += "<tbody>";
        if (resultTable != null) {
            for (let row of resultTable) {
                result += "<tr>";
                for (let elem of row) {
                    if (elem == null)
                        elem = "-";
                    if (typeof elem == 'number' && rounding != null) {
                        elem = +elem.toFixed(rounding);
                        // elem = Math.round(elem * 10 * rounding) / (10 * rounding)
                    }
                    result += `<td>${elem}</td>`;
                }
                result += "</tr>";
            }
        }
        result += "</tbody></table>";
        return result;
    }
}
exports.Renderer = Renderer;
Renderer.HEADINGS_DEFAULT = null;
Renderer.ROUNDING_DEFAULT = null;
//# sourceMappingURL=Renderer.js.map