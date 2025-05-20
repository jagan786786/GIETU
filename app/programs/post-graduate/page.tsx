"use client";

import React from "react";

const undergraduatePrograms = [
 "Master of Business Administration (MBA)",
            "M. Tech in Computer Science & Engineering",
            "M. Tech in Manufacturing Technology",
            "M. Tech in Heat Power and Thermal Engineering",
            "M. Tech in Machine Design",
            "M. Tech in Biotechnology",
            "M. Tech in Chemical Engineering",
            "M. Tech in Structural Engineering",
            "M. Tech in Construction Technology & Management",
            "M. Tech in Power Electronics",
            "M. Tech in Electronics & Communication Engineering",
            "M. Tech in Electronics & Communication (Advanced Communication Technology)",
            "M. Tech in Electronics & Communication (VLSI Design)",
            "Master of Computer Applications (MCA)",
            "M.Sc in Physics",
            "M.Sc in Chemistry",
            "M.Sc in Mathematics",
            "M.Sc in Life Science",
            "M.Sc in Biotechnology",
            "M.A. in English",
            "M.A. in Economics",
];

export default function UndergraduateProgramsPage() {
  return (
    <div className="pt-32 pb-20 mt-12 px-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-slate-800">
        Postgraduate Programs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {undergraduatePrograms.map((program, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-lg font-semibold text-slate-700">{program}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
