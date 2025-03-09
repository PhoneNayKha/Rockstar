const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const cors = require("cors");
app.use(cors());

app.get("/posts", async (req, res) => {
  const data = await prisma.post.findMany({
    include: { user: true, comments: true },
    orderBy: { id: "desc" },
    take: 5,
  });

  res.json(data);
});

app.get("/posts/:id", async (req, res) => {
  const id = req.params.id;
  const data = await prisma.post.findUnique({
    where: { id: parseInt(id) },
    include: {
      user: true,
      comments: {
        include: { user: true },
      },
    },
  });
  res.json(data);
});

app.listen(8080, () => {
  console.log("API running at 8080...");
});
