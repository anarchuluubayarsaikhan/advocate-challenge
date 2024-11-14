import { addTask } from "@/graphql/resolvers/mutations/addTask";
const createdAt = new Date()
const updatedAt = new Date("2024.10.11")
jest.mock('../../graphql/models/Tasks', () => ({
  
  create: jest.fn().mockResolvedValue({
    id: "1",
    taskName: "Go to bed",
    isDone: false,
    priority: 1,
    createdAt:new Date(),
    updatedAt:new Date()
  }),
}));

describe("Create task mutation", () => {
  it("AddTask mutation should create a new task", async () => {
    const result = await addTask({}, {
      taskName: "Go to bed",
      isDone: false,
      priority: 1,
      createdAt:createdAt,
      updatedAt:updatedAt
    });

    expect(result).toBeDefined();
    expect(result).toHaveProperty("id", "1");
    expect(result).toHaveProperty("taskName", "Go to bed");
    expect(result).toHaveProperty("isDone", false);
    expect(result).toHaveProperty("priority", 1);
  });
});
