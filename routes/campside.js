// routes/auth.js
const express = require("express");
const verifyToken = require("../middlewares/auth");
const { add, list } = require("../controllers/campsite");
const router = express.Router();

// Add Campside
router.post("/campsite", verifyToken, add);

// List Campside
router.get("/campsite", verifyToken, list);

// TODO: Update Campside
router.put("/campsite", verifyToken, add);

// TODO: Delete Campside
router.delete("/campsite", verifyToken, add);

module.exports = router;
