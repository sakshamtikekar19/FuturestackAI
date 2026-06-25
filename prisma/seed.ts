import { PrismaClient } from '../generated/prisma'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const connectionString = `${process.env.DATABASE_URL}`
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  const org = await prisma.organization.create({
    data: {
      id: 'org_test_123',
      name: 'Test Organization'
    }
  })
  
  await prisma.domain.create({
    data: {
      id: 'cmqs75kn20001uyyg31p5qpso',
      url: 'acme.com',
      organizationId: org.id
    }
  })
  
  console.log('Seeded database with Organization and Domain.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
