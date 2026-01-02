import express from "express";
import {
  createAssignment,
  updateAssignment,
  deleteAssignment,
  publishAssignment,
  completeAssignment,
  getAssignments,
  getSubmissions,
} from "../controllers/assignmentController.js";

import { verifyToken } from "../middlewares/authMiddleware.js";
import { isTeacher } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.use(verifyToken, isTeacher);

router.post("/", createAssignment);
router.get("/", getAssignments);

router.put("/:id", updateAssignment);
router.delete("/:id", deleteAssignment);

router.post("/:id/publish", publishAssignment);
router.post("/:id/complete", completeAssignment);

router.get("/:id/submissions", getSubmissions);

export default router;
