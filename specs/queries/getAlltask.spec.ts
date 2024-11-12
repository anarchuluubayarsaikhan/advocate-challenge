import { getAllTasks } from "../../graphql/resolvers/queries/getAllTask"
import Tasks from '../../graphql/models/Tasks';

jest.mock('../../graphql/models/Tasks', () => ({
  find: jest.fn((query) => {
    const allTasks = [
      { id: "1", taskName: "Workout", isDone: false },
      { id: "2", taskName: "Cook", isDone: true },
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
    const result = await getAllTasks();

    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(1);
    expect(result[0]).toHaveProperty("id", "1");
    expect(result[0]).toHaveProperty("taskName", "Workout");
    expect(result[0]).toHaveProperty("isDone", false);
  });
});

