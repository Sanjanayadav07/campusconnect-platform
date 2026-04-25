"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { featuresData } from "@/data/mock";

const tabs = ["All", "Learning", "Analytics", "Integration"];

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("All");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const filtered =
    activeTab === "All"
      ? featuresData
      : featuresData.filter((f) => f.category === activeTab);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleLearnMore = (feature) => {
    console.log("Clicked:", feature.title);
  };

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-20 sm:py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1 bg-purple-50 text-purple-600 text-xs font-semibold uppercase tracking-widest rounded-full border border-purple-100 mb-4">
            Platform Features
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            Everything you need to build your career 🚀
          </h2>

          <p className="text-lg text-slate-600">
            CampusConnect helps students discover internships, build skills, and track their growth — all in one platform.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md shadow-pink-200"
                  : "bg-white text-slate-600 hover:bg-purple-50 hover:text-purple-600 border border-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-slate-100 flex flex-col gap-4 group"
            >
              
              {feature.isPopular && (
                <span className="absolute top-4 right-4 px-2.5 py-1 bg-pink-500 text-white text-xs font-bold rounded-full">
                  Popular
                </span>
              )}

              <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-2xl">
                {feature.emoji}
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-base font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 flex-1">
                  {feature.description}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 uppercase">
                  {feature.category}
                </span>
                <button
                  onClick={() => handleLearnMore(feature)}
                  className="flex items-center gap-1 text-sm font-semibold text-purple-600 group-hover:gap-2 transition-all"
                >
                  Explore
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}