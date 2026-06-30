"use server";

import { prisma } from "@/lib/prisma";
import { StudentFormData, studentSchema } from "@/lib/validation/student";
import { revalidatePath } from "next/cache";

export async function addStudent(data: StudentFormData) {
  const validated = studentSchema.parse(data);

  try {
    await prisma.student.create({
      data: validated,
    });
    revalidatePath("/admin");
  } catch (error) {
    console.error("Error adding student:", error);
    throw new Error("Failed to add student");
  }
}
