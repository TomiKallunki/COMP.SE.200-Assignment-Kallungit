
import ceil from '../src/ceil';

test('CE01: positive decimal number without precision -> rounded upwards to nearest integer', () => {
    expect(ceil(4.0325)).toBe(5);
});

test('CE02: negative decimal number without precision -> rounded upwards to nearest integer', () => {
    expect(ceil(-7.24261)).toBe(-7);
});

test('CE03: positive number and positive precision -> rounded upwards correctly', () => {
    expect(ceil(5.004, 2)).toBe(5.01);
});

test('CE04: positive number and negative precision -> rounded upwards correctly', () => {
    expect(ceil(2050.52, -2)).toBe(2100);
});

test('CE05: negative number and positive precision -> rounded upwards correctly', () => {
    expect(ceil(-1.252, 2)).toBe(-1.25);
});

test('CE06: negative number and negative precision -> rounded upwards correctly', () => {
    expect(ceil(-1550, -3)).toBe(-1000);
});

test('CE07: number and its current precision -> itself', () => {
    expect(ceil(3.006, 3)).toBe(3.006);
    expect(ceil(15000, -3)).toBe(15000);
});

test('CE08: decimal and 0 as precision -> rounded upwards to nearest integer', () => {
    expect(ceil(10.1252, 0)).toBe(11);
});

test('CE09: zero and 1 as precision -> itself', () => {
    expect(ceil(0, 1)).toBe(0);
});

test('CE10: integer and positive precision -> same value but more precise', () => {
    expect(ceil(8, 3)).toBe(8.000);
});

test('CE11: rounding up incredibly large decimal', () => {
    expect(ceil(1.012502105202101250215012502152102101250152128523805734092578348957289052830932859023830985923085320985903290235809328095238309258902309328003, 140))
    .toBe(1.01250210520210125021501250215210210125015212852380573409257834895728905283093285902383098592308532098590329023580932809523830925890230932801);
});

/* test('first parameter is not a number', () => {
    expect(ceil("abc", -2)).toBeFalsy();
});

test('second parameter is not a number', () => {
    expect(ceil(1.123, "asd")).toBeFalsy();
}); */