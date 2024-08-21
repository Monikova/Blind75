function containsDuplicate(arr) {
    // let newArr = [];
    // for (num of arr) {
    //     if (newArr.includes(num)) {
    //         return true;
    //     } else {
    //         newArr.push(num);
    //     }
    // }
    // return false;



    // or 



    let newArr = arr.sort((a,b) => a - b);
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === newArr[i + 1]) {
            return true;
        }
    }
    return false;



    // or 



    // const s = new Set(arr)            // using Set (idea)
    // return s.size !== arr.length
}

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));

// containsDuplicate([1,2,3,1]);
// containsDuplicate([1,2,3,4]);
// containsDuplicate([1,1,1,3,3,4,3,2,4,2]);
