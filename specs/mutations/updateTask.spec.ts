import { addTask } from "@/graphql/resolvers/mutations/addTask";
import { updateTask } from "@/graphql/resolvers/mutations/updateTask";
const staticTaskData = {
    id: "1",
    taskName: "Workout",
    priority: 1,
    isDone: false,
  };

  jest.mock('../../graphql/models/Tasks', () => ({
    findByIdAndUpdate: jest.fn((id, update) => {
      return Promise.resolve({
        ...staticTaskData,
        ...update,
      });
    }),
  }));
  
describe("Update task", () => {
    it("Should update the task and return the updated result", async () => {
        const updateData = { id: "1", taskName: "cooking", priority: 2, isDone: true };
    
    const result = await updateTask({ id: "1" }, updateData);
  
      expect(result).toBeDefined();
      expect(result).toHaveProperty("id", "1");
      expect(result).toHaveProperty("taskName", "cooking");
      expect(result).toHaveProperty("priority", 2);
      expect(result).toHaveProperty("isDone", true);
    });
  });