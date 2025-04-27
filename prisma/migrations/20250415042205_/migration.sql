/*
  Warnings:

  - You are about to drop the column `productId` on the `Extra` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Size` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Extra" DROP CONSTRAINT "Extra_productId_fkey";

-- DropForeignKey
ALTER TABLE "Size" DROP CONSTRAINT "Size_productId_fkey";

-- AlterTable
ALTER TABLE "Extra" DROP COLUMN "productId";

-- AlterTable
ALTER TABLE "Size" DROP COLUMN "productId";

-- CreateTable
CREATE TABLE "ProductSize" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "sizeId" TEXT NOT NULL,

    CONSTRAINT "ProductSize_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductExtra" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "extraId" TEXT NOT NULL,

    CONSTRAINT "ProductExtra_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductSize" ADD CONSTRAINT "ProductSize_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSize" ADD CONSTRAINT "ProductSize_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "Size"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductExtra" ADD CONSTRAINT "ProductExtra_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductExtra" ADD CONSTRAINT "ProductExtra_extraId_fkey" FOREIGN KEY ("extraId") REFERENCES "Extra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
