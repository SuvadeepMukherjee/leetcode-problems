# Reversing a Linked List 

#### Problem 1

[206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)

**Solution**:

```js
var reverseList = function(head) {

    let prev = null;

    let curr = head;

    while(curr){

        let nextNode = curr.next;

        curr.next=prev;

        prev = curr;

        curr=nextNode;

    

    }

    return prev;

};


```

Time  : O(n)

Space : O(1)

#### Problem 2:

[24. Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/)

**Solution**:

#### Problem 3:

[2130. Maximum Twin Sum of a Linked List](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/)

**Solution**:

