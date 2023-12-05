
import toString from '../src/toString';

test('TS01: non-empty string -> itself', () => {
    expect(toString('Something')).toBe('Something');
});

test('TS02: empty string -> itself', () => {
    expect(toString('')).toBe('');
});

test('TS03: null -> empty string', () => {
    expect(toString(null)).toBe('');
});

test('TS04: undefined -> empty string', () => {
    expect(toString(undefined)).toBe('');
});

test('TS05: positive integer -> itself as a string', () => {
    expect(toString(2)).toBe('2');
});

test('TS06: negative integer -> itself as a string', () => {
    expect(toString(-50)).toBe('-50');
});

test('TS07: zero -> itself as a string', () => {
    expect(toString(0)).toBe('0');
});

test('TS08: minus zero -> itself as a string', () => {
    expect(toString(-0)).toBe('-0');
});

test('TS09: positive float .> itself as a string', () => {
    expect(toString(23.456)).toBe('23.456');
});

test('TS10: negative float -> itself as a string', () => {
    expect(toString(-0.123123123123)).toBe('-0.123123123123');
});

test('TS11: symbol -> itself as a string', () => {
    expect(toString(Symbol('sym'))).toBe('Symbol(sym)');
});

test('TS12: object with value -> the value as a string', () => {
    expect(toString(Object(2))).toBe('2');
});

test('TS13: array of numbers -> the numbers separated with commas as a string', () => {
    expect(toString([3, 7.2342, 4])).toBe('3,7.2342,4');
});

test('TS14: array of strings -> concatenation of the strings separated with commas', () => {
    expect(toString(['A', 'Betle hem', 'c1,,23C'])).toBe('A,Betle hem,c1,,23C');
});

test('TS15: empty array -> empty string', () => {
    expect(toString([])).toBe('');
});

test('TS16: array of symbols -> the symbols separated with commas as a string', () => {
    expect(toString([Symbol(), Symbol('one'), Symbol(5.4321)])).toBe('Symbol(),Symbol(one),Symbol(5.4321)');
});

test('TS17: array of null/undefined values results in a string with n-1 commas', () => {
    expect(toString([null, undefined, null])).toBe(',,');
});

test('TS18: NaN -> NaN as a string', () => {
    expect(toString(NaN)).toBe('NaN');
});

test('TS19: bigint number -> the number as a string', () => {
    expect(toString(BigInt(5))).toBe('5');
});