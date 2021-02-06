const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  image: String,
  organizationId : String,
  departmentId: String,
  role: String,
  history: String
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
