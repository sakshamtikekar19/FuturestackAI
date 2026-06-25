const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const domain = await prisma.domain.findFirst();
  if (domain) {
    await prisma.recommendationAction.createMany({
      data: [
        {
          domainId: domain.id,
          title: 'Optimize for Claude',
          description: 'Claude did not mention your brand. Consider creating more content that explicitly links your brand to your target keywords on high-authority domains.',
          impact: 'HIGH',
          platform: 'Claude'
        },
        {
          domainId: domain.id,
          title: 'Improve sentiment on ChatGPT',
          description: 'Your brand was mentioned but with neutral sentiment. Try encouraging user reviews and case studies that highlight positive outcomes.',
          impact: 'MEDIUM',
          platform: 'ChatGPT'
        }
      ]
    });
    console.log('Mock actions added!');
  } else {
    console.log('No domain found');
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
