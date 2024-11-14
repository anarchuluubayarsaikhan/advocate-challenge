import Tasks from "../../models/Tasks";
const updatedAt = new Date()
export const  updateTask = async(_:any, { id, taskName,priority, isDone}: { id: string, taskName:string, priority:number, isDone:boolean, updatedAt:Date}) => {
  const updatedTask = await Tasks.findByIdAndUpdate(
    id,
    { taskName,isDone,priority,updatedAt:updatedAt},
    { new: true }
  );
  return updatedTask;
};
