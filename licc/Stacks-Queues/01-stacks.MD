## Stacks and Queues 

#### What is a Stack ? 

**Answer**:A stack is an ordered collection of elements where elements are only added and removed from the same end A term used to describe stacks is LIFO , which stands for Last in , first out .The last (most recent) element placed inside is the first element to come out 

#### Describe the various stack terminologies like push , pop and peek (Anki)

-  pushing ->  inserting into a stack is called pushing 
- popping -> removing from a stack 
- peek -> looking at the element at the top of the stack 

#### Interface of stack in JS 

```js
//declaration

let stack = [];

//Pushing Elements

stack.push(1);

stack.push(2);

stack.push(3);

//Popping elements

stack.pop(); //3

stack.pop(); //2

//Check if empty(Returns true if stack is empty)

!stack.length;

//check element at top

stack[stack.length - 1];

//get size

stack.length;


```

#### What is the time Complexity of various  stack operations like push , pop ,random access , search assuming we implement the stack using a dynamic array 

**Answer**:

| Stack Operations | Time Complexity |
| ---------------- | --------------- |
| Push             | O(1)            |
| Pop              | O(1)            |
| random access    | O(1)            |
| Search           | O(n)            |

#### When to use Stack ? 

For algorithm problems a stack is a good option whenever we can recognize the LIFO pattern 