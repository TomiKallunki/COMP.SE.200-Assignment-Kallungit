
import map from '../src/map';

function square(n) {return n*n};
function position(val, pos) {return `${val} is at ${pos}`};
function positionVerbose(val, pos, array) {return `${val} is at ${pos} in [${array}]`}

test('Empty array results in empty array', () => {
    expect(map([], square)).toEqual([]);
});

test('No array results in empty array', () => {
    expect(map(null, square)).toEqual([]);
});

test('Array of numbers squared (1 parameter for iteratee)', () => {
    expect(map([2, 4, 6, -1], square)).toEqual([4, 16, 36, 1]);
});

test('Array of values with positions (2 parameters for iteratee)', () => {
    expect(map([2, 'Bob', null, -1.345], position)).toEqual(['2 is at 0', 'Bob is at 1', 'null is at 2', '-1.345 is at 3']);
});

test('Array of values with verbose positions (3 parameters for iteratee)', () => {
    expect(map([2, 'Bob', null], positionVerbose)).toEqual(['2 is at 0 in [2,Bob,]', 'Bob is at 1 in [2,Bob,]', 'null is at 2 in [2,Bob,]']);
});
