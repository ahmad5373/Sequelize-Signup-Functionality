const sequelize = require("sequelize");
const database = require("../database/connection");

const user = database.define(
  "user",
  {
    id: {
      type: sequelize.BIGINT(),
      primaryKey: true,
      autoIncrement: true,
    },

    userName: {
      type: sequelize.STRING(25),
    },

    email: {
      type: sequelize.STRING(40),
      unique: true,
      validate: {
        isEmail: true, //check for email format (Foobar@gmail.com)
      },
    },

    password: {
      type: sequelize.STRING(255),
    },

    phone: {
      type: sequelize.STRING(12),
    },

    roleId: {
      type: sequelize.BIGINT(),
    },
  },
  {
    paranoid: true,
    timestamps: true,
    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
    // define the table's name
    tableName: "user",
  }
);
module.exports = user;
