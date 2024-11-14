import Tasks from '../../graphql/models/Tasks';
import { getFinishedTasks } from "@/graphql/resolvers/queries/getFinishedTask";

jest.mock('../../graphql/models/Tasks', () => ({
  find: jest.fn((query) => {
    const allTasks = [
      { id: "1", taskName: "Task 1",isDone: false },
      { id: "2", taskName: "Task 2", isDone: true },
    ];

    return Promise.resolve(allTasks.filter(task => {
      if (query.isDone !== undefined && task.isDone!== query.isDone) {
        return false;
      }
      return true; 
    }));
  }),
}));

describe("Get all tasks", () => {
  it("Should return all active tasks", async () => {
    const result = await getFinishedTasks();

    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(1);
    expect(result[0]).toHaveProperty("id", "2");
    expect(result[0]).toHaveProperty("taskName", "Task 2");
    expect(result[0]).toHaveProperty("isDone", true);
  });
});
