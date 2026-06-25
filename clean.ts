import { PrismaClient } from './generated/prisma';

const prisma = new PrismaClient();

async function clean() {
  await prisma.queryResult.deleteMany({});
  await prisma.scan.deleteMany({});
  await prisma.domain.deleteMany({});
  console.log("Database wiped completely!");
}

clean().catch(console.error).finally(() => prisma.$disconnect());
