## Sliding Window 

Sliding window works the same with arrays and strings 

Subarray => contiguous section of the array 

#### Q1:What makes a subarray valid ? 

**Solution**: 

We can split it into 2 parts 

- A constraint metric .This is an attribute of a subarray .For example the sum of the subarray , the number of unique elements in the subarray , the frequency of a specific element 
- A numeric restriction on the constraint part 

Example - A problem might say a subarray is valid if it has a sum less than or equal to 10 .The constraint metric here is the sum of the subarray and the numeric restriction is <=10 

#### Q2:Types of Sliding Window problems we can solve with sliding window 

**Solution**:

1.  Best valid subarray
2. Number of valid subarrrays

#### Q3:Sliding Window Template and Time Complexity 

**Solution**:

 

```js
function fn(arr) {

  let left = 0;

  for (let right = 0; right < arr.length; right++) {

    //DO SOME LOGIC TO ADD ELEMENTS AT arr[right] to WINDOW

    //while(WINDOW IS INVALID){

    //DO SOME LOGIC TO REMOVE ELEMENT AT ARR[left] from window

    left++;

    //}

    //DO SOME LOGIC TO UPDATE THE ANSWER

  }

}
```

Time Complexity : A sliding window guarantees a maximum of 2n window iterations-the right pointer can move n times and the left pointr can move n times(if the logic done for each window is O(1) the time complexity of sliding window is O(n))

#### Q4:Formula for length of a window is 

**Solution**:

Formula for length of a window is `right - left + 1`

#### Problem 1:

Maximum Length of Subarray With Sum ≤ K

Given an array of positive integers `nums` and an integer `k`, find the length of the longest subarray whose sum is less than or equal to `k`

```js
var findLength = function(nums, k) {
    
}
```

**Solution**:

```js
var findLength = function (nums, k) {

  let left = 0;

  let curr = 0;

  let max = 0;

  for (let right = 0; right < nums.length; right++) {

    curr += nums[right];

    while (curr > k) {

      curr -= nums[left];

      left++;

    }

    max = Math.max(max, right - left + 1);

  }

  return max;

};

let arr = [3, 1, 2, 7, 4, 2, 1, 1, 5];

let n = 8;

console.log(findLength(arr, n));


```

Time Complexity : O(n)

Space Complexity : O(1)

#### Problem 2 :

You are given a binary string `s` (a string containing only `"0"` and `"1"`). You may choose up to one `"0"` and flip it to a `"1"`. What is the length of the longest substring achievable that contains only `"1"`?

For example, given `s = "1101100111"`, the answer is `5`. If you perform the flip at index `2`, the string becomes `1111100111`.

```js
var findLength = function(s) {
}
```

**Solution**:

```js
var findLength = function (s) {

  let curr = 0;

  let max = 0;

  let left = 0;

  for (let right = 0; right < s.length; right++) {

    if (s[right] === "0") curr++;

    while (curr > 1) {

      if (s[left] === "0") {

        curr -= 1;

      }

      left++;

    }

    max = Math.max(max, right - left + 1);

  }

  return max;

};

console.log(findLength("1101100111"));


```

Time Complexity :O(n)

Space Complexity :O(1)

