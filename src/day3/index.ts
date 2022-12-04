import {Day} from "../day";

class Day3 extends Day {

    constructor() {
        super(3);
    }

    getValue(intersect: string): number {
        if (intersect && intersect.match(/[a-z]/)) {
            return intersect.charCodeAt(0) - 96;
        } else if (intersect && intersect.match(/[A-Z]/)) {
            return (intersect.charCodeAt(0) - 65) + 27;
        } else {
            console.log(intersect)
            throw Error('unknown');
        }
    }

    solveForPartOne(input: string): string {
        let sum = 0;
        const lines = input.split('\n').filter(s => Boolean(s));
        for (const rucksack of lines) {
            const firstPart = rucksack.substring(0, rucksack.length / 2).split('');
            const secondPart = rucksack.substring(rucksack.length / 2, rucksack.length).split('');
            const intersect = firstPart.filter(a => secondPart.includes(a)).pop();
            if (intersect) {
                sum += this.getValue(intersect);
            }

        }
        return sum.toString();
    }

    solveForPartTwo(input: string): string {
        let sum = 0;
        let i = 0;
        const lines = input.split('\n').filter(s => Boolean(s));
        let slots = [];
        for (const rucksack of lines) {
            i++;
            slots.push(rucksack.split(''));
            if (i % 3 === 0) {
                const intersect = slots.reduce((a, b) => a.filter(c => b.includes(c))).pop();
                if (intersect) {
                    sum += this.getValue(intersect);
                }
                slots = [];
            }
        }
        return sum.toString();
    }
}

export default new Day3;
