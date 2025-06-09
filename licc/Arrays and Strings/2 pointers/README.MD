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