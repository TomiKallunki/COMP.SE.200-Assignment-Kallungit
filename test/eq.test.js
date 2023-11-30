
import eq from '../src/eq';

test('number 1 is equal to itself', () => {
    expect(eq(1, 1)).toBeTruthy();
});
test('number 1 is not equal to 2', () => {
    expect(eq(1, 2)).toBeFalsy();
});
test('number -3 is not equal to 3', () => {
    expect(eq(-3, 3)).toBeFalsy();
});
test('number -1569 is equal to -1569', () => {
    expect(eq(-1569, -1569)).toBeTruthy();
});
test('long decimal is the same', () => {
    expect(eq(1.2935920350293592032985328523893258925832958223859, 1.2935920350293592032985328523893258925832958223859)).toBeTruthy();
});
test('string is equal to itself', () => {
    expect(eq("test", "test")).toBeTruthy();
});
test('string is not equal to corresponding number', () => {
    expect(eq("5", 5)).toBeFalsy();
});
test('character is the same as the character', () => {
    expect(eq('y', 'y')).toBeTruthy();
});
test('character is not the same as object of that character', () => {
    expect(eq('x', Object('x'))).toBeFalsy();
});
test('NaN is equal to NaN', () => {
    expect(eq(NaN, NaN)).toBeTruthy();
});
test('different objects with same content are not equal', () => {
    var x = { 'b': 2 }
    var y = { 'b': 2 }
    expect(eq(x, y)).toBeFalsy();
});
test('NaN is not equal to null', () => {
    expect(eq(NaN, null)).toBeFalsy();
});
test('0 is equal to -0', () => {
    expect(eq(0, -0)).toBeTruthy();
});
test('false is not equal to undefined', () => {
    expect(eq(false, undefined)).toBeFalsy();
});