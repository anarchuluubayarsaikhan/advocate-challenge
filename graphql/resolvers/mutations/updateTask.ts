import Tasks from "../../models/Tasks";
export const  updateTask = async(_:any, { id, taskName,priority, isDone}: { id: string, taskName:string, priority:number, isDone:boolean}) => {
  const updatedTask = await Tasks.findByIdAndUpdate(
    id,
    { taskName, priority, isDone },
    { new: true }
  );
  return updatedTask;
};
