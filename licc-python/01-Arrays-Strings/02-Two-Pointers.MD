## Two Pointers 

------

Anki : ◻️

Q:What is the 2 pointer algorithm ? 

**Solution**:

Two integer varibles both move along an iterable 

------

Anki : ◻️

Q:Write the pseudocode for this algorithm 
"Start the pointers at the edges of the input .Move then towards each other until they meet"

What will be the time and space complexity ?  

**Solution**:

def fn(arr):
    left = 0
    right = len(arr) - 1

```python
while left < right:
    # Do some logic here depending on the problem
    # Do some more logic here to decide on one of the following:
    #     1. left += 1
    #     2. right -= 1
    #     3. both left += 1 and right -= 1
```

Time Complexity : we will never have more than O(n) iterations for the while loop because the pointers start n away from each other and move at least one step closer in every  iteration. Therefore, if we can keep the work inside each iteration at O(1), this technique will result in a linear runtime

Space Complexity : O(1)

