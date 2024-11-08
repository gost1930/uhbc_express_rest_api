const express = require("express");
const router = express.Router();
const {getSubjectbyClasse,
    createSubject,
    updateSubject,
    deleteSubject,
    getAllSubject} = require("../controllers/subject.controllers");

router.get("/:id", getSubjectbyClasse);
router.post("/", createSubject);
router.put("/:id", updateSubject);
router.delete("/:id", deleteSubject);
router.get("/", getAllSubject);

module.exports = router