const todoList = require("../index");
const {
  all,
  add,
  markAsCompleted,
  overdue,
  dueToday,
  dueLater,
  toDisplayableList,
} = todoList();

describe("This is an Todo List", () => {
  beforeAll(() => {
    add({
      title: "1st Item",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("1. Creating a new todo", () => {
    const length = all.length;
    add({
      title: "New Todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(length + 1);
  });

  test("2. Marking a todo as completed", () => {
    expect(all[0].completed).toBe(false);
    markAsCompleted(0);
    expect(all[0].completed).toBe(true);
  });

  test("3. Retrieval of overdue items", () => {
    add({
      title: "Overdue Todo",
      completed: false,
      dueDate: "1/1/2020",
    });

    const overdueItems = overdue();
    expect(overdueItems.length).toBe(1);
  });

  test("4. Retrieval of due today items", () => {
    add({
      title: "Due Today Todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    const dueTodayItems = dueToday();
    expect(dueTodayItems.length).toBe(2);
  });

  test("5. Retrieval of due later items", () => {
    add({
      title: "Due Later Todo",
      completed: false,
      dueDate: "2/10/3219",
    });

    const dueLaterItems = dueLater();
    expect(dueLaterItems.length).toBe(1);
    expect(dueLaterItems[0].title).toBe("Due Later Todo");
  });

  test("6. Convert list to displayable format", () => {
    const displayableList = toDisplayableList(all);
    expect(displayableList.length).toBe(5);
    expect(displayableList[0]).toBe(
      "[x] 1st Item " + new Date().toLocaleDateString("en-CA"),
    );
  });
});
