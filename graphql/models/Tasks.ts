import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  taskName: { type: String, required: true },
  isDone: { type: Boolean, default:false},
  createdAt: { type: Date},
  updatedAt: { type: Date},
});
const Tasks = mongoose.model("Task", taskSchema);

export default Tasks