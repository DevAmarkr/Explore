class FrequencyCounter {
    findSquare(arr1,arr2){
      // Big O(n)
      let container = new Map()
      let isSame = false
      if(arr1.length !== arr2.length) throw new Error("Invalid Arguments")
      for(let i = 0 ; i < arr1.length; i++){
          const squareValue = Math.pow(arr1[i],2)
          container.set(squareValue, i)
      }
      console.log(container)
      for(const value of arr2){
        container.get(value) ? isSame = true: isSame = false
      }
      console.log(isSame)
    }
    validAnagram(str1, str2){
      // Big O(n)
      if(str1.length !== str2.length) {
        return false
      }
      let container1 = {}
      let container2 = {}
      for(let  i = 0; i < str1.length; i++){
          container1[str1[i]] = (container1[str1[i]] || 0) + 1
      }
      for(let  i = 0; i < str2.length; i++){
        container2[str2[i]] = (container2[str2[i]] || 0) + 1
      }
      for(const key in container1){
        if(container2[key] !== container1[key]){
          return false
        }
      }
      return true
    }
    countUniqueValues(arr){
      let result = undefined
      if(!arr.length)throw new Error('Invalid arguments')
      let map = {}
      for(const element of arr){
        map[element] = (map[element] || 0) + 1
      }
      for(const key in map){
        result = map[key] === 1 ? key: undefined
      }
      return result
    }
    sameFrequency(num1, num2){
      // create tacker object
      // run a loop over num1 and store its element as a key in tacker object
      // if elments present inside in tacker object and increase its value by 1
      // if ot set those elements in tacker object and set its intintial value as 1
      // run another loop on num2 and check if same keys present inside in those tacker object or not
      // return true if match found or false in case of no match found
      if(!num1 || !num2 || String(num1).length !== String(num2).length) return false
      let tacker_object1 = new Map()
      let tacker_object2 = new Map()
      const arg1 = String(num1).split('')
      const arg2 = String(num2).split('')
      console.log(arg1, arg2)
      for(const key of arg1){
          tacker_object1.set(key, (tacker_object1.get(key) || 0) + 1)
      }
      
      for(const key of arg2){
          tacker_object2.set(key, (tacker_object2.get(key) || 0) + 1)
      } 
  
      for(const [key,value] of tacker_object1.entries()){
        if(tacker_object2.get(key) !== value){
          return false
        }
      }
      return true
      }

}

let fc = new FrequencyCounter()
// fc.findSquare([1,2,3,4,2],[1,4,9,16,4])
console.log(fc.validAnagram("anagram", "nagaram"))
console.log(fc.countUniqueValues([1,1,1,1,1,2]))
console.log(fc.sameFrequency(182,281))

