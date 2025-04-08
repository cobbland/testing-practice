export default function analyzeArray(arr) {
    const arrObj = {
        average: 0,
        min: arr[0],
        max: arr[0],
        length: arr.length
    };

    for (let step = 0; step < arrObj.length; step++) {
        arrObj.average += arr[step];
        if (arr[step] < arrObj.min) {
            arrObj.min = arr[step];
        }
        if (arr[step] > arrObj.max) {
            arrObj.max = arr[step];
        }
    }
    arrObj.average /= arrObj.length;

    return arrObj;
}