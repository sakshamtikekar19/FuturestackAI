import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const scans = await prisma.scan.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10,
    select: { id: true, status: true, visibilityScore: true, createdAt: true }
  });
  console.log(scans);
}

main().finally(() => prisma.$disconnect());
