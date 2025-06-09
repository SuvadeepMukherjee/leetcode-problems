## 2 Pointers 

Q1:Valid Palindrome 

Given a string `s`, return `true` if it is a palindrome, `false` otherwise.

A string is a palindrome if it reads the same forward as backward.  That means, after reversing it, it is still the same string. For  example: "abcdcba", or "racecar".

```js
var checkIfPalindrome = function(s) {
   
}
```

**Solution**:

```js
var checkIfPalindrome = function (s) {

  let left = 0;

  let right = s.length - 1;

  while (left < right) {

    if (s[left] !== s[right]) {

      return false;

    }

    left++;

    right--;

  }

  return true;

};
```

Time Complexity : O(n)

Space Complexity : O(1)

#### Q2:Two Sum in Sorted Array 

Given a **sorted** array of unique integers and a target integer, return `true` if there exists a pair of numbers that sum to target, `false` otherwise. This problem is similar to [Two Sum](https://leetcode.com/problems/two-sum/). (In Two Sum, the input is not sorted).

For example, given `nums = [1, 2, 4, 6, 8, 9, 14, 15]` and `target = 13`, return true because `4 + 9 = 13`.

```js
var checkForTarget = function(nums, target) {
}
```

**Solution**:

```js
var checkForTarget = function (nums, target) {

  let left = 0;

  let right = nums.length - 1;

  while (left < right) {

    let currSum = nums[left] + nums[right];

    if (currSum > target) right--;

    else if (currSum < target) left++;

    else return true;

  }

  return false;

};

let arr = [1, 2, 4, 6, 8, 9, 14, 15];

let target = 13;

console.log(checkForTarget(arr, target));


```

Time Complexity :O(n)

Space Complexity :O(1)

