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

