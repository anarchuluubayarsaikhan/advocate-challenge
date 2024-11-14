import Tasks from "../../models/Tasks";
export const  getAllTasks = async () => {
  const tasks= await Tasks.find({ isDone: false});
  return tasks
  }
