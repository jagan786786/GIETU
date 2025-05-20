"use client";

import React from "react";

const undergraduatePrograms = [
  "Ph.D in Physics",
            "Ph.D in Chemistry",
            "Ph.D in Mathematics",
            "Ph.D in Biotechnology",
            "Ph.D in Computer Science and Engineering",
            "Ph.D in Computer Science and Application",
            "Ph.D in Mechanical Engineering",
            "Ph.D in Chemical Engineering",
            "Ph.D in Electronics & Communication Engineering",
            "Ph.D in Civil Engineering",
            "Ph.D in Electrical and Electronics Engineering",
            "Ph.D in Management",
            "Ph.D (Agriculture)",
            "Ph.D in Biotechnology (School of Studies)",
            "Ph.D in Zoology",
];

export default function UndergraduateProgramsPage() {
  return (
    <div className="pt-32 pb-20 mt-12 px-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-slate-800">
         PhD Programs
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
