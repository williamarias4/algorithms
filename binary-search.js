/* Given a sorted array of n integers and a target value, 
determine if the target exists in the array in logarithmic time using the binary search algorithm. 
If target exists in the array, print the index of it. */

let array = [5, 2, 1, 6, 7, 4, 3]
array.sort();
let target = 2;
console.log(array);
let start = 0;
let end = array.length - 1;


let findTarget = (array, target, start, end) => {

    let mid = (start + end) / 2;

    if (target === array[mid]) {
        return mid;
    }

    if (target < array[mid]) {
        return findTarget(array, target, start, mid - 1);
    }

    if (target > array[mid]) {
        return findTarget(array, target, mid + 1, end);
    }



}

console.log("The index of the target is " + findTarget(array, target, start, end));
console.log("The target number the function returned is " + array[findTarget(array, target, start, end)]);

