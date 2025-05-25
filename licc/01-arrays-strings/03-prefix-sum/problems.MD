**(Anki)**Problem 1: Given an integer array `nums`, an array `queries` where `queries[i] = [x, y]` and an integer `limit`, return a boolean array that represents the answer to each query. A query is `true` if the sum of the subarray from `x` to `y` is less than `limit`, or `false` otherwise.

For example, given `nums = [1, 6, 3, 2, 7, 2]`, `queries = [[0, 3], [2, 5], [2, 4]]`, and `limit = 13`, the answer is `[true, false, true]`. For each query, the subarray sums are `[12, 14, 12]`.

var answerQueries = function(nums, queries, limit) {}

**Answer**:

```js
var answerQueries = function (nums, queries, limit) {

  let prefix = [nums[0]];

  for (let i = 1; i < nums.length; i++) {

    prefix.push(nums[i] + prefix[prefix.length - 1]);

  }

  let ans = [];

  for (const [x, y] of queries) {

    let curr = prefix[y]-prefix[x]+nums[x]

    ans.push(curr < limit);

  }

  return ans;

};


```

**Anki** (Problem 2)

[Number of ways to split Array](https://leetcode.com/problems/number-of-ways-to-split-array/description/)

**Solution**:

```js
var waysToSplitArray = function(nums) {
    let n = nums.length;
    

    let prefix = [nums[0]];
    for (let i = 1; i < n; i++) {
        prefix.push(nums[i] + prefix[prefix.length - 1]);
    }
    
    let ans = 0;
    for (let i = 0; i < n - 1; i++) {
        let leftSection = prefix[i];
        let rightSection = prefix[n - 1] - prefix[i];
        if (leftSection >= rightSection) {
            ans++;
        }
    }
    
    return ans;

};


```

**Anki** Problem 3 : 

[Running Sum of 1D Array](https://leetcode.com/problems/running-sum-of-1d-array/description/)

**Solution**:

```js
var runningSum = function(nums) {

    let prefix =[nums[0]];

    for(let i=1;i<nums.length;i++){

        prefix.push(nums[i]+prefix[prefix.length-1])

    }

    return prefix;

};
```

**Anki** Problem 4 

[1413. Minimum Value to Get Positive Step by Step Sum](https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/)

**Solution**:

```js
var minStartValue = function(nums) {

   let minVal =0;

    let total =0;

    for(let i=0;i<nums.length;i++){

        total+=nums[i];

        minVal =Math.min(minVal,total)

    }

    return 1-minVal

};
```

**Anki** Problem 5 

[2090. K Radius Subarray Averages](https://leetcode.com/problems/k-radius-subarray-averages/)

**Solution**:

