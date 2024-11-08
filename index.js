const { PrismaClient } = require("@prisma/client");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const apiRoutes = require("./routes");
const fs = require("fs");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to enable CORS
app.use(cors());

app.use("/api/v1/", apiRoutes);

const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  
    // check if upload directory exists
    if (!fs.existsSync("uploads")) {
      fs.mkdirSync("uploads");
    }
    // check if the db connected
    if (prisma.$connect()) {
      console.log("DB connected");
    } else {
      console.log("DB not connected");
    }
  });
  