const Sequelize = require("sequelize");

// Database configuration
const sequelize = new Sequelize("expense_tracker_tut", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
