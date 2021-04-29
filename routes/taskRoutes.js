const express = require("express");
const router = express.Router();
const auth = require("../auth");
const taskController = require("../controllers/taskController");

router.get("/:id",taskController.allTasks);

router.post("/:id/create_task" , taskController.createTask);
// // router.get("/read_task",auth.checking,taskController.readTask);
// // router.post("/update_task",taskController.updateTask);
router.post("/:id/:task_id/delete_task",taskController.deleteTask);
module.exports = router;