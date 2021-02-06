const departmentService = require("../services/department.service.js")

module.exports = {
  async getDepartments(req, res, next) {
    try {
      const departments = await departmentService.getDepartments()
      res.send(departments)
    }
    catch(error) {
      // handle error
      res.send("error")
    }
  },

  async getDepartmentById(req, res, next) {
    try {
      const department = await departmentService.getDepartmentById(req.params)
      res.send(department)
    }
    catch(error) {
      // handle error
      res.send("error")
    }
  },

  async addDepartment(req, res, next) {
    try {
      const department = await departmentService.addDepartment(req.body)
      res.send(department)
    }
    catch(error) {
      // handle error
      res.send("error")
    }
  },

  async updateDepartmentById(req, res, next) {
    try {
      const department = await departmentService.updateDepartmentById(req.params, req.body)
      res.send(department)
    }
    catch(error) {
      // handle error
      res.send("error")
    }
  },

  async deleteDepartmentById(req, res, next) {
    try {
      const department = await departmentService.deleteDepartmentById(req.params)
      res.send(department)
    }
    catch(error) {
      // handle error
      res.send("error")
    }
  }
}