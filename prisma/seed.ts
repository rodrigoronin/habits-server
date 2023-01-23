import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const habitsListMock = [
  {
    title: "Beber água 2.5L",
    created_at: new Date("2023-01-23T00:00:00.000z"),
  },
  {
    title: "Treinar",
    created_at: new Date("2023-01-23T00:00:00.000z"),
  },
  {
    title: "Estudar JavaScript",
    created_at: new Date("2023-01-23T00:00:00.000z"),
  },
];

async function mains() {
  await prisma.habit.deleteMany();

  // prisma.createMany() doesn't work in SQLite, so I need to use a loop to create more than one entry
  for (const habits of habitsListMock) {
    await prisma.habit.create({
      data: {
        title: habits.title,
        created_at: habits.created_at,
      },
    });
  }
}

mains()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
