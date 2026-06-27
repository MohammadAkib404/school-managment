import { Plus, Search, MoreHorizontal } from "lucide-react";
import { prisma } from "@/lib/prisma";
import StudentInput from "@/components/Student_Input";

export default async function Admin() {
  const students = await prisma.student.findMany({
    orderBy: {
      rollNumber: "asc",
    },
  });

  return (
    <section className="space-y-8 max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Students</h1>
          <p className="mt-1 text-sm text-muted">Manage all enrolled students</p>
        </div>

        <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-base font-medium text-base hover:opacity-90 transition">
          <Plus size={18} />
          Add Student
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full max-w-sm">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />

          <input type="text" placeholder="Search students..." className="w-full rounded-lg border bg-surface py-2.5 pl-10 pr-4 outline-none focus:ring-2" />
        </div>

        <div className="flex gap-3">
          <select className="rounded-lg border bg-surface px-4 py-2">
            <option>All Grades</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>

          <select className="rounded-lg border bg-surface px-4 py-2">
            <option>All Sections</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border bg-surface">
        <table className="w-full">
          <thead className="border-b bg-base">
            <tr className="text-left text-sm text-muted">
              <th className="px-6 py-4 font-medium">Name</th>
              <th className="px-6 py-4 font-medium">Email</th>
              <th className="px-6 py-4 font-medium">Grade</th>
              <th className="px-6 py-4 font-medium">Section</th>
              <th className="px-6 py-4 font-medium">Roll</th>
              <th className="px-6 py-4 text-right font-medium">Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b last:border-none hover:bg-base transition-colors">
                <td className="px-6 py-4 font-medium">
                  {student.firstName} {student.lastName}
                </td>

                <td className="px-6 py-4 text-muted">{student.email}</td>

                <td className="px-6 py-4">{student.grade}</td>

                <td className="px-6 py-4">
                  <span className="rounded-md bg-base px-2 py-1 text-sm">{student.section}</span>
                </td>

                <td className="px-6 py-4">{student.rollNumber}</td>

                <td className="px-6 py-4 text-right">
                  <button className="rounded-md p-2 hover:bg-base transition">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <StudentInput />
    </section>
  );
}
