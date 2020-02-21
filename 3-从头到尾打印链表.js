function printListFromTailToHead(head)
{
    // write code here
    let returnData = []
    while (head !== null) {
      returnData.unshift(head.val);
      head = head.next;
    }
    return returnData
}