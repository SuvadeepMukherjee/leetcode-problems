## String Problems Using Stack

String problems that can utilize a stack will involve iterating over the string and putting characters into the stack and comparing the top of the stack with the current characters at each iteration 

**Problem 1** [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

**Solution**: 

```js
var isValid = function(s) {

    let stack =[];

    const matching ={

        "(":")",

        "{":"}",

        "[":"]"

    }

    for(const c of s){

        if(c in matching){

            stack.push(c)

        }else{

            const previousOpening = stack.pop();

            if (matching[previousOpening]!==c){

                return false;

            }

        }

    }

    return !stack.length;

};


```

Time and Space Complexity : Because the stack's push and pop operations are O(1), this gives us a time complexity of O(n), where n is the size of the input array. This is because each element can only be pushed or popped once. The space complexity is also O(n) because the stack's size can grow linearly with the input size.

**Problem 2**: [1047. Remove All Adjacent Duplicates In String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)

**Solution**:

```js
var removeDuplicates = function(s) {

    let stack =[];

    for(const c of s){

        if(stack.length && stack[stack.length-1]===c){

            stack.pop()

        }else{

            stack.push(c)

        }

    }

    return stack.join("")

};
```

Time and Space Complexity : This algorithm has a time and space complexity of O(n), where n is the length of the input. This is because the stack operations in all implementations above are O(1), and the stacks themselves can grow to O(n) size.



[844. Backspace String Compare](https://leetcode.com/problems/backspace-string-compare/)

**Solution**:

```js
var backspaceCompare = function(s, t) {
    let build = s => {
        let stack = [];
        for (const c of s) {
            if (c != "#") {
                stack.push(c);
            } else if (stack.length) {
                stack.pop();
            }
        }
        

        return stack.join("");
    }
    
    return build(s) == build(t);

};
```

Time Complexity : O(n)

Space Complexity : O(n)