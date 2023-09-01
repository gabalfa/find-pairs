const LinkedList = require("./linked-list");

test("getElement", () => {
  const linkedList = new LinkedList();

  linkedList.pushFront("a");
  linkedList.pushFront("b");
  linkedList.pushFront("c");
  linkedList.pushFront("d");

  expect(linkedList.getElement(0)).toBe("d");
  expect(linkedList.getElement(1)).toBe("c");
  expect(linkedList.getElement(2)).toBe("b");
  expect(linkedList.getElement(3)).toBe("a");
});
