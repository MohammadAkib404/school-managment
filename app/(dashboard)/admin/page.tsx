import StudentTable from "@/components/students/StudentTable";
import StudentTool from "@/components/students/StudentTool";

export default async function Admin() {
  return (
    <section className="space-y-8 max-w-7xl mx-auto px-6 py-8">
      <StudentTool />
      <StudentTable />
    </section>
  );
}
