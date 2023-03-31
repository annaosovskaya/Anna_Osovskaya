function getPairsCount(arr, n, target)
{
    let count = 0;
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            if (arr[i] + arr[j] == target)
                count++;
 
    return count;
}

let arr = [1, 3, 6, 2, 2, 0, 4, 5]
let n = arr.length;
let target = 5;
console.log(getPairsCount(arr, n, target))