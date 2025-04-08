import caesarCipher from "../src/caesarCipher.js";

test('takes "a" and returns "d"', () => {
    expect(caesarCipher('a', 3)).toBe('d');
});

test('takes "abc" and returns "def"', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
});

test('takes "Abc, def!" and returns "Def, ghi!"', () => {
    expect(caesarCipher('Abc, def!', 3)).toBe('Def, ghi!');
});

test('takes "xY z!" and returns "aB c!"', () => {
    expect(caesarCipher('xY z!', 3)).toBe('aB c!');
});