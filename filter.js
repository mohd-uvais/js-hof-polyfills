const transactions = [{
    id: "credit001",
    amount: 100,
    type: "credit"
}, {
    id: "debit001",
    amount: 80,
    type: "debit"
}, {
    id: "credit002",
    amount: 120,
    type: "credit"
}] 
//Output: Array of tyransactions where the type is "credit" [{
//     id: "credit001",
//     amount: 100,
//     type: "credit"
// }, {
//     id: "credit002",
//     amount: 120,
//     type: "credit"
// }]

if (!Array.myFilter) {
    Array.prototype.myFilter = function (cb) {
        if (typeof cb !== "function") {
            throw new TypeError("Please pass function!!!");
        }

        let resultArr = [];

        let callingArr = this;

        for (let i=0; i < callingArr.length; i++) {
            if (i in callingArr) {
                let result = cb(callingArr[i], i, callingArr);
                if (result) {
                    resultArr.push(callingArr[i]);
                }           
            }
        }

        return resultArr;
    }
}

const creditTransactions = transactions.filter((currentElem) => currentElem.type == "credit")

const creditTransactionsMyFilter = transactions.myFilter((currentElem) => currentElem.type == "credit")


console.log(creditTransactions)
console.log(creditTransactionsMyFilter)
