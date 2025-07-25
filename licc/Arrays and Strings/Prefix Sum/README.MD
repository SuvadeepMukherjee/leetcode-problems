# Prefix Sum 

#### Q1:What is the sum of a subarray from i to j (inclusive) ? 

**Solution**: 

Sum of a subarray from i to j (inclusive) = `prefix[j]-prefix[i] + nums[i]`

#### Q2:Sum of subarray from i to j (inclusive) is prefix[j]-prefix[i]+nums[i]. What is the time complexity of this operation ? 

**Solution**:

Time Complexity of this operation is O(1)

### Q3:Write the js code for building a prefix sum 

**Solution**:

```js
//Given an array nums

let prefix = [nums[0]];

for (let i = 1; i < nums.length; i++)

  prefix.push(nums[i] + prefix[prefix.length - 1]);
```

#### Problem 1 

**Range Sum Querry with Limit** 

Example 1: Given an integer array `nums`, an array `queries` where `queries[i] = [x, y]` and an integer `limit`, return a boolean array that represents the answer to each query. A query is `true` if the sum of the subarray from `x` to `y` is less than `limit`, or `false` otherwise.

For example, given `nums = [1, 6, 3, 2, 7, 2]`, `queries = [[0, 3], [2, 5], [2, 4]]`, and `limit = 13`, the answer is `[true, false, true]`. For each query, the subarray sums are `[12, 14, 12]`.

```js
var answerQueries = function(nums, queries, limit) {
    
};
```

**Solution**:

```js
var answerQueries = function (nums, queries, limit) {

  let prefix = [nums[0]];

  for (let i = 1; i < nums.length; i++) {

    prefix.push(nums[i] + prefix[prefix.length - 1]);

  }

  let ans = [];

  for (let [x, y] of queries) {

    let curr = prefix[y] - prefix[x] + nums[x];

    ans.push(curr<limit)

  }

  return ans;

};
```

Time Complexity : O(n)

Space Complexity : O(n)

####  Problem 2 

[2270. Number of Ways to Split Array](https://leetcode.com/problems/number-of-ways-to-split-array/)

**Solution**:

```js
var waysToSplitArray = function(nums) {

    let prefix =[nums[0]];

    for(let i=1;i<nums.length;i++ ){

        prefix.push(nums[i]+prefix[prefix.length-1])

    }

 let ans =0;

    for(let i=0;i<nums.length-1;i++){

        let firstPart = prefix[i];

        let secondPart = prefix[nums.length-1]-prefix[i+1]+nums[i+1]

        if(firstPart>=secondPart)ans++;

    }

    return ans;

};
```

Time Complexity : O(n)

Space Complexity : O(n)

#### Problem 3 

[1480. Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/)

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

Time Complexity : O(n)

Space Complexity :O(n)

#### Problem 4 

[1413. Minimum Value to Get Positive Step by Step Sum](https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/) 

**Solution**:

```javascript
var minStartValue = function(nums) {
    let minVal = 0;
    let total =0;
    for(let i=0;i<nums.length;i++){
        total += nums[i];
        minVal = Math.min(minVal,total)
    }

    return 1-minVal
};
```

Time Complexity : O(n)

Space Complexity : O(1)