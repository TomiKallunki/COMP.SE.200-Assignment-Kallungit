
import eq from '../src/eq';

test('number 1 is equal to itself', () => {
    expect(eq(1, 1)).toBeTruthy();
});
test('number 1 is equal to 2', () => {
    expect(eq(1, 2)).toBeFalsy();
});