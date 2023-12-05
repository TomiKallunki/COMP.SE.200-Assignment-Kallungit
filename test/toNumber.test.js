
import toNumber from '../src/toNumber';

test('number to number', () => {
    expect(toNumber(1)).toBe(1);
});
test('decimal to number', () => {
    expect(toNumber(7.2122)).toBe(7.2122);
});
test('negative decimal to number', () => {
    expect(toNumber(-600.124)).toBe(-600.124);
});
test('min value to number', () => {
    expect(toNumber(Number.MIN_VALUE)).toBe(5e-324);
});
test('infinity to number', () => {
    expect(toNumber(Infinity)).toBe(Infinity);
});
test('string number to number', () => {
    expect(toNumber('12')).toBe(12);
});
test('parameter string that is not a number', () => {
    expect(toNumber("qwerty")).toBeFalsy();
});
test('parameter is null', () => {
    expect(toNumber(null)).toBeFalsy();
});
test('parameter is a symbol', () => {
    expect(toNumber(Symbol("test"))).toBe(NaN);
});
test('parameter is an object', () => {
    expect(toNumber(Object(22))).toBe(22);
});
test('parameter is an object that is not a value', () => {
    expect(toNumber(Object(NaN))).toBeFalsy();
});
test('string binary to number', () => {
    expect(toNumber("0b101")).toBe(5);
});
test('string octal to number', () => {
    expect(toNumber("0o123")).toBe(83);
});
test('string bad hexadecimal', () => {
    expect(toNumber("-0x7B")).toBeFalsy();
});
test('parameter is undefined', () => {
    expect(toNumber(undefined)).toBeFalsy();
});
test('array with one number to number', () => {
    expect(toNumber([2])).toBe(2);
});
test('zero to zero', () => {
    expect(toNumber(0)).toBe(0);
});
test('object with zero to zero', () => {
    expect(toNumber(Object(0))).toBe(0);
});
test('empty string as parameter', () => {
    expect(toNumber("")).toBeFalsy();
});
test('NaN as parameter', () => {
    expect(toNumber(NaN)).toBeFalsy();
});
test('empty array as parameter', () => {
    expect(toNumber([])).toBeFalsy();
});
test('array with several numbers as parameter', () => {
    expect(toNumber([2, 3, 5])).toBeFalsy();
});
test('bigint as parameter', () => {
    expect(toNumber(BigInt(5))).toBe(5);
});