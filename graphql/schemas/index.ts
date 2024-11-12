import { gql } from "graphql-tag";

export const typeDefs = gql`
scalar Date
  type Task {
    isDone: Boolean,
    priority: Int!
    createdAt: Date
    updatedAt: Date
  }

  type Query {
    getAllTasks: [Task]
    getFinishedTasksLists: [Task]
  }

  type Mutation {
    addTask(title: String!, description: String): Task
    updateTask(id: ID!, title: String, description: String, status: String): Task
  }
`;
