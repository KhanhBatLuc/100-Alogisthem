function ListNode(val, next) {
    this.val = val || 0;
    this.next = next || null;
  }
  
  function mergeTwoLists(list1, list2) {
    // Create a dummy node to hold the head of the merged list
    const dummy = new ListNode(0);
    // Pointer to the current tail of the merged list
    let tail = dummy;
    
    while (list1 && list2) {
      // Compare the values of the heads of the two lists
      if (list1.val < list2.val) {
        // Append the head of list1 to the merged list
        tail.next = list1;
        list1 = list1.next;
      } else {
        // Append the head of list2 to the merged list
        tail.next = list2;
        list2 = list2.next;
      }
      // Move the tail of the merged list
      tail = tail.next;
    }
    
    // Append the remaining nodes of list1 or list2, if any
    if (list1) {
      tail.next = list1;
    } else {
      tail.next = list2;
    }
    
    // Return the head of the merged list
    return dummy.next;
  }
  