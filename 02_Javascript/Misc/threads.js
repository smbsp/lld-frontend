class H2O {
    constructor() {
        this.hydrogenCount = 0;
        this.oxygenCount = 0;
        this.hydrogenQueue = [];
        this.oxygenQueue = [];
    }

    async hydrogen(releaseHydrogen) {
        return new Promise((resolve) => {
            this.hydrogenQueue.push(releaseHydrogen);
            this.processMolecule();
            resolve();
        });
    }

    async oxygen(releaseOxygen) {
        return new Promise((resolve) => {
            this.oxygenQueue.push(releaseOxygen);
            this.processMolecule();
            resolve();
        });
    }

    processMolecule() {
        if (this.hydrogenQueue.length >= 2 && this.oxygenQueue.length >= 1) {
            const releaseHydrogen1 = this.hydrogenQueue.shift();
            const releaseHydrogen2 = this.hydrogenQueue.shift();
            const releaseOxygen = this.oxygenQueue.shift();

            releaseHydrogen1();
            releaseHydrogen2();
            releaseOxygen();
        }
    }
}

const water = new H2O();
water.hydrogen(() => console.log('H'));
water.oxygen(() => console.log('O'));
water.hydrogen(() => console.log('H'));
water.oxygen(() => console.log('O'));
water.oxygen(() => console.log('O'));
water.hydrogen(() => console.log('H'));
water.hydrogen(() => console.log('H'));
water.hydrogen(() => console.log('H'));
water.hydrogen(() => console.log('H'));