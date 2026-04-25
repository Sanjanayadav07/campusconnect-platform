"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Dummy data (agar tumhara "@/data/mock" kaam na kare)
const partnersData = [
  { id: 1, shortName: "IITD", fullName: "IIT Delhi", category: "IIT" },
  { id: 2, shortName: "IIMB", fullName: "IIM Bangalore", category: "IIM" },
  { id: 3, shortName: "Google", fullName: "Google Inc.", category: "Industry" },
  { id: 4, shortName: "MIT", fullName: "MIT USA", category: "Global" },
  { id: 5, shortName: "IITB", fullName: "IIT Bombay", category: "IIT" },
  { id: 6, shortName: "IIMA", fullName: "IIM Ahmedabad", category: "IIM" },
  { id: 7, shortName: "Amazon", fullName: "Amazon", category: "Industry" },
  { id: 8, shortName: "Stanford", fullName: "Stanford University", category: "Global" },
];

// Colors
const partnerCategoryColors = {
  IIT: "bg-blue-50 text-blue-600 border-blue-200",
  IIM: "bg-purple-50 text-purple-600 border-purple-200",
  Global: "bg-pink-50 text-pink-600 border-pink-200",
  Industry: "bg-green-50 text-green-600 border-green-200",
};

// Duplicate for marquee
const row1 = [...partnersData, ...partnersData];
const row2 = [...partnersData, ...partnersData];

export default function PartnersSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="py-20 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Our Top Partners
          </h2>
          <p className="text-gray-600 mt-2">
            Collaborations with top universities & companies
          </p>
        </motion.div>

        {/* Row 1 */}
        <div className="overflow-hidden mb-4">
          <div className="flex gap-3 animate-marquee">
            {row1.map((p, i) => (
              <div
                key={i}
                className={`px-4 py-2 rounded-lg border text-sm flex gap-2 ${partnerCategoryColors[p.category]}`}
              >
                <span className="font-bold">{p.shortName}</span>
                <span className="hidden sm:block">{p.fullName}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden">
          <div className="flex gap-3 animate-marquee-reverse">
            {row2.map((p, i) => (
              <div
                key={i}
                className={`px-4 py-2 rounded-lg border text-sm flex gap-2 ${partnerCategoryColors[p.category]}`}
              >
                <span className="font-bold">{p.shortName}</span>
                <span className="hidden sm:block">{p.fullName}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 text-center flex flex-wrap justify-center gap-3">
          <span className="bg-purple-600 text-white px-4 py-2 rounded-lg">
            50+ Partners
          </span>
          <span className="bg-black text-white px-4 py-2 rounded-lg">
            200+ Programs
          </span>
        </div>
      </div>
    </section>
  );
}