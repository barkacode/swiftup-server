const express = require("express");
const router = express.Router();
const controller = require("../controllers/plate.controller");
const { validateActivation } = require("../../../validations/plate.validation");

router.get("/:id", controller.handleScan);
router.post("/activate/:id", validateActivation, controller.handleActivation);

module.exports = router;
