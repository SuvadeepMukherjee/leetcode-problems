## Prefix Sum 

Prefix sum is the sum of all elements up to the index i 

```js
let nums =[5,2,1,6,3,8]

let prefixSum =[5,7,8,14,17,25] 
```

#### (Anki)Q1:Prefix sum allows us to find the sum of any subarray in ____

**Answer**:Prefix Sum allows us to find the sum of any subarray in O(1)

#### (Anki)Q2:Sum of subarray from i to j inclusive is 

**Answer**: Sum of subarray from i to j (inclusive) is `prefix[j]-prefix[i]+nums[i]`

#### (Anki)Q3:Write the code for building a prefix sum ? 

**Answer**:

```js
//Given an array nums

let prefix =[nums[0]];

for(let i=1;i<nums.length;i++){

    prefix.push(nums[i]+prefix[prefix.length-1])

}
```

