const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsCompleted = (index) => {
    all[index].completed = true;
  };
  const overdue = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return all.filter(
      (item) => !item.completed && new Date(item.dueDate) < today,
    );
  };
  const dueToday = () => {
    const today = new Date();
    return all.filter(
      (item) =>
        !item.completed &&
        formattedDate(new Date(item.dueDate)) === formattedDate(today),
    );
  };
  const dueLater = () => {
    const today = new Date();
    return all.filter(
      (item) => !item.completed && new Date(item.dueDate) > today,
    );
  };
  const toDisplayableList = (list) => {
    return list.map((item) => {
      const checkbox = item.completed ? "[x]" : "[ ]";
      return `${checkbox} ${item.title} ${item.dueDate}`;
    });
  };
  return {
    all,
    add,
    markAsCompleted,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

const formattedDate = (date) => {
  return date.toISOString().split("T")[0];
};

module.exports = todoList;
