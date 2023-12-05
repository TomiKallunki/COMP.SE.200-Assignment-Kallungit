
import clamp from '../src/clamp';

test('clamp to lower bound', () => {
    expect(clamp(-14, -7, 5)).toBe(-7);
});
test('clamp to upper bound', () => {
    expect(clamp(10, 2, 9)).toBe(9);
});
test('clamp with same bound', () => {
    expect(clamp(5, 5, 5)).toBe(5);
});
test('clamp with value in between', () => {
    expect(clamp(6, 3, 11)).toBe(6);
});
/* test('first parameter is not a number', () => {
    expect(clamp("number", 0, 10)).toBeFalsy();
});
test('second parameter is not a number', () => {
    expect(clamp(7, "something", 10)).toBeFalsy();
});
test('third parameter is not a number', () => {
    expect(clamp(8, -1, "nonsense")).toBeFalsy();
}); */