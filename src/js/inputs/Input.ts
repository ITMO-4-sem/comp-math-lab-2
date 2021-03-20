abstract class Input {

    private accuracy: number = 0.1;


    constructor(accuracy: number) {
       this.setAccuracy(accuracy);
    }


    public getAccuracy(): number {
        return this.accuracy;
    }

    public setAccuracy(accuracy: number) {

        if (accuracy > 1) {
            throw new Error("Accuracy (epsilon) must be below 1.")
        }
        this.accuracy = accuracy;
    }

}