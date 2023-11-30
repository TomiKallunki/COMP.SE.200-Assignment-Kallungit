
import toString from '../src/toString';

/*

test('', () => {
    expect(toString()).toBe();
});
 */

test('Non-empty string results in itself', () => {
    expect(toString('Something')).toBe('Something');
});

test('Empty string results in itself', () => {
    expect(toString('')).toBe('');
});

test('Null results in empty string', () => {
    expect(toString(null)).toBe('');
});

test('Undefined results in empty string', () => {
    expect(toString(undefined)).toBe('');
});

test('No parameter results in empty string', () => {
    expect(toString()).toBe('');
});

test('Positive integer results in itself as a string', () => {
    expect(toString(2)).toBe('2');
});

test('Negative integer results in itself as a string', () => {
    expect(toString(-50)).toBe('-50');
});

test('Zero results in itself as a string', () => {
    expect(toString(0)).toBe('0');
});

test('Minus zero results in itself as a string', () => {
    expect(toString(-0)).toBe('-0');
});

test('Positive float results in itself as a string', () => {
    expect(toString(23.456)).toBe('23.456');
});

test('Negative float results in itself as a string', () => {
    expect(toString(-0.123123123123)).toBe('-0.123123123123');
});

test('Symbol results in itself as a string', () => {
    expect(toString(Symbol('sym'))).toBe('Symbol(sym)');
});

test('Object with value results in the value as a string', () => {
    expect(toString(Object(2))).toBe('2');
});

test('Array of numbers results in the numbers separated with commas as a string', () => {
    expect(toString([3, 7.2342, 4])).toBe('3,7.2342,4');
});

test('Array of strings results in the concatenation of the strings separated with commas', () => {
    expect(toString(['A', 'Betle hem', 'c1,,23C'])).toBe('A,Betle hem,c1,,23C');
});

test('Empty array results in an empty string', () => {
    expect(toString([])).toBe('');
});

test('Array of symbols results in the symbols separated with commas as a string', () => {
    expect(toString([Symbol(), Symbol('one'), Symbol(5.4321)])).toBe('Symbol(),Symbol(one),Symbol(5.4321)');
});

test('Array of n null values results in a string with n-1 commas', () => {
    expect(toString([null, undefined, null])).toBe(',,');
});

