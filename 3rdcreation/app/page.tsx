"use client";

import React, { useState } from "react";
import {
  ShieldAlert,
  Zap,
  Droplets,
  TreePine,
  Activity,
  AlertTriangle,
  Play,
  RotateCcw,
  Sparkles,
  Terminal,
  Globe,
  CheckCircle2,
  BarChart3,
} from "lucide-react";

// ==========================================
// 1. TYPESAFE DATA MODELS
// ==========================================
type Sector = "Energy" | "Water" | "Biodiversity" | "Carbon";

type Initiative = {
  id: string;
  title: string;
  category: Sector;
  description: string;
  cost: number; // Budget cost
  energyImpact: number;
  waterImpact: number;
  bioImpact: number;
  carbonImpact: number;
  deployed: boolean;
};

type LogMessage = {
  id: string;
  timestamp: string;
  text: string;
  type: "info" | "warning" | "success" | "danger";
};

// ==========================================
// 2. MOCK INITIATIVES DATA
// ==========================================
const INITIAL_INITIATIVES: Initiative[] = [
  {
    id: "init-1",
    title: "Global Orbital Solar Array",
    category: "Energy",
    description: "Deploy space-based solar collectors to beam clean energy to ground stations worldwide.",
    cost: 30,
    energyImpact: 25,
    waterImpact: 0,
    bioImpact: 5,
    carbonImpact: 15,
    deployed: false,
  },
  {
    id: "init-2",
    title: "Atmospheric Carbon Scrubbers",
    category: "Carbon",
    description: "Construct 10,000 direct-air capture facilities powered by geothermal energy.",
    cost: 25,
    energyImpact: -5,
    waterImpact: -2,
    bioImpact: 10,
    carbonImpact: 30,
    deployed: false,
  },
  {
    id: "init-3",
    title: "Continental Aquifer Restoration",
    category: "Water",
    description: "Deploy automated subsurface filtration units across depleting river basins.",
    cost: 20,
    energyImpact: -5,
    waterImpact: 35,
    bioImpact: 15,
    carbonImpact: 0,
    deployed: false,
  },
  {
    id: "init-4",
    title: "Oceanic Kelp Corridor Re-wilding",
    category: "Biodiversity",
    description: "Restore 500,000 sq km of ocean kelp forests to revive marine ecosystems.",
    cost: 15,
    energyImpact: 0,
    waterImpact: 10,
    bioImpact: 30,
    carbonImpact: 20,
    deployed: false,
  },
  {
    id: "init-5",
    title: "Smart Grid AI Optimization",
    category: "Energy",
    description: "Implement AI load-balancing across continental power grids to eliminate transmission waste.",
    cost: 10,
    energyImpact: 15,
    waterImpact: 5,
    bioImpact: 0,
    carbonImpact: 10,
    deployed: false,
  },
];

// ==========================================
// 3. MAIN MISSION CONTROL COMPONENT
// ==========================================
export default function MissionControlPage() {
  // Planetary Health Vitals (%)
  const [energy, setEnergy] = useState(48);
  const [water, setWater] = useState(42);
  const [biodiversity, setBiodiversity] = useState(38);
  const [carbonStability, setCarbonStability] = useState(30);

  // Resources
  const [budget, setBudget] = useState(80); // Available Capital ($Trillion)
  const [initiatives, setInitiatives] = useState<Initiative[]>(INITIAL_INITIATIVES);
  const [activeFilter, setActiveFilter] = useState<Sector | "All">("All");

  // Terminal Logs
  const [logs, setLogs] = useState<LogMessage[]>([
    {
      id: "log-1",
      timestamp: "08:00:12",
      text: "SYSTEM ONLINE: Emergency Planetary Defense Interface initialized.",
      type: "info",
    },
    {
      id: "log-2",
      timestamp: "08:00:15",
      text: "WARNING: Biodiversity threshold critically low in South American sector.",
      type: "warning",
    },
  ]);

  // Helper: Append log to terminal
  const addLog = (text: string, type: LogMessage["type"]) => {
    const time = new Date().toLocaleTimeString("en-US", { hour12: false });
    setLogs((prev) => [
      { id: Math.random().toString(), timestamp: time, text, type },
      ...prev.slice(0, 7), // Keep last 8 logs
    ]);
  };

  // Helper: Deploy Initiative
  const deployInitiative = (id: string) => {
    const item = initiatives.find((i) => i.id === id);
    if (!item) return;

    if (item.deployed) {
      addLog(`INITIATIVE ABORTED: ${item.title} was already deployed.`, "warning");
      return;
    }

    if (budget < item.cost) {
      addLog(`RESOURCE FAILURE: Insufficient budget for ${item.title}. Need $${item.cost}B.`, "danger");
      return;
    }

    // Deduct cost & Boost Stats
    setBudget((prev) => prev - item.cost);
    setEnergy((prev) => Math.min(100, Math.max(0, prev + item.energyImpact)));
    setWater((prev) => Math.min(100, Math.max(0, prev + item.waterImpact)));
    setBiodiversity((prev) => Math.min(100, Math.max(0, prev + item.bioImpact)));
    setCarbonStability((prev) => Math.min(100, Math.max(0, prev + item.carbonImpact)));

    // Mark Deployed
    setInitiatives((prev) =>
      prev.map((i) => (i.id === id ? { ...i, deployed: true } : i))
    );

    addLog(`DEPLOYMENT SUCCESSFUL: ${item.title} deployed globally.`, "success");
  };

  // Helper: Reset Simulation
  const resetSimulation = () => {
    setEnergy(48);
    setWater(42);
    setBiodiversity(38);
    setCarbonStability(30);
    setBudget(80);
    setInitiatives(INITIAL_INITIATIVES);
    addLog("SIMULATION RESET: All metrics reverted to baseline status.", "info");
  };

  // Calculate Average Health Score
  const overallHealth = Math.round((energy + water + biodiversity + carbonStability) / 4);

  // Filtered Initiatives
  const filteredInitiatives = initiatives.filter(
    (i) => activeFilter === "All" || i.category === activeFilter
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-mono selection:bg-cyan-500/30 selection:text-cyan-300">
      
      {/* HEADER / NAVIGATION BAR */}
      <header className="border-b border-cyan-900/50 bg-slate-950/90 backdrop-blur-md sticky top-0 z-40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Logo & Status */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Globe className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-wider text-slate-100">
                  MISSION CONTROL
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold">
                  LIVE FEED
                </span>
              </div>
              <p className="text-xs text-slate-400 tracking-tight">
                GLOBAL SYSTEM RESTORATION PROJECT — CODENAME: GAIA
              </p>
            </div>
          </div>

          {/* Quick Global Health Indicator */}
          <div className="flex items-center gap-6 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-xl">
            <div>
              <span className="text-[10px] text-slate-500 block uppercase">Planetary Health</span>
              <span
                className={`text-lg font-bold ${
                  overallHealth > 75
                    ? "text-emerald-400"
                    : overallHealth > 45
                    ? "text-amber-400"
                    : "text-rose-500 animate-pulse"
                }`}
              >
                {overallHealth}%
              </span>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <div>
              <span className="text-[10px] text-slate-500 block uppercase">Available Budget</span>
              <span className="text-lg font-bold text-cyan-400">${budget}B</span>
            </div>
            <button
              onClick={resetSimulation}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Reset Simulation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        
        {/* HERO STATUS OVERVIEW */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Energy Card */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-slate-400 flex items-center gap-1.5 font-semibold">
                <Zap className="w-4 h-4 text-amber-400" /> ENERGY GRID
              </span>
              <span className="text-xs font-bold text-amber-400">{energy}%</span>
            </div>
            <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-amber-400 h-full transition-all duration-500"
                style={{ width: `${energy}%` }}
              />
            </div>
          </div>

          {/* Water Card */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-slate-400 flex items-center gap-1.5 font-semibold">
                <Droplets className="w-4 h-4 text-cyan-400" /> WATER PURITY
              </span>
              <span className="text-xs font-bold text-cyan-400">{water}%</span>
            </div>
            <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-cyan-400 h-full transition-all duration-500"
                style={{ width: `${water}%` }}
              />
            </div>
          </div>

          {/* Biodiversity Card */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-slate-400 flex items-center gap-1.5 font-semibold">
                <TreePine className="w-4 h-4 text-emerald-400" /> BIODIVERSITY
              </span>
              <span className="text-xs font-bold text-emerald-400">{biodiversity}%</span>
            </div>
            <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-emerald-400 h-full transition-all duration-500"
                style={{ width: `${biodiversity}%` }}
              />
            </div>
          </div>

          {/* Carbon Card */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-slate-400 flex items-center gap-1.5 font-semibold">
                <Activity className="w-4 h-4 text-indigo-400" /> CARBON STABILITY
              </span>
              <span className="text-xs font-bold text-indigo-400">{carbonStability}%</span>
            </div>
            <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-indigo-400 h-full transition-all duration-500"
                style={{ width: `${carbonStability}%` }}
              />
            </div>
          </div>
        </section>

        {/* WORKSPACE GRID: INITIATIVES + TERMINAL LOGS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT 2-COLUMNS: DEPLOYABLE INITIATIVES */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-cyan-400" />
                  Available Global Initiatives
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Authorize tactical deployments to balance planetary health.
                </p>
              </div>

              {/* SECTOR FILTERS */}
              <div className="flex gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                {(["All", "Energy", "Water", "Biodiversity", "Carbon"] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      activeFilter === cat
                        ? "bg-cyan-500 text-slate-950 font-bold"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* INITIATIVES CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredInitiatives.map((item) => (
                <div
                  key={item.id}
                  className={`bg-slate-900/40 border p-5 rounded-2xl flex flex-col justify-between transition-all ${
                    item.deployed
                      ? "border-emerald-500/40 bg-emerald-950/10"
                      : "border-slate-800 hover:border-cyan-500/40"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700">
                        {item.category}
                      </span>
                      <span className="text-xs font-bold text-slate-300">
                        ${item.cost}B
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-100 mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Impact Summary Pill */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      {item.energyImpact > 0 && <span className="text-amber-400">+{item.energyImpact}% E</span>}
                      {item.waterImpact > 0 && <span className="text-cyan-400">+{item.waterImpact}% W</span>}
                      {item.bioImpact > 0 && <span className="text-emerald-400">+{item.bioImpact}% B</span>}
                      {item.carbonImpact > 0 && <span className="text-indigo-400">+{item.carbonImpact}% C</span>}
                    </div>

                    <button
                      onClick={() => deployInitiative(item.id)}
                      disabled={item.deployed || budget < item.cost}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                        item.deployed
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 cursor-default"
                          : budget < item.cost
                          ? "bg-slate-800 text-slate-600 cursor-not-allowed"
                          : "bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                      }`}
                    >
                      {item.deployed ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" /> Deployed
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5" /> Authorize
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT 1-COLUMN: TERMINAL CONSOLE LOG */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <span className="text-xs font-bold text-slate-300 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" /> MISSION COMMAND LOGS
                </span>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> REALTIME
                </span>
              </div>

              {/* LOG LIST */}
              <div className="space-y-3 font-mono text-xs max-h-[400px] overflow-y-auto pr-1">
                {logs.map((log) => (
                  <div
                    key={log.id}
                    className={`p-3 rounded-xl border ${
                      log.type === "danger"
                        ? "bg-rose-950/20 border-rose-800/50 text-rose-300"
                        : log.type === "warning"
                        ? "bg-amber-950/20 border-amber-800/50 text-amber-300"
                        : log.type === "success"
                        ? "bg-emerald-950/20 border-emerald-800/50 text-emerald-300"
                        : "bg-slate-950/50 border-slate-800 text-slate-300"
                    }`}
                  >
                    <span className="text-[10px] opacity-60 block mb-1">
                      [{log.timestamp}]
                    </span>
                    <p className="leading-snug">{log.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Strategic Advice */}
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 bg-slate-950/40 p-3 rounded-xl border">
              <span className="font-bold text-slate-200 block mb-1 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                COMMAND TACTIC
              </span>
              Deploy high-impact carbon scrubbers and biodiversity corridors first to stabilize baseline ecological health.
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-600">
        <p>© {new Date().getFullYear()} MISSION CONTROL: GAIA PROTOCOL — EARTH DEFENSE INITIATIVE.</p>
        <p className="mt-1">Built with Next.js, TypeScript & Tailwind CSS.</p>
      </footer>
    </div>
  );
}