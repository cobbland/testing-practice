import calculator from "../src/calculator.js";

test('Add', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(1, 1)).toBe(2);
    expect(calculator.add(2, 2)).toBe(4);
});

test('Subtract', () => {
    expect(calculator.subtract(3, 1)).toBe(2);
    expect(calculator.subtract(3, 3)).toBe(0);
    expect(calculator.subtract(2, 1)).toBe(1);
});

test('Divide', () => {
    expect(calculator.divide(8, 2)).toBe(4);
    expect(calculator.divide(12, 6)).toBe(2);
});

test('Multiply', () => {
    expect(calculator.multiply(6, 6)).toBe(36);
});