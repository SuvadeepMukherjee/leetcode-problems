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
