-- CreateTable
CREATE TABLE "monster" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "rarity" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "hp" INTEGER NOT NULL,
    "ap" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "account" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'BASIC_USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "currency" INTEGER NOT NULL DEFAULT 1000
);

-- CreateTable
CREATE TABLE "inventory" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "monsterId" TEXT NOT NULL,

    CONSTRAINT "inventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop" (
    "id" TEXT NOT NULL,
    "monsterId" TEXT NOT NULL,
    "playerId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "monster_id_key" ON "monster"("id");

-- CreateIndex
CREATE UNIQUE INDEX "account_id_key" ON "account"("id");

-- CreateIndex
CREATE UNIQUE INDEX "account_username_key" ON "account"("username");

-- CreateIndex
CREATE UNIQUE INDEX "shop_id_key" ON "shop"("id");

-- AddForeignKey
ALTER TABLE "inventory" ADD CONSTRAINT "inventory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventory" ADD CONSTRAINT "inventory_monsterId_fkey" FOREIGN KEY ("monsterId") REFERENCES "monster"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop" ADD CONSTRAINT "shop_monsterId_fkey" FOREIGN KEY ("monsterId") REFERENCES "monster"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop" ADD CONSTRAINT "shop_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
