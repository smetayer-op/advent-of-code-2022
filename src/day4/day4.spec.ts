import day4 from './index';

describe('On Day 4', () => {
    it(`part1 is identity function`, () => {
        expect(day4.solveForPartOne('2-4,6-8\n' +
            '2-3,4-5\n' +
            '5-7,7-9\n' +
            '2-8,3-7\n' +
            '6-6,4-6\n' +
            '2-6,4-8\n')).toBe('2');
    })
    it(`part2 is identity function`, () => {
        expect(day4.solveForPartTwo('2-4,6-8\n' +
            '2-3,4-5\n' +
            '5-7,7-9\n' +
            '2-8,3-7\n' +
            '6-6,4-6\n' +
            '2-6,4-8\n')).toBe('4');
    })
});
