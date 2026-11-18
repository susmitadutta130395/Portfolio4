"use client";
import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { ArrowRight, Download } from "lucide-react";
export default function Hero() {
  return (
            <span>{PERSONAL_INFO.availability}</span>
          </div>
        </div>
      </div>
      {/* Metric Telemetry Counters Footer */}
      <div className="relative z-10 mt-12 pt-6 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {PERSONAL_INFO.stats.map((stat, idx) => (
          <div key={idx} className="space-y-1">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-syne text-white flex items-baseline gap-1">
              <span>{stat.value}</span>
              <span className="text-xs font-mono text-[#ff1744]">/METRIC</span>
            </div>
            <div className="text-xs font-mono tracking-wider uppercase text-white/50">
              {stat.label}
            </div>
            <div className="text-[11px] text-white/40 font-space">
              {stat.detail}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
