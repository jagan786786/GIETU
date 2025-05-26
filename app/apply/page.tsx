"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ApplyNowPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    dob: "",
    address: "",
    gender: "",
    category: "",
    programme: "",
    branch: "",
    aadhaarNumber: "",
    fatherName: "",
  });

  const [aadhaarFile, setAadhaarFile] = useState<File | null>(null);
  const [marklistFile, setMarklistFile] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      setter(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!aadhaarFile || !marklistFile) {
      alert("Please upload both Aadhaar and Marklist files.");
      return;
    }

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    form.append("aadhaarFile", aadhaarFile);
    form.append("marklistFile", marklistFile);

    try {
      const response = await fetch("http://localhost:8080/api/applications", {
        method: "POST",
        body: form,
      });

      if (!response.ok) throw new Error("Server error");

      const result = await response.text();
      toast.success("Application submitted successfully!");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit application.");
    }
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      {/* Left: Form */}
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
                name="fullName"
                placeholder="Full Name *"
                className="border p-2 rounded"
                value={formData.fullName}
                onChange={handleChange}
              />
              <input
                required
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                className="border p-2 rounded"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email Address *"
                className="border p-2 rounded"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                required
                type="date"
                name="dob"
                placeholder="Date of Birth *"
                className="border p-2 rounded"
                value={formData.dob}
                onChange={handleChange}
              />

              <input
                type="text"
                name="address"
                placeholder="Address"
                className="border p-2 rounded md:col-span-2"
                value={formData.address}
                onChange={handleChange}
              />

              <select
                required
                name="gender"
                className="border p-2 rounded"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Gender *</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <select
                required
                name="category"
                className="border p-2 rounded"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Category *</option>
                <option value="general">General</option>
                <option value="obc">OBC</option>
                <option value="sc">SC</option>
                <option value="st">ST</option>
              </select>

              <input
                required
                type="text"
                name="programme"
                placeholder="Programme *"
                className="border p-2 rounded"
                value={formData.programme}
                onChange={handleChange}
              />
              <input
                required
                type="text"
                name="branch"
                placeholder="Branch *"
                className="border p-2 rounded"
                value={formData.branch}
                onChange={handleChange}
              />
              <input
                required
                type="text"
                name="aadhaarNumber"
                placeholder="Aadhaar No. *"
                className="border p-2 rounded"
                value={formData.aadhaarNumber}
                onChange={handleChange}
              />

              <div className="md:col-span-2">
                <label className="block mb-1 text-sm font-medium">
                  Upload Aadhaar Card *
                </label>
                <input
                  name="aadhaarFile"
                  type="file"
                  onChange={(e) => handleFileChange(e, setAadhaarFile)}
                  className="border p-2 rounded w-full"
                />
              </div>

              <input
                required
                type="text"
                name="fatherName"
                placeholder="Father's Name *"
                className="border p-2 rounded md:col-span-2"
                value={formData.fatherName}
                onChange={handleChange}
              />

              <div className="md:col-span-2">
                <label className="block mb-1 text-sm font-medium">
                  Upload Marklist *
                </label>
                <input
                  name="marklistFile"
                  type="file"
                  onChange={(e) => handleFileChange(e, setMarklistFile)}
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

      {/* Right: Image */}
      <div className="md:w-1/2 w-full relative">
        <Image
          src="/images/aa.webp" // Make sure you place this image in your public folder
          alt="University Campus"
          layout="fill"
          objectFit="cover"
          className="hidden md:block"
        />
      </div>
    </section>
  );
}
