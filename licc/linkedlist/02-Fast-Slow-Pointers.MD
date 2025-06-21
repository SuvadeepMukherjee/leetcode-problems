## Fast And Slow Pointers

#### Q1:Write the  Fast and Slow Pointer algorithm and pseudo code ?

**Answer**:

Algorithm : Fast pointer moves 2 nodes per iteration whereas the slow pointer moves one node per iteration 

Pseudocode :- 

```js
//head  is  the head node of a LL

function fn(head) {

  let slow = head;

  let fast = head;

  while (fast && fast.next) {

    //Do something here

    slow = slow.next;

    fast = fast.next.next;

  }

}
```

Time Complexity : O(n)

Space Complexity : O(1)

