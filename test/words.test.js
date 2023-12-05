
import words from '../src/words';

test('WS01: empty string without pattern', () => {
    expect(words('')).toEqual([]);
});

test('WS02: empty string with pattern', () => {
    expect(words('', /[^A-Z]+/g)).toEqual([]);
});

test('WS03: spaces separated with commas, without pattern', () => {
    expect(words('   ')).toEqual([]);
});

test('WS04: spaces separated with commas, with pattern for commas', () => {
    expect(words(' , , ', /[^,]+/g)).toEqual([' ', ' ', ' ']);
});

test('WS05: ASCII-only words separated by commas and spaces, without pattern', () => {
    expect(words('Bob, job, Steve')).toEqual(['Bob', 'job', 'Steve']);
});

test('WS06: words separated by commas and spaces, without pattern', () => {
    expect(words('Bob, äpple, 中国')).toEqual(['Bob', 'äpple', '中国']);
});

test('WS07: words separated by commas and spaces, with pattern for both', () => {
    expect(words('Bob, äpple, 中国', /[^, ]+/g)).toEqual(['Bob', 'äpple', '中国']);
});

test('WS08: words separated by commas and spaces, with pattern for commas', () => {
    expect(words('Bob, äpple, 中国', /[^, ]+/g)).toEqual(['Bob', 'äpple', '中国']);
});

test('WS09: words separated & symbols, without pattern', () => {
    expect(words('Bob&äpple&中国')).toEqual(['Bob', 'äpple', '中国']);
});

test('WS10: words separated & symbols, with pattern for & symbols', () => {
    expect(words('Bob&äpple&中国', /[^&]+/g)).toEqual(['Bob', 'äpple', '中国']);
});
