const express = require("express");

const router = express.Router();

const aiController = require("../controllers/ai.controller")


router.post('/generate-code',aiController.generateCode)

module.exports = router;


