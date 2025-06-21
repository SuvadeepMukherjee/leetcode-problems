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

#### Q2:Given the head of a Linked List with an odd number of nodes , return the value of the node in the middle 

For example , given a  Linked List that represents 

1-> 2 -> 3 -> 4 -> 5 

return 3 

```js
let getMiddle = (head) => {

};
```

**Solution**:

```js
let getMiddle = (head) => {

  let slow = head;

  let fast = head;

  while (fast && fast.next) {

    slow = slow.next;

    fast = fast.next.next;

  }

  return slow.val;

};
```

Time Complexity : O(n)

Space Complexity:O(1)

#### Q3:Given the head of a linked List and an integer K , return the Kth node from the end . For example , given the linked list that represents 1-> 2 -> 3 -> 4 -> 5 and K = 2 return the node with value 4 as it is the 2nd node from the end 

```js
let findNode = (head,k)=>{
}
```

**Solution**:

```js
let findNode = (head, k) => {

  let slow = head;

  let fast = head;

  for (let i = 0; i < k; i++) {

    fast = fast.next;

  }

  while (fast) {

    slow = slow.next;

    fast = fast.next;

  }

  return slow;

};
```

Time : O(n)

Space : O(1)

#### Q4:

 [876. Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)

**Solution**:

```js
var middleNode = function(head) {

    let slow = head;

    let fast = head;

    while(fast && fast.next){

        slow = slow.next;

        fast = fast.next.next

    }

    return slow;

};
```

Time : O(n)

Space : O(1)

#### Q5: 

[83. Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

**Solution**:

```js
var deleteDuplicates = function(head) {

    let current = head;

    while(current && current.next){

        if(current.next.val === current.val){

            current.next = current.next.next

        }else{

            current = current.next;

        }

    }

    return head;

};
```

Time : O(n)

Space : O(1)

#### Q6:

[2095. Delete the Middle Node of a Linked List](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/)

**Solution**:

```js
var deleteMiddle = function(head) {

    if (!head || !head.next) return null;

  let dummy = new ListNode(-1);

  dummy.next = head;

  let slow = head;

  let fast = head;

  while(fast && fast.next){

    dummy = dummy.next

    slow = slow.next;

    fast= fast.next.next;

    

  } 

  dummy.next = dummy.next.next;

  return head; 

};
```

Time : O(n)

Space : O(1)

