const todoList = require("../index");
const { all, markAsCompleted, add } = todoList();

describe("This is an Todo List", () => {
  beforeAll(() => {
    add({
      title: "1st Item",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  test("The add test case", () => {
    const length = all.length;
    add({
      title: "1st Item",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(length + 1);
  });
  test("The markAsCompleted test case", () => {
    expect(all[0].completed).toBe(false);
    markAsCompleted(0);
    expect(all[0].completed).toBe(true);
  });
});
