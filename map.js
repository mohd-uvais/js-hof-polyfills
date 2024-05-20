const arr = [
    {
    id: "001",
    name: "XX"
},

{
    id: "002",
    name: "XY"
},

{
    id: "003",
    name: "YY"
},
]

if (!Array.myMap) {
    Array.prototype.myMap = function (cb) {
        if (typeof cb !== "function") {
            throw new TypeError("Please pass function!!!");
        }

        let resultArr = [];

        let callingArr = this;

        for (let i=0; i < callingArr.length; i++) {
            if (i in callingArr) {
                let result = cb(callingArr[i], i, callingArr);
                resultArr[i] = result;
            }
        }

        return resultArr;
    }
}

const newArr = arr.map((item) => item.id)
const myMapNewArr = arr.myMap((item) => item.id);
console.log(newArr);
console.log(myMapNewArr);

console.log([1,2,3,,,8].map(item => item));

console.log([1,2,3,,,8].myMap(item => item));