## 2 Pointers 

#### Q1:Valid Palindrome 

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

#### Q3:Merge Two Sorted Arrays 

Given two sorted integer arrays `arr1` and `arr2`, return a new array that combines both of them and is also sorted.

```js
var combine = function(arr1, arr2) {
}
```

**Solution**:

```js
var combine = function (arr1, arr2) {
  let ans = [];

  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      ans.push(arr1[i]);
      i++;
    } else {
      ans.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    ans.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    ans.push(arr2[j]);
    j++;
  }
  return ans;
};

let arr1 = [1, 4, 7, 10];
let arr2 = [3, 5, 6];
console.log(combine(arr1, arr2));

```

Time Complexity :O(n)

Space Complexitu :O(1)

#### Q4:[392. Is Subsequence](https://leetcode.com/problems/is-subsequence/)

**Solution**:

```javascript
var isSubsequence = function(s, t) {
    let i =0;
    let j=0;
    while(i<s.length && j<t.length){
        if(s[i]===t[j])i++;
        j++;

    }
    return i===s.length;
};
```

Time Complexity : O(n)

Space Complexity : O(1)

#### Q5:[344. Reverse String](https://leetcode.com/problems/reverse-string/)

**Solution**:

```js
var reverseString = function(s) {

    let left =0;

    let right = s.length - 1;

    while(left<right){

        let temp =s[left];

        s[left]=s[right];

        s[right]=temp;

        left++;

        right--

    }

};
```

Time Complexity : O(n)

Space Complexity : O(1)

#### Q6:[977. Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)

**Solution**:

```javascript
var sortedSquares = function(nums) {
    let arr = new Array(nums.length).fill(0);
    let left =0;
    let right = nums.length-1;
    while(left<right){
        for(let i=nums.length -1;i>=0;i--){
        if(Math.abs(nums[left])<Math.abs(nums[right])){
            arr[i]= nums[right]*nums[right];
            right--
        }else{
            arr[i]=nums[left]*nums[left];
            left++;
        }
    }

    }
    return arr;
    

};
```

Time Complexity : O(n)

Space Complexity : O(1)

#### Q7:[557. Reverse Words in a String III](https://leetcode.com/problems/reverse-words-in-a-string-iii/)

**Solution**:

```js

var reverseWords = function(s) {

    let arr = s.split(" ");

    for(let i=0;i<arr.length;i++){

        arr[i]= reverse(arr[i]);

    }

    return arr.join(" ");

};
var reverse = function(str){

   let arr = str.split('');

    let left = 0;

    let right = arr.length - 1;

    while(left < right){

        let tmp = arr[left];

        arr[left] = arr[right];

        arr[right] = tmp;

        left++;

        right--;

    }

    return arr.join('');

}
```

Time Complexity : O(n)

Space Complexity:O(1)

#### Q8:

[917. Reverse Only Letters](https://leetcode.com/problems/reverse-only-letters/)

**Solution**:

```js
const isLetter =(c)=>{

    const lowerC = c.toLowerCase();

    const isAlpha = lowerC>="a" && lowerC<="z";

    return isAlpha;

    }

var reverseOnlyLetters = function(s) {

    let arr = s.split("");

    let left =0;

    let right = s.length -1;

    while(left<right){

        const skipLeft = !isLetter(s[left]);

        if(skipLeft){

            left++;

            continue;

        }

        const skipRight =!isLetter(s[right]);

        if(skipRight){

            right--;

            continue;

        }

        [arr[left],arr[right]]=[arr[right],arr[left]];

        left++;

        right--;

    }

    return arr.join("");

};
```

Time Complexity :O(n)

Space Complexity:O(1)

Problem 9:

[2540. Minimum Common Value](https://leetcode.com/problems/minimum-common-value/)

**Solution**:

```js
var getCommon = function(nums1, nums2) {

    let i=0;

    let j=0;

    while(i<nums1.length && j<nums2.length){

        if(nums1[i]<nums2[j]){

            i++;

        }else if(nums1[i]>nums2[j]){

            j++;

        }else{

            return nums1[i]

        }

    }

    return -1;

};
```

Time Complexity : O(n)

Space Complexity :O(1)

Problem 10:

[283. Move Zeroes](https://leetcode.com/problems/move-zeroes/)

**Solution**:

```js
var moveZeroes = function(nums) {

    let l =0;

    for(let r=0;r<nums.length;r++){

        if(nums[r]!==0){

            [nums[l],nums[r]]=[nums[r],nums[l]];

            l++

        }

    }

    

};
```

Time Complexity :O(n)

Space Complexity :O(1)

Problem 11:

[2000. Reverse Prefix of Word](https://leetcode.com/problems/reverse-prefix-of-word/)

**Solution**:

```js
var reversePrefix = function(word, ch) {

    let i =0;

    for(let j=0;j<word.length;j++){

        if(word[j]===ch){

            i=j

            break;

        }

        

    }

    if(i===word.length) return word;

    let l =0;

    let r =i;

    let arr = word.split("");

    while(l<r){

        [arr[l],arr[r]]=[arr[r],arr[l]];

        l++;

        r--;

    }

    return arr.join("");

    

};
```

Time Complexity :O(n)

Space Complexity :O(1)
