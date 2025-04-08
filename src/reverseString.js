export default function reverseString(str) {
    let tempStr = '';
    for (let step = str.length - 1; step >= 0; step--) {
        tempStr = tempStr + str[step];
    }
    return tempStr;
}