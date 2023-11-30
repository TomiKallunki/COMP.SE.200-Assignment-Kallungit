
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
test('infinity value to integer', () => {
    expect(toInteger(Infinity)).toBe(1.7976931348623157e+308);
});
test('string number to integer', () => {
    expect(toInteger('55.22')).toBe(55);
});
test('parameter is not a number', () => {
    expect(toInteger("zxc")).toBeFalsy();
});