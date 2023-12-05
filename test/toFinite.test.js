
import toFinite from '../src/toFinite';

test('TF01: infinity -> finite', () => {
    expect(toFinite(Infinity)).toBe(1.7976931348623157e+308);
});

test('TF02: 1.7976931348623157e+309 -> finite', () => {
    expect(toFinite(1.7976931348623157e+309)).toBe(1.7976931348623157e+308);
});

test('TF03: minimum value -> finite', () => {
    expect(toFinite(Number.MIN_VALUE)).toBe(5e-324);
});

test('TF04: regular positive number -> itself', () => {
    expect(toFinite(5522)).toBe(5522);
});

test('TF05: regular negative number -> itself', () => {
    expect(toFinite(-725)).toBe(-725);
});

test('TF06: decimal -> itself', () => {
    expect(toFinite(1.2567)).toBe(1.2567);
});

test('TF07: string number -> itself as number', () => {
    expect(toFinite('790000')).toBe(790000);
});

test('TF08: non-numeric string as parameter', () => {
    expect(toFinite('abc')).toBeFalsy();
});

test('TF09: null as parameter', () => {
    expect(toFinite(null)).toBeFalsy();
});

test('TF10: NaN as parameter', () => {
    expect(toFinite(NaN)).toBeFalsy();
});

test('TF11: undefined as parameter', () => {
    expect(toFinite(undefined)).toBeFalsy();
});

test('TF12: empty string as parameter', () => {
    expect(toFinite('')).toBeFalsy();
});

test('TF13: boolean as parameter', () => {
    expect(toFinite(true)).toBe(1);
});

test('TF14: zero -> zero', () => {
    expect(toFinite(0)).toBe(0);
});

test('TF15: bigint number -> finite number', () => {
    expect(toFinite(BigInt(2))).toBe(2);
});

test('TF16: array with one number -> finite', () => {
    expect(toFinite([1.7976931348623157e+309])).toBe(1.7976931348623157e+308);
});

test('TF17: empty array as parameter', () => {
    expect(toFinite([])).toBeFalsy();
});

test('TF18: array with several numbers as parameter', () => {
    expect(toFinite([2, 5, 10])).toBeFalsy();
});

test('TF19: object with number -> finite', () => {
    expect(toFinite(Object(1.7976931348623157e+309))).toBe(1.7976931348623157e+308);
});