var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(-1);

  dummy.next = head;

  let a = dummy;

  let fast = head;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast) {
    dummy = dummy.next;

    fast = fast.next;
  }

  dummy.next = dummy.next.next;

  return a.next;
};
