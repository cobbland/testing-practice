import capitalize from "../src/capitalize.js";

test('takes "abc" and returns "Abc"', () => {
    expect(capitalize('abc')).toBe('Abc');
});

test('takes "bobby" and returns "Bobby"', () => {
    expect(capitalize('bobby')).toBe('Bobby');
});