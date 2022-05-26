const sequelize = require("sequelize");

const connection = new sequelize("signup sequelize", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  connection.authenticate();
  console.log("Database connection established successfully.");
} catch (err) {
  console.log("Enable to connect with database", err);
}

try {
  connection.sync({
    logging: console.log,
    force: false,
  });
  console.log("sync to database connection established successfully.");
} catch (err) {
  console.log("Enable to sync database connection", err);
}
module.exports = connection;
