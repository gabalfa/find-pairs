class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  /**
   * Add a new element to the front of the linked list. O(1)
   */
  pushFront(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  /**
   * Returns the value of the element at the provided index. O(n)
   */
  getElement(index) {
    if (index < 0) {
      throw new Error("Index cannot be negative");
    }

    let current = this.head;
    let currentIndex = 0;

    while (current !== null && currentIndex < index) {
      current = current.next;
      currentIndex++;
    }

    if (current === null) {
      throw new Error("Index out of bounds");
    }

    return current.data;
  }

  /**
   * Returns the number of elements in the list. O(1)
   */
  count() {
    let count = 0;
    let current = this.head;

    while (current !== null) {
      count++;
      current = current.next;
    }

    return count;
  }

  /**
   * Removes the val from the front of the list and returns the value of that val. O(1)
   */
  popFront() {
    if (this.head === null) {
      throw new Error("List is empty");
    }

    const poppedValue = this.head.data;
    this.head = this.head.next;
    return poppedValue;
  }

  /**
   * Inserts an val in the list after the provided index. O(n)
   */
  insertAfter(index, val) {
    if (index < 0) {
      throw new Error("Index cannot be negative");
    }

    if (index === 0) {
      this.pushFront(val);
      return;
    }

    let current = this.head;
    let currentIndex = 0;

    while (current !== null && currentIndex < index) {
      current = current.next;
      currentIndex++;
    }

    if (current === null) {
      throw new Error("Index out of bounds");
    }

    const newNode = new Node(val);
    newNode.next = current.next;
    current.next = newNode;
  }

  /**
   * Removes element at the provided index. Returns the removed element. O(n)
   */
  removeElement(index) {
    if (index < 0) {
      throw new Error("Index cannot be negative");
    }

    if (index === 0) {
      return this.popFront();
    }

    let current = this.head;
    let currentIndex = 0;

    while (current !== null && currentIndex < index - 1) {
      current = current.next;
      currentIndex++;
    }

    if (current === null || current.next === null) {
      throw new Error("Index out of bounds");
    }

    const removedValue = current.next.data;
    current.next = current.next.next;
    return removedValue;
  }

  /**
   * Reverses the direction of the linked list. O(n)
   */
  reverse() {
    let prev = null;
    let current = this.head;

    while (current !== null) {
      const nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }

    this.head = prev;
  }
}

module.exports = LinkedList;
