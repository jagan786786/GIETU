"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import ApplyNowFormModal from "./ApplyNowFormModal";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "#about",
    dropdown: [
      { name: "Our History", href: "/about/history" },
      { name: "Mission & Vision", href: "/about/vision-mission" },
      { name: "Accreditations", href: "/about/accrediations" },
    ],
  },
  {
    name: "Academics",
    href: "#programs",
    dropdown: [
      { name: "Undergraduate", href: "/programs/under-graduate" },
      { name: "Postgraduate", href: "/programs/post-graduate" },
      { name: "PhD Programs", href: "/programs/phd-course" },
      { name: "Diploma Courses", href: "/programs/diploma-course" },
    ],
  },
  { name: "Admissions", href: "/admission" },
  { name: "Campus Life", href: "/campus-life" },
  { name: "Faculty", href: "/faculty" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-700 text-white shadow-md py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative h-20 w-56 md:h-24 md:w-70">
                <Image
                  src="/images/logo.jpg"
                  alt="University Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          "flex items-center px-3 py-2 text-sm font-medium",
                          scrolled
                            ? "text-white hover:text-slate-900"
                            : "text-white  hover:text-slate-900"
                        )}
                      >
                        {link.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {link.dropdown.map((item) => (
                        <DropdownMenuItem key={item.name} asChild>
                          <Link href={item.href}>{item.name}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-100/10",
                      scrolled
                        ? "text-white hover:text-slate-900"
                        : "text-white hover:text-white/80"
                    )}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                onClick={() => setShowForm(true)}
                className={cn(
                  scrolled
                    ? "bg-slate-800 text-white hover:bg-slate-900"
                    : "bg-white text-slate-900 hover:bg-slate-100"
                )}
              >
                Apply Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X
                  className={cn(
                    "h-6 w-6",
                    scrolled ? "text-slate-800" : "text-white"
                  )}
                />
              ) : (
                <Menu
                  className={cn(
                    "h-6 w-6",
                    scrolled ? "text-slate-800" : "text-white"
                  )}
                />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
              <nav className="flex flex-col space-y-2 px-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.dropdown ? (
                      <div className="space-y-2">
                        <div className="font-medium text-slate-800">
                          {link.name}
                        </div>
                        <div className="pl-4 space-y-2 border-l-2 border-slate-200">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block text-sm text-slate-600 hover:text-slate-900"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="block font-medium text-slate-800 hover:text-slate-900"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-4 px-4 pt-4 flex flex-col space-y-2 border-t border-slate-200">
                <Button
                  className="w-full justify-center"
                  onClick={() => {
                    setIsOpen(false);
                    setShowForm(true);
                  }}
                >
                  Apply Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Apply Now Modal */}
      <ApplyNowFormModal isOpen={showForm} onClose={() => setShowForm(false)} />
    </>
  );
}
