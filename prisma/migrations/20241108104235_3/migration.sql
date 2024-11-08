/*
  Warnings:

  - You are about to drop the `_ClassesToSebjects` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ClassesToSebjects" DROP CONSTRAINT "_ClassesToSebjects_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClassesToSebjects" DROP CONSTRAINT "_ClassesToSebjects_B_fkey";

-- DropTable
DROP TABLE "_ClassesToSebjects";

-- AddForeignKey
ALTER TABLE "Sebjects" ADD CONSTRAINT "Sebjects_classesId_fkey" FOREIGN KEY ("classesId") REFERENCES "Classes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
