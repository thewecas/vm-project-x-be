const router = require("express").Router();
const { User } = require("../models");

router.post("/login", async (req, res) => {
	const a = await User.build({
		name: "",
		username: "vikas",
		email: "vikas@gamil.com",
		password: "1234567845",
	});
	try {
		await a.save();
	} catch (error) {
		return res
			.status(403)
			.send(error.errors.map((err) => err.message).join(",\n"));
	}
	const b = await User.build({
		name: "vikas",
		username: "vikas.m2",
		email: "vikas@gamil.com",
		password: "1234567845",
	});
	try {
		await b.save();
	} catch (error) {
		return res
			.status(403)
			.send(error.errors.map((err) => err.message).join(",\n"));
	}
	const allUsers = await User.findAll();
	console.log(allUsers);
	return res.send(allUsers);
});
router.post("/signup", (req, res) => {
	res.status(200).send({ message: "Everthing is ok" });
});

module.exports = router;
