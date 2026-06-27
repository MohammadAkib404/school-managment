import "dotenv/config";

import { PrismaClient, SectionEnum, type Prisma } from "../lib/generated/prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";

const students: Prisma.StudentCreateManyInput[] = [
  { firstName: "Aarav", lastName: "Sharma", email: "aarav.sharma@example.com", grade: 10, section: SectionEnum.A, rollNumber: 1 },
  { firstName: "Vihaan", lastName: "Patel", email: "vihaan.patel@example.com", grade: 10, section: SectionEnum.A, rollNumber: 2 },
  { firstName: "Aditya", lastName: "Singh", email: "aditya.singh@example.com", grade: 10, section: SectionEnum.A, rollNumber: 3 },
  { firstName: "Arjun", lastName: "Verma", email: "arjun.verma@example.com", grade: 10, section: SectionEnum.A, rollNumber: 4 },
  { firstName: "Kabir", lastName: "Gupta", email: "kabir.gupta@example.com", grade: 10, section: SectionEnum.A, rollNumber: 5 },

  { firstName: "Ananya", lastName: "Mehta", email: "ananya.mehta@example.com", grade: 10, section: SectionEnum.B, rollNumber: 1 },
  { firstName: "Diya", lastName: "Joshi", email: "diya.joshi@example.com", grade: 10, section: SectionEnum.B, rollNumber: 2 },
  { firstName: "Myra", lastName: "Kapoor", email: "myra.kapoor@example.com", grade: 10, section: SectionEnum.B, rollNumber: 3 },
  { firstName: "Aadhya", lastName: "Reddy", email: "aadhya.reddy@example.com", grade: 10, section: SectionEnum.B, rollNumber: 4 },
  { firstName: "Kiara", lastName: "Nair", email: "kiara.nair@example.com", grade: 10, section: SectionEnum.B, rollNumber: 5 },

  { firstName: "Rohan", lastName: "Kulkarni", email: "rohan.k@example.com", grade: 9, section: SectionEnum.C, rollNumber: 1 },
  { firstName: "Ishaan", lastName: "Chopra", email: "ishaan.c@example.com", grade: 9, section: SectionEnum.C, rollNumber: 2 },
  { firstName: "Dev", lastName: "Bansal", email: "dev.b@example.com", grade: 9, section: SectionEnum.C, rollNumber: 3 },
  { firstName: "Krish", lastName: "Malhotra", email: "krish.m@example.com", grade: 9, section: SectionEnum.C, rollNumber: 4 },
  { firstName: "Yash", lastName: "Agarwal", email: "yash.a@example.com", grade: 9, section: SectionEnum.C, rollNumber: 5 },

  { firstName: "Sara", lastName: "Khan", email: "sara.k@example.com", grade: 8, section: SectionEnum.D, rollNumber: 1 },
  { firstName: "Zoya", lastName: "Ali", email: "zoya.a@example.com", grade: 8, section: SectionEnum.D, rollNumber: 2 },
  { firstName: "Meera", lastName: "Iyer", email: "meera.i@example.com", grade: 8, section: SectionEnum.D, rollNumber: 3 },
  { firstName: "Riya", lastName: "Saxena", email: "riya.s@example.com", grade: 8, section: SectionEnum.D, rollNumber: 4 },
  { firstName: "Tanvi", lastName: "Mishra", email: "tanvi.m@example.com", grade: 8, section: SectionEnum.D, rollNumber: 5 },
];

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log("🌱 Seeding database...");

  await prisma.student.deleteMany();

  await prisma.student.createMany({
    data: students,
  });

  console.log(`✅ Seeded ${students.length} students`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
