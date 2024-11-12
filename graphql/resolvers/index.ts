import { addTask } from "./mutations/addTask";
import { updateTask } from "./mutations/updateTask";
import { getAllTasks } from "./queries/getAllTask";
import { getFinishedTasks } from "./queries/getFinishedTask";


export const resolvers = {
  Query: {
    getAllTasks,
    getFinishedTasks
  },
  Mutation: {
    updateTask,
    addTask
  },
};
