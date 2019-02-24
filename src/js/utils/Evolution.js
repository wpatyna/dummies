import Random from "src/js/utils/Random";
import Dummy from "src/js/utils/Dummy";


class Evolution {
    constructor(targetDummy, popSize, mutProb, bestToMean) {

        this.targetDummy = targetDummy;
        this.statisticsHistory = [];
        this._population = [];
        this.dummyWrappers = [];
        this._population = [];
        this.rand = new Random();

        for (let i = 0; i < popSize; i++) {
            this._population[i] = new Dummy();
            this._population[i].randomize();
        }

        this.childrenCount = this.maxChildrenCount;
        this.selPres = bestToMean;
        this.mutProb = mutProb;

        for (let i = 0; i < this._population.length; ++i) {
            this.dummyWrappers.push({});
        }
        this.recalculateDummyWrappers();
    }

    set selPres(bestToMean) {
        if (bestToMean <= 10 && bestToMean >= 0.1) {
            this.bestToMean = bestToMean;
        }
    }

    set mutProb(mutProb) {
        if (mutProb >= 0 && mutProb <= 1) {
            this._mutProb = mutProb;
        }
    }

    get mutProb() {
        return this._mutProb;
    }

    set childrenCount(childrenCount) {
        if (childrenCount <= this.maxChildrenCount) {
            this._childrenCount = childrenCount;
            this.parentCount = this._population.length - childrenCount;
        }
    }

    get childrenCount() {
        return this._childrenCount;
    }

    get maxChildrenCount() {
        return (this._population.length % 2 === 0) ? Math.floor(this._population.length / 2) - 1 : Math.floor(this._population.length / 2);
    }

    get population() {
        return this._population;
    }

    step() {
        let parents = this.select();

        for (let i = 0; i < this.childrenCount; ++i) {
            let secondParentId = this.rand.nextInt(this.parentCount - i);
            let secondParent = parents[secondParentId];
            parents.splice(secondParentId, 1);
            this._population[i] = secondParent;
            let firstParentId = this.rand.nextInt(this.parentCount - (i + 1));
            let firstParent = parents[firstParentId];


            let child = firstParent.crossover(secondParent);
            child.mutate(this.mutProb);


            this._population[this._population.length - (i + 1)] = child;
        }

        for (let i = 0; i < parents.length; ++i) {
            this._population[this.childrenCount + i] = parents[i];
        }
        this._population.sort(function () {
            return 0.5 - Math.random()
        });
        this.recalculateDummyWrappers();
    }

    select() {
        let parents = [];
        for (let i = 0; i < this.parentCount; ++i) {
            let roulettePoint = this.rand.nextDouble();
            if (roulettePoint <= this.dummyWrappers[0].rouletteProb) {
                parents.push(this.dummyWrappers[0].dummy);
            }
            else {
                for (let j = 1; j < this._population.length; j++) {
                    if (this.dummyWrappers[j - 1].rouletteProb < roulettePoint && roulettePoint <= this.dummyWrappers[j].rouletteProb) {
                        parents.push(this.dummyWrappers[j].dummy);
                        break;
                    }
                }
            }
        }
        return parents;
    }

    recalculateDummyWrappers() {

        this.population.forEach((dummy, i) => {
            this.dummyWrappers[i].dummy = dummy;
            this.dummyWrappers[i].distance = dummy.computeDistanceTo(this.targetDummy);
        });

        this.dummyWrappers.sort((a, b) => a.distance - b.distance);

        this._totalDistance = this.dummyWrappers.reduce((prev, curr) => {
            return {distance: prev.distance + curr.distance}
        }).distance;

        this.dummyWrappers = this.recalculateScore();

        this.totalScore = this.dummyWrappers.reduce((prev, curr) => {
            return {score: prev.score + curr.score}
        }).score;

        let probOfSelection = 0;

        this.dummyWrappers = this.dummyWrappers.map(dummyWrapper => {
            const currProbOfSelection = dummyWrapper.score / this.totalScore;
            probOfSelection += currProbOfSelection;

            return {
                ...dummyWrapper,
                probOfSelection: currProbOfSelection,
                rouletteProb: probOfSelection
            }
        });

        const statistics = this.getStatistics();
        this.statisticsHistory.push({distance: statistics.avg, std: statistics.std});
    }

    recalculateScore() {
        let dummyWrappers = this.dummyWrappers.map(dummyWrapper => {
            return {
                ...dummyWrapper,
                score: this.dummyWrappers[this.dummyWrappers.length - 1].distance - dummyWrapper.distance
            }
        });

        let scoreOfMiddle = (dummyWrappers[Math.floor(this._population.length / 2) - 1].score + dummyWrappers[Math.floor(this._population.length / 2)].score) / 2;
        let scoreOfBest = dummyWrappers[0].score + 1;
        let a = 100 * (this.bestToMean - 1) / (this.bestToMean * ((scoreOfBest - scoreOfMiddle) + 1));
        let b = 100 * (scoreOfBest - scoreOfMiddle * this.bestToMean) / (this.bestToMean * ((scoreOfBest - scoreOfMiddle) + 1));
        dummyWrappers = dummyWrappers.map(dummyWrapper => {
            return {
                ...dummyWrapper,
                score: Math.max(dummyWrapper.score * a + b, 0)
            }
        });

        return dummyWrappers
    }

    getStatistics() {

        let avg = this._totalDistance / this._population.length;
        let variance = 0;
        this.dummyWrappers.forEach(dummyWrapper => {
            variance += Math.pow(dummyWrapper.distance - avg, 2) / this._population.length;
        });
        return {
            avg: avg,
            std: Math.sqrt(variance)
        }
    }
}

export default Evolution;