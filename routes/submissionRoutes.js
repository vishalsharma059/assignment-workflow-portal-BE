import express from "express";
import {
  getPublishedAssignments,
  submitAnswer,
  getMySubmission
} from "../controllers/submissionController.js";

import { verifyToken } from "../middlewares/authMiddleware.js";
import { isStudent } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.use(verifyToken, isStudent);

router.get("/assignments", getPublishedAssignments);
router.post("/:assignmentId", submitAnswer);
router.get("/:assignmentId", getMySubmission);

export default router;
