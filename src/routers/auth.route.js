const router = require("express").Router();

router.post("/login", (req, res) => {
	res.send("<h1>Logged in<h1>");
});
router.post("/signup", (req, res) => {
	// console.log(JSON.stringify(req.params), "\n\n");
	// console.log(JSON.stringify(req.body), "\n\n");
	// console.log(req.headers, "\n\n");
	// console.log(JSON.stringify(req.query), "\n\n");
	res.status(200).send({ message: "Everthing is ok" });
});

module.exports = router;
