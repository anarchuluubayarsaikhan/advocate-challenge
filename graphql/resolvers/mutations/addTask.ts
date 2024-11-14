import Tasks from "../../models/Tasks";
const createdAt= new Date()
type Task =
  {
    taskName:String,
    isDone: Boolean,
    createdAt:Date,
    priority:Number
  }

export const  addTask = async (_:any, { taskName,priority, isDone}:Task) => {
    const task = Tasks.create({ taskName,createdAt:createdAt,priority,isDone});
    return task;
  }