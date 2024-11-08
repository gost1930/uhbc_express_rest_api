const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllLesson = async (req, res) => {
    try {
        const lesson = await prisma.lessons.findMany();
        res.status(200).json(lesson);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getLessonBySubject = async (req, res) => {
    const { id } = req.body;

    try {
        const lesson = await prisma.lessons.findMany({
            where: {
                subject_id: id
            }
        });
        res.status(200).json(lesson);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createLesson = async (req, res) => {
    const { name, pdfLesson , subject_id } = req.body;

    try {
        const lesson = await prisma.lessons.create({
            data: {
                name,
                pdfLesson,
                subject_id
            }
        });
        res.status(200).json(lesson);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateLesson = async (req, res) => {
    const { id, name, pdfLesson } = req.body;

    try {
        const lesson = await prisma.lessons.update({
            where: {
                id
            },
            data: {
                name,
                pdfLesson
            }
        });
        res.status(200).json(lesson);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteLesson = async (req, res) => {
    const { id } = req.body;

    try {
        const lesson = await prisma.lessons.delete({
            where: {
                id
            }
        });
        res.status(200).json(lesson);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getLessonBySubject,
    createLesson,
    updateLesson,
    deleteLesson
}