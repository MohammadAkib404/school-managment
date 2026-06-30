import { prisma } from "@/lib/prisma";
import { MoreHorizontal, Plus, Search } from "lucide-react";

type Student = {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  grade?: number | null;
  section?: string | null;
  rollNumber?: number | null;
};

export default async function StudentTable() {
  const students = await prisma.student.findMany({
    orderBy: {
      rollNumber: "asc",
    },
  });

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-base">
      <table className="w-full border-collapse">
        <thead className="bg-linear-to-r from-[rgba(16,24,40,0.02)] to-transparent">
          <tr className="text-left text-sm">
            <th className="px-6 py-4 font-semibold text-muted">Name</th>
            <th className="px-6 py-4 font-semibold text-muted">Email</th>
            <th className="px-6 py-4 font-semibold text-muted">Grade</th>
            <th className="px-6 py-4 font-semibold text-muted">Section</th>
            <th className="px-6 py-4 font-semibold text-muted">Roll</th>
            <th className="px-6 py-4 text-right font-semibold text-muted">Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-t last:border-none hover:bg-surface transition-colors">
              <td className="px-6 py-4 font-medium text-primary">
                {student.firstName} {student.lastName}
              </td>

              <td className="px-6 py-4 text-muted">{student.email ?? "—"}</td>

              <td className="px-6 py-4 text-primary">{student.grade ?? "—"}</td>

              <td className="px-6 py-4">
                <span className="inline-block rounded-md bg-base px-2 py-1 text-sm text-muted">{student.section ?? "—"}</span>
              </td>

              <td className="px-6 py-4 text-primary">{student.rollNumber ?? "—"}</td>

              <td className="px-6 py-4 text-right">
                <button className="rounded-md p-2 hover:bg-surface text-muted hover:text-brand transition" aria-label={`Actions for ${student.firstName}`}>
                  <MoreHorizontal size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
