const router = require("express").Router();

router.get('', (req, res) => {
    res.send("<h1>Server Online<h1>");
});

module.exports = router;