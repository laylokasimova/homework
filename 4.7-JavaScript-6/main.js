let numArr = [1, 2, 4, 3, 5, 6, 8, 10, 13, 12, 20, ]
let answer = 0

let numArr1 = [1, 2, 4, 3, 5, 6, 8, 10, 13, 12, 20, ]
let answer1 = 0

for (let i = 0; i < numArr.length; i++) {
    answer += numArr[i] % 2 == 0 ? 1 : 0;
}


for (let i = 0; i < numArr1.length; i++) {
    answer1 += numArr1[i] % 2 != 0 ? 1 : 0;
}

console.log(`Jami: ${answer} juft soni mavjud`);
console.log(`Jami: ${answer1} toq soni mavjud`);


for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 == 0) {
        console.log(numArr[i] + ' juft son');
    } else {
        console.log(numArr[i] + ' toq son');
    }
}