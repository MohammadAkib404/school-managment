import { Layers3, ShieldCheck, UserCog, Users } from "lucide-react";

export const heroFeatures = [
  {
    title: "Role-Based Access",
    desc: "Granular permissions for Admin, Teacher, and Student accounts.",
    icon: ShieldCheck,
  },
  {
    title: "Secure Authentication",
    desc: "Protected login sessions with modern authentication workflows.",
    icon: UserCog,
  },
  {
    title: "User Management",
    desc: "Create, update, and manage users from a centralized dashboard.",
    icon: Users,
  },
  {
    title: "Scalable Foundation",
    desc: "Built to support future modules like courses, attendance, and assignments.",
    icon: Layers3,
  },
];

type NavItem = {
  label: string;
  icon: string;
  key: string;
  badge?: number;
};

type NavSection = {
  title: string;
  items: NavItem[];
};

export const NAV: NavSection[] = [
  {
    title: "People",
    items: [
      { label: "Dashboard", icon: "🏠", key: "dashboard" },
      { label: "Admins", icon: "🛡️", key: "admins" },
      { label: "Teachers", icon: "👩‍🏫", key: "teachers" },
      { label: "Students", icon: "🎓", key: "students" },
      { label: "Parents", icon: "👨‍👩‍👧", key: "parents" },
    ],
  },
  {
    title: "Academics",
    items: [
      { label: "Assignments", icon: "📝", key: "assignments", badge: 5 },
      { label: "Homework", icon: "📚", key: "homework" },
      { label: "Routines", icon: "🔄", key: "routines" },
      { label: "Timetable", icon: "🗓️", key: "timetable" },
    ],
  },
  {
    title: "Records",
    items: [
      { label: "Attendance", icon: "✅", key: "attendance", badge: 3 },
      { label: "Grades", icon: "📊", key: "grades" },
      { label: "Exams", icon: "📋", key: "exams" },
      { label: "Reports", icon: "📈", key: "reports" },
    ],
  },
  {
    title: "Admin",
    items: [
      { label: "Finance", icon: "💰", key: "finance" },
      { label: "Library", icon: "📖", key: "library" },
      { label: "Transport", icon: "🚌", key: "transport" },
      { label: "Calendar", icon: "📅", key: "calendar" },
      { label: "Settings", icon: "⚙️", key: "settings" },
    ],
  },
];
