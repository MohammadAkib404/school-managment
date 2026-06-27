"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-base px-4 py-4">
      <div className="mx-auto max-w-7xl">
        {/* Desktop */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center">
          {/* Logo */}
          <div className="justify-self-start">
            <h1 className="text-xl font-bold text-primary">SMT</h1>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            <a href="#" className="font-medium text-secondary hover:opacity-80 transition-opacity">
              Dashboard
            </a>

            <a href="#" className="font-medium text-secondary hover:opacity-80 transition-opacity">
              Users
            </a>

            <a href="#" className="font-medium text-secondary hover:opacity-80 transition-opacity">
              Settings
            </a>

            <a href="#" className="font-medium text-secondary hover:opacity-80 transition-opacity">
              About
            </a>
          </div>

          {/* Buttons */}
          <div className="justify-self-end flex items-center gap-4">
            <button className="rounded-lg border border-border px-6 py-2 font-medium text-primary hover:opacity-80 transition-opacity">Sign In</button>

            <button className="rounded-lg bg-primary px-6 py-2 font-medium text-white hover:opacity-80 transition-opacity">Get Started</button>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="flex items-center justify-between md:hidden">
          <h1 className="text-xl font-bold text-primary">SMT</h1>

          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="text-primary">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-6 flex flex-col gap-4 border-t border-border pt-6 md:hidden">
            <a href="#" className="font-medium text-secondary hover:opacity-80 transition-opacity">
              Dashboard
            </a>

            <a href="#" className="font-medium text-secondary hover:opacity-80 transition-opacity">
              Users
            </a>

            <a href="#" className="font-medium text-secondary hover:opacity-80 transition-opacity">
              Settings
            </a>

            <a href="#" className="font-medium text-secondary hover:opacity-80 transition-opacity">
              About
            </a>

            <div className="mt-2 flex flex-col gap-3 border-t border-border pt-4">
              <button className="rounded-lg border border-border px-6 py-2 font-medium text-primary">Sign In</button>

              <button className="rounded-lg bg-primary px-6 py-2 font-medium text-white">Get Started</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
