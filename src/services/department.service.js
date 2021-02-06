module.exports = new (class DepartmentService {
    constructor() {
      this.department = require("../models/department.model.js");
    }
  
    getDepartments() {
      return this.department.find();
    }
  
    getDepartmentById(_id) {
      return this.department.findById(_id)
    }
  
    addDepartment(payload) {
      return this.department.create(payload);
    }
  
    updateDepartmentById({ _id }, payload) {
      return this.department.findOneAndUpdate({ _id }, payload, {
        new: true
      });
    }
  
    deleteDepartmentById({ _id }) {
      return this.department.findOneAndDelete({ _id });
    }
  })(); 