const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const User = sequelize.define("User", {
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	username: {
		type: DataTypes.TEXT,
		allowNull: false,
		unique: true,
	},
	email: {
		type: DataTypes.TEXT,
		validate: {
			isEmail: true,
		},
	},
});

module.exports = User;
