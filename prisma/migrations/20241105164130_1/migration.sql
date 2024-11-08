-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Classes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sebjects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "classesId" INTEGER NOT NULL,

    CONSTRAINT "Sebjects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lessens" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pdfLessen" TEXT NOT NULL,
    "subject_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lessens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeeklyTime" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pdfTime" TEXT NOT NULL,
    "subject_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WeeklyTime_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Sebjects" ADD CONSTRAINT "Sebjects_classesId_fkey" FOREIGN KEY ("classesId") REFERENCES "Classes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lessens" ADD CONSTRAINT "Lessens_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "Sebjects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeeklyTime" ADD CONSTRAINT "WeeklyTime_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "Sebjects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
