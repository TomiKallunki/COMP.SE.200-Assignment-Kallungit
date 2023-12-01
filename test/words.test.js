
import words from '../src/words';

test('Empty string without pattern', () => {
    expect(words('')).toEqual([]);
});

test('Empty string with pattern', () => {
    expect(words('', /[^A-Z]+/g)).toEqual([]);
});

test('Spaces separated with commas, without pattern', () => {
    expect(words('   ')).toEqual([]);
});

test('Spaces separated with commas, with pattern for commas', () => {
    expect(words(' , , ', /[^,]+/g)).toEqual([' ', ' ', ' ']);
});

test('ASCII-only Words separated by commas and spaces, without pattern', () => {
    expect(words('Bob, job, Steve')).toEqual(['Bob', 'job', 'Steve']);
});

test('Words separated by commas and spaces, without pattern', () => {
    expect(words('Bob, äpple, 中国')).toEqual(['Bob', 'äpple', '中国']);
});

test('Words separated by commas and spaces, with pattern for both', () => {
    expect(words('Bob, äpple, 中国', /[^, ]+/g)).toEqual(['Bob', 'äpple', '中国']);
});

test('Words separated by commas and spaces, with pattern for commas', () => {
    expect(words('Bob, äpple, 中国', /[^, ]+/g)).toEqual(['Bob', 'äpple', '中国']);
});

test('Words separated & symbols, without pattern', () => {
    expect(words('Bob&äpple&中国')).toEqual(['Bob', 'äpple', '中国']);
});

test('Words separated & symbols, with pattern for & symbols', () => {
    expect(words('Bob&äpple&中国', /[^&]+/g)).toEqual(['Bob', 'äpple', '中国']);
});
