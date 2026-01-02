import Assignment from "../models/Assignment.js";
import Submission from "../models/Submission.js";

// GET PUBLISHED ASSIGNMENTS (STUDENT)

export const getPublishedAssignments = async (req, res) => {
  const assignments = await Assignment.find({ status: "published" })
    .sort({ createdAt: -1 });

  res.json(assignments);
};

// SUBMIT ANSWER (ONE TIME ONLY)
 
export const submitAnswer = async (req, res) => {
  const { answer } = req.body;
  const { assignmentId } = req.params;

  if (!answer) {
    return res.status(400).json({ message: "Answer is required" });
  }

  const assignment = await Assignment.findById(assignmentId);

  if (!assignment) {
    return res.status(404).json({ message: "Assignment not found" });
  }

  if (assignment.status !== "published") {
    return res.status(400).json({ message: "Assignment not open for submission" });
  }

  if (new Date() > assignment.dueDate) {
    return res.status(400).json({ message: "Submission deadline has passed" });
  }

  const existingSubmission = await Submission.findOne({
    assignmentId,
    studentId: req.user.id
  });

  if (existingSubmission) {
    return res.status(400).json({
      message: "You have already submitted this assignment"
    });
  }

  const submission = await Submission.create({
    assignmentId,
    studentId: req.user.id,
    answer
  });

  res.status(201).json(submission);
};

// VIEW MY SUBMISSION
 
// VIEW MY SUBMISSION - NO MORE 404 LOGS
export const getMySubmission = async (req, res) => {
  try {
    const submission = await Submission.findOne({
      assignmentId: req.params.assignmentId,
      studentId: req.user.id
    }).populate("studentId", "name email"); 
    
    res.json(submission); 
  } catch (error) {
    console.error("getMySubmission error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

