require("dotenv").config();
const { Sequelize } = require("sequelize");

const connection_string = process.env.DB_CONNECTION_STRING;
const sequelize = new Sequelize(connection_string, {
	logging: false,
});

sequelize
	.authenticate()
	.then(() => console.log("DB Connected"))
	.catch(() => console.log("DB connection failed"));

module.exports = sequelize;
