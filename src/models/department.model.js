const mongoose = require("mongoose");
const departmentSchema = new mongoose.Schema({
  name: String,
  image: String,
  organizationId : String,
  headId : String,
  staff: Array
});

const DepartmentModel = mongoose.model("department", departmentSchema);

module.exports = DepartmentModel;
