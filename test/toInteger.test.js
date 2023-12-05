
import toInteger from '../src/toInteger';

test('1.5 to integer', () => {
    expect(toInteger(1.5)).toBe(1);
});
test('5 to integer', () => {
    expect(toInteger(5)).toBe(5);
});
test('negative number to integer', () => {
    expect(toInteger(-77.123)).toBe(-77);
});
test('number min value to integer', () => {
    expect(toInteger(Number.MIN_VALUE)).toBe(0);
});
test('number max value to integer', () => {
    expect(toInteger(Number.MAX_VALUE)).toBe(1.7976931348623157e+308);
});
test('infinity value to integer', () => {
    expect(toInteger(Infinity)).toBe(1.7976931348623157e+308);
});
test('string number to integer', () => {
    expect(toInteger('55.22')).toBe(55);
});
test('zero to zero', () => {
    expect(toInteger(0)).toBe(0);
});
test('string that is not a number as parameter', () => {
    expect(toInteger("zxc")).toBeFalsy();
});
test('null as parameter', () => {
    expect(toInteger(null)).toBeFalsy();
});
test('undefined as parameter', () => {
    expect(toInteger(undefined)).toBeFalsy();
});
test('empty string as parameter', () => {
    expect(toInteger("")).toBeFalsy();
});
test('NaN as parameter', () => {
    expect(toInteger(NaN)).toBeFalsy();
});
test('empty array as parameter', () => {
    expect(toInteger([])).toBeFalsy();
});
test('array with several numbers as parameter', () => {
    expect(toInteger([2, 3, 5])).toBeFalsy();
});
test('array with one number to integer', () => {
    expect(toInteger([5.25])).toBe(5);
});
test('object with number to integer', () => {
    expect(toInteger(Object(5.25))).toBe(5);
});
test('bigint as parameter', () => {
    expect(toInteger(BigInt(5))).toBe(5);
});