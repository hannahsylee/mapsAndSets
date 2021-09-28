// ****************************************************** Quick Question #1 ****************************************************** //

// Quick Question #1
// What does the following code return?

console.log(new Set([1,1,2,2,3,4]))

// Returns
// {1,2,3,4};

// ****************************************************** Quick Question #2 ****************************************************** //

// Quick Question #2
// What does the following code return?

console.log([...new Set("referee")].join(""))

// Returns
// ref

// ****************************************************** Quick Question #3 ****************************************************** //

// Quick Questions #3
// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// Returns
// {Array(3) => true, Array(3) => false}

// ****************************************************** hasDuplicate ****************************************************** //

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

// ****************************************************** Hannah's Work ****************************************************** //

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

// function hasDuplicate(arr){
//     const newArray = [...new Set(arr)];
//     console.log(newArray);
//     console.log(arr);
//     if (arr !== newArray){
//         return true;
//     } else {
//         return false;
//     }

// }

// const hasDuplicate = arr => {
//     if (arr !== [...new Set(arr)]){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const arr = [1,3,2,1];
// const hasDuplicate = [...new Set(arr)];
// console.log(hasDuplicate);

// const hasDuplicate = arr => arr !== [...new Set(arr)] ? true : false

// ****************************************************** Hannah's Work ****************************************************** //

// function hasDuplicate(arr){
//     if (arr.length !== new Set(arr).size){
//         return true;
//     } else {
//         return false;
//     }
// }

const hasDuplicate = arr => arr.length !== new Set(arr).size ? true : false;


// ****************************************************** vowelCount ****************************************************** //

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
function vowelCount(string){
    const vowels = 'aeiou';
    const lowercaseString = string.toLowerCase();
    const myMap = new Map();
    for (let letter of lowercaseString){
        if (vowels.indexOf(letter) !== -1){
            if (myMap.has(letter)){
                myMap.set(letter, myMap.get(letter) + 1);
            }
            else {
                myMap.set(letter, 1);
            }
        }

    }

    return myMap;
}


vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }