
"use client";

import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Platform: [
    "Find Internships",
    "Skill Development",
    "Career Guidance",
    "Analytics Dashboard",
    "Certificates",
  ],
  Programs: [
    "Web Development",
    "Data Science",
    "UI/UX Design",
    "Business Analytics",
    "Cloud Computing",
  ],
  Company: ["About Us", "Careers", "Blog", "Contact"],
  Resources: ["Case Studies", "Guides", "Webinars", "Student Stories", "Help Center"],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-md">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>

              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-white text-base">
                  CampusConnect
                </span>
                <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest">
                  Smart Career Platform
                </span>
              </div>
            </a>

            <p className="text-slate-400 text-sm max-w-xs mb-6">
              A smart platform helping students discover internships, build skills,
              and launch their careers with confidence.
            </p>

            {/* Contact */}
            <div className="space-y-2">
              <a
                href="mailto:support@campusconnect.com"
                className="flex items-center gap-2 text-slate-400 hover:text-white text-sm"
              >
                <Mail className="w-4 h-4" />
                support@campusconnect.com
              </a>

              <a
                href="tel:+919999999999"
                className="flex items-center gap-2 text-slate-400 hover:text-white text-sm"
              >
                <Phone className="w-4 h-4" />
                +91 99999 99999
              </a>

              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4" />
                India
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-purple-400 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-14 p-6 sm:p-8 bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-2xl border border-purple-800/30">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            
            <div>
              <h4 className="text-white font-bold text-lg mb-1">
                Stay Updated 🚀
              </h4>
              <p className="text-slate-400 text-sm">
                Get latest internships, career tips, and opportunities directly in your inbox.
              </p>
            </div>

            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 sm:w-56 px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-purple-400"
              />
              <button className="px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold rounded-xl hover:opacity-90">
                Subscribe
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          <p className="text-slate-500 text-sm">
            © 2026 CampusConnect. All rights reserved.
          </p>

          <div className="flex gap-6">
            {["Privacy Policy", "Terms", "Cookies"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-slate-500 hover:text-purple-400 text-sm"
              >
                {link}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}