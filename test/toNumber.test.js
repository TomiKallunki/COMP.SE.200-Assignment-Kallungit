
import toNumber from '../src/toNumber';

test('TN01: integer -> itself', () => {
    expect(toNumber(1)).toBe(1);
});

test('TN02: decimal -> itself', () => {
    expect(toNumber(7.2122)).toBe(7.2122);
});

test('TN03: negative decimal -> itself', () => {
    expect(toNumber(-600.124)).toBe(-600.124);
});

test('TN04: min value -> number', () => {
    expect(toNumber(Number.MIN_VALUE)).toBe(5e-324);
});

test('TN05: infinity -> infinity', () => {
    expect(toNumber(Infinity)).toBe(Infinity);
});

test('TN06: numerical string -> number', () => {
    expect(toNumber('12')).toBe(12);
});

test('TN07: non-numeric string as parameter', () => {
    expect(toNumber('qwerty')).toBeFalsy();
});

test('TN08: null as parameter', () => {
    expect(toNumber(null)).toBeFalsy();
});

test('TN09: symbol as parameter', () => {
    expect(toNumber(Symbol('test'))).toBeFalsy();
});

test('TN10: object with number -> number', () => {
    expect(toNumber(Object(22))).toBe(22);
});

test('TN11: object with NaN as parameter', () => {
    expect(toNumber(Object(NaN))).toBeFalsy();
});

test('TN12: string binary -> number', () => {
    expect(toNumber('0b101')).toBe(5);
});

test('TN13: string octal -> number', () => {
    expect(toNumber('0o123')).toBe(83);
});

test('TN14: string bad hexadecimal as parameter', () => {
    expect(toNumber('-0x7B')).toBeFalsy();
});

test('TN15: undefined as parameter', () => {
    expect(toNumber(undefined)).toBeFalsy();
});

test('TN16: array with one number -> number', () => {
    expect(toNumber([2])).toBe(2);
});

test('TN17: zero -> zero', () => {
    expect(toNumber(0)).toBe(0);
});

test('TN18: object with zero -> zero', () => {
    expect(toNumber(Object(0))).toBe(0);
});

test('TN19: empty string as parameter', () => {
    expect(toNumber('')).toBeFalsy();
});

test('TN20: NaN as parameter', () => {
    expect(toNumber(NaN)).toBeFalsy();
});

test('TN21: empty array as parameter', () => {
    expect(toNumber([])).toBeFalsy();
});

test('TN22: array with several numbers as parameter', () => {
    expect(toNumber([2, 3, 5])).toBeFalsy();
});

test('TN23: bigint number -> number', () => {
    expect(toNumber(BigInt(5))).toBe(5);
});