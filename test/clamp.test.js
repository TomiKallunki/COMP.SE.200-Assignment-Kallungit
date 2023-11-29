
import clamp from '../src/clamp';

test('clamp to lower bound', () => {
    expect(clamp(-14, -7, 5)).toBe(-7);
});
test('clamp to upper bound', () => {
    expect(clamp(10, 2, 9)).toBe(9);
});
