import z from "zod";

export const studentSchema = z.object({
  firstName: z.string().trim().min(2, "First name must contain at least 2 characters.").max(12, "First name cannot exceed 12 characters."),

  lastName: z.string().trim().min(2, "Last name must contain at least 2 characters.").max(12, "Last name cannot exceed 12 characters."),

  email: z.email("Please enter a valid email address.").trim(),

  grade: z.number().int("Grade must be a whole number.").min(1, "Grade must be between 1 and 10.").max(10, "Grade must be between 1 and 10."),

  section: z.enum(["A", "B", "C", "D"], {
    message: "Please select a valid section.",
  }),

  rollNumber: z
    .number()
    .int("Roll number must be a whole number.")
    .min(1, "Roll number must be between 1 and 50.")
    .max(50, "Roll number must be between 1 and 50."),
});

export type StudentFormData = z.infer<typeof studentSchema>;
