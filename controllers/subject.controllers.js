const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getSubjectbyClasse = async (req, res) => {
  const { id } = req.body;

  try {
    const subject = await prisma.sebjects.findMany({
      where: {
        classesId: id,
      },
    });
    res.status(200).json(subject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createSubject = async (req, res) => {
  try {
    const subject = await prisma.sebjects.create({
      data: {
        ...req.body,
      },
    });
    res.status(200).json(subject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateSubject = async (req, res) => {
  const { id, name } = req.body;
  try {
    const subject = await prisma.sebjects.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
    res.status(200).json(subject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteSubject = async (req, res) => {
  const { id } = req.body;
  try {
    const subject = await prisma.sebjects.delete({
      where: {
        id,
      },
    });
    res.status(200).json(subject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllSubject = async (req, res) => {
  try {
    const subject = await prisma.sebjects.findMany({
      include: {
        Classes: true,
      },
    });
    res.status(200).json(subject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getSubjectbyClasse,
  createSubject,
  updateSubject,
  deleteSubject,
  getAllSubject,
};
