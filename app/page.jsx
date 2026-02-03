"use client";

import React, { useState, useMemo } from 'react';

// Louisville Cardinals - COMPLETE Synergy Data (86 files, 10 players, 10 play types)
const players = {
  "Ryan Conwell": {
    games: 19, position: "G",
    plays: {
      "Spot Up": { poss: 74, pts: 98, ppp: 1.324, fgPct: 48.6, threePct: 44.1, to: 1, fga: 72, fgm: 35, threeAtt: 59 },
      "Transition": { poss: 71, pts: 67, ppp: 0.944, fgPct: 33.3, threePct: 40.0, to: 6, fga: 54, fgm: 18, threeAtt: 30 },
      "P&R Ball Handler": { poss: 60, pts: 49, ppp: 0.817, fgPct: 37.5, threePct: 28.6, to: 13, fga: 40, fgm: 15, threeAtt: 28 },
      "Handoff": { poss: 46, pts: 46, ppp: 1.000, fgPct: 39.0, threePct: 32.3, to: 2, fga: 41, fgm: 16, threeAtt: 31 },
      "Off Screen": { poss: 44, pts: 53, ppp: 1.205, fgPct: 43.6, threePct: 45.2, to: 2, fga: 39, fgm: 17, threeAtt: 31 },
      "Cut": { poss: 17, pts: 27, ppp: 1.588, fgPct: 66.7, to: 0, fga: 12, fgm: 8, threeAtt: 0 },
      "ISO": { poss: 16, pts: 10, ppp: 0.625, fgPct: 18.2, to: 1, fga: 11, fgm: 2, threeAtt: 6 },
      "Off Rebound": { poss: 7, pts: 7, ppp: 1.000, fgPct: 20.0, to: 0, fga: 5, fgm: 1, threeAtt: 3 },
      "P&R Roll Man": { poss: 6, pts: 3, ppp: 0.500, fgPct: 25.0, to: 2, fga: 4, fgm: 1, threeAtt: 4 }
    }
  },
  "Mikel Brown III": {
    games: 12, position: "G",
    plays: {
      "P&R Ball Handler": { poss: 66, pts: 58, ppp: 0.879, fgPct: 34.1, threePct: 17.9, to: 10, fga: 44, fgm: 15, threeAtt: 28 },
      "Transition": { poss: 40, pts: 38, ppp: 0.950, fgPct: 52.0, threePct: 50.0, to: 9, fga: 25, fgm: 13, threeAtt: 10 },
      "ISO": { poss: 30, pts: 35, ppp: 1.167, fgPct: 40.0, threePct: 42.9, to: 2, fga: 20, fgm: 8, threeAtt: 7 },
      "Spot Up": { poss: 23, pts: 37, ppp: 1.609, fgPct: 52.4, threePct: 50.0, to: 0, fga: 21, fgm: 11, threeAtt: 20 },
      "Handoff": { poss: 20, pts: 7, ppp: 0.350, fgPct: 14.3, threePct: 0.0, to: 4, fga: 14, fgm: 2, threeAtt: 7 },
      "Off Screen": { poss: 15, pts: 4, ppp: 0.267, fgPct: 13.3, threePct: 0.0, to: 0, fga: 15, fgm: 2, threeAtt: 11 },
      "Cut": { poss: 2, pts: 4, ppp: 2.000, fgPct: 100.0, to: 0, fga: 2, fgm: 2, threeAtt: 0 },
      "P&R Roll Man": { poss: 1, pts: 0, ppp: 0.000, fgPct: 0.0, to: 0, fga: 1, fgm: 0, threeAtt: 1 },
      "Post Up": { poss: 1, pts: 0, ppp: 0.000, fgPct: null, to: 1, fga: 0, fgm: 0, threeAtt: 0 }
    }
  },
  "Sananda Fru": {
    games: 20, position: "F",
    plays: {
      "Cut": { poss: 47, pts: 77, ppp: 1.638, fgPct: 89.2, to: 4, fga: 37, fgm: 33, threeAtt: 0 },
      "Off Rebound": { poss: 29, pts: 38, ppp: 1.310, fgPct: 80.0, to: 4, fga: 20, fgm: 16, threeAtt: 0 },
      "P&R Roll Man": { poss: 25, pts: 32, ppp: 1.280, fgPct: 66.7, to: 2, fga: 18, fgm: 12, threeAtt: 1 },
      "Transition": { poss: 20, pts: 25, ppp: 1.250, fgPct: 75.0, to: 4, fga: 12, fgm: 9, threeAtt: 1 },
      "Spot Up": { poss: 15, pts: 26, ppp: 1.733, fgPct: 71.4, threePct: 60.0, to: 0, fga: 14, fgm: 10, threeAtt: 5 },
      "Post Up": { poss: 15, pts: 11, ppp: 0.733, fgPct: 50.0, to: 3, fga: 10, fgm: 5, threeAtt: 0 },
      "P&R Ball Handler": { poss: 4, pts: 0, ppp: 0.000, fgPct: 0.0, to: 2, fga: 2, fgm: 0, threeAtt: 0 },
      "ISO": { poss: 2, pts: 1, ppp: 0.500, fgPct: null, to: 1, fga: 0, fgm: 0, threeAtt: 0 },
      "Handoff": { poss: 1, pts: 2, ppp: 2.000, fgPct: 100.0, to: 0, fga: 1, fgm: 1, threeAtt: 0 }
    }
  },
  "Isaac McKneely": {
    games: 20, position: "G",
    plays: {
      "Spot Up": { poss: 52, pts: 79, ppp: 1.519, fgPct: 51.0, threePct: 51.1, to: 0, fga: 51, fgm: 26, threeAtt: 47 },
      "Off Screen": { poss: 45, pts: 41, ppp: 0.911, fgPct: 31.7, threePct: 32.5, to: 3, fga: 41, fgm: 13, threeAtt: 40 },
      "Transition": { poss: 44, pts: 39, ppp: 0.886, fgPct: 32.4, threePct: 22.6, to: 3, fga: 37, fgm: 12, threeAtt: 31 },
      "Handoff": { poss: 27, pts: 39, ppp: 1.444, fgPct: 50.0, threePct: 50.0, to: 1, fga: 24, fgm: 12, threeAtt: 18 },
      "P&R Ball Handler": { poss: 19, pts: 14, ppp: 0.737, fgPct: 30.0, threePct: 37.5, to: 7, fga: 10, fgm: 3, threeAtt: 8 },
      "Cut": { poss: 8, pts: 10, ppp: 1.250, fgPct: 57.1, to: 0, fga: 7, fgm: 4, threeAtt: 0 },
      "ISO": { poss: 5, pts: 5, ppp: 1.000, fgPct: 40.0, to: 0, fga: 5, fgm: 2, threeAtt: 2 },
      "P&R Roll Man": { poss: 1, pts: 0, ppp: 0.000, fgPct: 0.0, to: 0, fga: 1, fgm: 0, threeAtt: 1 }
    }
  },
  "Adrian Wooley": {
    games: 20, position: "G/F",
    plays: {
      "Transition": { poss: 47, pts: 39, ppp: 0.830, fgPct: 40.0, threePct: 0.0, to: 6, fga: 30, fgm: 12, threeAtt: 10 },
      "Spot Up": { poss: 45, pts: 58, ppp: 1.289, fgPct: 46.3, threePct: 50.0, to: 2, fga: 41, fgm: 19, threeAtt: 32 },
      "P&R Ball Handler": { poss: 31, pts: 16, ppp: 0.516, fgPct: 18.2, threePct: 14.3, to: 6, fga: 22, fgm: 4, threeAtt: 14 },
      "Handoff": { poss: 17, pts: 18, ppp: 1.059, fgPct: 41.7, threePct: 44.4, to: 3, fga: 12, fgm: 5, threeAtt: 9 },
      "Cut": { poss: 13, pts: 25, ppp: 1.923, fgPct: 84.6, to: 0, fga: 13, fgm: 11, threeAtt: 0 },
      "Off Rebound": { poss: 10, pts: 14, ppp: 1.400, fgPct: 62.5, to: 1, fga: 8, fgm: 5, threeAtt: 1 },
      "ISO": { poss: 8, pts: 5, ppp: 0.625, fgPct: 28.6, to: 1, fga: 7, fgm: 2, threeAtt: 3 },
      "Off Screen": { poss: 4, pts: 0, ppp: 0.000, fgPct: 0.0, to: 1, fga: 3, fgm: 0, threeAtt: 2 },
      "Post Up": { poss: 3, pts: 2, ppp: 0.667, fgPct: 50.0, to: 1, fga: 2, fgm: 1, threeAtt: 0 }
    }
  },
  "J'Vonne Hadley": {
    games: 19, position: "F",
    plays: {
      "Transition": { poss: 38, pts: 48, ppp: 1.263, fgPct: 64.5, threePct: 28.6, to: 3, fga: 31, fgm: 20, threeAtt: 7 },
      "Spot Up": { poss: 37, pts: 56, ppp: 1.514, fgPct: 57.1, threePct: 52.0, to: 1, fga: 35, fgm: 20, threeAtt: 25 },
      "Post Up": { poss: 30, pts: 31, ppp: 1.033, fgPct: 56.5, to: 4, fga: 23, fgm: 13, threeAtt: 0 },
      "Cut": { poss: 17, pts: 20, ppp: 1.176, fgPct: 64.3, to: 2, fga: 14, fgm: 9, threeAtt: 0 },
      "P&R Ball Handler": { poss: 13, pts: 10, ppp: 0.769, fgPct: 30.0, to: 1, fga: 10, fgm: 3, threeAtt: 1 },
      "ISO": { poss: 10, pts: 16, ppp: 1.600, fgPct: 71.4, to: 0, fga: 7, fgm: 5, threeAtt: 1 },
      "P&R Roll Man": { poss: 9, pts: 10, ppp: 1.111, fgPct: 37.5, threePct: 66.7, to: 0, fga: 8, fgm: 3, threeAtt: 3 },
      "Off Screen": { poss: 6, pts: 3, ppp: 0.500, fgPct: 16.7, to: 0, fga: 6, fgm: 1, threeAtt: 6 },
      "Off Rebound": { poss: 4, pts: 4, ppp: 1.000, fgPct: 50.0, to: 0, fga: 4, fgm: 2, threeAtt: 0 },
      "Handoff": { poss: 2, pts: 0, ppp: 0.000, fgPct: 0.0, to: 0, fga: 2, fgm: 0, threeAtt: 2 }
    }
  },
  "Khani Rooths": {
    games: 16, position: "F",
    plays: {
      "Spot Up": { poss: 31, pts: 20, ppp: 0.645, fgPct: 22.2, threePct: 16.0, to: 1, fga: 27, fgm: 6, threeAtt: 25 },
      "Cut": { poss: 24, pts: 36, ppp: 1.500, fgPct: 70.0, to: 0, fga: 20, fgm: 14, threeAtt: 0 },
      "Transition": { poss: 22, pts: 26, ppp: 1.182, fgPct: 60.0, threePct: 37.5, to: 4, fga: 15, fgm: 9, threeAtt: 8 },
      "ISO": { poss: 6, pts: 2, ppp: 0.333, fgPct: 20.0, to: 1, fga: 5, fgm: 1, threeAtt: 2 },
      "Off Rebound": { poss: 4, pts: 7, ppp: 1.750, fgPct: 75.0, to: 0, fga: 4, fgm: 3, threeAtt: 0 },
      "Handoff": { poss: 3, pts: 2, ppp: 0.667, fgPct: 33.3, to: 0, fga: 3, fgm: 1, threeAtt: 2 },
      "P&R Ball Handler": { poss: 2, pts: 0, ppp: 0.000, fgPct: 0.0, to: 0, fga: 2, fgm: 0, threeAtt: 1 },
      "Post Up": { poss: 2, pts: 0, ppp: 0.000, fgPct: null, to: 2, fga: 0, fgm: 0, threeAtt: 0 }
    }
  },
  "Aly Khalifa": {
    games: 20, position: "C",
    plays: {
      "Spot Up": { poss: 28, pts: 39, ppp: 1.393, fgPct: 50.0, threePct: 50.0, to: 2, fga: 26, fgm: 13, threeAtt: 26 },
      "Cut": { poss: 11, pts: 11, ppp: 1.000, fgPct: 55.6, to: 1, fga: 9, fgm: 5, threeAtt: 0 },
      "P&R Roll Man": { poss: 9, pts: 6, ppp: 0.667, fgPct: 22.2, to: 0, fga: 9, fgm: 2, threeAtt: 8 },
      "Transition": { poss: 6, pts: 6, ppp: 1.000, fgPct: 33.3, threePct: 33.3, to: 0, fga: 6, fgm: 2, threeAtt: 6 },
      "Off Rebound": { poss: 5, pts: 5, ppp: 1.000, fgPct: 50.0, to: 0, fga: 4, fgm: 2, threeAtt: 0 },
      "Post Up": { poss: 5, pts: 0, ppp: 0.000, fgPct: 0.0, to: 2, fga: 3, fgm: 0, threeAtt: 0 },
      "ISO": { poss: 1, pts: 0, ppp: 0.000, fgPct: null, to: 1, fga: 0, fgm: 0, threeAtt: 0 },
      "Off Screen": { poss: 1, pts: 0, ppp: 0.000, fgPct: 0.0, to: 0, fga: 1, fgm: 0, threeAtt: 1 },
      "P&R Ball Handler": { poss: 1, pts: 3, ppp: 3.000, fgPct: 100.0, to: 0, fga: 1, fgm: 1, threeAtt: 1 }
    }
  },
  "Kobe Rodgers": {
    games: 19, position: "G",
    plays: {
      "Transition": { poss: 21, pts: 22, ppp: 1.048, fgPct: 56.3, threePct: 20.0, to: 4, fga: 16, fgm: 9, threeAtt: 5 },
      "Spot Up": { poss: 16, pts: 19, ppp: 1.188, fgPct: 46.2, threePct: 41.7, to: 2, fga: 13, fgm: 6, threeAtt: 12 },
      "P&R Ball Handler": { poss: 7, pts: 2, ppp: 0.286, fgPct: 50.0, to: 5, fga: 2, fgm: 1, threeAtt: 0 },
      "Cut": { poss: 6, pts: 8, ppp: 1.333, fgPct: 66.7, to: 0, fga: 6, fgm: 4, threeAtt: 0 },
      "Handoff": { poss: 4, pts: 5, ppp: 1.250, fgPct: 50.0, to: 0, fga: 4, fgm: 2, threeAtt: 1 },
      "ISO": { poss: 3, pts: 4, ppp: 1.333, fgPct: null, to: 1, fga: 0, fgm: 0, threeAtt: 0 },
      "Off Screen": { poss: 2, pts: 3, ppp: 1.500, fgPct: 50.0, to: 0, fga: 2, fgm: 1, threeAtt: 2 },
      "Off Rebound": { poss: 1, pts: 2, ppp: 2.000, fgPct: 100.0, to: 0, fga: 1, fgm: 1, threeAtt: 0 },
      "Post Up": { poss: 1, pts: 0, ppp: 0.000, fgPct: 0.0, to: 0, fga: 1, fgm: 0, threeAtt: 0 }
    }
  },
  "Vangelis Zougris": {
    games: 13, position: "F",
    plays: {
      "Cut": { poss: 8, pts: 15, ppp: 1.875, fgPct: 75.0, to: 0, fga: 8, fgm: 6, threeAtt: 0 },
      "Off Rebound": { poss: 8, pts: 4, ppp: 0.500, fgPct: 0.0, to: 1, fga: 4, fgm: 0, threeAtt: 0 },
      "P&R Roll Man": { poss: 5, pts: 6, ppp: 1.200, fgPct: 75.0, to: 1, fga: 4, fgm: 3, threeAtt: 0 },
      "Transition": { poss: 4, pts: 0, ppp: 0.000, fgPct: 0.0, to: 1, fga: 3, fgm: 0, threeAtt: 0 },
      "Post Up": { poss: 3, pts: 4, ppp: 1.333, fgPct: 50.0, to: 0, fga: 2, fgm: 1, threeAtt: 0 },
      "ISO": { poss: 2, pts: 0, ppp: 0.000, fgPct: 0.0, to: 1, fga: 1, fgm: 0, threeAtt: 0 }
    }
  }
};

const playTypes = ["Spot Up", "Transition", "P&R Ball Handler", "Cut", "Off Screen", "Handoff", "P&R Roll Man", "Post Up", "Off Rebound", "ISO"];
const playerNames = Object.keys(players);

// Calculate team totals
const teamStats = {};
playTypes.forEach(pt => {
  let poss = 0, pts = 0, to = 0;
  playerNames.forEach(name => {
    if (players[name].plays[pt]) {
      const p = players[name].plays[pt];
      poss += p.poss; pts += p.pts; to += p.to;
    }
  });
  teamStats[pt] = { poss, pts, ppp: poss > 0 ? pts / poss : 0, to };
});

const totalTeamPoss = Object.values(teamStats).reduce((a, b) => a + b.poss, 0);
const totalTeamPts = Object.values(teamStats).reduce((a, b) => a + b.pts, 0);

// Helper functions
const getDisplayName = (fullName) => {
  if (fullName === "Mikel Brown III") return "M. Brown";
  if (fullName === "J'Vonne Hadley") return "Hadley";
  if (fullName === "Vangelis Zougris") return "Zougris";
  const parts = fullName.split(' ');
  return parts[1] || parts[0];
};

const getPPPColor = (ppp) => {
  if (ppp >= 1.2) return 'text-emerald-400';
  if (ppp >= 1.0) return 'text-green-400';
  if (ppp >= 0.8) return 'text-yellow-400';
  if (ppp >= 0.6) return 'text-orange-400';
  return 'text-red-400';
};

const getTierColor = (tier) => tier === 1 ? 'bg-emerald-600' : tier === 2 ? 'bg-blue-600' : 'bg-gray-600';

const PPPBadge = ({ ppp }) => {
  if (ppp >= 1.2) return <span className="px-1.5 py-0.5 rounded text-xs bg-emerald-600">Elite</span>;
  if (ppp >= 1.0) return <span className="px-1.5 py-0.5 rounded text-xs bg-green-600">Good</span>;
  if (ppp >= 0.85) return <span className="px-1.5 py-0.5 rounded text-xs bg-yellow-600">Avg</span>;
  if (ppp >= 0.7) return <span className="px-1.5 py-0.5 rounded text-xs bg-orange-600">Below</span>;
  return <span className="px-1.5 py-0.5 rounded text-xs bg-red-600">Poor</span>;
};

const normalize = (ppp) => Math.min(100, Math.max(0, ((ppp - 0.7) / 0.7) * 100));

// Radar chart
const RadarChart = ({ data, title, color = "#f97316", size = 200 }) => {
  const center = size / 2;
  const maxRadius = size * 0.35;
  const levels = [25, 50, 75, 100];
  const labelOffset = Math.max(20, size * 0.09);
  const labelFontSize = Math.max(8, size * 0.035);
  
  const points = data.map((d, i) => {
    const angle = (Math.PI * 2 * i) / data.length - Math.PI / 2;
    const radius = (d.value / 100) * maxRadius;
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
      labelX: center + (maxRadius + labelOffset) * Math.cos(angle),
      labelY: center + (maxRadius + labelOffset) * Math.sin(angle),
      label: d.label,
      value: d.value
    };
  });
  
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';
  
  return (
    <div className="flex flex-col items-center">
      <div className="text-xs font-bold text-center mb-1">{title}</div>
      <svg width={size} height={size} className="overflow-visible">
        {levels.map(level => (
          <circle key={level} cx={center} cy={center} r={(level / 100) * maxRadius} fill="none" stroke="#374151" strokeWidth="1" />
        ))}
        {data.map((_, i) => {
          const angle = (Math.PI * 2 * i) / data.length - Math.PI / 2;
          return <line key={i} x1={center} y1={center} x2={center + maxRadius * Math.cos(angle)} y2={center + maxRadius * Math.sin(angle)} stroke="#374151" strokeWidth="1" />;
        })}
        <path d={pathD} fill={color} fillOpacity="0.3" stroke={color} strokeWidth="2" />
        {points.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="3" fill={color} />)}
        {points.map((p, i) => (
          <text key={i} x={p.labelX} y={p.labelY} textAnchor="middle" dominantBaseline="middle" className="fill-gray-400" style={{ fontSize: `${labelFontSize}px` }}>{p.label}</text>
        ))}
      </svg>
    </div>
  );
};

const playerRoles = {
  "Ryan Conwell": { primary: "Spot Up / Transition", tier: 1 },
  "Mikel Brown III": { primary: "Pick & Roll / ISO", tier: 1 },
  "Sananda Fru": { primary: "Rim Finisher", tier: 1 },
  "Isaac McKneely": { primary: "Spot Up Sniper", tier: 1 },
  "J'Vonne Hadley": { primary: "Versatile Scorer", tier: 1 },
  "Adrian Wooley": { primary: "Spot Up / Cutter", tier: 2 },
  "Khani Rooths": { primary: "Cutter / Transition", tier: 2 },
  "Aly Khalifa": { primary: "Stretch Five", tier: 2 },
  "Kobe Rodgers": { primary: "Transition / Spot Up", tier: 3 },
  "Vangelis Zougris": { primary: "Cutter / Roll Man", tier: 3 }
};

const segmentData = [
  { opponent: "SC State", date: "Nov 3", result: "W", lou_final: 104, opp_final: 45,
    lou: { h1: [15, 12, 18, 14], h2: [13, 9, 8, 15] },
    opp: { h1: [1, 3, 4, 7], h2: [2, 6, 7, 15] } },
  { opponent: "Jackson State", date: "Nov 6", result: "W", lou_final: 106, opp_final: 70,
    lou: { h1: [12, 14, 17, 12], h2: [14, 12, 15, 10] },
    opp: { h1: [6, 5, 16, 8], h2: [4, 8, 13, 8] } },
  { opponent: "Kentucky", date: "Nov 11", result: "W", lou_final: 96, opp_final: 88,
    lou: { h1: [15, 10, 16, 12], h2: [16, 12, 6, 9] },
    opp: { h1: [12, 10, 6, 18], h2: [8, 10, 15, 9] } },
  { opponent: "Ohio", date: "Nov 14", result: "W", lou_final: 106, opp_final: 81,
    lou: { h1: [13, 14, 19, 13], h2: [10, 12, 10, 15] },
    opp: { h1: [7, 11, 14, 12], h2: [12, 5, 11, 9] } },
  { opponent: "Cincinnati", date: "Nov 16", result: "W", lou_final: 74, opp_final: 64,
    lou: { h1: [4, 5, 12, 7], h2: [12, 10, 11, 13] },
    opp: { h1: [9, 8, 6, 9], h2: [5, 8, 8, 11] } },
  { opponent: "Eastern Michigan", date: "Nov 20", result: "W", lou_final: 87, opp_final: 46,
    lou: { h1: [4, 15, 10, 4], h2: [16, 14, 9, 15] },
    opp: { h1: [4, 0, 5, 8], h2: [8, 6, 7, 8] } },
  { opponent: "NJIT", date: "Nov 24", result: "W", lou_final: 104, opp_final: 47,
    lou: { h1: [13, 11, 15, 13], h2: [13, 9, 15, 15] },
    opp: { h1: [2, 7, 3, 8], h2: [9, 3, 5, 10] } },
  { opponent: "Arkansas", date: "Nov 28", result: "L", lou_final: 80, opp_final: 89,
    lou: { h1: [8, 9, 5, 7], h2: [13, 14, 13, 11] },
    opp: { h1: [11, 12, 13, 11], h2: [9, 8, 12, 13] } },
  { opponent: "Indiana", date: "Dec 6", result: "W", lou_final: 87, opp_final: 78,
    lou: { h1: [10, 9, 14, 8], h2: [8, 13, 11, 14] },
    opp: { h1: [0, 8, 13, 6], h2: [12, 9, 8, 22] } },
  { opponent: "Memphis", date: "Dec 13", result: "W", lou_final: 99, opp_final: 73,
    lou: { h1: [5, 16, 17, 19], h2: [14, 12, 9, 7] },
    opp: { h1: [7, 6, 8, 16], h2: [9, 11, 8, 8] } },
  { opponent: "Tennessee", date: "Dec 16", result: "L", lou_final: 62, opp_final: 83,
    lou: { h1: [7, 5, 10, 5], h2: [10, 8, 9, 8] },
    opp: { h1: [3, 10, 10, 11], h2: [13, 12, 11, 13] } },
  { opponent: "Montana", date: "Dec 20", result: "W", lou_final: 94, opp_final: 54,
    lou: { h1: [4, 11, 13, 14], h2: [15, 14, 11, 12] },
    opp: { h1: [2, 6, 4, 8], h2: [7, 9, 10, 8] } },
  { opponent: "California", date: "Dec 30", result: "W", lou_final: 90, opp_final: 70,
    lou: { h1: [12, 12, 12, 12], h2: [10, 10, 12, 10] },
    opp: { h1: [4, 7, 7, 16], h2: [7, 4, 17, 8] } },
  { opponent: "Stanford", date: "Jan 2", result: "L", lou_final: 76, opp_final: 80,
    lou: { h1: [8, 11, 8, 7], h2: [10, 9, 11, 12] },
    opp: { h1: [7, 12, 7, 9], h2: [13, 10, 9, 13] } },
  { opponent: "Duke", date: "Jan 11", result: "L", lou_final: 73, opp_final: 84,
    lou: { h1: [14, 15, 10, 8], h2: [6, 7, 6, 7] },
    opp: { h1: [12, 7, 8, 11], h2: [11, 15, 11, 9] } },
  { opponent: "Boston College", date: "Jan 14", result: "W", lou_final: 75, opp_final: 62,
    lou: { h1: [8, 7, 7, 8], h2: [11, 9, 14, 11] },
    opp: { h1: [12, 7, 8, 7], h2: [7, 8, 4, 9] } },
  { opponent: "Virginia", date: "Jan 18", result: "L", lou_final: 70, opp_final: 79,
    lou: { h1: [6, 2, 11, 9], h2: [10, 6, 10, 16] },
    opp: { h1: [14, 2, 10, 7], h2: [15, 8, 9, 14] } },
  { opponent: "Pittsburgh", date: "Jan 21", result: "W", lou_final: 100, opp_final: 59,
    lou: { h1: [13, 15, 11, 14], h2: [13, 9, 14, 11] },
    opp: { h1: [0, 7, 4, 11], h2: [12, 9, 8, 8] } },
  { opponent: "Virginia Tech", date: "Jan 25", result: "W", lou_final: 85, opp_final: 71,
    lou: { h1: [4, 9, 10, 14], h2: [7, 15, 17, 9] },
    opp: { h1: [6, 5, 6, 5], h2: [5, 15, 17, 12] } },
  { opponent: "Duke", date: "Jan 29", result: "L", lou_final: 52, opp_final: 83,
    lou: { h1: [7, 9, 6, 6], h2: [7, 9, 7, 1] },
    opp: { h1: [13, 5, 6, 14], h2: [13, 13, 10, 9] } },
  { opponent: "SMU", date: "Feb 1", result: "W", lou_final: 88, opp_final: 74,
    lou: { h1: [4, 12, 13, 15], h2: [5, 10, 19, 10] },
    opp: { h1: [14, 11, 10, 12], h2: [4, 7, 10, 6] } },
];

const opponentRankings = {
  // Played
  "SC State": { rank: 359, adjOE: 96.7, adjDE: 120.6, barthag: .0733, rec: "5-16" },
  "Jackson State": { rank: 342, adjOE: 99.0, adjDE: 117.1, barthag: .1275, rec: "6-15" },
  "Kentucky": { rank: 43, adjOE: 118.3, adjDE: 100.8, barthag: .8621, rec: "15-7" },
  "Ohio": { rank: 225, adjOE: 106.2, adjDE: 111.0, barthag: .3747, rec: "12-11" },
  "Cincinnati": { rank: 48, adjOE: 106.9, adjDE: 93.4, barthag: .8269, rec: "11-11" },
  "Eastern Michigan": { rank: 214, adjOE: 104.1, adjDE: 107.8, barthag: .4005, rec: "9-13" },
  "NJIT": { rank: 321, adjOE: 99.0, adjDE: 113.1, barthag: .1775, rec: "11-12" },
  "Arkansas": { rank: 28, adjOE: 126.8, adjDE: 103.8, barthag: .9087, rec: "16-6" },
  "Indiana": { rank: 23, adjOE: 124.7, adjDE: 100.4, barthag: .9233, rec: "15-7" },
  // Played (no synergy data)
  "Memphis": { rank: 56, adjOE: 112.5, adjDE: 100.2, barthag: .7820, rec: "14-8" },
  "Tennessee": { rank: 32, adjOE: 115.8, adjDE: 94.6, barthag: .8900, rec: "16-5" },
  "Montana": { rank: 180, adjOE: 107.0, adjDE: 108.5, barthag: .4200, rec: "12-9" },
  "California": { rank: 45, adjOE: 110.2, adjDE: 97.8, barthag: .7950, rec: "16-6" },
  "Stanford": { rank: 62, adjOE: 111.5, adjDE: 101.3, barthag: .7100, rec: "14-8" },
  "Duke": { rank: 2, adjOE: 127.5, adjDE: 91.8, barthag: .9800, rec: "20-1" },
  "Duke2": { rank: 2, adjOE: 127.5, adjDE: 91.8, barthag: .9800, rec: "20-1" },
  "Boston College": { rank: 135, adjOE: 103.5, adjDE: 106.2, barthag: .3800, rec: "9-12" },
  "Virginia": { rank: 17, adjOE: 120.4, adjDE: 95.2, barthag: .9350, rec: "18-3" },
  "Pittsburgh": { rank: 63, adjOE: 111.2, adjDE: 102.5, barthag: .6100, rec: "12-10" },
  "Virginia Tech": { rank: 52, adjOE: 112.8, adjDE: 100.3, barthag: .7200, rec: "14-8" },
  "SMU": { rank: 35, adjOE: 116.5, adjDE: 98.2, barthag: .8500, rec: "17-5" },
  "Pittsburgh": { rank: 75, adjOE: 107.0, adjDE: 102.5, barthag: .5800, rec: "9-13" },
  "Virginia Tech": { rank: 52, adjOE: 113.8, adjDE: 103.0, barthag: .7400, rec: "16-7" },
  // Upcoming
  "SMU": { rank: 33, adjOE: 116.2, adjDE: 98.5, barthag: .8600, rec: "15-6" },
  "Notre Dame": { rank: 95, adjOE: 106.8, adjDE: 105.0, barthag: .4600, rec: "11-11" },
  "Wake Forest": { rank: 68, adjOE: 110.0, adjDE: 104.2, barthag: .5500, rec: "11-11" },
  "NC State": { rank: 44, adjOE: 114.5, adjDE: 98.0, barthag: .8200, rec: "16-6" },
  "Baylor": { rank: 38, adjOE: 117.8, adjDE: 99.2, barthag: .8500, rec: "14-6" },
  "Georgia Tech": { rank: 86, adjOE: 105.5, adjDE: 104.8, barthag: .4100, rec: "11-11" },
  "North Carolina": { rank: 15, adjOE: 122.0, adjDE: 97.5, barthag: .9400, rec: "17-4" },
  "Clemson": { rank: 22, adjOE: 118.0, adjDE: 95.8, barthag: .9100, rec: "18-4" },
  "Syracuse": { rank: 61, adjOE: 108.5, adjDE: 101.8, barthag: .5900, rec: "13-9" },
  "Miami": { rank: 41, adjOE: 115.0, adjDE: 98.8, barthag: .8300, rec: "17-5" },
};

const fullSchedule = [
  { date: "Nov 3", opp: "SC State", loc: "home", result: "W 104-45" },
  { date: "Nov 6", opp: "Jackson State", loc: "home", result: "W 106-70" },
  { date: "Nov 11", opp: "Kentucky", loc: "home", result: "W 96-88" },
  { date: "Nov 15", opp: "Ohio", loc: "home", result: "W 106-81" },
  { date: "Nov 21", opp: "Cincinnati", loc: "neutral", result: "W 74-64" },
  { date: "Nov 24", opp: "Eastern Michigan", loc: "home", result: "W 87-46" },
  { date: "Nov 26", opp: "NJIT", loc: "home", result: "W 104-47" },
  { date: "Dec 3", opp: "Arkansas", loc: "away", result: "L 80-89" },
  { date: "Dec 6", opp: "Indiana", loc: "neutral", result: "W 87-78" },
  { date: "Dec 13", opp: "Memphis", loc: "home", result: "W 99-73" },
  { date: "Dec 16", opp: "Tennessee", loc: "away", result: "L 62-83" },
  { date: "Dec 20", opp: "Montana", loc: "home", result: "W 94-54" },
  { date: "Dec 30", opp: "California", loc: "away", result: "W 90-70" },
  { date: "Jan 2", opp: "Stanford", loc: "away", result: "L 76-80" },
  { date: "Jan 6", opp: "Duke", loc: "home", result: "L 73-84" },
  { date: "Jan 10", opp: "Boston College", loc: "home", result: "W 75-62" },
  { date: "Jan 13", opp: "Virginia", loc: "home", result: "L 70-79" },
  { date: "Jan 17", opp: "Pittsburgh", loc: "away", result: "W 100-59" },
  { date: "Jan 24", opp: "Virginia Tech", loc: "home", result: "W 85-71" },
  { date: "Jan 26", opp: "Duke", loc: "away", result: "L 52-83" },
  { date: "Jan 31", opp: "SMU", loc: "home", result: "W 88-74" },
  { date: "Feb 4", opp: "Notre Dame", loc: "home", result: null },
  { date: "Feb 7", opp: "Wake Forest", loc: "away", result: null },
  { date: "Feb 9", opp: "NC State", loc: "home", result: null },
  { date: "Feb 14", opp: "Baylor", loc: "neutral", result: null },
  { date: "Feb 17", opp: "SMU", loc: "away", result: null },
  { date: "Feb 21", opp: "Georgia Tech", loc: "home", result: null },
  { date: "Feb 23", opp: "North Carolina", loc: "away", result: null },
  { date: "Feb 28", opp: "Clemson", loc: "away", result: null },
  { date: "Mar 3", opp: "Syracuse", loc: "home", result: null },
  { date: "Mar 7", opp: "Miami", loc: "away", result: null },
];

const clutchDataPerGame = {
  "Ryan Conwell": [
    { game: "SC State", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[1,1], mid:[0,0], rim:[1,1], ft:[7,7] } },
    { game: "Jackson State", close: { three:[1,1], mid:[0,0], rim:[0,0], ft:[1,1] }, blowout: { three:[3,3], mid:[0,0], rim:[1,1], ft:[4,4] } },
    { game: "Kentucky", close: { three:[2,2], mid:[1,1], rim:[0,0], ft:[6,6] }, blowout: { three:[2,2], mid:[0,0], rim:[1,1], ft:[2,2] } },
    { game: "Ohio", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[2,2] }, blowout: { three:[5,5], mid:[0,1], rim:[5,5], ft:[4,4] } },
    { game: "Cincinnati", close: { three:[2,5], mid:[0,1], rim:[1,2], ft:[4,4] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "NJIT", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[8,15], mid:[0,0], rim:[1,2], ft:[6,6] } },
    { game: "Arkansas", close: { three:[1,4], mid:[0,1], rim:[0,2], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Indiana", close: { three:[1,3], mid:[0,0], rim:[1,2], ft:[4,4] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Tennessee", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[3,6], ft:[4,7] } },
    { game: "Montana", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,2], rim:[2,2], ft:[1,1] } },
    { game: "California", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[2,3], ft:[4,4] } },
    { game: "Stanford", close: { three:[1,5], mid:[0,1], rim:[0,2], ft:[1,2] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Duke", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[4,9], mid:[1,2], rim:[3,6], ft:[4,4] } },
    { game: "Boston College", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Virginia", close: { three:[3,9], mid:[0,1], rim:[2,6], ft:[1,2] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Pittsburgh", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[4,8], mid:[0,0], rim:[4,4], ft:[1,1] } },
    { game: "Virginia Tech", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[5,12], mid:[0,0], rim:[1,3], ft:[1,1] } },
    { game: "Duke2", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[3,10], mid:[0,1], rim:[3,5], ft:[0,0] } },
    { game: "SMU", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[1,9], mid:[0,0], rim:[3,3], ft:[3,3] } },
  ],
  "Mikel Brown III": [
    { game: "SC State", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[1,1], mid:[0,0], rim:[3,3], ft:[2,2] } },
    { game: "Jackson State", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[2,2], mid:[0,0], rim:[3,3], ft:[6,6] } },
    { game: "Kentucky", close: { three:[2,2], mid:[1,1], rim:[2,2], ft:[6,6] }, blowout: { three:[1,1], mid:[1,1], rim:[1,1], ft:[4,4] } },
    { game: "Ohio", close: { three:[1,1], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,1], mid:[0,0], rim:[4,4], ft:[3,3] } },
    { game: "Cincinnati", close: { three:[1,3], mid:[0,0], rim:[1,2], ft:[5,6] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "NJIT", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[3,10], mid:[0,1], rim:[0,0], ft:[0,0] } },
    { game: "Arkansas", close: { three:[0,2], mid:[0,1], rim:[1,3], ft:[2,2] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Indiana", close: { three:[0,1], mid:[1,2], rim:[2,3], ft:[2,2] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Memphis", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[1,3], mid:[0,1], rim:[2,3], ft:[4,5] } },
    { game: "Tennessee", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,1] } },
    { game: "Stanford", close: { three:[0,1], mid:[0,0], rim:[0,1], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Pittsburgh", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Virginia Tech", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[3,7], mid:[1,1], rim:[2,3], ft:[2,3] } },
    { game: "Duke2", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[1,6], mid:[0,1], rim:[0,2], ft:[2,2] } },
    { game: "SMU", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[3,7], mid:[1,2], rim:[3,4], ft:[2,3] } },
  ],
  "Isaac McKneely": [
    { game: "SC State", close: { three:[2,2], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[3,3], mid:[0,0], rim:[1,1], ft:[0,0] } },
    { game: "Jackson State", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[2,2], mid:[0,0], rim:[1,1], ft:[0,0] } },
    { game: "Kentucky", close: { three:[1,1], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[2,2], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Ohio", close: { three:[2,2], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[3,5], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Cincinnati", close: { three:[1,4], mid:[0,0], rim:[1,1], ft:[1,1] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "NJIT", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[5,9], mid:[0,0], rim:[1,1], ft:[0,0] } },
    { game: "Arkansas", close: { three:[0,3], mid:[0,0], rim:[1,1], ft:[1,1] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Indiana", close: { three:[0,2], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Memphis", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[2,5], mid:[0,0], rim:[0,1], ft:[0,0] } },
    { game: "Tennessee", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[1,1], rim:[0,2], ft:[0,0] } },
    { game: "Montana", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[1,1], ft:[2,2] } },
    { game: "California", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[3,6], mid:[0,0], rim:[0,1], ft:[0,0] } },
    { game: "Stanford", close: { three:[2,4], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Duke", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[1,4], mid:[0,0], rim:[0,0], ft:[1,2] } },
    { game: "Boston College", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[2,7], mid:[1,2], rim:[0,0], ft:[7,7] } },
    { game: "Virginia", close: { three:[5,14], mid:[1,1], rim:[1,1], ft:[4,4] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Pittsburgh", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[3,7], mid:[0,0], rim:[0,1], ft:[2,3] } },
    { game: "Virginia Tech", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[2,7], mid:[0,0], rim:[1,2], ft:[0,0] } },
    { game: "Duke2", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[2,5], mid:[0,0], rim:[0,1], ft:[0,0] } },
    { game: "SMU", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[4,10], mid:[0,0], rim:[1,1], ft:[0,0] } },
  ],
  "Sananda Fru": [
    { game: "SC State", close: { three:[0,0], mid:[0,0], rim:[1,1], ft:[0,0] }, blowout: { three:[1,1], mid:[0,0], rim:[1,1], ft:[2,2] } },
    { game: "Jackson State", close: { three:[0,0], mid:[0,0], rim:[2,2], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[4,4], ft:[0,0] } },
    { game: "Kentucky", close: { three:[0,0], mid:[0,0], rim:[2,2], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[2,2], ft:[2,2] } },
    { game: "Ohio", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[2,2], ft:[2,2] } },
    { game: "Cincinnati", close: { three:[0,0], mid:[0,0], rim:[2,3], ft:[1,2] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "NJIT", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[4,5], ft:[0,0] } },
    { game: "Arkansas", close: { three:[0,0], mid:[0,0], rim:[1,2], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Indiana", close: { three:[0,0], mid:[0,0], rim:[2,3], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Memphis", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[5,6], ft:[2,3] } },
    { game: "Tennessee", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[2,3], ft:[0,0] } },
    { game: "Montana", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[9,11], ft:[0,1] } },
    { game: "California", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[4,7], ft:[5,7] } },
    { game: "Stanford", close: { three:[0,0], mid:[0,0], rim:[2,3], ft:[2,3] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Duke", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[1,1], ft:[0,2] } },
    { game: "Boston College", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[1,1], mid:[0,0], rim:[7,8], ft:[2,5] } },
    { game: "Virginia", close: { three:[0,0], mid:[0,0], rim:[3,5], ft:[0,2] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Pittsburgh", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[6,7], ft:[0,1] } },
    { game: "Virginia Tech", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[1,2], mid:[0,0], rim:[5,8], ft:[2,3] } },
    { game: "Duke2", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[1,4], ft:[2,2] } },
    { game: "SMU", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[1,3], ft:[1,2] } },
  ],
  "J'Vonne Hadley": [
    { game: "SC State", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[1,1], mid:[0,0], rim:[4,4], ft:[2,2] } },
    { game: "Kentucky", close: { three:[0,0], mid:[0,0], rim:[1,1], ft:[0,0] }, blowout: { three:[1,1], mid:[1,1], rim:[1,1], ft:[0,0] } },
    { game: "Ohio", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,1], rim:[3,3], ft:[0,0] } },
    { game: "Cincinnati", close: { three:[0,0], mid:[0,1], rim:[1,2], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "NJIT", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[2,2], mid:[0,1], rim:[2,4], ft:[2,2] } },
    { game: "Indiana", close: { three:[0,0], mid:[0,0], rim:[2,3], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Memphis", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,1], mid:[0,0], rim:[3,4], ft:[2,2] } },
    { game: "Tennessee", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[4,5], ft:[1,2] } },
    { game: "Montana", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[4,5], ft:[2,2] } },
    { game: "California", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,1], rim:[3,4], ft:[2,2] } },
    { game: "Duke", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[1,3], mid:[0,0], rim:[2,3], ft:[0,0] } },
    { game: "Boston College", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[1,2], mid:[0,1], rim:[3,5], ft:[2,2] } },
    { game: "Virginia", close: { three:[0,2], mid:[0,0], rim:[4,5], ft:[3,4] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Pittsburgh", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[1,1], mid:[1,1], rim:[4,5], ft:[2,2] } },
    { game: "Virginia Tech", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[1,2], mid:[0,0], rim:[4,6], ft:[3,3] } },
    { game: "Duke2", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[1,3], mid:[0,0], rim:[1,4], ft:[2,4] } },
    { game: "SMU", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,3], mid:[0,0], rim:[4,5], ft:[2,4] } },
  ],
  "Khani Rooths": [
    { game: "SC State", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[1,1], mid:[0,0], rim:[7,7], ft:[3,3] } },
    { game: "Jackson State", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[2,2] }, blowout: { three:[1,1], mid:[1,1], rim:[3,3], ft:[3,3] } },
    { game: "Ohio", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[3,3], ft:[2,2] } },
    { game: "Cincinnati", close: { three:[0,1], mid:[0,0], rim:[0,1], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "NJIT", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,3], mid:[0,0], rim:[2,3], ft:[1,2] } },
    { game: "Memphis", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,1], mid:[0,0], rim:[3,4], ft:[1,2] } },
    { game: "Tennessee", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[1,2] } },
    { game: "Montana", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,1], rim:[2,3], ft:[3,5] } },
    { game: "California", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[2,4], ft:[1,1] } },
    { game: "Stanford", close: { three:[0,1], mid:[0,0], rim:[1,2], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Duke", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,3], mid:[0,0], rim:[2,3], ft:[2,2] } },
    { game: "Boston College", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,2], mid:[0,0], rim:[1,2], ft:[1,2] } },
    { game: "Pittsburgh", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Virginia Tech", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Duke2", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "SMU", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,1], mid:[0,0], rim:[4,4], ft:[4,5] } },
  ],
  "Adrian Wooley": [
    { game: "SC State", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[1,1], ft:[3,3] } },
    { game: "Jackson State", close: { three:[0,0], mid:[0,0], rim:[1,1], ft:[0,0] }, blowout: { three:[0,0], mid:[1,1], rim:[1,1], ft:[3,3] } },
    { game: "Kentucky", close: { three:[0,0], mid:[0,0], rim:[1,1], ft:[1,1] }, blowout: { three:[2,2], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Ohio", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[1,2], mid:[0,1], rim:[0,0], ft:[0,0] } },
    { game: "NJIT", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[2,3], mid:[0,0], rim:[3,3], ft:[3,4] } },
    { game: "Memphis", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,1], mid:[0,0], rim:[2,3], ft:[2,2] } },
    { game: "Tennessee", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[4,5], ft:[5,6] } },
    { game: "Montana", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,1], ft:[2,3] } },
    { game: "California", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[1,1], rim:[5,6], ft:[0,0] } },
    { game: "Duke", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[1,3], mid:[0,1], rim:[4,7], ft:[0,0] } },
    { game: "Boston College", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,3], mid:[0,1], rim:[4,7], ft:[6,8] } },
    { game: "Virginia", close: { three:[0,4], mid:[0,0], rim:[1,4], ft:[3,3] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Pittsburgh", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[2,4], mid:[0,0], rim:[1,1], ft:[4,4] } },
    { game: "Virginia Tech", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[1,3], mid:[0,0], rim:[2,5], ft:[1,2] } },
    { game: "Duke2", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[1,5], mid:[0,0], rim:[0,2], ft:[0,0] } },
    { game: "SMU", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,1], rim:[1,1], ft:[0,0] } },
  ],
  "Kobe Rodgers": [
    { game: "SC State", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[1,1], mid:[0,0], rim:[0,0], ft:[6,6] } },
    { game: "Jackson State", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[1,1], mid:[0,0], rim:[1,1], ft:[2,2] } },
    { game: "Kentucky", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[1,1], rim:[0,0], ft:[0,0] } },
    { game: "Ohio", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[1,1], rim:[2,2], ft:[0,0] } },
    { game: "Cincinnati", close: { three:[1,1], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "NJIT", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,2], mid:[0,0], rim:[1,1], ft:[0,0] } },
    { game: "Memphis", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,1], mid:[0,0], rim:[0,1], ft:[0,0] } },
    { game: "California", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,1], ft:[2,2] } },
    { game: "Stanford", close: { three:[0,0], mid:[0,0], rim:[0,1], ft:[2,2] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Duke", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,1], mid:[0,0], rim:[0,2], ft:[0,0] } },
    { game: "Boston College", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[1,2], mid:[0,0], rim:[1,3], ft:[0,0] } },
    { game: "Pittsburgh", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[1,1], mid:[1,1], rim:[1,2], ft:[0,0] } },
    { game: "Virginia Tech", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[3,4], ft:[0,0] } },
    { game: "Duke2", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "SMU", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[2,2], ft:[3,4] } },
  ],
  "Aly Khalifa": [
    { game: "Jackson State", close: { three:[0,0], mid:[0,0], rim:[1,1], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[1,1], ft:[1,1] } },
    { game: "Kentucky", close: { three:[0,0], mid:[0,0], rim:[1,1], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[1,1], ft:[0,0] } },
    { game: "Ohio", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[1,1], ft:[0,0] } },
    { game: "NJIT", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,2], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Memphis", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[1,2], ft:[0,0] } },
    { game: "Montana", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[1,1] } },
    { game: "California", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,2], ft:[0,0] } },
    { game: "Stanford", close: { three:[0,0], mid:[0,0], rim:[0,1], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Duke", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[5,5], mid:[0,0], rim:[1,1], ft:[0,0] } },
    { game: "Boston College", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[1,2], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Virginia", close: { three:[2,5], mid:[1,1], rim:[0,0], ft:[1,2] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Pittsburgh", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[3,4], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Virginia Tech", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[1,3], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Duke2", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[1,3], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "SMU", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[2,3], mid:[1,1], rim:[0,0], ft:[0,0] } },
  ],
  "Vangelis Zougris": [
    { game: "SC State", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[2,2], ft:[1,1] } },
    { game: "Jackson State", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[1,1], ft:[2,2] } },
    { game: "Ohio", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[2,2], mid:[0,0], rim:[3,3], ft:[0,0] } },
    { game: "NJIT", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[1,1], ft:[0,0] } },
    { game: "Tennessee", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[1,1], ft:[0,1] } },
    { game: "Montana", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[1,2], ft:[0,1] } },
    { game: "Boston College", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[1,1], ft:[1,1] } },
    { game: "Pittsburgh", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[2,2], ft:[4,5] } },
    { game: "Virginia Tech", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,3], ft:[0,0] } },
    { game: "Duke2", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "SMU", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
  ], 
  "Kasean Pryor": [
    { game: "Jackson State", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[3,3], ft:[0,1] } },
    { game: "NJIT", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Montana", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[2,2], ft:[0,0] } },
    { game: "Duke", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,3], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Boston College", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,1], mid:[0,0], rim:[0,0], ft:[2,2] } },
    { game: "Virginia", close: { three:[0,0], mid:[1,1], rim:[0,1], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Pittsburgh", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,1], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Virginia Tech", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "Duke2", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
    { game: "SMU", close: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] }, blowout: { three:[0,0], mid:[0,0], rim:[0,0], ft:[0,0] } },
  ],
};

// Assist Chain Data - Season totals: who assists whom and resulting shot types
// Format: passer -> { receiver: { three: [made, att], mid: [made, att], rim: [made, att], total: assists } }
const assistChainData = {
  "Ryan Conwell": {
    "Sananda Fru": { three: [0, 0], mid: [0, 0], rim: [12, 12], total: 12 },
    "J'Vonne Hadley": { three: [3, 3], mid: [0, 0], rim: [8, 8], total: 11 },
    "Aly Khalifa": { three: [5, 5], mid: [1, 1], rim: [2, 2], total: 8 },
    "Isaac McKneely": { three: [4, 4], mid: [0, 0], rim: [0, 0], total: 4 },
    "Vangelis Zougris": { three: [0, 0], mid: [0, 0], rim: [4, 4], total: 4 },
    "Khani Rooths": { three: [0, 0], mid: [0, 0], rim: [3, 3], total: 3 },
    "Adrian Wooley": { three: [2, 2], mid: [0, 0], rim: [0, 0], total: 2 },
  },
  "Mikel Brown III": {
    "Ryan Conwell": { three: [8, 8], mid: [0, 0], rim: [0, 0], total: 8 },
    "Sananda Fru": { three: [0, 0], mid: [0, 0], rim: [6, 6], total: 6 },
    "J'Vonne Hadley": { three: [2, 2], mid: [0, 0], rim: [3, 3], total: 5 },
    "Vangelis Zougris": { three: [0, 0], mid: [0, 0], rim: [3, 3], total: 3 },
    "Isaac McKneely": { three: [2, 2], mid: [0, 0], rim: [0, 0], total: 2 },
    "Khani Rooths": { three: [0, 0], mid: [0, 0], rim: [2, 2], total: 2 },
    "Adrian Wooley": { three: [1, 1], mid: [0, 0], rim: [1, 1], total: 2 },
  },
  "Isaac McKneely": {
    "Sananda Fru": { three: [0, 0], mid: [0, 0], rim: [5, 5], total: 5 },
    "J'Vonne Hadley": { three: [2, 2], mid: [0, 0], rim: [2, 2], total: 4 },
    "Kobe Rodgers": { three: [0, 0], mid: [0, 0], rim: [2, 2], total: 2 },
    "Aly Khalifa": { three: [1, 1], mid: [0, 0], rim: [1, 1], total: 2 },
    "Adrian Wooley": { three: [1, 1], mid: [0, 0], rim: [0, 0], total: 1 },
  },
  "J'Vonne Hadley": {
    "Isaac McKneely": { three: [5, 5], mid: [0, 0], rim: [0, 0], total: 5 },
    "Ryan Conwell": { three: [2, 2], mid: [0, 0], rim: [0, 0], total: 2 },
    "Aly Khalifa": { three: [2, 2], mid: [0, 0], rim: [0, 0], total: 2 },
    "Adrian Wooley": { three: [1, 1], mid: [0, 0], rim: [1, 1], total: 2 },
    "Mikel Brown III": { three: [1, 1], mid: [0, 0], rim: [0, 0], total: 1 },
  },
  "Sananda Fru": {
    "Isaac McKneely": { three: [3, 3], mid: [0, 0], rim: [0, 0], total: 3 },
    "Ryan Conwell": { three: [1, 1], mid: [0, 0], rim: [1, 1], total: 2 },
    "Adrian Wooley": { three: [2, 2], mid: [0, 0], rim: [0, 0], total: 2 },
    "Kobe Rodgers": { three: [1, 1], mid: [0, 0], rim: [0, 0], total: 1 },
    "J'Vonne Hadley": { three: [0, 0], mid: [0, 0], rim: [1, 1], total: 1 },
  },
  "Adrian Wooley": {
    "Isaac McKneely": { three: [2, 2], mid: [0, 0], rim: [0, 0], total: 2 },
    "Sananda Fru": { three: [1, 1], mid: [0, 0], rim: [1, 1], total: 2 },
    "Mikel Brown III": { three: [1, 1], mid: [0, 0], rim: [1, 1], total: 2 },
    "Ryan Conwell": { three: [1, 1], mid: [0, 0], rim: [0, 0], total: 1 },
  },
  "Aly Khalifa": {
    "Isaac McKneely": { three: [4, 4], mid: [0, 0], rim: [1, 1], total: 5 },
    "Ryan Conwell": { three: [0, 0], mid: [0, 0], rim: [2, 2], total: 2 },
    "Kobe Rodgers": { three: [0, 0], mid: [0, 0], rim: [2, 2], total: 2 },
    "J'Vonne Hadley": { three: [0, 0], mid: [0, 0], rim: [1, 1], total: 1 },
    "Khani Rooths": { three: [0, 0], mid: [0, 0], rim: [1, 1], total: 1 },
  },
  "Kobe Rodgers": {
    "Isaac McKneely": { three: [2, 2], mid: [0, 0], rim: [0, 0], total: 2 },
    "Ryan Conwell": { three: [1, 1], mid: [0, 0], rim: [0, 0], total: 1 },
    "J'Vonne Hadley": { three: [1, 1], mid: [0, 0], rim: [0, 0], total: 1 },
    "Khani Rooths": { three: [0, 0], mid: [0, 0], rim: [1, 1], total: 1 },
    "Mikel Brown III": { three: [0, 0], mid: [0, 0], rim: [0, 0], total: 0 },
  },
  "Khani Rooths": {
    "Kobe Rodgers": { three: [0, 0], mid: [0, 0], rim: [2, 2], total: 2 },
    "Mikel Brown III": { three: [0, 0], mid: [0, 0], rim: [1, 1], total: 1 },
    "Ryan Conwell": { three: [0, 0], mid: [0, 0], rim: [1, 1], total: 1 },
  },
  "Vangelis Zougris": {
    "Ryan Conwell": { three: [1, 1], mid: [0, 0], rim: [0, 0], total: 1 },
    "Sananda Fru": { three: [0, 0], mid: [0, 0], rim: [1, 1], total: 1 },
  },
};

export default function App() {
  const [view, setView] = useState("dna");
  const [segGame, setSegGame] = useState("all");
  const [selectedPlayer, setSelectedPlayer] = useState("Isaac McKneely");
  const [removedPlay, setRemovedPlay] = useState(null);
  const [intelSection, setIntelSection] = useState("risk");
  const [scenarioSection, setScenarioSection] = useState("dependency");
  const [playbookSection, setPlaybookSection] = useState("playtypes");
  const [showGuide, setShowGuide] = useState(false);
  const [segFilter, setSegFilter] = useState("all");
  const [clutchNote, setClutchNote] = useState(true);
  const [clutchFilter, setClutchFilter] = useState("all");
  const [assistChainPlayer, setAssistChainPlayer] = useState(null);
  // Compare
  const [comparePlayers, setComparePlayers] = useState(["Ryan Conwell", "Isaac McKneely"]);
  // Game Prep
  const [prepOpponent, setPrepOpponent] = useState("Duke");
  // Quiz
  const [quizRevealed, setQuizRevealed] = useState({});
  // Share
  const [sharePlayer, setSharePlayer] = useState("Ryan Conwell");
  const [shareType, setShareType] = useState("overview");

  const player = players[selectedPlayer];

  // Player tendencies calculation
  const playerTendencies = useMemo(() => {
    return playerNames.map(name => {
      const p = players[name];
      let totalPoss = 0, totalPts = 0, totalTO = 0, rimPoss = 0, midPoss = 0, threePoss = 0;
      let selfCreated = 0, assisted = 0;
      
      Object.entries(p.plays).forEach(([pt, data]) => {
        totalPoss += data.poss;
        totalPts += data.pts;
        totalTO += data.to;
        
        if (["Cut", "Off Rebound", "P&R Roll Man"].includes(pt)) {
          rimPoss += data.poss;
          assisted += data.poss;
        } else if (["Spot Up", "Off Screen"].includes(pt)) {
          threePoss += data.poss;
          assisted += data.poss;
        } else if (["ISO", "P&R Ball Handler", "Post Up"].includes(pt)) {
          selfCreated += data.poss;
          midPoss += data.poss * 0.4;
          threePoss += data.poss * 0.3;
          rimPoss += data.poss * 0.3;
        } else if (pt === "Transition") {
          rimPoss += data.poss * 0.5;
          threePoss += data.poss * 0.3;
          midPoss += data.poss * 0.2;
          selfCreated += data.poss * 0.6;
          assisted += data.poss * 0.4;
        } else if (pt === "Handoff") {
          threePoss += data.poss * 0.7;
          midPoss += data.poss * 0.3;
          assisted += data.poss;
        }
      });
      
      const total = rimPoss + midPoss + threePoss;
      const validPlays = Object.entries(p.plays).filter(([_, d]) => d.poss >= 5);
      const ppps = validPlays.map(([_, d]) => d.ppp);
      const floor = ppps.length > 0 ? Math.min(...ppps) : 0;
      const ceiling = ppps.length > 0 ? Math.max(...ppps) : 0;
      const toPct = totalPoss > 0 ? (totalTO / totalPoss * 100) : 0;
      const variance = ceiling - floor;
      const riskScore = (toPct * 2) + (variance * 20) + ((1 - floor) * 30);
      
      return {
        name,
        totalPoss,
        totalPts,
        totalTO,
        ppp: totalPoss > 0 ? totalPts / totalPoss : 0,
        rimPct: total > 0 ? (rimPoss / total * 100) : 0,
        midPct: total > 0 ? (midPoss / total * 100) : 0,
        threePct: total > 0 ? (threePoss / total * 100) : 0,
        selfCreatedPct: totalPoss > 0 ? (selfCreated / totalPoss * 100) : 0,
        assistedPct: totalPoss > 0 ? (assisted / totalPoss * 100) : 0,
        toPct,
        floor,
        ceiling,
        variance,
        riskScore,
        riskLabel: riskScore > 60 ? "High" : riskScore > 40 ? "Med" : "Low"
      };
    });
  }, []);

  // Dependency analysis
  const dependencyAnalysis = useMemo(() => {
    return Object.entries(teamStats).map(([pt, data]) => {
      const pctOfPts = (data.pts / totalTeamPts * 100);
      const pctOfPoss = (data.poss / totalTeamPoss * 100);
      const blendScore = (pctOfPoss * 0.4 + normalize(data.ppp) * 0.6);
      
      let dependency = "🟢 Balanced";
      if (pctOfPoss > 18 && data.ppp < 0.9) dependency = "🔴 Over-dep";
      else if (pctOfPoss > 20) dependency = "🟡 High Use";
      else if (pctOfPoss < 5) dependency = "⚪ Minimal";
      
      return { playType: pt, ...data, pctOfPts, pctOfPoss, blendScore, dependency };
    }).sort((a, b) => b.pctOfPoss - a.pctOfPoss);
  }, []);

  // Simulator
  const simulatorResults = useMemo(() => {
    if (!removedPlay) return null;
    
    const removedData = teamStats[removedPlay];
    const remainingPoss = totalTeamPoss - removedData.poss;
    
    const redistribution = Object.entries(teamStats)
      .filter(([pt]) => pt !== removedPlay)
      .map(([pt, data]) => {
        const newPoss = data.poss + (removedData.poss * (data.poss / remainingPoss));
        const projectedPts = newPoss * data.ppp;
        return { playType: pt, originalPoss: data.poss, newPoss, ppp: data.ppp, projectedPts };
      });
    
    const newTotalPts = redistribution.reduce((a, b) => a + b.projectedPts, 0);
    const ptsDiff = newTotalPts - totalTeamPts;
    
    return { removedPlay, removedPoss: removedData.poss, removedPts: removedData.pts, redistribution, newTotalPts, ptsDiff };
  }, [removedPlay]);

  // Radar data
  const offensiveRadar = playTypes.map(pt => ({
    label: pt.replace("P&R Ball Handler", "P&R").replace("P&R Roll Man", "Roll Man").replace("Off Rebound", "Putback"),
    value: normalize(teamStats[pt].ppp)
  }));

  const playerRadar = useMemo(() => {
    const p = players[selectedPlayer];
    return playTypes.map(pt => ({
      label: pt.replace("P&R Ball Handler", "P&R").replace("P&R Roll Man", "Roll Man").replace("Off Rebound", "Putback"),
      value: p.plays[pt] ? normalize(p.plays[pt].ppp) : 0
    }));
  }, [selectedPlayer]);

  const playerUsage = useMemo(() => {
    const p = players[selectedPlayer];
    const totalPoss = Object.values(p.plays).reduce((a, b) => a + b.poss, 0);
    return playTypes.map(pt => ({
      label: pt.replace("P&R Ball Handler", "P&R").replace("P&R Roll Man", "Roll Man").replace("Off Rebound", "Putback"),
      value: p.plays[pt] ? (p.plays[pt].poss / totalPoss * 100) * 2 : 0
    }));
  }, [selectedPlayer]);

  const playFrequency = Object.entries(teamStats).sort((a, b) => b[1].poss - a[1].poss);

  return (
    <div className="p-3 bg-slate-900 min-h-screen text-white text-sm" style={{maxWidth:'1200px', margin:'0 auto'}}>
      <h1 className="text-xl font-bold text-center text-red-500">Louisville Cardinals</h1>
      <div className="flex justify-center items-center gap-2">
        <p className="text-center text-gray-400 text-xs">Advanced Synergy Analysis • 2025-26</p>
        <button onClick={() => setShowGuide(!showGuide)} className="text-xs bg-slate-700 hover:bg-slate-600 px-2 py-0.5 rounded text-gray-300">{showGuide ? "✕ Close" : "ℹ️ Guide"}</button>
      </div>

      {showGuide && (
        <div className="bg-slate-800 rounded-lg p-3 my-3 border border-slate-600">
          <h2 className="font-bold text-yellow-400 mb-2 text-sm">How to Use This Dashboard</h2>
          <div className="space-y-2 text-xs text-gray-300">
            <div>
              <span className="font-semibold text-white">Key Metric — PPP (Points Per Possession):</span> The core efficiency stat throughout. Above 1.00 is good, above 1.20 is elite, below 0.80 is poor. Color-coded: <span className="text-emerald-400">green</span> = efficient, <span className="text-yellow-400">yellow</span> = average, <span className="text-red-400">red</span> = inefficient.
            </div>
            <div className="border-t border-slate-700 pt-2">
              <span className="font-semibold text-white">Tabs:</span>
            </div>
            <div className="pl-2 space-y-1.5">
              <div><span className="text-red-400 font-semibold">DNA</span> — Team overview. Radar chart, play type efficiency table, strengths and weaknesses at a glance. Start here.</div>
              <div><span className="text-blue-400 font-semibold">Player Intel</span> — Four sub-views. <em>Risk Index</em> shows turnover and inefficiency exposure. <em>Clutch Splits</em> breaks down shot selection in close games vs blowouts with T-Rank filtering. <em>Compare</em> lets you pick 2-3 players for side-by-side radar charts, stats, and play type bars. <em>Share Cards</em> generates screenshot-ready stat cards.</div>
              <div><span className="text-blue-400 font-semibold">Scenarios</span> — What-if analysis. <em>Dependency</em> shows how the team's PPP changes without each player. <em>Simulator</em> lets you remove a play type and see where possessions redistribute.</div>
              <div><span className="text-blue-400 font-semibold">Playbook</span> — Scheme insights. <em>Play Types</em> ranks every action with the best player for each. <em>Breakdown</em> shows the win/loss formula and how each player fails.</div>
              <div><span className="text-blue-400 font-semibold">Scoring Runs</span> — Game flow. 5-minute scoring segments showing margin swings, run patterns, and momentum shifts with T-Rank quality filtering.</div>
              <div><span className="text-blue-400 font-semibold">Game Prep</span> — Opponent scouting. Select an opponent to see T-Rank profile, previous matchup results, and Louisville's record vs similar quality teams. Defensive synergy data coming soon.</div>
              <div><span className="text-blue-400 font-semibold">Profiles</span> — Individual deep dives. Radar charts, shot diet, and every play type for a single player.</div>
            </div>
            <div className="border-t border-slate-700 pt-2">
              <span className="font-semibold text-white">Possession counts <span className="text-gray-500">(Xp)</span>:</span> Shown throughout as sample size context. Higher = more reliable. Below 15p treat with caution.
            </div>
            <div>
              <span className="font-semibold text-white">Tier System:</span> Players ranked 1-4 based on usage + efficiency. Tier 1 = primary options, Tier 4 = limited/situational.
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-1 mb-3 justify-center flex-wrap">
        {[
          {k:"dna",l:"DNA"},
          {k:"intel",l:"Player Intel"},
          {k:"scenarios",l:"Scenarios"},
          {k:"playbook",l:"Playbook"},
          {k:"segments",l:"Scoring Runs"},
          {k:"prep",l:"Game Prep"},
          {k:"profile",l:"Profiles"}
        ].map(v => (
          <button key={v.k} onClick={() => setView(v.k)} className={`px-2 py-1 rounded text-xs ${view === v.k ? "bg-red-600" : "bg-gray-700"}`}>{v.l}</button>
        ))}
      </div>

      {/* DNA TAB */}
      {view === "dna" && (
        <div>
          <style>{`@media(min-width:1024px){.dna-top{flex-direction:row}.dna-radar{width:33%;min-width:320px}.dna-table{flex:1}}`}</style>
          <div className="dna-top flex flex-col gap-3 mb-3">
            <div className="dna-radar bg-slate-800 rounded-lg p-3 flex flex-col items-center justify-center">
              <h2 className="font-bold text-yellow-400 mb-2 text-center">Team Offensive Profile</h2>
              <RadarChart data={offensiveRadar} title="Efficiency Percentile" color="#f97316" size={280} />
            </div>
            <div className="dna-table bg-slate-800 rounded-lg p-3">
              <h2 className="font-bold text-yellow-400 mb-2">Play Type Efficiency</h2>
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-gray-400 border-b border-slate-600">
                    <th className="text-left p-1">Play Type</th>
                    <th className="p-1">Poss</th>
                    <th className="p-1">Pts</th>
                    <th className="p-1">PPP</th>
                    <th className="p-1">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {playFrequency.map(([pt, data]) => (
                    <tr key={pt} className="border-b border-slate-700">
                      <td className="p-1 font-medium">{pt}</td>
                      <td className="p-1 text-center text-cyan-400">{data.poss}</td>
                      <td className="p-1 text-center">{data.pts}</td>
                      <td className={`p-1 text-center font-bold ${getPPPColor(data.ppp)}`}>{data.ppp.toFixed(2)}</td>
                      <td className="p-1 text-center"><PPPBadge ppp={data.ppp} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-800 rounded-lg p-3">
              <h3 className="font-semibold text-emerald-400 text-sm mb-2">Strengths</h3>
              {playFrequency.filter(([_, d]) => d.ppp >= 1.1 && d.poss >= 40).map(([pt, d]) => (
                <div key={pt} className="text-xs mb-1 flex justify-between">
                  <span>{pt}</span>
                  <span className="text-emerald-400">{d.ppp.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="bg-slate-800 rounded-lg p-3">
              <h3 className="font-semibold text-red-400 text-sm mb-2">Weaknesses</h3>
              {playFrequency.filter(([_, d]) => d.ppp < 0.9 && d.poss >= 40).map(([pt, d]) => (
                <div key={pt} className="text-xs mb-1 flex justify-between">
                  <span>{pt}</span>
                  <span className="text-red-400">{d.ppp.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* PLAYER INTEL TAB (Tendencies + Risk Index) */}
      {view === "intel" && (
        <div>
          <div className="flex gap-1 mb-3 justify-center flex-wrap">
            {[{k:"risk",l:"Risk Index"},{k:"assists",l:"Assist Chain"},{k:"compare",l:"Compare"},{k:"share",l:"Share Cards"}].map(s => (
              <button key={s.k} onClick={() => setIntelSection(s.k)} className={`px-2 py-1 rounded text-xs ${intelSection === s.k ? "bg-blue-600" : "bg-slate-700"}`}>{s.l}</button>
            ))}
          </div>

          {intelSection === "risk" && (
            <>
        <div>
          <div className="bg-slate-800 rounded-lg p-3 mb-3">
            <h2 className="font-bold text-yellow-400 mb-2">🎲 Player Risk Index</h2>
            <p className="text-gray-400 text-xs mb-3">Volatility, turnover risk, and confidence metrics</p>
            <table className="w-full text-xs">
              <thead>
                <tr className="text-gray-400 border-b border-slate-600">
                  <th className="text-left p-1">Player</th>
                  <th className="p-1">Poss</th>
                  <th className="p-1">TO%</th>
                  <th className="p-1">Variance</th>
                  <th className="p-1">Floor</th>
                  <th className="p-1">Ceiling</th>
                  <th className="p-1">Risk</th>
                </tr>
              </thead>
              <tbody>
                {playerTendencies.sort((a, b) => b.riskScore - a.riskScore).map(p => (
                  <tr key={p.name} className="border-b border-slate-700">
                    <td className="p-1 font-medium">{getDisplayName(p.name)}</td>
                    <td className="p-1 text-center">{p.totalPoss}</td>
                    <td className={`p-1 text-center ${p.toPct > 15 ? 'text-red-400' : p.toPct > 10 ? 'text-yellow-400' : 'text-green-400'}`}>{p.toPct.toFixed(1)}%</td>
                    <td className={`p-1 text-center ${p.variance > 1.0 ? 'text-orange-400' : 'text-gray-400'}`}>{p.variance.toFixed(2)}</td>
                    <td className={`p-1 text-center ${getPPPColor(p.floor)}`}>{p.floor.toFixed(2)}</td>
                    <td className={`p-1 text-center ${getPPPColor(p.ceiling)}`}>{p.ceiling.toFixed(2)}</td>
                    <td className={`p-1 text-center font-bold ${p.riskLabel === "High" ? 'text-red-400' : p.riskLabel === "Med" ? 'text-yellow-400' : 'text-emerald-400'}`}>{p.riskLabel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-800 rounded-lg p-3 mb-3">
            <h3 className="font-semibold text-sm mb-2">📊 Volatility Analysis</h3>
            <p className="text-gray-400 text-xs mb-2">Gap between best and worst core play types (≥5% usage share)</p>
            <div className="space-y-2">
              {playerNames.map(name => {
                const p = players[name];
                const totalPoss = Object.values(p.plays).reduce((s, d) => s + d.poss, 0);
                const validPlays = Object.entries(p.plays).filter(([_, d]) => d.poss >= 10 && (d.poss / totalPoss) >= 0.05);
                if (validPlays.length < 2) return null;
                const best = validPlays.reduce((a, b) => a[1].ppp > b[1].ppp ? a : b);
                const worst = validPlays.reduce((a, b) => a[1].ppp < b[1].ppp ? a : b);
                const gap = best[1].ppp - worst[1].ppp;
                if (gap < 0.3) return null;
                
                return (
                  <div key={name} className="bg-slate-700 rounded p-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-sm">{getDisplayName(name)}</span>
                      <span className="text-orange-400 text-xs">Gap: {gap.toFixed(2)} PPP</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-emerald-400">Best: {best[0]} ({best[1].ppp.toFixed(2)})</span>
                      <span className="text-red-400">Worst: {worst[0]} ({worst[1].ppp.toFixed(2)})</span>
                    </div>
                  </div>
                );
              }).filter(Boolean)}
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-3">
            <h3 className="font-semibold text-sm mb-2">🎯 Confidence Tiers</h3>
            <p className="text-gray-400 text-xs mb-2">Who to trust in big moments based on consistency</p>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-emerald-900/30 rounded p-2">
                <div className="text-emerald-400 font-semibold text-xs mb-1">High Confidence</div>
                <div className="text-xs text-gray-300">Fru, Hadley</div>
                <div className="text-xs text-gray-500 mt-1">Low variance, high floor</div>
              </div>
              <div className="bg-yellow-900/30 rounded p-2">
                <div className="text-yellow-400 font-semibold text-xs mb-1">Medium Confidence</div>
                <div className="text-xs text-gray-300">Conwell, McKneely</div>
                <div className="text-xs text-gray-500 mt-1">Consistent shooters</div>
              </div>
              <div className="bg-red-900/30 rounded p-2">
                <div className="text-red-400 font-semibold text-xs mb-1">Low Confidence</div>
                <div className="text-xs text-gray-300">Wooley, Brown, Rooths</div>
                <div className="text-xs text-gray-500 mt-1">High variance or TO risk</div>
              </div>
            </div>
          </div>
        </div>
            </>
          )}

          {intelSection === "clutch" && (() => {
            const shotTypes = ["three","mid","rim","ft"];
            const shotLabels = {"three":"3PT","mid":"MID","rim":"RIM","ft":"FT"};
            const clutchGames = ["SC State", "Jackson State", "Kentucky", "Ohio", "Cincinnati", "Eastern Michigan", "NJIT", "Arkansas", "Indiana", "Memphis", "Tennessee", "Montana", "California", "Stanford", "Duke", "Boston College", "Virginia", "Pittsburgh", "Virginia Tech", "Duke2", "SMU"];
            const clutchT50 = clutchGames.filter(g => opponentRankings[g] && opponentRankings[g].rank <= 50);
            const clutchOutside = clutchGames.filter(g => opponentRankings[g] && opponentRankings[g].rank > 50);
            
            const filteredGames = clutchFilter === "t50" ? clutchT50 
                                : clutchFilter === "outside" ? clutchOutside 
                                : clutchGames;
            
            const aggregatePlayer = (name) => {
              const games = clutchDataPerGame[name] || [];
              const filtered = games.filter(g => filteredGames.includes(g.game));
              const agg = { close: {three:[0,0],mid:[0,0],rim:[0,0],ft:[0,0]}, blowout: {three:[0,0],mid:[0,0],rim:[0,0],ft:[0,0]} };
              filtered.forEach(g => {
                ["close","blowout"].forEach(sit => {
                  shotTypes.forEach(st => {
                    agg[sit][st][0] += g[sit][st][0];
                    agg[sit][st][1] += g[sit][st][1];
                  });
                });
              });
              return agg;
            };
            
            const clutchPlayers = Object.keys(clutchDataPerGame).map(name => {
              const d = aggregatePlayer(name);
              const att = shotTypes.reduce((a,s) => a + d.close[s][1] + d.blowout[s][1], 0);
              return [name, d, att];
            }).filter(([,,att]) => att > 0);
            
            return (
            <>
              <div className="bg-slate-800 rounded-lg p-3 mb-3">
                <h2 className="font-bold text-yellow-400 mb-1">🔥 Clutch Splits</h2>
                <p className="text-gray-400 text-xs mb-1">Shot diet & FG% when game is close/trailing (lead {"<"} 10) vs comfortable (lead ≥ 10)</p>
                <p className="text-amber-600/70 text-[10px] mb-2 italic">⚠️ Note: Small data entry errors may occur in manual shot tracking. Use for directional analysis.</p>
                
                <div className="flex gap-1 mb-2">
                  <button onClick={() => setClutchFilter("all")} className={`px-2 py-1 rounded text-xs ${clutchFilter==="all"?"bg-blue-600":"bg-slate-700"}`}>All ({clutchGames.length})</button>
                  <button onClick={() => setClutchFilter("t50")} className={`px-2 py-1 rounded text-xs ${clutchFilter==="t50"?"bg-red-600":"bg-slate-700"}`}>Top 50 ({clutchT50.length})</button>
                  <button onClick={() => setClutchFilter("outside")} className={`px-2 py-1 rounded text-xs ${clutchFilter==="outside"?"bg-slate-600":"bg-slate-700"}`}>Outside 50 ({clutchOutside.length})</button>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-2">
                  {clutchGames.map(g => {
                    const r = opponentRankings[g];
                    if (!r) return null;
                    const isT50 = r.rank <= 50;
                    const dimmed = (clutchFilter === "t50" && !isT50) || (clutchFilter === "outside" && isT50);
                    return (
                      <span key={g} className={`text-[10px] px-1.5 py-0.5 rounded ${dimmed ? "bg-slate-800 text-slate-600" : isT50 ? "bg-red-900/50 text-red-300 border border-red-700" : "bg-slate-700 text-slate-400"}`}>
                        {g} <span className="font-mono">#{r.rank}</span>
                      </span>
                    );
                  })}
                </div>
                <div className="text-[10px] text-slate-500 mb-3">
                  {clutchFilter === "all" ? <>Showing all {clutchGames.length} games • <span className="text-red-300">{clutchT50.length} Top 50</span> ({clutchT50.join(", ") || "none"}) • <span className="text-slate-400">{clutchOutside.length} outside</span></> 
                  : clutchFilter === "t50" ? <span className="text-red-300">Filtered to {clutchT50.length} Top 50 opponent{clutchT50.length !== 1 ? "s" : ""}: {clutchT50.join(", ")}</span>
                  : <span className="text-slate-400">Filtered to {clutchOutside.length} outside Top 50: {clutchOutside.join(", ")}</span>}
                </div>

                <div className="space-y-3">
                  {clutchPlayers.map(([name, d]) => {
                    const pct = (m, a) => a > 0 ? `${Math.round(m/a*100)}%` : "--";
                    const closeFGm = d.close.three[0]+d.close.mid[0]+d.close.rim[0];
                    const closeFGa = d.close.three[1]+d.close.mid[1]+d.close.rim[1];
                    const blowFGm = d.blowout.three[0]+d.blowout.mid[0]+d.blowout.rim[0];
                    const blowFGa = d.blowout.three[1]+d.blowout.mid[1]+d.blowout.rim[1];
                    const closePts = d.close.three[0]*3+d.close.mid[0]*2+d.close.rim[0]*2+d.close.ft[0];
                    const blowPts = d.blowout.three[0]*3+d.blowout.mid[0]*2+d.blowout.rim[0]*2+d.blowout.ft[0];
                    const closeTotal = shotTypes.reduce((a,s) => a+d.close[s][1], 0);
                    const blowTotal = shotTypes.reduce((a,s) => a+d.blowout[s][1], 0);
                    
                    const closeFGpct = closeFGa > 0 ? (closeFGm/closeFGa*100) : null;
                    const blowFGpct = blowFGa > 0 ? (blowFGm/blowFGa*100) : null;
                    const fgDiff = (closeFGpct !== null && blowFGpct !== null) ? closeFGpct - blowFGpct : null;
                    
                    return (
                      <div key={name} className="bg-slate-700/50 rounded p-2">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm">{getDisplayName(name)}</span>
                            <span className="text-[10px] text-slate-500 font-mono">{closeTotal + blowTotal} att</span>
                          </div>
                          <div className="flex gap-2 text-[10px]">
                            {fgDiff !== null && (
                              <span className={fgDiff > 5 ? "text-green-400 font-bold" : fgDiff < -5 ? "text-red-400 font-bold" : "text-slate-400"}>
                                {fgDiff > 0 ? "↑" : "↓"} {Math.abs(fgDiff).toFixed(0)}% FG in clutch
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {[{key:"close",label:"Close/Trail (<10)",pts:closePts,fgm:closeFGm,fga:closeFGa,total:closeTotal,color:"text-orange-400"},
                            {key:"blowout",label:"Comfortable (≥10)",pts:blowPts,fgm:blowFGm,fga:blowFGa,total:blowTotal,color:"text-cyan-400"}].map(sit => (
                            <div key={sit.key} className="bg-slate-800/50 rounded p-1.5">
                              <div className={`text-[10px] font-bold ${sit.color} mb-1`}>{sit.label}</div>
                              <div className="grid grid-cols-4 gap-0.5 text-[10px] mb-1">
                                {shotTypes.map(st => {
                                  const [m, a] = d[sit.key][st];
                                  const thisPct = a > 0 ? Math.round(m/a*100) : null;
                                  const shotShare = sit.total > 0 ? Math.round(a/sit.total*100) : 0;
                                  return (
                                    <div key={st} className="text-center">
                                      <div className="text-slate-500">{shotLabels[st]}</div>
                                      <div className={`font-mono font-bold ${thisPct !== null ? (thisPct >= 50 ? "text-green-400" : thisPct >= 33 ? "text-yellow-400" : "text-red-400") : "text-slate-600"}`}>
                                        {m}/{a}
                                      </div>
                                      <div className="text-slate-500">{thisPct !== null ? `${thisPct}%` : "--"}</div>
                                      <div className="bg-slate-700 rounded-full h-1 mt-0.5">
                                        <div className={`h-1 rounded-full ${sit.key === "close" ? "bg-orange-500" : "bg-cyan-500"}`} style={{width:`${shotShare}%`}}></div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                              <div className="flex justify-between text-[10px] border-t border-slate-700 pt-0.5">
                                <span className="text-slate-400">FG: {sit.fgm}/{sit.fga} ({sit.fga > 0 ? Math.round(sit.fgm/sit.fga*100) : "--"}%)</span>
                                <span className="font-bold text-white">{sit.pts} pts</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg p-3">
                <h3 className="font-bold text-sm mb-2">📊 Clutch Takeaways</h3>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-green-900/30 rounded p-2">
                    <div className="text-green-400 font-bold mb-1">Clutch Risers</div>
                    {clutchPlayers.filter(([name, d]) => {
                      const cFGa = d.close.three[1]+d.close.mid[1]+d.close.rim[1];
                      const cFGm = d.close.three[0]+d.close.mid[0]+d.close.rim[0];
                      const bFGa = d.blowout.three[1]+d.blowout.mid[1]+d.blowout.rim[1];
                      const bFGm = d.blowout.three[0]+d.blowout.mid[0]+d.blowout.rim[0];
                      return cFGa >= 3 && bFGa >= 3 && (cFGm/cFGa) > (bFGm/bFGa);
                    }).map(([name]) => (
                      <div key={name} className="text-slate-300">{getDisplayName(name)}</div>
                    ))}
                    <div className="text-slate-500 mt-1 text-[10px]">Better FG% in close games</div>
                  </div>
                  <div className="bg-red-900/30 rounded p-2">
                    <div className="text-red-400 font-bold mb-1">Comfort Zone</div>
                    {clutchPlayers.filter(([name, d]) => {
                      const cFGa = d.close.three[1]+d.close.mid[1]+d.close.rim[1];
                      const cFGm = d.close.three[0]+d.close.mid[0]+d.close.rim[0];
                      const bFGa = d.blowout.three[1]+d.blowout.mid[1]+d.blowout.rim[1];
                      const bFGm = d.blowout.three[0]+d.blowout.mid[0]+d.blowout.rim[0];
                      return cFGa >= 3 && bFGa >= 3 && (cFGm/cFGa) < (bFGm/bFGa);
                    }).map(([name]) => (
                      <div key={name} className="text-slate-300">{getDisplayName(name)}</div>
                    ))}
                    <div className="text-slate-500 mt-1 text-[10px]">Better FG% in blowouts</div>
                  </div>
                </div>
              </div>
            </>
            );
          })()}

          {intelSection === "assists" && (
            <div className="bg-slate-800 rounded-lg p-3 mb-3">
              <h2 className="font-bold text-yellow-400 mb-1">🔗 Assist Chain</h2>
              <p className="text-gray-400 text-xs mb-1">Click a player to see who they assist and where those shots come from</p>
              <p className="text-amber-600/70 text-[10px] mb-3 italic">⚠️ Note: Small data entry errors may occur in manual tracking. Use for directional analysis.</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {Object.keys(assistChainData).map(name => (
                  <button 
                    key={name} 
                    onClick={() => setAssistChainPlayer(assistChainPlayer === name ? null : name)}
                    className={`px-3 py-1.5 rounded text-xs transition-all ${assistChainPlayer === name ? "bg-blue-600 ring-2 ring-blue-400" : "bg-slate-700 hover:bg-slate-600"}`}
                  >
                    {getDisplayName(name)}
                    <span className="ml-1 text-slate-400">
                      ({Object.values(assistChainData[name]).reduce((a, r) => a + r.total, 0)} ast)
                    </span>
                  </button>
                ))}
              </div>

              {assistChainPlayer && assistChainData[assistChainPlayer] && (
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <h3 className="font-semibold text-sm mb-3 text-blue-300">
                    {getDisplayName(assistChainPlayer)}'s Assist Breakdown
                  </h3>
                  <div className="space-y-2">
                    {Object.entries(assistChainData[assistChainPlayer])
                      .filter(([_, data]) => data.total > 0)
                      .sort((a, b) => b[1].total - a[1].total)
                      .map(([receiver, data]) => {
                        const threeAst = data.three[0];
                        const midAst = data.mid[0];
                        const rimAst = data.rim[0];
                        const totalPts = threeAst * 3 + midAst * 2 + rimAst * 2;
                        return (
                          <div key={receiver} className="bg-slate-800/50 rounded p-2">
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-medium text-sm">{getDisplayName(receiver)}</span>
                              <span className="text-yellow-400 font-bold">{data.total} ast</span>
                            </div>
                            <div className="flex gap-3 text-xs">
                              {threeAst > 0 && (
                                <span className="text-purple-400">
                                  <span className="font-mono">{threeAst}</span> 3PT
                                </span>
                              )}
                              {midAst > 0 && (
                                <span className="text-blue-400">
                                  <span className="font-mono">{midAst}</span> MID
                                </span>
                              )}
                              {rimAst > 0 && (
                                <span className="text-green-400">
                                  <span className="font-mono">{rimAst}</span> RIM
                                </span>
                              )}
                              <span className="text-slate-400 ml-auto">
                                → <span className="text-white font-semibold">{totalPts} pts</span> created
                              </span>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-600">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Total Assists:</span>
                      <span className="font-bold text-yellow-400">
                        {Object.values(assistChainData[assistChainPlayer]).reduce((a, r) => a + r.total, 0)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Points Created:</span>
                      <span className="font-bold text-green-400">
                        {Object.values(assistChainData[assistChainPlayer]).reduce((a, r) => a + r.three[0] * 3 + r.mid[0] * 2 + r.rim[0] * 2, 0)}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {!assistChainPlayer && (
                <div className="text-center text-slate-500 py-8">
                  👆 Select a player above to view their assist breakdown
                </div>
              )}
            </div>
          )}

          {intelSection === "compare" && (
            <>
          <div>
          <div className="bg-slate-800 rounded-lg p-3 mb-3">
            <h2 className="font-bold text-yellow-400 mb-2">🔄 Player Comparison</h2>
            <p className="text-gray-400 text-xs mb-3">Select 2-3 players to compare side by side</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {playerNames.map(name => {
                const sel = comparePlayers.includes(name);
                return (
                  <button key={name} onClick={() => {
                    if (sel) { if (comparePlayers.length > 2) setComparePlayers(comparePlayers.filter(n => n !== name)); }
                    else if (comparePlayers.length < 3) setComparePlayers([...comparePlayers, name]);
                  }} className={`px-2 py-1 rounded text-xs transition-all ${sel ? "bg-red-600 ring-1 ring-red-400" : "bg-slate-700 opacity-60 hover:opacity-100"}`}>
                    {getDisplayName(name)}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-3 mb-3">
            <h3 className="font-semibold text-sm mb-3">Efficiency Profiles</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {comparePlayers.map(name => {
                const p = players[name];
                const radar = playTypes.map(pt => ({
                  label: pt.replace("P&R Ball Handler","P&R").replace("P&R Roll Man","Roll Man").replace("Off Rebound","Putback"),
                  value: p.plays[pt] ? normalize(p.plays[pt].ppp) : 0
                }));
                const colors = ["#f97316","#3b82f6","#10b981"];
                const ci = comparePlayers.indexOf(name);
                return (
                  <div key={name} className="text-center">
                    <div className="text-xs font-bold mb-1" style={{color:colors[ci]}}>{getDisplayName(name)}</div>
                    <RadarChart data={radar} title="" color={colors[ci]} size={160} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-3 mb-3">
            <h3 className="font-semibold text-sm mb-2">Head to Head</h3>
            <table className="w-full text-xs">
              <thead>
                <tr className="text-gray-400 border-b border-slate-600">
                  <th className="text-left p-1">Stat</th>
                  {comparePlayers.map(n => <th key={n} className="p-1 text-center">{getDisplayName(n)}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Total Poss", fn: n => Object.values(players[n].plays).reduce((a,p)=>a+p.poss,0) },
                  { label: "Total Pts", fn: n => Object.values(players[n].plays).reduce((a,p)=>a+p.pts,0) },
                  { label: "Overall PPP", fn: n => (Object.values(players[n].plays).reduce((a,p)=>a+p.pts,0)/Object.values(players[n].plays).reduce((a,p)=>a+p.poss,0)).toFixed(3), isBest: "high" },
                  { label: "TO%", fn: n => { const t=playerTendencies.find(p=>p.name===n); return t ? t.toPct.toFixed(1)+"%" : "—"; }, isBest: "low" },
                  { label: "Variance", fn: n => { const t=playerTendencies.find(p=>p.name===n); return t ? t.variance.toFixed(2) : "—"; }, isBest: "low" },
                  { label: "Top Play", fn: n => { const best = Object.entries(players[n].plays).filter(([_,d])=>d.poss>=10).sort((a,b)=>b[1].ppp-a[1].ppp)[0]; return best ? `${best[0]} (${best[1].ppp.toFixed(2)})` : "—"; }},
                  { label: "Spot Up PPP", fn: n => players[n].plays["Spot Up"] ? players[n].plays["Spot Up"].ppp.toFixed(2) : "—", isBest: "high" },
                  { label: "3PT%", fn: n => { const su = players[n].plays["Spot Up"]; return su?.threePct != null ? su.threePct.toFixed(1)+"%" : "—"; }, isBest: "high" },
                  { label: "Games", fn: n => players[n].games },
                ].map(row => {
                  const vals = comparePlayers.map(n => row.fn(n));
                  const numVals = vals.map(v => parseFloat(String(v).replace("%","")));
                  const bestIdx = row.isBest === "high" ? numVals.indexOf(Math.max(...numVals.filter(v=>!isNaN(v)))) :
                                  row.isBest === "low" ? numVals.indexOf(Math.min(...numVals.filter(v=>!isNaN(v)))) : -1;
                  return (
                    <tr key={row.label} className="border-b border-slate-700">
                      <td className="p-1.5 text-gray-400">{row.label}</td>
                      {vals.map((v, i) => (
                        <td key={i} className={`p-1.5 text-center ${i === bestIdx ? "text-emerald-400 font-bold" : "text-white"}`}>{v}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-800 rounded-lg p-3">
            <h3 className="font-semibold text-sm mb-2">Play Type Breakdown</h3>
            {playTypes.filter(pt => comparePlayers.some(n => players[n].plays[pt]?.poss >= 10)).map(pt => (
              <div key={pt} className="mb-3">
                <div className="text-xs font-semibold text-gray-400 mb-1">{pt}</div>
                {comparePlayers.map((name, ci) => {
                  const d = players[name].plays[pt];
                  if (!d) return <div key={name} className="text-xs text-gray-600 mb-1">{getDisplayName(name)}: N/A</div>;
                  const maxPoss = Math.max(...comparePlayers.map(n => players[n].plays[pt]?.poss || 0));
                  const colors = ["#f97316","#3b82f6","#10b981"];
                  return (
                    <div key={name} className="flex items-center gap-2 mb-1">
                      <span className="text-xs w-16 truncate" style={{color:colors[ci]}}>{getDisplayName(name)}</span>
                      <div className="flex-1 bg-slate-700 h-4 rounded overflow-hidden relative">
                        <div className="h-4 rounded" style={{width:`${(d.poss/maxPoss)*100}%`, backgroundColor:colors[ci], opacity:0.7}}></div>
                        <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">{d.ppp.toFixed(2)} • {d.poss}p</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          </div>
            </>
          )}

          {intelSection === "share" && (
            <>
          <div>
          <div className="bg-slate-800 rounded-lg p-3 mb-3">
            <h2 className="font-bold text-yellow-400 mb-1">📤 Shareable Cards</h2>
            <p className="text-gray-400 text-xs mb-3">Generate stat cards — screenshot to share</p>
            <div className="flex gap-2 mb-2">
              <select value={sharePlayer} onChange={e => setSharePlayer(e.target.value)} className="flex-1 p-1.5 bg-slate-700 border border-slate-600 rounded text-xs">
                {playerNames.map(name => <option key={name} value={name}>{name}</option>)}
              </select>
              <select value={shareType} onChange={e => setShareType(e.target.value)} className="p-1.5 bg-slate-700 border border-slate-600 rounded text-xs">
                <option value="overview">Overview</option>
                <option value="playtype">Play Types</option>
                <option value="splits">Clutch Splits</option>
              </select>
            </div>
          </div>

          <div id="share-card" className="bg-gradient-to-br from-slate-900 via-slate-800 to-red-900/30 rounded-xl p-4 border border-slate-600 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-xs text-red-400 font-bold tracking-wider">LOUISVILLE CARDINALS</div>
                <div className="text-xl font-bold text-white">{sharePlayer}</div>
                <div className="text-xs text-gray-400">{players[sharePlayer].position} • {playerRoles[sharePlayer].primary} • Tier {playerRoles[sharePlayer].tier}</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-yellow-400">
                  {(Object.values(players[sharePlayer].plays).reduce((a,p)=>a+p.pts,0) / Object.values(players[sharePlayer].plays).reduce((a,p)=>a+p.poss,0)).toFixed(2)}
                </div>
                <div className="text-[10px] text-gray-400">OVERALL PPP</div>
              </div>
            </div>

            {shareType === "overview" && (
              <div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs mb-3">
                  <div className="bg-slate-700/50 rounded p-1.5">
                    <div className="text-gray-500">Games</div>
                    <div className="font-bold">{players[sharePlayer].games}</div>
                  </div>
                  <div className="bg-slate-700/50 rounded p-1.5">
                    <div className="text-gray-500">Poss</div>
                    <div className="font-bold text-cyan-400">{Object.values(players[sharePlayer].plays).reduce((a,p)=>a+p.poss,0)}</div>
                  </div>
                  <div className="bg-slate-700/50 rounded p-1.5">
                    <div className="text-gray-500">Points</div>
                    <div className="font-bold text-green-400">{Object.values(players[sharePlayer].plays).reduce((a,p)=>a+p.pts,0)}</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  Top 3 plays: {Object.entries(players[sharePlayer].plays).sort((a,b)=>b[1].poss-a[1].poss).slice(0,3).map(([pt,d]) => `${pt} (${d.ppp.toFixed(2)})`).join(" • ")}
                </div>
              </div>
            )}

            {shareType === "playtype" && (
              <div className="space-y-1">
                {Object.entries(players[sharePlayer].plays).sort((a,b)=>b[1].poss-a[1].poss).slice(0,5).map(([pt, d]) => (
                  <div key={pt} className="flex items-center gap-2 text-xs">
                    <span className="w-24 text-gray-400 truncate">{pt}</span>
                    <div className="flex-1 bg-slate-700/50 h-5 rounded overflow-hidden relative">
                      <div className={`h-5 rounded ${d.ppp >= 1.2 ? "bg-emerald-600/70" : d.ppp >= 1.0 ? "bg-green-600/60" : d.ppp >= 0.8 ? "bg-yellow-600/60" : "bg-red-600/60"}`} style={{width:`${Math.min(100, d.ppp/1.8*100)}%`}}></div>
                      <span className="absolute inset-0 flex items-center px-2 font-bold text-white">{d.ppp.toFixed(2)} PPP</span>
                    </div>
                    <span className="text-gray-500 w-8 text-right">{d.poss}p</span>
                  </div>
                ))}
              </div>
            )}

            {shareType === "splits" && (() => {
              const games = clutchDataPerGame[sharePlayer];
              if (!games || games.length === 0) return <div className="text-xs text-gray-500">No clutch split data available for this player</div>;
              let closeByZone = {three:[0,0],mid:[0,0],rim:[0,0],ft:[0,0]};
              let blowByZone = {three:[0,0],mid:[0,0],rim:[0,0],ft:[0,0]};
              let closeMade=0, closeAtt=0, blowMade=0, blowAtt=0;
              games.forEach(g => {
                ["three","mid","rim","ft"].forEach(st => {
                  closeMade += g.close[st][0]; closeAtt += g.close[st][1];
                  blowMade += g.blowout[st][0]; blowAtt += g.blowout[st][1];
                  closeByZone[st][0] += g.close[st][0]; closeByZone[st][1] += g.close[st][1];
                  blowByZone[st][0] += g.blowout[st][0]; blowByZone[st][1] += g.blowout[st][1];
                });
              });
              const zoneLabel = {three:"3PT",mid:"MID",rim:"RIM",ft:"FT"};
              const zoneColor = {three:"text-cyan-400",mid:"text-yellow-400",rim:"text-green-400",ft:"text-orange-400"};
              return (
                <div>
                  <div className="grid grid-cols-2 gap-3 text-center mb-3">
                    <div className="bg-purple-900/30 rounded p-2">
                      <div className="text-purple-400 text-xs font-bold mb-1">Close Games (≤10pt)</div>
                      <div className="text-xl font-bold text-white">{closeAtt > 0 ? (closeMade/closeAtt*100).toFixed(0) : 0}%</div>
                      <div className="text-[10px] text-gray-500">{closeMade}/{closeAtt} shots</div>
                    </div>
                    <div className="bg-slate-700/30 rounded p-2">
                      <div className="text-gray-400 text-xs font-bold mb-1">Blowouts (&gt;10pt)</div>
                      <div className="text-xl font-bold text-white">{blowAtt > 0 ? (blowMade/blowAtt*100).toFixed(0) : 0}%</div>
                      <div className="text-[10px] text-gray-500">{blowMade}/{blowAtt} shots</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-center text-[10px]">
                    {["three","mid","rim","ft"].map(z => (
                      <div key={z} className="bg-slate-700/30 rounded p-1">
                        <div className={`font-bold ${zoneColor[z]}`}>{zoneLabel[z]}</div>
                        <div className="text-white">{closeByZone[z][1]>0 ? (closeByZone[z][0]+"/"+closeByZone[z][1]) : "—"}</div>
                        <div className="text-gray-600">close</div>
                        <div className="text-white">{blowByZone[z][1]>0 ? (blowByZone[z][0]+"/"+blowByZone[z][1]) : "—"}</div>
                        <div className="text-gray-600">blow</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-[10px] text-gray-500 mt-2 text-center">{games.length} games tracked • Close: CIN, ARK, IND, STN, UVA</div>
                </div>
              );
            })()}

            <div className="mt-3 pt-2 border-t border-slate-700/50 flex justify-between items-center">
              <span className="text-[9px] text-gray-600">Synergy Analysis • 2025-26</span>
              <span className="text-[9px] text-gray-600">louisville-synergy</span>
            </div>
          </div>

          <p className="text-center text-xs text-gray-500 mt-3">Screenshot this card to share on social media</p>
          </div>
            </>
          )}
        </div>
      )}

      {/* SCENARIOS TAB (Dependency + Simulator) */}
      {view === "scenarios" && (
        <div>
          <div className="flex gap-1 mb-3 justify-center">
            {[{k:"dependency",l:"Dependency"},{k:"simulator",l:"Simulator"}].map(s => (
              <button key={s.k} onClick={() => setScenarioSection(s.k)} className={`px-2 py-1 rounded text-xs ${scenarioSection === s.k ? "bg-blue-600" : "bg-slate-700"}`}>{s.l}</button>
            ))}
          </div>

          {scenarioSection === "dependency" && (
            <>
        <div>
          <div className="bg-slate-800 rounded-lg p-3 mb-3">
            <h2 className="font-bold text-yellow-400 mb-2">Play-Type Dependency</h2>
            <p className="text-gray-400 text-xs mb-2">% of possessions and % of points by play type</p>
            <table className="w-full text-xs">
              <thead>
                <tr className="text-gray-400 border-b border-slate-600">
                  <th className="text-left p-1">Play Type</th>
                  <th className="p-1">Poss</th>
                  <th className="p-1">% Poss</th>
                  <th className="p-1">% Pts</th>
                  <th className="p-1">PPP</th>
                  <th className="p-1">Status</th>
                </tr>
              </thead>
              <tbody>
                {dependencyAnalysis.map(d => (
                  <tr key={d.playType} className="border-b border-slate-700">
                    <td className="p-1 font-medium">{d.playType}</td>
                    <td className="p-1 text-center">{d.poss}</td>
                    <td className="p-1 text-center text-cyan-400">{d.pctOfPoss.toFixed(1)}%</td>
                    <td className="p-1 text-center text-green-400">{d.pctOfPts.toFixed(1)}%</td>
                    <td className={`p-1 text-center font-bold ${getPPPColor(d.ppp)}`}>{d.ppp.toFixed(2)}</td>
                    <td className="p-1 text-center text-xs">{d.dependency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-800 rounded-lg p-3 mb-3">
            <h3 className="font-semibold text-sm mb-2">Dependency Flags</h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-red-900/30 rounded p-2">
                <span className="text-red-400">🔴 Over-dependent</span>
                <p className="text-gray-400">High usage + low efficiency</p>
              </div>
              <div className="bg-yellow-900/30 rounded p-2">
                <span className="text-yellow-400">🟡 High Usage</span>
                <p className="text-gray-400">&gt;20% of possessions</p>
              </div>
              <div className="bg-green-900/30 rounded p-2">
                <span className="text-green-400">🟢 Balanced</span>
                <p className="text-gray-400">Good efficiency × volume</p>
              </div>
              <div className="bg-slate-700 rounded p-2">
                <span className="text-gray-400">⚪ Minimal</span>
                <p className="text-gray-400">&lt;5% of possessions</p>
              </div>
            </div>
          </div>
        </div>
            </>
          )}

          {scenarioSection === "simulator" && (
            <>
        <div>
          <div className="bg-slate-800 rounded-lg p-3 mb-3">
            <h2 className="font-bold text-yellow-400 mb-2">"If X Is Taken Away"</h2>
            <p className="text-gray-400 text-xs mb-2">Click a play type to simulate its removal</p>
            <div className="grid grid-cols-2 gap-2 mb-3">
              {playTypes.map(pt => (
                <button key={pt} onClick={() => setRemovedPlay(removedPlay === pt ? null : pt)} className={`p-2 rounded text-xs ${removedPlay === pt ? 'bg-red-600' : 'bg-slate-700'}`}>{pt}</button>
              ))}
            </div>
          </div>

          {simulatorResults && (
            <>
              <div className="bg-slate-800 rounded-lg p-3 mb-3">
                <h3 className="font-semibold text-red-400 mb-2">Removing: {simulatorResults.removedPlay}</h3>
                <div className="grid grid-cols-3 gap-2 text-center mb-3">
                  <div className="bg-slate-700 rounded p-2">
                    <div className="text-xs text-gray-400">Lost Poss</div>
                    <div className="text-lg font-bold text-red-400">{simulatorResults.removedPoss}</div>
                  </div>
                  <div className="bg-slate-700 rounded p-2">
                    <div className="text-xs text-gray-400">Lost Pts</div>
                    <div className="text-lg font-bold text-red-400">{simulatorResults.removedPts}</div>
                  </div>
                  <div className="bg-slate-700 rounded p-2">
                    <div className="text-xs text-gray-400">Net Impact</div>
                    <div className={`text-lg font-bold ${simulatorResults.ptsDiff >= 0 ? 'text-green-400' : 'text-red-400'}`}>{simulatorResults.ptsDiff >= 0 ? '+' : ''}{simulatorResults.ptsDiff.toFixed(0)}</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg p-3 mb-3">
                <h4 className="text-sm font-semibold text-yellow-400 mb-2">🎯 Players Who Must Step Up</h4>
                <div className="space-y-2">
                  {playerNames.filter(n => players[n].plays[removedPlay]?.poss >= 5).sort((a, b) => players[b].plays[removedPlay].poss - players[a].plays[removedPlay].poss).slice(0, 4).map(name => {
                    const lostPlay = players[name].plays[removedPlay];
                    const playerTotal = Object.values(players[name].plays).reduce((a, p) => a + p.poss, 0);
                    const pctLost = (lostPlay.poss / playerTotal * 100);
                    const alternatives = Object.entries(players[name].plays).filter(([pt]) => pt !== removedPlay && players[name].plays[pt].poss >= 3).sort((a, b) => b[1].ppp - a[1].ppp);
                    const bestAlt = alternatives[0];
                    
                    return (
                      <div key={name} className="bg-slate-700 rounded p-2">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-sm">{getDisplayName(name)}</span>
                          <span className="text-red-400 text-xs">Loses {lostPlay.poss}p ({pctLost.toFixed(0)}%)</span>
                        </div>
                        {bestAlt && (
                          <div className="text-xs text-emerald-400 mt-1">Best alt: {bestAlt[0]} ({bestAlt[1].ppp.toFixed(2)} PPP)</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          <div className="bg-slate-800 rounded-lg p-3">
            <h3 className="font-semibold text-sm mb-2">Key Vulnerabilities</h3>
            <div className="space-y-2 text-xs">
              <div className="bg-red-900/30 rounded p-2">
                <strong className="text-red-400">Spot Up removed:</strong> 321p at 1.30 PPP. McKneely loses 26%, Conwell loses 22%. Major drop.
              </div>
              <div className="bg-yellow-900/30 rounded p-2">
                <strong className="text-yellow-400">Transition removed:</strong> 313p at 0.98 PPP. Might improve if shifted to spot ups.
              </div>
              <div className="bg-blue-900/30 rounded p-2">
                <strong className="text-blue-400">Cut removed:</strong> 153p at 1.49 PPP. Fru loses 30% of his game.
              </div>
              <div className="bg-purple-900/30 rounded p-2">
                <strong className="text-purple-400">P&R removed:</strong> 203p at 0.76 PPP. Brown loses 33% of game.
              </div>
            </div>
          </div>
        </div>
            </>
          )}
        </div>
      )}

      {/* PLAYBOOK TAB (Play Types + Win/Lose + Failures + Theories) */}
      {view === "playbook" && (
        <div>
          <div className="flex gap-1 mb-3 justify-center flex-wrap">
            {[{k:"playtypes",l:"Play Types"},{k:"breakdown",l:"Breakdown"}].map(s => (
              <button key={s.k} onClick={() => setPlaybookSection(s.k)} className={`px-2 py-1 rounded text-xs ${playbookSection === s.k ? "bg-blue-600" : "bg-slate-700"}`}>{s.l}</button>
            ))}
          </div>

          {playbookSection === "playtypes" && (
        <div className="space-y-3">
          {playFrequency.map(([pt, data]) => (
            <div key={pt} className="bg-slate-800 rounded-lg p-3">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-yellow-400">{pt}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">{data.poss}p</span>
                  <span className={`font-bold ${getPPPColor(data.ppp)}`}>{data.ppp.toFixed(2)}</span>
                  <PPPBadge ppp={data.ppp} />
                </div>
              </div>
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-gray-400"><th className="text-left p-1">#</th><th className="text-left p-1">Player</th><th className="p-1">Poss</th><th className="p-1">PPP</th><th className="p-1">FG%</th></tr>
                </thead>
                <tbody>
                  {playerNames.filter(n => players[n].plays[pt]?.poss >= 2).sort((a,b) => players[b].plays[pt].ppp - players[a].plays[pt].ppp).slice(0, 5).map((n, i) => {
                    const d = players[n].plays[pt];
                    return <tr key={n} className="border-t border-slate-700"><td className="p-1 text-gray-500">{i+1}</td><td className="p-1">{getDisplayName(n)}</td><td className="p-1 text-center">{d.poss}</td><td className={`p-1 text-center font-bold ${getPPPColor(d.ppp)}`}>{d.ppp.toFixed(2)}</td><td className="p-1 text-center">{d.fgPct !== null ? d.fgPct + '%' : '-'}</td></tr>;
                  })}
                </tbody>
              </table>
            </div>
          ))}
        </div>
          )}

          {playbookSection === "breakdown" && (
        <div>
          <div className="bg-slate-800 rounded-lg p-3 mb-3">
            <h2 className="font-bold text-yellow-400 mb-2">📊 Win/Loss Formula</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-emerald-900/30 rounded p-2">
                <div className="font-semibold text-emerald-400 text-xs mb-1">Win When:</div>
                <ul className="text-xs text-gray-300 space-y-0.5">
                  <li>• 3PT% above 38%</li>
                  <li>• Fru 5+ rim touches</li>
                  <li>• Hadley leads breaks</li>
                  <li>• TOs under 12</li>
                  <li>• Wooley stays off-ball</li>
                </ul>
              </div>
              <div className="bg-red-900/30 rounded p-2">
                <div className="font-semibold text-red-400 text-xs mb-1">Lose When:</div>
                <ul className="text-xs text-gray-300 space-y-0.5">
                  <li>• 3PT% below 32%</li>
                  <li>• Wooley handles ball</li>
                  <li>• P&R TOs pile up</li>
                  <li>• Rooths shoots 3+ 3s</li>
                  <li>• Brown plays off-ball</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-3 mb-3">
            <h2 className="font-bold text-red-400 mb-2">💀 Player Failure Modes</h2>
            <p className="text-gray-400 text-xs mb-3">How each player breaks down - what to avoid. Possession counts shown for sample size context.</p>
            
            <div className="space-y-2">
              <div className="bg-red-900/20 rounded p-2 border border-red-700">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-red-400">Wooley</span>
                  <span className="text-xs bg-red-600 px-1.5 py-0.5 rounded">HIGH RISK</span>
                </div>
                <div className="text-xs text-gray-300">
                  <div>❌ P&R: 0.52 PPP, 18% FG, 6 TO <span className="text-gray-500">(31p)</span></div>
                  <div>❌ Transition: 0.83 PPP, 0% 3PT <span className="text-gray-500">(47p)</span></div>
                  <div className="text-emerald-400">✓ Safe: Cut 1.92 <span className="text-gray-500">(13p)</span>, Spot Up 1.29 <span className="text-gray-500">(34p)</span></div>
                </div>
              </div>

              <div className="bg-orange-900/20 rounded p-2 border border-orange-700">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-orange-400">M. Brown</span>
                  <span className="text-xs bg-orange-600 px-1.5 py-0.5 rounded">MED RISK</span>
                </div>
                <div className="text-xs text-gray-300">
                  <div>❌ Handoff: 0.35 PPP, 0% 3PT, 4 TO <span className="text-gray-500">(20p)</span></div>
                  <div>❌ Off Screen: 0.27 PPP, 0% 3PT <span className="text-gray-500">(15p)</span></div>
                  <div className="text-emerald-400">✓ Safe: ISO 1.17 <span className="text-gray-500">(30p)</span>, Spot Up 1.61 <span className="text-gray-500">(31p)</span></div>
                  <div className="text-yellow-500 mt-1 italic">⚠️ Low volume on both failure modes — 20p and 15p samples. Monitor but don't overreact.</div>
                </div>
              </div>

              <div className="bg-orange-900/20 rounded p-2 border border-orange-700">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-orange-400">Rooths</span>
                  <span className="text-xs bg-orange-600 px-1.5 py-0.5 rounded">MED RISK</span>
                </div>
                <div className="text-xs text-gray-300">
                  <div>❌ Spot Up: 0.65 PPP, 16% 3PT <span className="text-gray-500">(31p)</span></div>
                  <div>❌ ISO: 0.33 PPP, 20% FG <span className="text-gray-500">(6p)</span></div>
                  <div className="text-emerald-400">✓ Safe: Cut 1.50 <span className="text-gray-500">(24p)</span>, Transition 1.18 <span className="text-gray-500">(22p)</span></div>
                </div>
              </div>

              <div className="bg-orange-900/20 rounded p-2 border border-orange-700">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-orange-400">Conwell</span>
                  <span className="text-xs bg-orange-600 px-1.5 py-0.5 rounded">MED RISK</span>
                </div>
                <div className="text-xs text-gray-300">
                  <div>❌ P&R TO: 13 TO on 60p (22%) <span className="text-gray-500">(60p)</span></div>
                  <div>❌ ISO: 0.63 PPP, 18% FG <span className="text-gray-500">(22p)</span></div>
                  <div className="text-emerald-400">✓ Safe: Spot Up 1.32 <span className="text-gray-500">(62p)</span>, Off Screen 1.21 <span className="text-gray-500">(19p)</span>, Cut 1.59 <span className="text-gray-500">(17p)</span></div>
                </div>
              </div>

              <div className="bg-yellow-900/20 rounded p-2 border border-yellow-700">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-yellow-400">McKneely</span>
                  <span className="text-xs bg-yellow-600 px-1.5 py-0.5 rounded">LOW RISK</span>
                </div>
                <div className="text-xs text-gray-300">
                  <div>⚠️ P&R Handler: 0.74 PPP, 7 TO (37% rate!) <span className="text-gray-500">(19p)</span></div>
                  <div>⚠️ Transition: 0.89 PPP, 23% 3PT <span className="text-gray-500">(44p)</span></div>
                  <div className="text-emerald-400">✓ Safe: Spot Up 1.52 <span className="text-gray-500">(79p)</span>, Handoff 1.44 <span className="text-gray-500">(18p)</span></div>
                </div>
              </div>

              <div className="bg-emerald-900/20 rounded p-2 border border-emerald-700">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-emerald-400">Fru</span>
                  <span className="text-xs bg-emerald-600 px-1.5 py-0.5 rounded">STABLE</span>
                </div>
                <div className="text-xs text-gray-300">
                  <div>⚠️ Post Up: 0.73 PPP <span className="text-gray-500">(22p)</span></div>
                  <div>⚠️ P&R Handler: 0.00 PPP <span className="text-gray-500">(4p)</span></div>
                  <div className="text-emerald-400">✓ Safe: Cut 1.64 <span className="text-gray-500">(28p)</span>, Roll 1.28 <span className="text-gray-500">(32p)</span>, Putback 1.31 <span className="text-gray-500">(29p)</span></div>
                </div>
              </div>

              <div className="bg-emerald-900/20 rounded p-2 border border-emerald-700">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-emerald-400">Hadley</span>
                  <span className="text-xs bg-emerald-600 px-1.5 py-0.5 rounded">STABLE</span>
                </div>
                <div className="text-xs text-gray-300">
                  <div>⚠️ Handoff: 0.00 PPP <span className="text-gray-500">(2p)</span></div>
                  <div>⚠️ Off Screen: 0.50 PPP <span className="text-gray-500">(6p)</span></div>
                  <div className="text-emerald-400">✓ Safe: Trans 1.26 <span className="text-gray-500">(38p)</span>, Spot 1.51 <span className="text-gray-500">(37p)</span>, Post 1.03 <span className="text-gray-500">(29p)</span>, ISO 1.60 <span className="text-gray-500">(10p)</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-3">
            <h3 className="font-semibold text-sm mb-2">⚠️ Team-Level Failure Modes</h3>
            <div className="space-y-2 text-xs">
              <div className="bg-red-900/30 rounded p-2">
                <strong className="text-red-400">Mode 1: Turnover Spiral</strong>
                <p className="text-gray-300">P&R ball handling = 24% TO rate. If Brown and Conwell both turn it over early, team presses and makes more mistakes.</p>
              </div>
              <div className="bg-red-900/30 rounded p-2">
                <strong className="text-red-400">Mode 2: Cold Shooting</strong>
                <p className="text-gray-300">321 spot up possessions at 1.30 PPP. If 3s aren't falling, no reliable fallback. P&R is 0.76 PPP, transition is 0.98 PPP.</p>
              </div>
              <div className="bg-red-900/30 rounded p-2">
                <strong className="text-red-400">Mode 3: Fru Denied</strong>
                <p className="text-gray-300">If defense fronts Fru and denies cuts/rolls, team loses 1.45 PPP on 101 possessions. No other elite rim finisher.</p>
              </div>
              <div className="bg-red-900/30 rounded p-2">
                <strong className="text-red-400">Mode 4: Pace Pushed Wrong</strong>
                <p className="text-gray-300">Wooley (0.83) and McKneely (0.89) running transition instead of Hadley (1.26) = 0.40 PPP swing on 90+ possessions.</p>
              </div>
            </div>
          </div>
        </div>
          )}
        </div>
      )}

      {view === "segments" && (() => {
        const segLabels = ["20-15","15-10","10-5","5-0"];
        const allGamesRaw = segmentData;
        const allGames = segFilter === "t50" ? allGamesRaw.filter(g => opponentRankings[g.opponent] && opponentRankings[g.opponent].rank <= 50) 
                       : segFilter === "outside" ? allGamesRaw.filter(g => opponentRankings[g.opponent] && opponentRankings[g.opponent].rank > 50)
                       : allGamesRaw;
        const totals = { lou: { h1:[0,0,0,0], h2:[0,0,0,0] }, opp: { h1:[0,0,0,0], h2:[0,0,0,0] } };
        allGames.forEach(g => {
          for (let i=0;i<4;i++) { totals.lou.h1[i]+=g.lou.h1[i]; totals.lou.h2[i]+=g.lou.h2[i]; totals.opp.h1[i]+=g.opp.h1[i]; totals.opp.h2[i]+=g.opp.h2[i]; }
        });
        const n = allGames.length;
        const avg = n > 0 ? { lou: { h1: totals.lou.h1.map(v=>v/n), h2: totals.lou.h2.map(v=>v/n) }, opp: { h1: totals.opp.h1.map(v=>v/n), h2: totals.opp.h2.map(v=>v/n) } } : { lou: { h1:[0,0,0,0], h2:[0,0,0,0] }, opp: { h1:[0,0,0,0], h2:[0,0,0,0] } };
        const selGame = segGame === "all" ? null : allGamesRaw[parseInt(segGame)];
        const displayLou = selGame ? { h1: selGame.lou.h1, h2: selGame.lou.h2 } : avg.lou;
        const displayOpp = selGame ? { h1: selGame.opp.h1, h2: selGame.opp.h2 } : avg.opp;

        const diffH1 = displayLou.h1.map((v,i) => v - displayOpp.h1[i]);
        const diffH2 = displayLou.h2.map((v,i) => v - displayOpp.h2[i]);
        const fmt = (v) => selGame ? v : v.toFixed(1);

        const t50Count = allGamesRaw.filter(g => opponentRankings[g.opponent] && opponentRankings[g.opponent].rank <= 50).length;
        const outsideCount = allGamesRaw.length - t50Count;

        return (
        <div>
          <div className="bg-slate-800 rounded-lg p-3 mb-3">
            <h2 className="font-bold text-yellow-400 mb-2 text-center">5-Minute Scoring Segments</h2>
            <p className="text-amber-600/70 text-[10px] mb-2 italic text-center">⚠️ Note: Small data entry errors may occur in manual tracking. Use for directional analysis.</p>
            
            <div className="flex justify-center gap-1 mb-2">
              <button onClick={() => { setSegFilter("all"); setSegGame("all"); }} className={`px-2 py-1 rounded text-xs ${segFilter==="all"?"bg-blue-600":"bg-slate-700"}`}>All ({allGamesRaw.length})</button>
              <button onClick={() => { setSegFilter("t50"); setSegGame("all"); }} className={`px-2 py-1 rounded text-xs ${segFilter==="t50"?"bg-red-600":"bg-slate-700"}`}>T-Rank Top 50 ({t50Count})</button>
              <button onClick={() => { setSegFilter("outside"); setSegGame("all"); }} className={`px-2 py-1 rounded text-xs ${segFilter==="outside"?"bg-slate-600":"bg-slate-700"}`}>Outside 50 ({outsideCount})</button>
            </div>
            
            <div className="flex justify-center gap-1 mb-3 flex-wrap">
              <button onClick={() => setSegGame("all")} className={`px-2 py-1 rounded text-xs ${segGame==="all"?"bg-blue-600":"bg-slate-700"}`}>Season Avg ({n} games)</button>
              {allGamesRaw.map((g,i) => {
                const r = opponentRankings[g.opponent];
                const isT50 = r && r.rank <= 50;
                const dimmed = (segFilter === "t50" && !isT50) || (segFilter === "outside" && isT50);
                return (
                <button key={i} onClick={() => setSegGame(String(i))} className={`px-2 py-1 rounded text-xs ${segGame===String(i)?"bg-blue-600": dimmed ? "bg-slate-800 text-slate-600" : "bg-slate-700"}`}>
                  {g.result === "W" ? "✓" : "✗"} {g.opponent} {r ? <span className={`font-mono ${isT50?"text-red-400":"text-slate-500"}`}>#{r.rank}</span> : ""}
                </button>
                );
              })}
            </div>
            {selGame && (
              <div className="text-center mb-2">
                <span className="text-sm text-slate-300">{selGame.result === "W" ? "Win" : "Loss"} {selGame.lou_final}-{selGame.opp_final} vs {selGame.opponent}</span>
                {opponentRankings[selGame.opponent] && (
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    T-Rank #{opponentRankings[selGame.opponent].rank} • {opponentRankings[selGame.opponent].rec} • AdjOE {opponentRankings[selGame.opponent].adjOE} / AdjDE {opponentRankings[selGame.opponent].adjDE}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="bg-slate-800 rounded-lg p-3 mb-3">
            <h3 className="font-bold text-center mb-3 text-sm">Margin by Segment</h3>
            <div className="flex justify-center gap-3 mb-2 text-[10px]">
              <span className="text-green-400">▲ Louisville outscored</span>
              <span className="text-red-400">▼ Opponent outscored</span>
            </div>
            <div className="flex items-center justify-center gap-0.5" style={{height: '160px'}}>
              {[...diffH1, ...diffH2].map((d, i) => {
                const absd = Math.abs(d);
                const maxD = Math.max(...[...diffH1,...diffH2].map(v=>Math.abs(v)), 1);
                const pct = (absd / maxD) * 45;
                const isPos = d >= 0;
                return (
                  <div key={i} className="flex flex-col items-center" style={{width:'11%'}}>
                    {i === 4 && <div className="absolute" style={{left:'50%', width:'1px', height:'160px'}} />}
                    <div className="relative w-full flex flex-col items-center" style={{height:'120px'}}>
                      <div style={{position:'absolute', top:'50%', width:'100%', height:'1px'}} className="bg-slate-600"></div>
                      {isPos ? (
                        <div className="absolute bg-green-500 rounded-t" style={{bottom:'50%', height:`${pct}%`, width:'60%'}}></div>
                      ) : (
                        <div className="absolute bg-red-500 rounded-b" style={{top:'50%', height:`${pct}%`, width:'60%'}}></div>
                      )}
                    </div>
                    <span className={`text-xs font-mono font-bold mt-1 ${d>=0?"text-green-400":"text-red-400"}`}>{d>0?"+":""}{selGame?d:d.toFixed(1)}</span>
                    <span className="text-[9px] text-slate-400 font-bold">{i<4?"H1":"H2"} {segLabels[i%4]}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-3 mb-3">
            <h3 className="font-bold text-center mb-2 text-sm">Game-by-Game Breakdown</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-slate-400 border-b border-slate-600">
                    <th className="text-left p-1">Game</th>
                    <th className="p-1">Result</th>
                    {segLabels.map(l => <th key={"h1"+l} className="p-1 text-red-300">H1 {l}</th>)}
                    {segLabels.map(l => <th key={"h2"+l} className="p-1 text-yellow-300">H2 {l}</th>)}
                    <th className="p-1">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {allGames.map((g, gi) => {
                    const louTotal = g.lou_final;
                    const oppTotal = g.opp_final;
                    return (
                      <React.Fragment key={gi}>
                        <tr className="border-b border-slate-700/50">
                          <td className="p-1 font-bold text-red-400" rowSpan={2}>
                            {g.opponent}
                            {opponentRankings[g.opponent] && <span className={`text-[9px] font-mono ml-1 ${opponentRankings[g.opponent].rank <= 50 ? "text-red-300" : "text-slate-500"}`}>#{opponentRankings[g.opponent].rank}</span>}
                            <br/><span className="text-slate-500 font-normal">{g.date}</span>
                          </td>
                          <td className="p-1 text-center font-bold" rowSpan={2}>
                            <span className={g.result==="W"?"text-green-400":"text-red-400"}>{g.result} {louTotal}-{oppTotal}</span>
                          </td>
                          {g.lou.h1.map((v,i) => {
                            const d = v - g.opp.h1[i];
                            return <td key={i} className={`p-1 text-center font-mono ${d>0?"text-green-400":d<0?"text-red-400":"text-slate-300"}`}>{v}</td>;
                          })}
                          {g.lou.h2.map((v,i) => {
                            const d = v - g.opp.h2[i];
                            return <td key={i} className={`p-1 text-center font-mono ${d>0?"text-green-400":d<0?"text-red-400":"text-slate-300"}`}>{v}</td>;
                          })}
                          <td className="p-1 text-center font-bold text-red-400">{louTotal}</td>
                        </tr>
                        <tr className="border-b border-slate-600">
                          {g.opp.h1.map((v,i) => <td key={i} className="p-1 text-center font-mono text-blue-400">{v}</td>)}
                          {g.opp.h2.map((v,i) => <td key={i} className="p-1 text-center font-mono text-blue-400">{v}</td>)}
                          <td className="p-1 text-center font-bold text-blue-400">{oppTotal}</td>
                        </tr>
                      </React.Fragment>
                    );
                  })}
                  <tr className="border-t-2 border-slate-500 font-bold">
                    <td className="p-1 text-yellow-400">Season Avg</td>
                    <td className="p-1 text-center text-slate-400">{n}G</td>
                    {avg.lou.h1.map((v,i) => <td key={i} className="p-1 text-center font-mono text-red-400">{v.toFixed(1)}</td>)}
                    {avg.lou.h2.map((v,i) => <td key={i} className="p-1 text-center font-mono text-red-400">{v.toFixed(1)}</td>)}
                    <td className="p-1 text-center text-red-400">{(allGames.reduce((a,g)=>a+g.lou_final,0)/n).toFixed(1)}</td>
                  </tr>
                  <tr className="font-bold">
                    <td className="p-1"></td>
                    <td className="p-1"></td>
                    {avg.opp.h1.map((v,i) => <td key={i} className="p-1 text-center font-mono text-blue-400">{v.toFixed(1)}</td>)}
                    {avg.opp.h2.map((v,i) => <td key={i} className="p-1 text-center font-mono text-blue-400">{v.toFixed(1)}</td>)}
                    <td className="p-1 text-center text-blue-400">{(allGames.reduce((a,g)=>a+g.opp_final,0)/n).toFixed(1)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-3">
            <h3 className="font-bold text-center mb-2 text-sm">Key Patterns</h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {(() => {
                const bestSeg = [0,1,2,3,4,5,6,7].reduce((best, i) => {
                  const half = i<4?"h1":"h2";
                  const si = i%4;
                  const val = avg.lou[half][si] - avg.opp[half][si];
                  return val > best.val ? {val, i, half, si} : best;
                }, {val:-999, i:0, half:"h1", si:0});
                const worstSeg = [0,1,2,3,4,5,6,7].reduce((worst, i) => {
                  const half = i<4?"h1":"h2";
                  const si = i%4;
                  const val = avg.lou[half][si] - avg.opp[half][si];
                  return val < worst.val ? {val, i, half, si} : worst;
                }, {val:999, i:0, half:"h1", si:0});
                const h1Total = avg.lou.h1.reduce((a,b)=>a+b,0);
                const h2Total = avg.lou.h2.reduce((a,b)=>a+b,0);
                const h1OppTotal = avg.opp.h1.reduce((a,b)=>a+b,0);
                const h2OppTotal = avg.opp.h2.reduce((a,b)=>a+b,0);
                return (
                  <>
                    <div className="bg-green-900/30 rounded p-2">
                      <div className="text-green-400 font-bold">Best Segment</div>
                      <div className="text-slate-300">{bestSeg.half==="h1"?"1st":"2nd"} Half {segLabels[bestSeg.si]}</div>
                      <div className="text-green-400">+{bestSeg.val.toFixed(1)} avg margin</div>
                    </div>
                    <div className="bg-red-900/30 rounded p-2">
                      <div className="text-red-400 font-bold">Worst Segment</div>
                      <div className="text-slate-300">{worstSeg.half==="h1"?"1st":"2nd"} Half {segLabels[worstSeg.si]}</div>
                      <div className="text-red-400">{worstSeg.val.toFixed(1)} avg margin</div>
                    </div>
                    <div className="bg-slate-700/50 rounded p-2">
                      <div className="text-yellow-400 font-bold">1st Half Avg</div>
                      <div className="text-red-400">LOU: {h1Total.toFixed(1)}</div>
                      <div className="text-blue-400">OPP: {h1OppTotal.toFixed(1)}</div>
                    </div>
                    <div className="bg-slate-700/50 rounded p-2">
                      <div className="text-yellow-400 font-bold">2nd Half Avg</div>
                      <div className="text-red-400">LOU: {h2Total.toFixed(1)}</div>
                      <div className="text-blue-400">OPP: {h2OppTotal.toFixed(1)}</div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-3 mb-3">
            <h3 className="font-bold text-center mb-2 text-sm">📊 Opponent Quality (T-Rank)</h3>
            <div className="text-xs text-center text-slate-400 mb-2">Louisville: #16 (AdjOE 124.6 / AdjDE 98.4 / BARTHAG .9382)</div>
            <div className="space-y-1">
              {allGames.map((g, i) => {
                const r = opponentRankings[g.opponent];
                if (!r) return null;
                const isT50 = r.rank <= 50;
                const margin = g.lou_final - g.opp_final;
                return (
                  <div key={i} className={`flex justify-between items-center p-1.5 rounded text-xs ${isT50 ? "bg-red-900/20 border border-red-800/40" : "bg-slate-700/30"}`}>
                    <div className="flex items-center gap-2">
                      <span className={`font-mono font-bold ${isT50 ? "text-red-400" : "text-slate-500"}`}>#{r.rank}</span>
                      <span className="text-white font-semibold">{g.opponent}</span>
                      <span className="text-slate-500">{r.rec}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 font-mono text-[10px]">{r.adjOE}/{r.adjDE}</span>
                      <span className={`font-bold font-mono ${margin > 0 ? "text-green-400" : "text-red-400"}`}>{margin > 0 ? "+" : ""}{margin}</span>
                      <span className={g.result === "W" ? "text-green-500" : "text-red-500"}>{g.result}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2 text-center text-[10px]">
              <div className="bg-slate-700/50 rounded p-1.5">
                <div className="text-slate-400">Avg Opp Rank</div>
                <div className="text-white font-bold font-mono">#{Math.round(allGames.reduce((a,g) => a + (opponentRankings[g.opponent]?.rank || 0), 0) / allGames.length)}</div>
              </div>
              <div className="bg-slate-700/50 rounded p-1.5">
                <div className="text-slate-400">vs T50</div>
                <div className="text-white font-bold">{allGames.filter(g => opponentRankings[g.opponent]?.rank <= 50).filter(g => g.result==="W").length}-{allGames.filter(g => opponentRankings[g.opponent]?.rank <= 50).filter(g => g.result==="L").length}</div>
              </div>
              <div className="bg-slate-700/50 rounded p-1.5">
                <div className="text-slate-400">Avg Margin</div>
                <div className="text-green-400 font-bold font-mono">+{(allGames.reduce((a,g) => a + g.lou_final - g.opp_final, 0) / allGames.length).toFixed(1)}</div>
              </div>
            </div>
          </div>
        </div>
        );
      })()}
      {/* GAME PREP TAB */}
      {view === "prep" && (
        <div>
          <div className="bg-slate-800 rounded-lg p-3 mb-3">
            <h2 className="font-bold text-yellow-400 mb-2">🎯 Game Prep</h2>
            <p className="text-gray-400 text-xs mb-2">Select opponent to see matchup analysis</p>

            {/* Schedule overview */}
            <div className="mb-3">
              <div className="text-xs text-gray-400 font-semibold mb-1">Remaining Schedule</div>
              <div className="space-y-1">
                {fullSchedule.filter(g => !g.result).map((g, i) => {
                  const opp = opponentRankings[g.opp];
                  const isT50 = opp && opp.rank <= 50;
                  return (
                    <button key={i} onClick={() => setPrepOpponent(g.opp)}
                      className={`w-full flex items-center justify-between px-2 py-1.5 rounded text-xs ${prepOpponent === g.opp ? "bg-red-600/30 border border-red-500" : "bg-slate-700/50 hover:bg-slate-700"}`}>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500 w-12">{g.date}</span>
                        <span className={`${g.loc === "away" ? "text-gray-300" : g.loc === "neutral" ? "text-gray-300" : "text-white"}`}>
                          {g.loc === "away" ? "@ " : g.loc === "neutral" ? "vs " : ""}{g.opp}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className={`font-mono ${isT50 ? "text-red-300" : "text-gray-500"}`}>#{opp?.rank || "?"}</span>
                        <span className="text-gray-600">{opp?.rec || ""}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="text-xs text-gray-400 font-semibold mb-1">Past Opponents</div>
            <div className="flex flex-wrap gap-1">
              {fullSchedule.filter(g => g.result).map((g, i) => {
                const opp = opponentRankings[g.opp];
                const isW = g.result.startsWith("W");
                return (
                  <button key={i} onClick={() => setPrepOpponent(g.opp)}
                    className={`px-1.5 py-0.5 rounded text-[10px] ${prepOpponent === g.opp ? "bg-red-600" : "bg-slate-700"}`}>
                    <span className={isW ? "text-emerald-400" : "text-red-400"}>{isW ? "W" : "L"}</span> {g.opp}
                  </button>
                );
              })}
            </div>
          </div>

          {(() => {
            const opp = opponentRankings[prepOpponent];
            if (!opp) return null;
            const isT50 = opp.rank <= 50;

            // Find Louisville's game vs this opponent if it exists
            const gameData = segmentData.find(g => g.opponent === prepOpponent);
            
            // How Louisville performs vs similar quality opponents
            const qualityBucket = isT50 
              ? segmentData.filter(g => opponentRankings[g.opponent]?.rank <= 50)
              : segmentData.filter(g => opponentRankings[g.opponent]?.rank > 50);
            const bucketAvgMargin = qualityBucket.length > 0 ? qualityBucket.reduce((a,g) => a + g.lou_final - g.opp_final, 0) / qualityBucket.length : 0;
            const bucketRecord = `${qualityBucket.filter(g=>g.result==="W").length}-${qualityBucket.filter(g=>g.result==="L").length}`;

            return (
              <div>
                {/* Opponent Profile */}
                <div className="bg-slate-800 rounded-lg p-3 mb-3">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h3 className="font-bold text-lg">{prepOpponent}</h3>
                      <span className={`text-xs ${isT50 ? "text-red-400" : "text-gray-400"}`}>T-Rank #{opp.rank} • {opp.rec}</span>
                    </div>
                    <div className={`px-3 py-1 rounded text-sm font-bold ${isT50 ? "bg-red-600" : "bg-slate-600"}`}>
                      {isT50 ? "Top 50" : "Outside 50"}
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center text-xs">
                    <div className="bg-slate-700 rounded p-2">
                      <div className="text-gray-400">AdjOE</div>
                      <div className="text-lg font-bold text-orange-400">{opp.adjOE}</div>
                    </div>
                    <div className="bg-slate-700 rounded p-2">
                      <div className="text-gray-400">AdjDE</div>
                      <div className="text-lg font-bold text-blue-400">{opp.adjDE}</div>
                    </div>
                    <div className="bg-slate-700 rounded p-2">
                      <div className="text-gray-400">Barthag</div>
                      <div className="text-lg font-bold">{opp.barthag.toFixed(3)}</div>
                    </div>
                    <div className="bg-slate-700 rounded p-2">
                      <div className="text-gray-400">Record</div>
                      <div className="text-lg font-bold">{opp.rec}</div>
                    </div>
                  </div>
                </div>

                {/* Previous matchup if exists */}
                {gameData && (
                  <div className="bg-slate-800 rounded-lg p-3 mb-3">
                    <h3 className="font-semibold text-sm mb-2 text-emerald-400">Previous Matchup</h3>
                    <div className="flex justify-between items-center text-sm mb-2">
                      <span>Louisville <span className="font-bold text-green-400">{gameData.lou_final}</span></span>
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${gameData.result === "W" ? "bg-emerald-600" : "bg-red-600"}`}>{gameData.result}</span>
                      <span>{prepOpponent} <span className="font-bold text-red-400">{gameData.opp_final}</span></span>
                    </div>
                    <div className="text-xs text-gray-400">{gameData.date} • Margin: {gameData.lou_final - gameData.opp_final > 0 ? "+" : ""}{gameData.lou_final - gameData.opp_final}</div>
                  </div>
                )}

                {/* Louisville vs quality tier */}
                <div className="bg-slate-800 rounded-lg p-3 mb-3">
                  <h3 className="font-semibold text-sm mb-2">Louisville vs {isT50 ? "Top 50" : "Outside 50"} Teams</h3>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-slate-700 rounded p-2">
                      <div className="text-gray-400">Record</div>
                      <div className="text-lg font-bold">{bucketRecord}</div>
                    </div>
                    <div className="bg-slate-700 rounded p-2">
                      <div className="text-gray-400">Avg Margin</div>
                      <div className={`text-lg font-bold ${bucketAvgMargin >= 0 ? "text-green-400" : "text-red-400"}`}>{bucketAvgMargin >= 0 ? "+" : ""}{bucketAvgMargin.toFixed(1)}</div>
                    </div>
                    <div className="bg-slate-700 rounded p-2">
                      <div className="text-gray-400">Games</div>
                      <div className="text-lg font-bold">{qualityBucket.length}</div>
                    </div>
                  </div>
                </div>

                {/* Defensive synergy placeholder */}
                <div className="bg-slate-800 rounded-lg p-3 mb-3 border border-dashed border-slate-600">
                  <h3 className="font-semibold text-sm mb-2 text-gray-500">🔒 Opponent Defensive Synergy</h3>
                  <p className="text-gray-600 text-xs">Defensive play type data coming soon. Will show opponent's defensive efficiency by play type and Louisville's matchup advantages.</p>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-xs opacity-30">
                    {playTypes.slice(0,6).map(pt => (
                      <div key={pt} className="bg-slate-700 rounded p-2 flex justify-between">
                        <span>{pt}</span>
                        <span>— PPP allowed</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key players to watch */}
                <div className="bg-slate-800 rounded-lg p-3">
                  <h3 className="font-semibold text-sm mb-2">Louisville Key Players</h3>
                  <p className="text-gray-400 text-xs mb-2">Top performers in core play types</p>
                  {playTypes.filter(pt => teamStats[pt].poss >= 80).map(pt => {
                    const bestPlayer = playerNames.reduce((best, name) => {
                      const d = players[name].plays[pt];
                      if (!d || d.poss < 10) return best;
                      if (!best || d.ppp > players[best].plays[pt].ppp) return name;
                      return best;
                    }, null);
                    if (!bestPlayer) return null;
                    const d = players[bestPlayer].plays[pt];
                    return (
                      <div key={pt} className="flex items-center justify-between bg-slate-700 rounded p-2 mb-1 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-yellow-400 font-semibold w-28">{pt}</span>
                          <span className="text-white">{getDisplayName(bestPlayer)}</span>
                        </div>
                        <span className={`font-bold ${getPPPColor(d.ppp)}`}>{d.ppp.toFixed(2)} PPP ({d.poss}p)</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })()}
        </div>
      )}
      {/* PROFILES TAB */}
      {view === "profile" && (
        <div>
          <select value={selectedPlayer} onChange={e => setSelectedPlayer(e.target.value)} className="w-full max-w-md mx-auto block p-2 mb-3 bg-slate-800 border border-slate-600 rounded">
            {playerNames.map(name => <option key={name} value={name}>{name}</option>)}
          </select>

          <div className="bg-slate-800 rounded-lg p-3 mb-3">
            <div className="flex justify-between items-center mb-2">
              <div>
                <div className="text-lg font-bold">{selectedPlayer}</div>
                <div className="text-gray-400 text-xs">{players[selectedPlayer].position} • {playerRoles[selectedPlayer].primary}</div>
              </div>
              <span className={`px-3 py-1 rounded ${getTierColor(playerRoles[selectedPlayer].tier)}`}>Tier {playerRoles[selectedPlayer].tier}</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              <RadarChart data={playerRadar} title="Efficiency" color="#10b981" size={160} />
              <RadarChart data={playerUsage} title="Usage %" color="#3b82f6" size={160} />
            </div>
            
            <div className="grid grid-cols-4 gap-2 text-center text-xs mt-3">
              <div className="bg-slate-700 rounded p-2">
                <div className="text-gray-400">Games</div>
                <div className="text-lg font-bold">{player.games}</div>
              </div>
              <div className="bg-slate-700 rounded p-2">
                <div className="text-gray-400">Poss</div>
                <div className="text-lg font-bold text-cyan-400">{Object.values(player.plays).reduce((a, p) => a + p.poss, 0)}</div>
              </div>
              <div className="bg-slate-700 rounded p-2">
                <div className="text-gray-400">Points</div>
                <div className="text-lg font-bold text-green-400">{Object.values(player.plays).reduce((a, p) => a + p.pts, 0)}</div>
              </div>
              <div className="bg-slate-700 rounded p-2">
                <div className="text-gray-400">PPP</div>
                <div className={`text-lg font-bold ${getPPPColor(Object.values(player.plays).reduce((a, p) => a + p.pts, 0) / Object.values(player.plays).reduce((a, p) => a + p.poss, 0))}`}>
                  {(Object.values(player.plays).reduce((a, p) => a + p.pts, 0) / Object.values(player.plays).reduce((a, p) => a + p.poss, 0)).toFixed(2)}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-3 mb-3">
            <h3 className="font-semibold text-sm mb-2">Tendencies</h3>
            {(() => {
              const t = playerTendencies.find(p => p.name === selectedPlayer);
              if (!t) return null;
              return (
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-700 rounded p-2">
                    <div className="text-gray-400 mb-1">Shot Diet</div>
                    <div className="flex h-3 rounded overflow-hidden mb-1">
                      <div className="bg-orange-500" style={{width: `${t.rimPct}%`}}></div>
                      <div className="bg-yellow-500" style={{width: `${t.midPct}%`}}></div>
                      <div className="bg-cyan-500" style={{width: `${t.threePct}%`}}></div>
                    </div>
                    <div className="flex justify-between text-gray-500">
                      <span>Rim {t.rimPct.toFixed(0)}%</span>
                      <span>3PT {t.threePct.toFixed(0)}%</span>
                    </div>
                  </div>
                  <div className="bg-slate-700 rounded p-2">
                    <div className="text-gray-400 mb-1">Risk Profile</div>
                    <div className="flex justify-between">
                      <span>TO: {t.toPct.toFixed(1)}%</span>
                      <span className={`font-bold ${t.riskLabel === "High" ? 'text-red-400' : t.riskLabel === "Med" ? 'text-yellow-400' : 'text-emerald-400'}`}>{t.riskLabel} Risk</span>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          <div className="space-y-2">
            {Object.entries(player.plays).sort((a, b) => b[1].poss - a[1].poss).map(([playName, data]) => (
              <div key={playName} className="bg-slate-800 rounded p-3">
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-yellow-400">{playName}</span>
                    <PPPBadge ppp={data.ppp} />
                  </div>
                  <span className={`font-bold ${getPPPColor(data.ppp)}`}>{data.ppp.toFixed(2)} PPP</span>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>{data.poss} poss • {data.pts} pts • {data.to} TO</span>
                  <span>{data.fgPct !== null ? `${data.fgPct}% FG` : ''}</span>
                </div>
                <div className="mt-2 bg-slate-700 h-1.5 rounded">
                  <div className="bg-blue-500 h-1.5 rounded" style={{width: `${(data.poss / Object.values(player.plays).reduce((a, p) => a + p.poss, 0)) * 100}%`}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
