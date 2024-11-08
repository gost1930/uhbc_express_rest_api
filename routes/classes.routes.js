const express = require("express");
const router = express.Router();
const {getAllClasses, 
    createClass,
    updateClass,
    deleteClass,} = require("../controllers/classes.controllers")

router.get("/", getAllClasses);
router.post("/", createClass);
router.put("/:id", updateClass);
router.delete("/:id", deleteClass);

module.exports = router