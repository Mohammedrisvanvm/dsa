// class ListNode {
//     constructor(val, next = null) {
//       this.val = val;
//       this.next = next;
//     }
//   }
  
//   function deleteDuplicates(head) {
//     let current = head;
//     while (current && current.next) {
//       if (current.val === current.next.val) {
//         current.next = current.next.next;
//       } else {
//         current = current.next;
//       }
//     }
//     return head;
//   }
//   let lln = new ListNode();
//   lln.deleteDuplicates(5);
//   lln.deleteDuplicates(10);
//    lln.deleteDuplicates(15);  


   class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
    
     deleteDuplicates(head) {
      let current = head;
      while (current && current.next) {
        if (current.val === current.next.val) {
          current.next = current.next.next;
        } else {
          current = current.next;
        }
      }
      return head;
    }
  }
  

  let ll = new ListNode(5, new ListNode(5, new ListNode(10, new ListNode(15))));
  

  let lt=new ListNode()
  ll.deleteDuplicates(ll);
  
  console.log(ll);
