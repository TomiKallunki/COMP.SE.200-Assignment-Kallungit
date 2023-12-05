
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
test('parameter is not a number', () => {
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