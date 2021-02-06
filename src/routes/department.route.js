const router = require("express").Router();
const departmentController = require("../controllers/department.controller.js");

router.get("/", departmentController.getDepartments);

router.get("/:_id", departmentController.getDepartmentById);

router.post("/", departmentController.addDepartment);

router.put("/:_id", departmentController.updateDepartmentById);

router.delete("/:_id", departmentController.deleteDepartmentById);

module.exports = router;
