
import toFinite from '../src/toFinite';

test('infinity to finite', () => {
    expect(toFinite(Infinity)).toBe(1.7976931348623157e+308);
});
test('1.7976931348623157e+309 to finite', () => {
    expect(toFinite(1.7976931348623157e+309)).toBe(1.7976931348623157e+308);
});
test('minimum value to finite', () => {
    expect(toFinite(Number.MIN_VALUE)).toBe(5e-324);
});
test('regular positive number to finite', () => {
    expect(toFinite(5522)).toBe(5522);
});
test('regular negative number to finite', () => {
    expect(toFinite(-725)).toBe(-725);
});
test('decimal to finite', () => {
    expect(toFinite(1.2567)).toBe(1.2567);
});
test('string number to finite', () => {
    expect(toFinite('790000')).toBe(790000);
});
test('parameter is a string', () => {
    expect(toFinite("abc")).toBeFalsy();
});
test('null parameter', () => {
    expect(toFinite(null)).toBe(0);
});
test('NaN parameter', () => {
    expect(toFinite(NaN)).toBe(0);
});
test('undefined parameter', () => {
    expect(toFinite(undefined)).toBe(0);
});
test('empty string parameter', () => {
    expect(toFinite("")).toBe(0);
});
test('parameter is a boolean', () => {
    expect(toFinite(true)).toBe(1);
});
