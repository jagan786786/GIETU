"use client";

import React from "react";

const undergraduatePrograms = [
  "B. Tech in Computer Science & Engineering",
  "B. Tech in Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
  "B. Tech in Computer Science and Engineering (IoT)",
  "B. Tech in Computer Science and Engineering (Data Science)",
  "B. Tech in Computer Science and Technology",
  "B. Tech in Agricultural Engineering",
  "B. Tech in Mechanical Engineering",
  "B. Tech in Biotechnology",
  "B. Tech in Chemical Engineering",
  "B. Tech in Civil Engineering",
  "B. Tech in Electrical Engineering",
  "B. Tech in Electrical and Electronics Engineering",
  "B. Tech in Electronics and Communication Engineering",
  "B. Tech in Electronics Engineering (VLSI Design and Technology)",
  "B. Tech in Electronics & Communication (Advanced Communication Technology)",
  "B.Sc. (Hons.) Agriculture",
  "Bachelor of Business Administration (BBA)",
  "Bachelor of Computer Applications (BCA)",
  "B.Sc in Nursing",
];

export default function UndergraduateProgramsPage() {
  return (
    <div className="pt-32 pb-20 mt-12 px-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-slate-800">
        Undergraduate Programs
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
