class Random {

    nextInt(bound) {
        const number = Math.floor(Math.random() * bound);
        return number < 0 ? -number : number;
    }

    nextGaussian() {
        let x1, x2, rad;
        do {
            x1 = 2 * Math.random() - 1;
            x2 = 2 * Math.random() - 1;
            rad = x1 * x1 + x2 * x2;
        } while (rad >= 1 || rad === 0);
        let c = Math.sqrt(-2 * Math.log(rad) / rad);
        return x1 * c;
    }

    nextDouble() {
        return Math.random()

    }
}

export default Random;