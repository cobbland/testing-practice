export default function caesarCipher(str, shift) {
    const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let newStr = '';
    for (const char of str) {
        let isLetter = false;
        for (let step = 0; step < 26; step++) {
            if (lowerAlphabet[step] === char) {
                newStr = newStr + lowerAlphabet[(step + shift) % 26];
                isLetter = true;
            } else if (upperAlphabet[step] === char) {
                newStr = newStr + upperAlphabet[(step + shift) % 26];
                isLetter = true;
            }
        }
        if (!isLetter) {
            newStr = newStr + char;
        }
    }

    return newStr;
}