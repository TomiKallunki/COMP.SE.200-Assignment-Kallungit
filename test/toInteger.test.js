
import toInteger from '../src/toInteger';

test('TI01: positive decimal -> rounded down to nearest integer', () => {
    expect(toInteger(1.5)).toBe(1);
});

test('TI02: positive integer -> itself', () => {
    expect(toInteger(5)).toBe(5);
});

test('TI03: negative decimal -> rounded down to nearest integer', () => {
    expect(toInteger(-77.123)).toBe(-77);
});

test('TI04: number min value -> integer', () => {
    expect(toInteger(Number.MIN_VALUE)).toBe(0);
});

test('TI05: number max value -> integer', () => {
    expect(toInteger(Number.MAX_VALUE)).toBe(1.7976931348623157e+308);
});

test('TI06: infinity value -> integer', () => {
    expect(toInteger(Infinity)).toBe(1.7976931348623157e+308);
});

test('TI07: decimal number as string -> converted to integer and rounded down to nearest integer', () => {
    expect(toInteger('55.22')).toBe(55);
});

test('TI08: zero -> zero', () => {
    expect(toInteger(0)).toBe(0);
});

test('TI09: non-numeric string as parameter', () => {
    expect(toInteger('zxc')).toBeFalsy();
});

test('TI10: null as parameter', () => {
    expect(toInteger(null)).toBeFalsy();
});

test('TI11: undefined as parameter', () => {
    expect(toInteger(undefined)).toBeFalsy();
});

test('TI12: empty string as parameter', () => {
    expect(toInteger('')).toBeFalsy();
});

test('TI13: NaN as parameter', () => {
    expect(toInteger(NaN)).toBeFalsy();
});

test('TI14: empty array as parameter', () => {
    expect(toInteger([])).toBeFalsy();
});

test('TI15: array with several numbers as parameter', () => {
    expect(toInteger([2, 3, 5])).toBeFalsy();
});

test('TI16: array with one number -> the number rounded down to nearest integer', () => {
    expect(toInteger([5.25])).toBe(5);
});

test('TI17: object with number -> the number rounded down to nearest integer', () => {
    expect(toInteger(Object(5.25))).toBe(5);
});

test('TI18: bigint number -> number as integer', () => {
    expect(toInteger(BigInt(5))).toBe(5);
});