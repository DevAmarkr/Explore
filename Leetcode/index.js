// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//  var intersect = function(nums1, nums2) {
//     let arr = [];
//     for (let i = 0; i < nums1.length; i++) {
//       const element = nums1[i];
//       let index = nums2.indexOf(element)
//       if( index !== -1){
//         arr = arr.concat(nums2.splice(index, 1))
//       }
//     }
//     console.log(arr)
//     return arr;
// };

// const crop = (message, maxLength) => {
//   if(maxLength > message.length){
//     return message
//   }
//   const part = message.substring(0, maxLength + 1);
//   return part.substring(0, part.lastIndexOf(" ")).trimEnd();
// }

// console.log(crop("Codality we test coder", 14));
// console.log(crop("Why not", 14));
// Ques:
// Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length 
// and answer[i] is the distance from index i to the closest occurrence of character c in s.

// The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

// example: s: "pankaj", c: "k"
// out: [3,2,1,0,1,2]

// example: s: "pankaj", c: "a"
// [1,0,1,1,0,1]

// 1. pankaj === [3,2,1,0,1,2]

// intersect([1,2,2,1],[2,2])    
// intersect([4,9,5],[9,4,9,8,4])   


// pair Random

// input = ["Amar","Rohit","Arjith","Aayush","Dipti","Prafful"]
// output = [["Amar","Rohit"],["Arjith","Prafull"],["Dipti",null]] 

Array.prototype.random = function () {
  let index = Math.floor((Math.random() * this.length))
  let value = this[index]
  return [value, index]
  
}

function pairRandom(input){
  let output = []
  while(input.length){
    let person1 = input.shift()
    let [person2, index] = input.random()
    input.splice(index, 1)
    output.push([person1, person2])
  }   
  return output
}~
console.log(pairRandom(["Amar","Rohit","Arjith","Aayush","Dipti","Prafful","Sashi"]))
// console.log(pairRandom(["Amar"]))
