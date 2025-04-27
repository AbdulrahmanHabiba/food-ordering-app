/*
  Warnings:

  - You are about to drop the `ProductExtra` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductSize` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productId` to the `Extra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `Size` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductExtra" DROP CONSTRAINT "ProductExtra_extraId_fkey";

-- DropForeignKey
ALTER TABLE "ProductExtra" DROP CONSTRAINT "ProductExtra_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductSize" DROP CONSTRAINT "ProductSize_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductSize" DROP CONSTRAINT "ProductSize_sizeId_fkey";

-- AlterTable
ALTER TABLE "Extra" ADD COLUMN     "productId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Size" ADD COLUMN     "productId" TEXT NOT NULL;

-- DropTable
DROP TABLE "ProductExtra";

-- DropTable
DROP TABLE "ProductSize";

-- AddForeignKey
ALTER TABLE "Size" ADD CONSTRAINT "Size_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extra" ADD CONSTRAINT "Extra_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
