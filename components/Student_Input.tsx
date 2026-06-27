"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const studentSchema = z.object({
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

type StudentFormData = z.infer<typeof studentSchema>;

const inputClass = "w-full rounded-md border border-gray-300 px-3 py-2 text-sm transition-colors focus:border-black focus:outline-none";

export default function StudentInput() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<StudentFormData>({
    resolver: zodResolver(studentSchema),
    mode: "onBlur",
    defaultValues: {
      grade: 1,
      section: "A",
      rollNumber: 1,
    },
  });

  const onSubmit = (data: StudentFormData) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto flex max-w-md flex-col gap-4 p-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium">First Name</label>

          <input {...register("firstName")} placeholder="John" className={inputClass} />

          <p className="mt-1 text-sm text-red-500">{errors.firstName?.message}</p>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Last Name</label>

          <input {...register("lastName")} placeholder="Doe" className={inputClass} />

          <p className="mt-1 text-sm text-red-500">{errors.lastName?.message}</p>
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Email</label>

        <input type="email" {...register("email")} placeholder="john@example.com" className={inputClass} />

        <p className="mt-1 text-sm text-red-500">{errors.email?.message}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium">Grade</label>

          <select {...register("grade", { valueAsNumber: true })} className={inputClass}>
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                Grade {i + 1}
              </option>
            ))}
          </select>

          <p className="mt-1 text-sm text-red-500">{errors.grade?.message}</p>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Section</label>

          <select {...register("section")} className={inputClass}>
            <option value="A">Section A</option>
            <option value="B">Section B</option>
            <option value="C">Section C</option>
            <option value="D">Section D</option>
          </select>

          <p className="mt-1 text-sm text-red-500">{errors.section?.message}</p>
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Roll Number</label>

        <input
          type="number"
          min={1}
          max={50}
          {...register("rollNumber", {
            valueAsNumber: true,
          })}
          placeholder="Enter roll number"
          className={inputClass}
        />

        <p className="mt-1 text-sm text-red-500">{errors.rollNumber?.message}</p>
      </div>

      <button type="submit" className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800">
        Add Student
      </button>
    </form>
  );
}
