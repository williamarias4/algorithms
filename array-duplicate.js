/*Find and delete duplicate element of an unsorted array*/

let array = [1,2,2,3,4,5]

for(let i=0; i< array.length-1; i++){
    for(let j= 0; j< array.length-2; j++){
        if(array[i]===array[j+1]){   //isNan(x) checks if variable is NOT a number
            array.splice(i,1);
            break;
        }
        break;
    }
}
console.log(array);