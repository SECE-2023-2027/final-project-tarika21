import mongoose from "mongoose";

const checklistItemSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

const phaseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  checklist: [checklistItemSchema],
});

const projectSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    phases: [phaseSchema],
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

export default mongoose.models.Project || mongoose.model("Project", projectSchema);
