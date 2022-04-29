class Recursion {
    countDown(num){
        console.log(num)
        if(num === 0){
            return 0
        }
        this.countDown(num - 1)
    }
}

let rc = new Recursion()
console.log(rc.countDown(5))