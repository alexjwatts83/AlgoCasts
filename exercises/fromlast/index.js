// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let slowPointer = list.head;
  let fastPointer = list.head;
  // console.log({n: n, slowPointer: slowPointer.data, fastPointer:fastPointer.data});
  for(let i = 0; i < n; i++){
    // console.log({i: i, fastPointer:fastPointer.data});
    fastPointer = fastPointer.next;
  }
  // console.log({n: n, slowPointer: slowPointer.data, fastPointer:fastPointer.data});
  while(fastPointer !== null && fastPointer.next !== null) {
    fastPointer = fastPointer.next;
    slowPointer = slowPointer.next;
  }
  // console.log({n: n, slowPointer: slowPointer, fastPointer:fastPointer});
  return slowPointer;
}

module.exports = fromLast;
