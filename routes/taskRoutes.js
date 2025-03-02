const express = require("express");
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTaskById,
} = require("../controllers/taskController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", getAllTasks);
router.get("/:taskId", getTaskById);

router.post("/", protect, createTask);

router.put("/:taskId", protect, updateTask);

router.delete("/:taskId", protect, deleteTask);

module.exports = router;
