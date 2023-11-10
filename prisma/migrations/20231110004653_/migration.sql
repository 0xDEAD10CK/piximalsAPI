-- CreateTable
CREATE TABLE "monster" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "rarity" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "hp" INTEGER NOT NULL,
    "ap" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "currency" INTEGER NOT NULL DEFAULT 1000
);

-- CreateTable
CREATE TABLE "inventory" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "monsterId" INTEGER NOT NULL,

    CONSTRAINT "inventory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "monster_id_key" ON "monster"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- AddForeignKey
ALTER TABLE "inventory" ADD CONSTRAINT "inventory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventory" ADD CONSTRAINT "inventory_monsterId_fkey" FOREIGN KEY ("monsterId") REFERENCES "monster"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
