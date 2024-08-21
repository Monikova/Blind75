function twoSum(arr, num) {
    let sum = 0;
    // let idxArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            sum = arr[i] + arr[j]; 
            if (sum === num) {
                // idxArr.push(i, j);
                return [i, j];
                // break;
            }
        }
    }

    // console.log(idxArr);
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));

// or

// function twoSum(arr, num) {
//     let numsArr = arr.slice(); 
//     let target = num; 
//     let sum = 0;
//     let idxArr = [];
//     for (let i = 0; i < numsArr.length; i++) {
//         for (let j = i + 1; j < numsArr.length; j++) {
//             sum = numsArr[i] + numsArr[j]; 
//             if (sum === target) {
//                 idxArr.push(i, j);
//                 // return [i, j];
//                 break;
//             }
//         }
//     }

//     console.log(idxArr);
// }

twoSum([2,7,11,15], 9);
twoSum([3,2,4], 6);
twoSum([3,3], 6);
// twoSum([3,2], 6);
