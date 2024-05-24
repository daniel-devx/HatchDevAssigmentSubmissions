//Create a basic task manager that uses arrays and linked lists
//to store and manage tasks. Implement features like adding,
//deleting, and displaying tasks. Practice algorithmic techniques
//for task manipulation.

class Task {
  index: number;
  description: Description;
  //next: Task | null;
  constructor(index: number, description: Description) {
    this.index = index;
    this.description = description;
    //this.next = null;
  }
}
class Description {
  type: DecisionType;
  nature: string;
}
type DecisionType =
  | "Administrative"
  | "Creative"
  | "Technical"
  | "Financial "
  | "Project Management"
  | "Miscellaneous.";
class TaskManager {
  tasks: Task[];
  constructor() {
    this.tasks = [];
  }
  addTask(index: number, description: Description) {
    const task = new Task(index, description);
    this.tasks.push(task);
  }
  deleteTask(index: number) {
    this.tasks = this.tasks.filter((taskz) => taskz.index !== index);
  }
  displayTasks() {
    this.tasks.forEach((task) =>
      console.log(
        `Task ID: ${task.index}, Description: ${task.description.type}- ${task.description.nature}`
      )
    );
  }
}
const taskManager = new TaskManager();
//taskManager.addTask(1, new Description(""));
taskManager.addTask(1, { type: "Creative", nature: "writing poetry" });
taskManager.addTask(2, {
  type: "Technical",
  nature: "Complete the C++ Sorting Algorithms",
});

taskManager.displayTasks();

taskManager.deleteTask(2);

taskManager.displayTasks();
