// Uncomment whatever function you want to run

// TASK [Palindrome check]
// const isPalindromePermutation = (str: string): boolean => {
//   // let's create a hash table to store the frequency of each character
//   const hashTable: { [key: string]: number } = {};

//   str.split("").forEach((char) => {
//     hashTable[char] = hashTable[char] ? hashTable[char] + 1 : 1;
//   });

//   // filter out all even numbers
//   for (const key in hashTable) {
//     if (hashTable[key] % 2 === 0) {
//       delete hashTable[key];
//     }
//   }

//   // case one: one odd number in the middle
//   if (Object.keys(hashTable).length === 1) {
//     return true;
//   }

//   // case two: all characters are even
//   if (Object.keys(hashTable).length === 0) {
//     return true;
//   }

//   // case three: more than one odd number
//   return false;
// };

// const test1 = isPalindromePermutation("civic");
// const test2 = isPalindromePermutation("ivicc");
// const test3 = isPalindromePermutation("civil");
// const test4 = isPalindromePermutation("livci");

// console.log({
//   test1,
//   test2,
//   test3,
//   test4,
// });

// TASK [Duplicates]
// const duplicates = (numbers: number[]): number => {
//   numbers.sort();

//   return numbers.find((number, index) => number === numbers[index + 1])!;
// };

// const test1 = duplicates([1, 2, 2, 3]);
// const test2 = duplicates([1, 2, 3, 3]);
// const test3 = duplicates([2, 1, 4, 3, 5, 4]);

// console.log({
//   test1,
//   test2,
//   test3,
// });

// TASK [Intersection]
// Pseudo code:
// we can just just accumulative reduce function
// if array1 element is included in array2, we can push it to the accumulator
