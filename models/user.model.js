const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  image: String,
  company : String,
  department: String,
  role: String
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
