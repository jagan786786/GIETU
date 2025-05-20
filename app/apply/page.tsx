"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ApplyNowPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side: Image */}
      <div className="md:w-1/2 w-full relative h-[300px] md:h-auto">
        <Image
          src="/images/aa.webp"
          alt="Admission Visual"
          layout="fill"
          objectFit="cover"
          className="rounded-none md:rounded-r-xl"
        />
      </div>

      {/* Right Side: Form */}
      <div className="md:w-1/2 w-full bg-white p-8 md:p-16 flex items-center justify-center">
        <div className="w-full max-w-xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            University Application Form
          </h2>

          {submitted ? (
            <div className="text-green-600 font-semibold">
              ✅ Your application has been submitted!
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                required
                type="text"
                placeholder="Full Name *"
                className="border p-2 rounded"
              />
              <input
                required
                type="tel"
                placeholder="Phone Number *"
                className="border p-2 rounded"
              />
              <input
                required
                type="email"
                placeholder="Email Address *"
                className="border p-2 rounded"
              />
              <input
                required
                type="date"
                placeholder="Date of Birth *"
                className="border p-2 rounded"
              />

              <input
                type="text"
                placeholder="Address"
                className="border p-2 rounded md:col-span-2"
              />

              <select required className="border p-2 rounded">
                <option value="">Gender *</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <select required className="border p-2 rounded">
                <option value="">Category *</option>
                <option value="general">General</option>
                <option value="obc">OBC</option>
                <option value="sc">SC</option>
                <option value="st">ST</option>
              </select>

              <input
                required
                type="text"
                placeholder="Programme *"
                className="border p-2 rounded"
              />
              <input
                required
                type="text"
                placeholder="Branch *"
                className="border p-2 rounded"
              />
              <input
                required
                type="text"
                placeholder="Aadhaar No. *"
                className="border p-2 rounded"
              />

              <div className="md:col-span-2">
                <label className="block mb-1 text-sm font-medium">
                  Upload Aadhaar Card *
                </label>
                <input
                  required
                  type="file"
                  className="border p-2 rounded w-full"
                />
              </div>

              <input
                required
                type="text"
                placeholder="Father's Name *"
                className="border p-2 rounded md:col-span-2"
              />

              <div className="md:col-span-2">
                <label className="block mb-1 text-sm font-medium">
                  Upload Marklist *
                </label>
                <input
                  required
                  type="file"
                  className="border p-2 rounded w-full"
                />
              </div>

              <div className="md:col-span-2 mt-4 text-right">
                <Button type="submit">Submit Application</Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
