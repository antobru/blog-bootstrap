interface Car {
    engine: any;

    startEngine(): boolean;
}

class Toyota implements Car {
    engine: any;

    startEngine(): boolean {
        throw new Error("Method not implemented.");
    }
}