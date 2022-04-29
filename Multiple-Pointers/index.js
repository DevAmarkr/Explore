// Multiple Pointers will only work with sorted array
class MultiplePointers {
  sumZero(arr){
      let output = []
      let left = 0;
      let right = arr.length - 1
      while(left < right){
        let isSumZero = arr[left] + arr[right];
        if(isSumZero  === 0) {
          output.push(arr[left],arr[right])
          return output
        }
        if(isSumZero > 0)right--
        if(isSumZero < 0)left++
      }
      return output
    }
    countUniqueValues(arr){
      if(!arr.length) return 0
      let i = 0;
      let j = 1;
      while(j < arr.length){
        console.log('heloo')
        if(arr[i] !== arr[j] ){
           i++
           arr[i] = arr[j]
        }
         j++
         console.log(i,j)
      }
      return i+1
    }
    areThereDuplicates(...args){
      /*
      Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

      Examples:
      areThereDuplicates(1, 2, 3) // false
      areThereDuplicates(1, 2, 2) // true 
      areThereDuplicates('a', 'b', 'c', 'a') // true
      */

      // Basic Soluttion
      let arr = args.sort()
      console.log(arr)
      let start =0;
      let next = 1;
      while(next  < args.length){
        console.log(arr[start])
        console.log(arr[next])
        if(args[start]===args[next]){
          return true;
        }
          //increment the 2 pointers until the condition is met
          start++
          next++
      }
      return false

      /*
      One Liner Solution
      let result = new Set(args).size !== args.length
      console.log(result)
      */
     
      
    }

}

let mp = new MultiplePointers()
// console.log(mp.sumZero([-3,-2,-1,0,1,2,3]))
// console.log(mp.sumZero([-4,-3,-2,-1,0,1,2,4,5]))
// console.log(mp.sumZero([-4,-3,-2,-1,0,1,2,3]))
// console.log(mp.sumZero([-1,0,2,3]))
console.log(mp.countUniqueValues([1,1,1,1,1,2,3,9]))
console.log(mp.areThereDuplicates(1, 2, 3))
// console.log(mp.areThereDuplicates(1, 2, 2))
// console.log(mp.areThereDuplicates('a', 'b', 'c', 'a'))
// console.log(mp.areThreeDuplicates(1, 2, 3))
                              //     i  j

