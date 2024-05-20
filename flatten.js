const arr = [1,[2, [3,4,[5,[6]]]]];

// console.log(arr.flat(Infinity));

function flattenArray(arr) {
   return arr.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            const oneDimensionArray = flattenArray(curr);
            acc.push(...oneDimensionArray);
        } else {
            acc.push(curr);
        }
        return acc;
    } , [])
}

console.log(flattenArray(arr));