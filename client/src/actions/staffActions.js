
module.exports = {
  createStaff: (staff) => {
    return {
      type: 'CREATE_STAFF',
      payload: staff
     }
  }
}
