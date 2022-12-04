import day2 from './index';

describe('On Day 2', () => {
    it(`part1 is identity function`, () => {
        expect(day2.solveForPartOne('A Y\n' +
            'B X\n' +
            'C Z')).toBe('15');
    })
    it(`part2 is identity function`, () => {
        expect(day2.solveForPartTwo('A Y\n' +
            'B X\n' +
            'C Z')).toBe('12');
    })
});
