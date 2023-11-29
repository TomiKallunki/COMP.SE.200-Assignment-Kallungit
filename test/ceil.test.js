
import ceil from '../src/ceil';

test('decimal is rounded upwards without specifying precision', () => {
    expect(ceil(4.0325)).toBe(5);
});
test('negative decimal is rounded upwards without specifying precision', () => {
    expect(ceil(-7.24261)).toBe(-7);
});
test('decimal is rounded upwards specifying positive precision', () => {
    expect(ceil(5.004, 2)).toBe(5.01);
});
test('decimal is rounded upwards specifying negative precision', () => {
    expect(ceil(2050, -2)).toBe(2100);
});
test('negative decimal is rounded upwards specifying positive precision', () => {
    expect(ceil(-1.252, 2)).toBe(-1.25);
});
test('negative decimal is rounded upwards specifying negative precision', () => {
    expect(ceil(-1550, -3)).toBe(-1000);
});
test('number is rounded upwards with the same precision', () => {
    expect(ceil(3.006, 3)).toBe(3.006);
    expect(ceil(15000, -3)).toBe(15000);
});
test('decimal is rounded upwards specifying 0 precision', () => {
    expect(ceil(10.1252, 0)).toBe(11);
});
test('number without decimal is given positive precision', () => {
    expect(ceil(8, 3)).toBe(8.000);
});
test('number with decimal is given negative precision', () => {
    expect(ceil(1055.52, -2)).toBe(1100);
});
test('parameter is not a number', () => {
    expect(() => ceil("5", -2)).toThrow(TypeError);
});
test('rounding up incredibly large decimal', () => {
    expect(ceil(1.012502105202101250215012502152102101250152128523805734092578348957289052830932859023830985923085320985903290235809328095238309258902309328003, 140))
    .toBe(1.01250210520210125021501250215210210125015212852380573409257834895728905283093285902383098592308532098590329023580932809523830925890230932801);
});