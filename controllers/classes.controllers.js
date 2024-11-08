const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllClasses = async (req, res) => {
  try {
    const classes = await prisma.classes.findMany();
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createClass = async (req, res) => {
  const { name } = req.body;
  try {
    const classes = await prisma.classes.create({
      data: {
        name,
      },
    });
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateClass = async (req, res) => {
  const { id, name } = req.body;
  try {
    const classes = await prisma.classes.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteClass = async (req, res) => {
  const { id } = req.body;
  try {
    const classes = await prisma.classes.delete({
      where: {
        id,
      },
    });
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { 
    getAllClasses, 
    createClass,
    updateClass,
    deleteClass,
};
