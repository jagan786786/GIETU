"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ApplyNowFormModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="relative w-full max-w-3xl bg-white rounded-lg p-6 shadow-lg overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-4">University Application Form</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            required
            type="text"
            placeholder="Name *"
            className="border p-2 rounded"
          />
          <input
            required
            type="tel"
            placeholder="Phone *"
            className="border p-2 rounded"
          />
          <input
            required
            type="email"
            placeholder="Email *"
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
            <option value="">Select Gender *</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <select required className="border p-2 rounded">
            <option value="">Select Category *</option>
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
            <label className="block mb-1">Aadhaar Card *</label>
            <input required type="file" className="border p-2 rounded w-full" />
          </div>
          <input
            required
            type="text"
            placeholder="Father's Name *"
            className="border p-2 rounded md:col-span-2"
          />
          <div className="md:col-span-2">
            <label className="block mb-1">Marklist *</label>
            <input required type="file" className="border p-2 rounded w-full" />
          </div>

          <div className="md:col-span-2 mt-4 text-right">
            <Button type="submit">Submit Application</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
