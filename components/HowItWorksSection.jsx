"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { stepsData } from "@/data/mock";

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const toggleStep = (id) => {
    setActiveStep((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-20 sm:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 bg-purple-50 text-purple-600 text-xs font-semibold uppercase tracking-widest rounded-full border border-purple-100 mb-4">
            How It Works
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Get your dream internship in{" "}
            <span className="text-purple-600">4 simple steps</span>
          </h2>

          <p className="text-lg text-slate-600">
            From profile setup to placement — we guide you at every step of your career journey.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-6 lg:grid lg:grid-cols-2 lg:gap-8">
          {stepsData.map((step, i) => {
            const isActive = activeStep === step.id;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div
                  onClick={() => toggleStep(step.id)}
                  className={`bg-white border-2 rounded-2xl p-6 cursor-pointer transition-all ${
                    isActive
                      ? "border-purple-500 shadow-lg"
                      : "border-slate-100 hover:border-purple-200"
                  }`}
                >
                  <div className="flex gap-4">
                    
                    {/* Number */}
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-xl font-bold ${
                        isActive
                          ? "bg-purple-600 text-white"
                          : "bg-purple-50 text-purple-600"
                      }`}
                    >
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg">{step.title}</h3>

                        {isActive ? (
                          <ChevronUp className="text-purple-500" />
                        ) : (
                          <ChevronDown className="text-gray-400" />
                        )}
                      </div>

                      <p className="text-slate-600 mt-1">
                        {step.summary}
                      </p>

                      {/* Expand */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                          >
                            <p className="text-sm text-slate-500 mt-3 border-t pt-3">
                              {step.detail}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Connector */}
                {i < stepsData.length - 1 && (
                  <div className="lg:hidden flex justify-center my-2">
                    <div className="w-px h-6 bg-purple-200" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#lead-form"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#lead-form")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold shadow-md hover:opacity-90"
          >
            Start Your Career 🚀
          </a>
        </motion.div>

      </div>
    </section>
  );
}