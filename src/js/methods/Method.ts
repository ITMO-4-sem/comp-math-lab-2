abstract class Method {

    private funcCont: FunctionContainer;

    constructor(funcCont: FunctionContainer) {
        this.funcCont = funcCont;
    }

    abstract calculate(): void;
    abstract getCalculationResult(): MethodResultTable;
}