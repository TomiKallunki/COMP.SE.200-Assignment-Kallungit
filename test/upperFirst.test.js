
import upperFirst from '../src/upperFirst';

test('UF01: empty string', () => {
    expect(upperFirst('')).toBe('');
});

test('UF02: string with only first letter in upper case', () => {
    expect(upperFirst('Tomato')).toBe('Tomato');
});

test('UF03: string in all lower case', () => {
    expect(upperFirst('car')).toBe('Car')
});

test('UF04: string in all upper case', () => {
    expect(upperFirst('APPLE')).toBe('APPLE');
});

test('UF05: string in all but first letter in upper case', () => {
    expect(upperFirst('mUSIC')).toBe('MUSIC');
});

test('UF06: string with varying case', () => {
    expect(upperFirst('tEsTiNg')).toBe('TEsTiNg');
});

test('UF07: string with two sentences in all lower case', () => {
    expect(upperFirst('lorem ipsum dolor sit amet. aliquam volutpat nec erat.')).toBe('Lorem ipsum dolor sit amet. aliquam volutpat nec erat.');
});