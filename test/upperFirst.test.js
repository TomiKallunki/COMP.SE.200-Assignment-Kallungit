
import upperFirst from '../src/upperFirst';

test('Empty string', () => {
    expect(upperFirst('')).toBe('');
});

test('String with only first letter in upper case', () => {
    expect(upperFirst('Tomato')).toBe('Tomato');
});

test('String in all lower case', () => {
    expect(upperFirst('car')).toBe('Car')
});

test('String in all upper case', () => {
    expect(upperFirst('APPLE')).toBe('APPLE');
});

test('String in all but first letter in upper case', () => {
    expect(upperFirst('mUSIC')).toBe('MUSIC');
});

test('String with varying case', () => {
    expect(upperFirst('tEsTiNg')).toBe('TEsTiNg');
});

test('String with two sentences in all lower case', () => {
    expect(upperFirst('lorem ipsum dolor sit amet. aliquam volutpat nec erat.')).toBe('Lorem ipsum dolor sit amet. aliquam volutpat nec erat.');
});