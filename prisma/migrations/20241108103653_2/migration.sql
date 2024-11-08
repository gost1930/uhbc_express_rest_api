-- DropForeignKey
ALTER TABLE "Sebjects" DROP CONSTRAINT "Sebjects_classesId_fkey";

-- CreateTable
CREATE TABLE "_ClassesToSebjects" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClassesToSebjects_AB_unique" ON "_ClassesToSebjects"("A", "B");

-- CreateIndex
CREATE INDEX "_ClassesToSebjects_B_index" ON "_ClassesToSebjects"("B");

-- AddForeignKey
ALTER TABLE "_ClassesToSebjects" ADD CONSTRAINT "_ClassesToSebjects_A_fkey" FOREIGN KEY ("A") REFERENCES "Classes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassesToSebjects" ADD CONSTRAINT "_ClassesToSebjects_B_fkey" FOREIGN KEY ("B") REFERENCES "Sebjects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
