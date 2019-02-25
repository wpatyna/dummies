
class Random {

    nextInt(bound) {
        const number = Math.floor(Math.random() * bound);
        return number < 0 ? -number : number;
    }

    nextGaussian(min=-1, max=1, skew=0.8) {
        let u = 0, v = 0;
        while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
        while(v === 0) v = Math.random();
        let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );

        num = num / 10.0 + 0.5; // Translate to 0 -> 1
        if (num > 1 || num < 0) num = this.nextGaussian(min, max, skew); // resample between 0 and 1 if out of range
        num = Math.pow(num, skew); // Skew
        num *= max - min; // Stretch to fill range
        num += min; // offset to min
        return num;
    }


    nextDouble() {
        return Math.random()

    }
}

export default Random;