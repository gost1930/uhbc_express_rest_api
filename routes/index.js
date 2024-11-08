const express = require('express');
const router = express.Router();
const classesRoutes = require("./classes.routes");
const subjectRoues = require("./subject.routes");
const lessonRoutes = require("./lesson.routes");
const weeklyTimeRoutes = require("./weeklyTime.routes");

router.use("/classe", classesRoutes);
router.use('/subject', subjectRoues);
router.use('/lesson', lessonRoutes);
router.use('/weeklyTime', weeklyTimeRoutes);

module.exports = router