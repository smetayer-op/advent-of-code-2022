import {Day} from "../day";

class Day1 extends Day {

    constructor() {
        super(1);
    }

    shared(input: string): Array<Number> {
        const lines = input.split('\n');
        const values = []
        let index = 0;
        for (const line of lines) {
            if (line.length === 0) {
                index += 1;
            }
            if (!values[index]) {
                values[index] = Number(line);
            } else {
                values[index] += Number(line);
            }
        }
        return values.sort((a, b) => a - b);
    }

    solveForPartOne(input: string): string {
        // @ts-ignore
        return this.shared(input).pop().toString(10);
    }


    solveForPartTwo(input: string): string {
        const values = this.shared(input);
        // @ts-ignore
        const finalResult = values.pop() + values.pop() + values.pop();
        return finalResult.toString(10);
    }
}

export default new Day1;
