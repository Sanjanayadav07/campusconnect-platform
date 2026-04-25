
"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { Check, Loader2, AlertCircle } from "lucide-react";

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
  const isInView = useInView(sectionRef, { once: true });

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
      const response = await fetch("/api/leads", {
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
      <div className="max-w-5xl mx-auto">

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          <input
            placeholder="Full Name"
            {...register("fullName", { required: "Name required" })}
            className={inputClass(errors.fullName)}
          />

          {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}

          <input
            placeholder="Email"
            {...register("email", { required: "Email required" })}
            className={inputClass(errors.email)}
          />

          <select {...register("teamSize")} className={inputClass(false)}>
            {teamSizeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          {status === "error" && (
            <p className="text-red-500">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg"
          >
            {status === "loading" ? "Submitting..." : "Request Demo"}
          </button>
        </form>

        {status === "success" && (
          <p className="text-green-600 mt-4">
            ✅ Form submitted successfully
          </p>
        )}
      </div>
    </section>
  );
}