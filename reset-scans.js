const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const res = await prisma.scan.updateMany({
    where: { status: 'RUNNING' },
    data: { status: 'PENDING' }
  });
  console.log(`Reset ${res.count} stuck scans from RUNNING to PENDING`);
}

main().finally(() => prisma.$disconnect());
