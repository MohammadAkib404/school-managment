"use client";
import { Plus, Search, X } from "lucide-react";
import StudentInput from "./StudentInput";
import { useState } from "react";

export default function StudentTool() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Students</h1>
          {/* <p className="mt-1 text-sm text-muted">Manage all enrolled students</p> */}
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-base font-medium hover:opacity-90 transition"
        >
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

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-base/70 backdrop-blur-xs transition-all duration-500 ${
          isOpen ? "opacity-100 scale-100" : "scale-90 opacity-0 pointer-events-none"
        }`}
      >
        <div className={`relative transition-all duration-200 ${isOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-95 opacity-0"}`}>
          <StudentInput />

          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 rounded-full p-2 hover:bg-surface transition">
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
