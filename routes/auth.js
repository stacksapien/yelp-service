// routes/auth.js
const express = require("express");
const { register, login } = require("../controllers/auth");
const router = express.Router();

// User registration
router.post("/register", register);

// User login
router.post("/login", login);

module.exports = router;
