
import ceil from '../src/ceil';

test('decimal is rounded upwards without specifying precision', () => {
    expect(ceil(4.0325))
        .toBe(5)
        .toBeGreaterThan(4)
        .toBeLessThan(6);
});
