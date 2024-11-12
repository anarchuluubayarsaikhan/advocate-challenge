import Tasks from "../../models/Tasks";
type Task =
  {
    taskName:String,
    isDone: Boolean,
    priority: Number,
    createdAt:Date,
    updatedAt:Date
  }

export const  addTask = async (_:any, { taskName, isDone,priority,  createdAt,updatedAt}:Task) => {
    const task = Tasks.create({ taskName, isDone,priority});
    return task;
  }