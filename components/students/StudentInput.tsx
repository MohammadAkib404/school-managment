"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addStudent } from "@/actions/studentActions";
import { StudentFormData, studentSchema } from "@/lib/validation/student";
import { toast } from "sonner";

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

  const onSubmit = async (data: StudentFormData) => {
    reset();

    const id = toast.loading("Adding student...");

    try {
      await addStudent(data);

      toast.success("Student added successfully.", {
        id,
      });
    } catch {
      toast.error("Unable to add student.", {
        id,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto flex max-w-lg flex-col gap-4 px-8 py-12 bg-base rounded-xl border border-border shadow-lg">
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
