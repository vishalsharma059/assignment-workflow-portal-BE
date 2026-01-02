import Assignment from "../models/Assignment.js";
import Submission from "../models/Submission.js";

// Create Assignment
export const createAssignment = async (req, res) => {
console.log("REQ BODY:", req.body);
console.log("CONTENT TYPE:", req.headers["content-type"]);

  const { title, description, dueDate } = req.body;

  if (!title || !description || !dueDate) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const assignment = await Assignment.create({
    title,
    description,
    dueDate,
    createdBy: req.user.id,
  });

  res.status(201).json(assignment);
};

// Update Assignment (Draft Only)

export const updateAssignment = async (req, res) => {
  const assignment = await Assignment.findById(req.params.id);

  if (!assignment)
    return res.status(404).json({ message: "Assignment not found" });

  if (assignment.status !== "draft") {
    return res.status(400).json({
      message: "Only draft assignments can be edited",
    });
  }

  Object.assign(assignment, req.body);
  await assignment.save();

  res.json(assignment);
};

// Delete Assignment (Draft Only)

export const deleteAssignment = async (req, res) => {
  const assignment = await Assignment.findById(req.params.id);

  if (!assignment)
    return res.status(404).json({ message: "Assignment not found" });

  if (assignment.status !== "draft") {
    return res.status(400).json({
      message: "Only draft assignments can be deleted",
    });
  }

  await assignment.deleteOne();
  res.json({ message: "Assignment deleted successfully" });
};

// Publish Assignment

export const publishAssignment = async (req, res) => {
  const assignment = await Assignment.findById(req.params.id);

  if (!assignment)
    return res.status(404).json({ message: "Assignment not found" });

  if (assignment.status !== "draft") {
    return res.status(400).json({
      message: "Only draft assignments can be published",
    });
  }

  assignment.status = "published";
  await assignment.save();

  res.json(assignment);
};

// Mark Assignment as Completed

export const completeAssignment = async (req, res) => {
  const assignment = await Assignment.findById(req.params.id);

  if (!assignment)
    return res.status(404).json({ message: "Assignment not found" });

  if (assignment.status !== "published") {
    return res.status(400).json({
      message: "Only published assignments can be completed",
    });
  }

  assignment.status = "completed";
  await assignment.save();

  res.json(assignment);
};

// Get Assignment

export const getAssignments = async (req, res) => {
  const { status } = req.query;

  const filter = { createdBy: req.user.id };
  if (status) filter.status = status;

  const assignments = await Assignment.find(filter).sort({ createdAt: -1 });
  res.json(assignments);
};

// View Submission

export const getSubmissions = async (req, res) => {
  const submissions = await Submission.find({
    assignmentId: req.params.id,
  }).populate("studentId", "name email");

  res.json(submissions);
};
