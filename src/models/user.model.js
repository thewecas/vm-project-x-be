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
	password: {
		type: DataTypes.TEXT,
		allowNull: false,
		validate: {
			min: 8,
		},
	},
});

const a = User.build({
	name: "vikas",
	username: "vikas.m",
	email: "vikas@gamil.com",
	password: "1234567845",
});
const b = User.build({
	name: "vikas",
	username: "vikas.m2",
	email: "vikas@gamil.com",
	password: "1234567845",
});
// console.log(a);

console.log(User.findAll());
module.exports = User;
