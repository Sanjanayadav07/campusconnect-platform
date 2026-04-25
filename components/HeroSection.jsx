"use client";

import { motion } from "framer-motion";
import { GraduationCap, Zap, BarChart3, Star, ArrowRight, Play } from "lucide-react";

const metrics = [
  { label: "Active Students", value: "3,200+", change: "+15%", positive: true },
  { label: "Internships", value: "850+", change: "+120", positive: true },
  { label: "Success Rate", value: "92%", change: "+6%", positive: true },
  { label: "Growth", value: "↑ 40%", change: "this year", positive: true },
];

const progressItems = [
  { label: "Web Development", pct: 85, color: "bg-purple-500" },
  { label: "Data Science", pct: 72, color: "bg-pink-500" },
  { label: "UI/UX Design", pct: 90, color: "bg-violet-500" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/40 to-pink-50/60">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="flex flex-col gap-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full text-sm font-semibold text-purple-700">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            Trusted by 1000+ Students
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-5xl font-extrabold text-slate-900 leading-tight">
              Launch Your Career
            </h1>
            <h1 className="text-5xl font-extrabold text-purple-600">
              With Real Internships
            </h1>
          </div>

          {/* Text */}
          <p className="text-lg text-slate-600 max-w-xl">
            CampusConnect helps students find internships, build real-world skills,
            and track their career growth — all in one platform.
          </p>

          {/* CTA */}
          <div className="flex gap-3 flex-wrap">
            <a
              href="#lead-form"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:opacity-90"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </a>

            <button className="px-6 py-3 border rounded-xl flex items-center gap-2 hover:border-purple-400 hover:text-purple-600">
              <Play className="w-4 h-4" />
              Watch Demo
            </button>
          </div>

          {/* Badges */}
          <div className="flex gap-3 flex-wrap">
            <span className="bg-white px-3 py-1 rounded-full text-sm shadow">
              🎓 Industry Projects
            </span>
            <span className="bg-white px-3 py-1 rounded-full text-sm shadow">
              ⚡ Fast Placement
            </span>
            <span className="bg-white px-3 py-1 rounded-full text-sm shadow">
              📊 Career Tracking
            </span>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-5 text-white">
            <h3 className="font-bold">Student Dashboard</h3>
          </div>

          <div className="p-6 space-y-4">

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3">
              {metrics.map((m) => (
                <div key={m.label} className="bg-slate-50 p-3 rounded-xl">
                  <p className="text-xs text-slate-500">{m.label}</p>
                  <p className="font-bold text-lg">{m.value}</p>
                  <span className="text-green-600 text-xs">{m.change}</span>
                </div>
              ))}
            </div>

            {/* Progress */}
            {progressItems.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-sm">
                  <span>{item.label}</span>
                  <span>{item.pct}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full">
                  <div
                    className={`h-2 rounded-full ${item.color}`}
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}

            {/* Bottom */}
            <div className="bg-purple-50 p-3 rounded-xl text-sm">
              🎯 3,000+ students successfully placed
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}