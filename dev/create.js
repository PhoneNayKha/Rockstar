const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function create() {
  const user = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@gmail.com",
      posts: {
        create: [
          { title: "First Post", content: "First Content" },
          { title: "Second Post", content: "Second Content" },
        ],
      },
    },
  });

  console.log(user);
}
create();
