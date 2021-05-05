const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const s ={"sd" : "server is up"}
    res.json(s)
});

module.exports = router;