import {Day} from "../day";

class Day4 extends Day {

    constructor() {
        super(4);
    }

    values_includes(firstPair: number[], secondPair: number[]): boolean {
        return Math.max(...firstPair) <= Math.max(...secondPair) && Math.min(...firstPair) >= Math.min(...secondPair);
    }

    values_overlap(firstPair: number[], secondPair: number[]): boolean {
        return Math.max(...firstPair) <= Math.max(...secondPair) && Math.min(...firstPair) >= Math.min(...secondPair) ||
            Math.min(...firstPair) <= Math.max(...secondPair) && Math.max(...firstPair) >= Math.min(...secondPair);
    }

    solveForPartOne(input: string): string {
        const lines = input.split('\n').filter(s => Boolean(s));
        let count = 0;
        for (const line of lines) {
            const pairs = line.split(',');
            const pairsNumber = pairs.map(v => v.split('-').map(vv => parseInt(vv, 10)));
            if (this.values_includes(pairsNumber[0], pairsNumber[1]) || this.values_includes(pairsNumber[1], pairsNumber[0])) {
                count++;
            }

        }
        return count.toString();
    }

    solveForPartTwo(input: string): string {
        const lines = input.split('\n').filter(s => Boolean(s));
        let count = 0;
        for (const line of lines) {
            const pairs = line.split(',');
            const pairsNumber = pairs.map(v => v.split('-').map(vv => parseInt(vv, 10)));
            if (this.values_overlap(pairsNumber[0], pairsNumber[1]) || this.values_overlap(pairsNumber[1], pairsNumber[0])) {
                count++;
            }

        }
        return count.toString();
    }
}

export default new Day4;
