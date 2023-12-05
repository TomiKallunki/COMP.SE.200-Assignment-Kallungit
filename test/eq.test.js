
import eq from '../src/eq';

test('EQ01: number 1 is equal to itself', () => {
    expect(eq(1, 1)).toBeTruthy();
});

test('EQ02: number 1 is not equal to 2', () => {
    expect(eq(1, 2)).toBeFalsy();
});

test('EQ03: number -3 is not equal to 3', () => {
    expect(eq(-3, 3)).toBeFalsy();
});

test('EQ04: number -1569 is equal to -1569', () => {
    expect(eq(-1569, -1569)).toBeTruthy();
});

test('EQ05: long decimal is the same', () => {
    expect(eq(1.2935920350293592032985328523893258925832958223859, 1.2935920350293592032985328523893258925832958223859)).toBeTruthy();
});

test('EQ06: string is equal to itself', () => {
    expect(eq('test', 'test')).toBeTruthy();
});

test('EQ07: string is not equal to corresponding number', () => {
    expect(eq('5', 5)).toBeFalsy();
});

test('EQ08: string is not the same as object with the same string', () => {
    expect(eq('x', Object('x'))).toBeFalsy();
});

test('EQ09: NaN is equal to NaN', () => {
    expect(eq(NaN, NaN)).toBeTruthy();
});

test('EQ10: different objects with same content are not equal', () => {
    var x = { 'b': 2 }
    var y = { 'b': 2 }
    expect(eq(x, y)).toBeFalsy();
});

test('EQ11: NaN is not equal to null', () => {
    expect(eq(NaN, null)).toBeFalsy();
});

test('EQ12: 0 is equal to -0', () => {
    expect(eq(0, -0)).toBeTruthy();
});

test('EQ13: false is not equal to undefined', () => {
    expect(eq(false, undefined)).toBeFalsy();
});