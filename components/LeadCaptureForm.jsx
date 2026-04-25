"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const teamSizeOptions = [
  { value: "", label: "Select team size" },
  { value: "1-10", label: "1 – 10 employees" },
  { value: "11-50", label: "11 – 50 employees" },
  { value: "51-200", label: "51 – 200 employees" },
  { value: "201-500", label: "201 – 500 employees" },
  { value: "501-1000", label: "501 – 1,000 employees" },
  { value: "1000+", label: "1,000+ employees" },
];

export default function LeadCaptureForm() {
  const sectionRef = useRef(null);

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/lead", { // ✅ fixed API
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to submit");
    }
  };

  const inputClass = (hasError) =>
    `w-full px-4 py-3 rounded-xl border text-sm ${
      hasError ? "border-red-400" : "border-gray-300"
    }`;

  return (
    <section id="lead-form" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Full Name */}
          <input
            placeholder="Full Name"
            {...register("fullName", { required: "Name required" })}
            className={inputClass(errors.fullName)}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}

          {/* Work Email */}
          <input
            placeholder="Work Email"
            {...register("workEmail", { required: "Email required" })}
            className={inputClass(errors.workEmail)}
          />
          {errors.workEmail && (
            <p className="text-red-500 text-sm">{errors.workEmail.message}</p>
          )}

          {/* Company Name */}
          <input
            placeholder="Company Name"
            {...register("companyName", { required: "Company required" })}
            className={inputClass(errors.companyName)}
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm">{errors.companyName.message}</p>
          )}

          {/* Team Size */}
          <select
            {...register("teamSize", { required: "Select team size" })}
            className={inputClass(errors.teamSize)}
          >
            {teamSizeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.teamSize && (
            <p className="text-red-500 text-sm">{errors.teamSize.message}</p>
          )}

          {/* Error Message */}
          {status === "error" && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg w-full hover:bg-purple-700 transition"
          >
            {status === "loading" ? "Submitting..." : "Request Demo"}
          </button>
        </form>

        {/* Success Message */}
        {status === "success" && (
          <p className="text-green-600 mt-4 text-center font-medium">
            ✅ Form submitted successfully
          </p>
        )}
      </div>
    </section>
  );
}