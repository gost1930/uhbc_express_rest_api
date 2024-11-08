const express = require("express");
const router = express.Router();
const {getLessonBySubject,
    createLesson,
    updateLesson,
    deleteLesson} = require("../controllers/lesson.controllers")

router.get("/", getLessonBySubject);
router.post("/", createLesson);
router.put("/:id", updateLesson);
router.delete("/:id", deleteLesson);

module.exports = router