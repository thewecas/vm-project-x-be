const sequelize = require("../sequelize");
const User = require("./user.model");

// (async (_) => {
// 	await sequelize.sync({ force: true });
// })();

module.exports = { User };
