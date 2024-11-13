import Tasks from "../../models/Tasks";
type Task =
  {
    taskName:String,
    isDone: Boolean,
    createdAt:Date,
    priority:Number
  }

export const  addTask = async (_:any, { taskName,createdAt,priority}:Task) => {
    const task = Tasks.create({ taskName,createdAt,priority});
    return task;
  }