const arr = [1,2,3,4,5];

if (!Array.myReduce) {
    Array.prototype.myReduce = function(cb, initialVal) {

        if(typeof cb !== "function") {
            throw new TypeError("Please pass a callback function!")
        }

        let result = initialVal;

        let callingArr = this;

        for (let i=0; i<callingArr.length; i++) {
            result = cb(result, callingArr[i], callingArr);
        }
        return result;
    }
}

const sum = arr.reduce((acc, item) => acc + item, 0);
const myReduceSum = arr.myReduce((acc, item) => acc + item, 0);
console.log(sum);
console.log(myReduceSum);

