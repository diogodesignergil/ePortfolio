const express = require("express");

const { login } = require("../Controllers/auth.js");

const router = express.Router();

router.get("/login", login);

module.exports = router;
