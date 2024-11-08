const express = require("express");
const router = express.Router();
const {
    getAllSubjects,
    createWeeklyTime,
    getWeeklyTimeByClass,
    updateWeeklyTime,
    deleteWeeklyTime
} = require("../controllers/weeklyTime.controllers")


router.get("/", getAllSubjects);
router.post("/", createWeeklyTime);
router.get("/classe/:id", getWeeklyTimeByClass);
router.put("/:id", updateWeeklyTime);
router.delete("/:id", deleteWeeklyTime);

module.exports = router