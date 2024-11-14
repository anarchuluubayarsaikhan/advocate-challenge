import Tasks from "../../models/Tasks";
export const  getFinishedTasks = async () => {
  const tasks= await Tasks.find({isDone: true });
  return tasks
}