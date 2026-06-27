"use client";

import { NAV } from "@/lib/data";
import { useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState("dashboard");
  const [open, setOpen] = useState(false);

  const handleSelect = (key: string) => {
    setActive(key);
    setOpen(false);
  };

  const NavContent = (
    <nav className="flex flex-col h-full" aria-label="Main navigation">
      {/* ── Logo header ── */}
      <div className="flex items-center gap-2.5 px-4 py-4 border-b border-border shrink-0">
        <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center shrink-0">
          <span className="text-white font-bold text-base leading-none tracking-tight">S</span>
        </div>
        <div className="flex flex-col gap-px min-w-0">
          <span className="text-sm font-semibold text-primary tracking-tight truncate">SchoolOS</span>
          <span className="text-xs text-secondary">Management Portal</span>
        </div>
        {/* Close button — mobile only */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="md:hidden ml-auto w-7 h-7 rounded-lg bg-surface text-secondary text-sm flex items-center justify-center hover:bg-border hover:text-primary transition-colors"
        >
          ✕
        </button>
      </div>

      {/* ── Scrollable nav sections ── */}
      <div className="flex-1 overflow-y-auto px-2 py-1.5 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
        {NAV.map((section) => (
          <div key={section.title} className="mb-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-secondary px-2 pt-3 pb-1">{section.title}</p>
            <ul className="flex flex-col gap-px">
              {section.items.map((item) => {
                const isActive = active === item.key;
                return (
                  <li key={item.key}>
                    <button
                      onClick={() => handleSelect(item.key)}
                      className={[
                        "w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg border-none text-left transition-colors duration-100",
                        isActive ? "bg-brand/10 text-brand" : "text-primary/80 hover:bg-surface hover:text-primary",
                      ].join(" ")}
                    >
                      <span aria-hidden="true" className={["text-sm w-5 text-center shrink-0 leading-none", isActive ? "opacity-100" : "opacity-70"].join(" ")}>
                        {item.icon}
                      </span>
                      <span className={["text-sm flex-1 truncate", isActive ? "font-medium" : "font-normal"].join(" ")}>{item.label}</span>
                      {item.badge !== undefined && (
                        <span className="min-w-5 h-5 px-1.5 bg-brand text-white text-xs font-semibold rounded-full flex items-center justify-center shrink-0">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* ── User strip ── */}
      <div className="flex items-center gap-2.5 px-3.5 py-3 border-t border-border bg-surface shrink-0">
        <div className="w-8 h-8 rounded-full bg-brand/10 text-brand text-xs font-semibold flex items-center justify-center shrink-0">AU</div>
        <div className="flex flex-col gap-px min-w-0 flex-1">
          <span className="text-sm font-medium text-primary truncate">Admin User</span>
          <span className="text-xs text-secondary">Super Admin</span>
        </div>
        <button
          aria-label="Sign out"
          className="w-7 h-7 rounded-lg border border-border bg-base text-secondary text-sm flex items-center justify-center hover:bg-danger/10 hover:text-danger hover:border-danger/30 transition-colors"
        >
          ↩
        </button>
      </div>
    </nav>
  );

  return (
    <>
      {/* ── Hamburger — mobile only ── */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="md:hidden fixed top-4 left-4 z-40 w-10 h-10 bg-base border border-border rounded-lg flex flex-col items-center justify-center gap-1 hover:opacity-70 transition-opacity"
      >
        <span className="block w-5 h-0.5 bg-primary rounded-sm" />
        <span className="block w-5 h-0.5 bg-primary rounded-sm" />
        <span className="block w-5 h-0.5 bg-primary rounded-sm" />
      </button>

      {/* ── Backdrop — mobile only ── */}
      {open && <div onClick={() => setOpen(false)} aria-hidden="true" className="md:hidden fixed inset-0 z-30 bg-black/35 backdrop-blur-sm" />}

      {/* ── Sidebar panel ── */}
      <aside
        className={[
          "fixed top-0 left-0 h-screen w-64 bg-base border-r border-border z-50 flex flex-col overflow-hidden",
          "transition-transform duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
          "motion-reduce:transition-none",
          open ? "translate-x-0 shadow-[24px_0_48px_rgb(0_0_0/0.12)]" : "-translate-x-full",
          "md:sticky md:translate-x-0 md:shadow-none",
        ].join(" ")}
      >
        {NavContent}
      </aside>
    </>
  );
}
