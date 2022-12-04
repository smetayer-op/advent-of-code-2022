import {Day} from "../day";

class Day2 extends Day {

    constructor() {
        super(2);
    }

    solveForPartOne(input: string): string {
        const win = {'A': 'Y', 'B': 'Z', 'C': 'X'};
        const loose = {'A': 'Z', 'B': 'X', 'C': 'Y'};
        const points = {'X': 1, 'Y': 2, 'Z': 3};
        let sum = 0;
        const lines = input.split('\n').filter(s => Boolean(s));
        for (const line of lines) {
            const [opponentChoice, playerChoice] = line.split(" ");
            // @ts-ignore
            sum += points[playerChoice];
            // @ts-ignore
            let winChoice = win[opponentChoice];
            // @ts-ignore
            let looseChoice = loose[opponentChoice];
            switch (playerChoice) {
                case winChoice:
                    sum += 6;
                    break;
                case looseChoice:
                    sum += 0;
                    break;
                // Draw
                default:
                    sum += 3;
                    break;
            }
        }
        return sum.toString(10);
    }

    solveForPartTwo(input: string): string {

        const win = {'A': 'Y', 'B': 'Z', 'C': 'X'};
        const loose = {'A': 'Z', 'B': 'X', 'C': 'Y'};
        const points = {'X': 1, 'Y': 2, 'Z': 3};
        const opponentPoints = {'A': 1, 'B': 2, 'C': 3};
        let sum = 0;
        const lines = input.split('\n').filter(s => Boolean(s));
        for (const line of lines) {
            const [opponentChoice, desiredOutput] = line.split(" ");
            switch (desiredOutput) {
                case 'X': // You need to lose
                    // @ts-ignore
                    sum += points[loose[opponentChoice]];
                    break;
                case 'Y': // Draw : play the same as opponent
                    // @ts-ignore
                    sum += 3 + opponentPoints[opponentChoice];
                    break;
                // Draw
                case 'Z': // You need to win
                    // @ts-ignore
                    sum += 6 + points[win[opponentChoice]];
                    break;
            }
        }
        return sum.toString(10);
    }
}

export default new Day2;
