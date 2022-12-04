import day3 from './index';

describe('On Day 3', () => {
    it(`part1 is identity function`, () => {
        expect(day3.solveForPartOne('vJrwpWtwJgWrhcsFMMfFFhFp\n' +
            'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\n' +
            'PmmdzqPrVvPwwTWBwg\n' +
            'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn\n' +
            'ttgJtRGJQctTZtZT\n' +
            'CrZsJsPPZsGzwwsLwLmpwMDw\n')).toBe('157');
    })
    it(`part2 is identity function`, () => {
        expect(day3.solveForPartTwo('vJrwpWtwJgWrhcsFMMfFFhFp\n' +
            'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\n' +
            'PmmdzqPrVvPwwTWBwg\n' +
            'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn\n' +
            'ttgJtRGJQctTZtZT\n' +
            'CrZsJsPPZsGzwwsLwLmpwMDw\n')).toBe('70');
    })
});
