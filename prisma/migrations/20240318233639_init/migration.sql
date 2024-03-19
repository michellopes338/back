-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "chapa" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "date_of_last_exam" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_chapa_key" ON "Employee"("chapa");
