import reverseString from "../src/reverseString";

test('takes "abc" and returns "cba"', () => {
    expect(reverseString('abc')).toBe('cba');
});

test('takes "123" and returns "321"', () => {
    expect(reverseString('123')).toBe('321');
});

test('takes "Hello, world!" and returns "!dlrow ,olleH"', () => {
    expect(reverseString('Hello, world!')).toBe('!dlrow ,olleH');
});