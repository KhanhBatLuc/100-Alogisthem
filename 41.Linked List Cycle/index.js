function hasCycle(head) {
    if (!head || !head.next) {
      return false; // empty list or only one node, no cycle
    }
    
    let slow = head;
    let fast = head.next;
    
    while (slow !== fast) {
      if (!fast || !fast.next) {
        return false; // fast pointer reaches end, no cycle
      }
      slow = slow.next;
      fast = fast.next.next;
    }
    
    return true; // fast pointer catches up to slow pointer, there is a cycle
  }
  