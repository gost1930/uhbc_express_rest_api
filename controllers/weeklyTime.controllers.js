const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllSubjects = async (req, res) => {
    try {
        const subjects = await prisma.subjects.findMany();
        res.status(200).json(subjects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createWeeklyTime = async (req, res) => {
    const { subject_id, day, startHour, endHour } = req.body;
    try {
        const weeklyTime = await prisma.weeklyTime.create({
            data: {
                subject_id,
                day,
                startHour,
                endHour
            }
        });
        res.status(200).json(weeklyTime);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getWeeklyTimeByClass = async (req, res) => {
    const { id } = req.body;
    try {
        const weeklyTime = await prisma.weeklyTime.findMany({
            where: {
                subject_id: id
            }
        });
        res.status(200).json(weeklyTime);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateWeeklyTime = async (req, res) => {
    const { id, name , pdfTime } = req.body;
    try {
        const weeklyTime = await prisma.weeklyTime.update({
            where: {
                id
            },
            data: {
                name,
                pdfTime
            }
        });
        res.status(200).json(weeklyTime);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteWeeklyTime = async (req, res) => {
    const { id } = req.body;
    try {
        const weeklyTime = await prisma.weeklyTime.delete({
            where: {
                id
            }
        });
        res.status(200).json(weeklyTime);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllSubjects,
    createWeeklyTime,
    getWeeklyTimeByClass,
    updateWeeklyTime,
    deleteWeeklyTime
}