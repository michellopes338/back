import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const michel = await prisma.employee.upsert({
    where: { chapa: '30242562' },
    update: {},
    create: {
      chapa: '30242562',
      nome: 'Michel Lopes Cruz',
      date_of_last_exam: new Date('2023-03-20'),
    },
  });
  const gabriel = await prisma.employee.upsert({
    where: { chapa: '30242563' },
    update: {},
    create: {
      chapa: '30242563',
      nome: 'Gabriel Lopes Cruz',
      date_of_last_exam: new Date('2024-03-10'),
    },
  });
  console.log({ michel, gabriel });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
