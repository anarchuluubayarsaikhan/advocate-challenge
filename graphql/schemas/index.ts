import { gql } from "graphql-tag";

export const typeDefs = gql`
scalar Date
  type Task {
    taskName:String
    isDone: Boolean,
    priority: Int
    createdAt: Date
  }

  type Query {
    getAllTasks: [Task]
    getFinishedTasksLists: [Task]
  }

  type Mutation {
    addTask(taskName: String!, isDone:Boolean, priority:Int!): Task
    updateTask(id: ID!): Task
  }
`;
