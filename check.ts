import { PrismaClient } from './generated/prisma';

const prisma = new PrismaClient();

async function check() {
  const latestScan = await prisma.scan.findFirst({
    orderBy: { createdAt: 'desc' },
    include: { results: true }
  });
  console.log(JSON.stringify(latestScan, null, 2));
}

check().catch(console.error).finally(() => prisma.$disconnect());
