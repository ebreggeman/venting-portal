import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

const prisma = new PrismaClient()
  .$extends(withAccelerate());

async function main() {

  const startTime = performance.now();

  // Learn more about caching strategies:
  // https://www.prisma.io/docs/accelerate/caching
  const cachedPostsWithUser = await prisma.post.findMany({
    where: {
      // Replace with a valid filter for the 'post' model, e.g. title or content
      // title: { contains: "example" }
    },
    select: {
      id: true,
      title: true,
    },
    cacheStrategy: {
      swr: 30, // 30 seconds
      ttl: 60  // 60 seconds
    }
  });

  const endTime = performance.now();

  // Calculate the elapsed time
  const elapsedTime = endTime - startTime;
  console.log(`The query took ${elapsedTime}ms.`);
  console.log(`It returned the following data: \n`, cachedPostsWithUser);

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
