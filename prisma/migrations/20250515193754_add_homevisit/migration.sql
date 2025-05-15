-- CreateTable
CREATE TABLE "HomeVisit" (
    "id" SERIAL NOT NULL,
    "ip" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HomeVisit_pkey" PRIMARY KEY ("id")
);
