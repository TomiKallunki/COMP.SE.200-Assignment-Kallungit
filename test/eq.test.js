
import eq from '../src/eq';

test('number 1 is equal to itself', () => {
    expect(eq(1, 1)).toBeTruthy();
});
