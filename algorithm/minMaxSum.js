const arr = [7, 3, 1, 2, 4];

let minSum = 0;
let maxSum = 0;
let sum = 0;

let indexIgnore = 0;

for (let k = 0; k < 5; k++) {
    for (let i = 0; i < arr.length; i++) {

        if (i !== indexIgnore) {
            sum += arr[i];
        }
    }

    if (sum > maxSum) {
        maxSum = sum;
    }

    if ((sum < minSum && minSum !== 0) || minSum === 0) {
        minSum = sum
    }

    sum = 0;
    indexIgnore++;
}

console.log(minSum + ' ' + maxSum)
