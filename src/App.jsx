import { useState, useEffect, useContext, createContext, useReducer } from "react";

const AppContext = createContext();

// SVG Product Images inline
const ProductSVG = ({ id, size = 80 }) => {
  const s = size;
  const svgs = {
    1: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><ellipse cx="50" cy="58" rx="26" ry="20" stroke="#a78bfa" strokeWidth="3" fill="none"/><path d="M24 58 C24 35 76 35 76 58" stroke="#7c3aed" strokeWidth="3.5" fill="none" strokeLinecap="round"/><rect x="15" y="52" width="12" height="18" rx="6" fill="#7c3aed"/><rect x="73" y="52" width="12" height="18" rx="6" fill="#7c3aed"/><circle cx="50" cy="20" r="4" fill="#a78bfa" opacity="0.5"/></svg>,
    2: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="38" y="8" width="24" height="12" rx="3" fill="#4c1d95"/><rect x="38" y="80" width="24" height="12" rx="3" fill="#4c1d95"/><circle cx="50" cy="50" r="28" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="3"/><circle cx="50" cy="50" r="22" fill="#0d0820" stroke="#a78bfa" strokeWidth="1"/><line x1="50" y1="50" x2="50" y2="34" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round"/><line x1="50" y1="50" x2="62" y2="50" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/><circle cx="50" cy="50" r="3" fill="#a78bfa"/></svg>,
    3: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="8" y="30" width="84" height="44" rx="6" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2"/>{[0,1,2,3,4,5,6,7,8,9].map(i=><rect key={i} x={12+i*8} y={38} width="6" height="6" rx="1.5" fill="#7c3aed" opacity="0.8"/>)}{[0,1,2,3,4,5,6,7,8].map(i=><rect key={i} x={14+i*8} y={48} width="6" height="6" rx="1.5" fill="#5b21b6" opacity="0.8"/>)}{[0,1,2,3,4,5,6].map(i=><rect key={i} x={16+i*8} y={58} width="6" height="6" rx="1.5" fill="#4c1d95" opacity="0.8"/>)}<rect x="30" y="65" width="40" height="5" rx="2.5" fill="#7c3aed" opacity="0.6"/></svg>,
    4: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><path d="M5 50 L20 50" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round"/><path d="M80 50 L95 50" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round"/><ellipse cx="30" cy="50" rx="18" ry="14" fill="#0d0820" stroke="#a78bfa" strokeWidth="2.5"/><ellipse cx="70" cy="50" rx="18" ry="14" fill="#0d0820" stroke="#a78bfa" strokeWidth="2.5"/><line x1="48" y1="50" x2="52" y2="50" stroke="#7c3aed" strokeWidth="2.5"/><ellipse cx="30" cy="50" rx="18" ry="14" fill="#7c3aed" opacity="0.15"/><ellipse cx="70" cy="50" rx="18" ry="14" fill="#7c3aed" opacity="0.15"/></svg>,
    5: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="22" y="25" width="56" height="60" rx="12" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5"/><path d="M38 25 C38 15 62 15 62 25" stroke="#7c3aed" strokeWidth="2.5" fill="none"/><rect x="32" y="42" width="36" height="22" rx="6" fill="none" stroke="#a78bfa" strokeWidth="1.5"/><line x1="50" y1="42" x2="50" y2="64" stroke="#a78bfa" strokeWidth="1.5"/><circle cx="50" cy="53" r="3" fill="#7c3aed"/></svg>,
    6: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><path d="M35 70 C25 70 20 55 20 45 C20 28 33 18 50 18 C67 18 80 28 80 45 C80 55 75 70 65 70 Z" fill="#0d0820" stroke="#7c3aed" strokeWidth="2.5"/><line x1="50" y1="18" x2="50" y2="48" stroke="#a78bfa" strokeWidth="1.5"/><ellipse cx="50" cy="32" rx="8" ry="5" fill="none" stroke="#7c3aed" strokeWidth="1.5"/><circle cx="50" cy="32" r="3" fill="#a78bfa" opacity="0.7"/></svg>,
    7: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="25" y="88" width="50" height="6" rx="3" fill="#4c1d95"/><rect x="46" y="65" width="8" height="24" rx="4" fill="#7c3aed"/><path d="M50 65 C50 65 30 52 28 38" stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" fill="none"/><path d="M28 38 C20 24 38 14 50 20" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round" fill="none"/><ellipse cx="44" cy="22" rx="20" ry="10" fill="#1a0d2e" stroke="#a78bfa" strokeWidth="2" transform="rotate(-20 44 22)"/><ellipse cx="44" cy="22" rx="16" ry="7" fill="#fef08a" opacity="0.25" transform="rotate(-20 44 22)"/></svg>,
    8: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="12" y="32" width="72" height="46" rx="7" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5"/><rect x="54" y="44" width="30" height="22" rx="5" fill="#0d0820" stroke="#a78bfa" strokeWidth="1.5"/><circle cx="72" cy="55" r="5" fill="#7c3aed" opacity="0.6"/><rect x="12" y="42" width="32" height="2" rx="1" fill="#a78bfa" opacity="0.4"/><rect x="12" y="48" width="24" height="2" rx="1" fill="#a78bfa" opacity="0.3"/><rect x="12" y="28" width="72" height="8" rx="3" fill="#4c1d95"/></svg>,
    9: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><path d="M10 68 C10 68 30 40 50 38 C70 36 85 46 90 58 C92 63 88 68 80 68 Z" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5"/><path d="M20 68 C20 55 35 45 50 44" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" fill="none" strokeDasharray="4 3"/><path d="M80 68 L10 68" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round"/><ellipse cx="70" cy="52" rx="12" ry="8" fill="#7c3aed" opacity="0.2"/></svg>,
    10: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="28" y="20" width="44" height="65" rx="14" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5"/><circle cx="50" cy="48" r="16" fill="none" stroke="#a78bfa" strokeWidth="1.5"/><circle cx="50" cy="48" r="10" fill="none" stroke="#7c3aed" strokeWidth="1.5"/><circle cx="50" cy="48" r="4" fill="#a78bfa" opacity="0.7"/><rect x="38" y="72" width="24" height="5" rx="2.5" fill="#4c1d95"/></svg>,
    11: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="32" y="35" width="36" height="52" rx="8" fill="#1a0d2e" stroke="#a78bfa" strokeWidth="2"/><rect x="40" y="25" width="20" height="12" rx="4" fill="#4c1d95" stroke="#7c3aed" strokeWidth="1.5"/><rect x="46" y="18" width="8" height="10" rx="3" fill="#7c3aed"/><ellipse cx="50" cy="60" rx="10" ry="14" fill="#a78bfa" opacity="0.12"/><path d="M38 52 Q50 46 62 52" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" fill="none"/></svg>,
    12: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="20" y="15" width="58" height="72" rx="4" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5"/><rect x="20" y="15" width="10" height="72" rx="3" fill="#4c1d95"/>{[25,30,35,40,45,50,55].map(y=><circle key={y} cx="25" cy={y} r="2" fill="#7c3aed" opacity="0.7"/>)}{[30,38,46,54,62,70].map(y=><line key={y} x1="36" y1={y} x2="72" y2={y} stroke="#a78bfa" strokeWidth="1" opacity="0.4"/>)}</svg>,
    13: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="36" y="38" width="28" height="18" rx="5" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2"/><circle cx="22" cy="36" r="10" fill="none" stroke="#a78bfa" strokeWidth="2"/><circle cx="78" cy="36" r="10" fill="none" stroke="#a78bfa" strokeWidth="2"/><circle cx="22" cy="64" r="10" fill="none" stroke="#a78bfa" strokeWidth="2"/><circle cx="78" cy="64" r="10" fill="none" stroke="#a78bfa" strokeWidth="2"/><line x1="32" y1="40" x2="36" y2="44" stroke="#7c3aed" strokeWidth="2"/><line x1="68" y1="40" x2="64" y2="44" stroke="#7c3aed" strokeWidth="2"/><line x1="32" y1="60" x2="36" y2="56" stroke="#7c3aed" strokeWidth="2"/><line x1="68" y1="60" x2="64" y2="56" stroke="#7c3aed" strokeWidth="2"/><circle cx="50" cy="47" r="5" fill="#7c3aed"/><circle cx="50" cy="47" r="2" fill="#a78bfa"/></svg>,
    14: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="34" y="10" width="16" height="10" rx="3" fill="#4c1d95"/><rect x="34" y="80" width="16" height="10" rx="3" fill="#4c1d95"/><rect x="28" y="25" width="44" height="52" rx="10" fill="#0d0820" stroke="#7c3aed" strokeWidth="2.5"/><rect x="32" y="29" width="36" height="44" rx="7" fill="#1a0d2e"/><path d="M38 58 L43 48 L48 54 L53 42 L58 50 L63 46" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/><text x="50" y="38" textAnchor="middle" fill="#a78bfa" fontSize="9" fontWeight="bold">98</text></svg>,
    15: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="8" y="15" width="84" height="56" rx="5" fill="#0d0820" stroke="#7c3aed" strokeWidth="2.5"/><rect x="12" y="19" width="76" height="48" rx="3" fill="#12121e"/><rect x="40" y="71" width="20" height="12" rx="2" fill="#4c1d95"/><rect x="28" y="83" width="44" height="5" rx="2.5" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="1.5"/><rect x="16" y="23" width="68" height="40" rx="2" fill="#1a0d2e"/><text x="50" y="46" textAnchor="middle" fill="#7c3aed" fontSize="11" fontWeight="bold">LUXE</text></svg>,
    16: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="22" y="25" width="56" height="52" rx="14" fill="#0d0820" stroke="#7c3aed" strokeWidth="2"/><ellipse cx="36" cy="52" rx="9" ry="13" fill="#1a0d2e" stroke="#a78bfa" strokeWidth="1.5"/><ellipse cx="64" cy="52" rx="9" ry="13" fill="#1a0d2e" stroke="#a78bfa" strokeWidth="1.5"/><circle cx="36" cy="52" r="4" fill="#7c3aed"/><circle cx="64" cy="52" r="4" fill="#7c3aed"/><circle cx="36" cy="52" r="2" fill="#a78bfa"/><circle cx="64" cy="52" r="2" fill="#a78bfa"/><rect x="43" y="30" width="14" height="3" rx="1.5" fill="#4c1d95"/></svg>,
    17: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="8" y="15" width="84" height="56" rx="5" fill="#0d0820" stroke="#7c3aed" strokeWidth="2.5"/><rect x="12" y="19" width="76" height="48" rx="3" fill="#12121e"/><rect x="40" y="71" width="20" height="12" rx="2" fill="#4c1d95"/><rect x="28" y="83" width="44" height="5" rx="2.5" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="1.5"/><text x="50" y="48" textAnchor="middle" fill="#7c3aed" fontSize="13" fontWeight="bold">4K</text><rect x="16" y="23" width="68" height="40" rx="2" fill="#1a0d2e"/><text x="50" y="48" textAnchor="middle" fill="#a78bfa" fontSize="13" fontWeight="bold">4K</text></svg>,
    18: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="12" y="32" width="76" height="48" rx="8" fill="#0d0820" stroke="#7c3aed" strokeWidth="2.5"/><path d="M36 32 L42 22 L58 22 L64 32" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2"/><circle cx="50" cy="56" r="18" fill="none" stroke="#a78bfa" strokeWidth="2"/><circle cx="50" cy="56" r="12" fill="none" stroke="#7c3aed" strokeWidth="2"/><circle cx="50" cy="56" r="7" fill="#1a0d2e"/><circle cx="50" cy="56" r="4" fill="#7c3aed" opacity="0.6"/><circle cx="24" cy="42" r="4" fill="#1a0d2e" stroke="#a78bfa" strokeWidth="1.5"/><circle cx="24" cy="42" r="2" fill="#22c55e" opacity="0.8"/></svg>,
    19: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><path d="M20 50 C15 38 18 25 30 22 L70 22 C82 25 85 38 80 50 L70 70 C65 76 35 76 30 70 Z" fill="#0d0820" stroke="#7c3aed" strokeWidth="2.5"/><rect x="28" y="38" width="14" height="3" rx="1.5" fill="#a78bfa"/><rect x="33" y="33" width="3" height="14" rx="1.5" fill="#a78bfa"/><circle cx="66" cy="36" r="4" fill="none" stroke="#22c55e" strokeWidth="1.5"/><circle cx="72" cy="42" r="4" fill="none" stroke="#ef4444" strokeWidth="1.5"/><circle cx="60" cy="42" r="4" fill="none" stroke="#3b82f6" strokeWidth="1.5"/><circle cx="66" cy="48" r="4" fill="none" stroke="#f59e0b" strokeWidth="1.5"/><ellipse cx="38" cy="58" rx="8" ry="5" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="1"/><ellipse cx="62" cy="58" rx="8" ry="5" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="1"/></svg>,
    20: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="18" y="10" width="64" height="82" rx="8" fill="#0d0820" stroke="#7c3aed" strokeWidth="2.5"/><rect x="22" y="18" width="56" height="66" rx="4" fill="#12121e"/><circle cx="50" cy="88" r="3" fill="#4c1d95"/><rect x="26" y="22" width="48" height="58" rx="2" fill="#1a0d2e"/>{[30,42,54,66].map(y=><line key={y} x1="30" y1={y} x2="70" y2={y} stroke="#a78bfa" strokeWidth="0.8" opacity="0.35"/>)}<rect x="30" y="26" width="32" height="6" rx="2" fill="#7c3aed" opacity="0.4"/></svg>,
    21: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="8" y="44" width="70" height="14" rx="5" fill="#3b1f0a" stroke="#a78bfa" strokeWidth="2"/><rect x="72" y="40" width="18" height="22" rx="4" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2"/><rect x="76" y="44" width="10" height="14" rx="2" fill="#0d0820"/><line x1="81" y1="44" x2="81" y2="58" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round"/>{[20,30,40,50].map(x=><circle key={x} cx={x} cy={51} r="2.5" fill="#a78bfa" opacity="0.5"/>)}</svg>,
    22: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><ellipse cx="50" cy="62" rx="44" ry="10" fill="#0d0820" stroke="#7c3aed" strokeWidth="2"/><path d="M14 62 C14 40 86 40 86 62" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5"/><path d="M14 62 C14 40 50 35 50 62" fill="#0d0820"/><ellipse cx="50" cy="38" rx="12" ry="5" fill="#7c3aed" opacity="0.4"/><rect x="38" y="55" width="24" height="4" rx="2" fill="#4c1d95"/></svg>,
    23: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="20" y="44" width="58" height="12" rx="6" fill="#1a0d2e" stroke="#a78bfa" strokeWidth="2"/><ellipse cx="78" cy="50" rx="6" ry="4" fill="#4c1d95"/><path d="M78 46 L90 48 L90 52 L78 54 Z" fill="#a78bfa" opacity="0.7"/><path d="M88 48 L95 50 L88 52" fill="#fef08a" opacity="0.6"/><rect x="28" y="46" width="3" height="8" rx="1.5" fill="#a78bfa" opacity="0.5"/><rect x="34" y="46" width="3" height="8" rx="1.5" fill="#a78bfa" opacity="0.5"/></svg>,
    24: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="26" fill="none" stroke="#7c3aed" strokeWidth="6"/><circle cx="50" cy="50" r="26" fill="none" stroke="#a78bfa" strokeWidth="2" strokeDasharray="8 4"/>{[0,45,90,135,180,225,270,315].map((a,i)=><circle key={i} cx={50+26*Math.sin(a*Math.PI/180)} cy={50-26*Math.cos(a*Math.PI/180)} r="4" fill={i%2===0?"#7c3aed":"#a78bfa"}/>)}<circle cx="50" cy="24" r="6" fill="#fef08a" opacity="0.7"/></svg>,
    25: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><path d="M20 40 L15 85 L85 85 L80 40 Z" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5"/><path d="M35 40 C35 25 65 25 65 40" fill="none" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round"/><line x1="38" y1="55" x2="62" y2="55" stroke="#a78bfa" strokeWidth="1.5" opacity="0.5"/><line x1="36" y1="63" x2="64" y2="63" stroke="#a78bfa" strokeWidth="1.5" opacity="0.4"/><rect x="44" y="70" width="12" height="10" rx="3" fill="#4c1d95"/></svg>,
    26: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><ellipse cx="50" cy="58" rx="40" ry="26" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5"/><ellipse cx="50" cy="52" rx="40" ry="20" fill="#0d0820" stroke="#7c3aed" strokeWidth="2"/><path d="M25 45 C25 38 75 38 75 45" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"/><rect x="38" y="22" width="24" height="20" rx="8" fill="none" stroke="#a78bfa" strokeWidth="2.5"/><rect x="44" y="48" width="12" height="8" rx="3" fill="#4c1d95" stroke="#7c3aed" strokeWidth="1"/></svg>,
    27: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="12" y="30" width="76" height="58" rx="8" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5"/><path d="M35 30 C35 18 65 18 65 30" fill="none" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round"/><rect x="20" y="42" width="60" height="34" rx="5" fill="#0d0820" stroke="#a78bfa" strokeWidth="1.5"/><rect x="24" y="46" width="52" height="26" rx="3" fill="#12121e"/><rect x="40" y="58" width="20" height="4" rx="2" fill="#4c1d95"/></svg>,
    28: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><path d="M30 18 L20 35 L15 75 L85 75 L80 35 L70 18 C65 25 58 28 50 28 C42 28 35 25 30 18 Z" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5"/><path d="M30 18 C28 12 20 10 15 15 L20 35" fill="#0d0820" stroke="#7c3aed" strokeWidth="2"/><path d="M70 18 C72 12 80 10 85 15 L80 35" fill="#0d0820" stroke="#7c3aed" strokeWidth="2"/><rect x="42" y="44" width="16" height="20" rx="4" fill="#0d0820" stroke="#a78bfa" strokeWidth="1"/></svg>,
    29: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><path d="M35 15 L15 30 L25 40 L35 33 L35 80 L65 80 L65 33 L75 40 L85 30 L65 15 C63 22 56 26 50 26 C44 26 37 22 35 15 Z" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5"/><path d="M40 50 Q50 56 60 50" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    30: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><path d="M20 18 L22 55 L35 90 L50 88 L50 55 L50 88 L65 90 L78 55 L80 18 Z" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5"/><rect x="20" y="18" width="60" height="10" rx="4" fill="#4c1d95"/><line x1="50" y1="28" x2="50" y2="88" stroke="#a78bfa" strokeWidth="1.5" opacity="0.5"/></svg>,
    31: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="28" y="50" width="44" height="38" rx="6" fill="#1a0d2e" stroke="#a78bfa" strokeWidth="2"/><ellipse cx="50" cy="50" rx="22" ry="6" fill="#0d0820" stroke="#a78bfa" strokeWidth="1.5"/><line x1="50" y1="44" x2="50" y2="32" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/><path d="M50 32 C46 25 44 18 50 14 C56 18 54 25 50 32" fill="#f59e0b" opacity="0.8"/><path d="M50 26 C48 22 50 18 50 18 C50 18 52 22 50 26" fill="#fef08a" opacity="0.9"/></svg>,
    32: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="32" y="68" width="36" height="20" rx="5" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2"/><line x1="50" y1="68" x2="50" y2="42" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round"/><path d="M50 55 C50 55 35 48 32 38 C38 30 50 36 50 42" fill="#22c55e" opacity="0.7"/><path d="M50 50 C50 50 65 43 68 33 C62 25 50 31 50 37" fill="#16a34a" opacity="0.8"/><path d="M50 65 C50 65 38 58 36 48 C42 42 50 48 50 54" fill="#4ade80" opacity="0.6"/></svg>,
    33: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="15" y="25" width="70" height="54" rx="12" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5"/><rect x="20" y="30" width="60" height="44" rx="8" fill="#0d0820" stroke="#a78bfa" strokeWidth="1"/><circle cx="50" cy="52" r="10" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="3 3"/><circle cx="50" cy="52" r="4" fill="#4c1d95"/>{[15,35,65,85].map((x,i)=><circle key={i} cx={x} cy={i<2?25:79} r="3" fill="#7c3aed" opacity="0.7"/>)}</svg>,
    34: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="25" y="20" width="50" height="68" rx="8" fill="#0d0820" stroke="#7c3aed" strokeWidth="2.5"/><rect x="30" y="26" width="40" height="24" rx="5" fill="#1a0d2e" stroke="#a78bfa" strokeWidth="1.5"/><circle cx="50" cy="38" r="10" fill="#12121e" stroke="#7c3aed" strokeWidth="1.5"/><circle cx="50" cy="38" r="6" fill="#3b1f0a" opacity="0.8"/><rect x="32" y="56" width="36" height="22" rx="4" fill="#1a0d2e"/><path d="M42 67 L58 67" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"/></svg>,
    35: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="15" y="40" width="28" height="48" rx="6" fill="#1a0d2e" stroke="#a78bfa" strokeWidth="2"/><rect x="57" y="35" width="28" height="53" rx="6" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2"/><rect x="15" y="32" width="28" height="12" rx="4" fill="#4c1d95" stroke="#a78bfa" strokeWidth="1"/><rect x="57" y="26" width="28" height="13" rx="4" fill="#4c1d95" stroke="#7c3aed" strokeWidth="1"/><ellipse cx="29" cy="64" rx="8" ry="10" fill="#7c3aed" opacity="0.1"/><ellipse cx="71" cy="62" rx="8" ry="12" fill="#a78bfa" opacity="0.1"/></svg>,
    36: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="38" y="55" width="24" height="32" rx="5" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2"/><rect x="38" y="45" width="24" height="15" rx="3" fill="#4c1d95" stroke="#a78bfa" strokeWidth="1.5"/><path d="M38 45 L44 22 L56 22 L62 45" fill="#dc2626" stroke="#ef4444" strokeWidth="1.5"/><ellipse cx="50" cy="22" rx="6" ry="3" fill="#ef4444"/></svg>,
    37: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><ellipse cx="50" cy="50" rx="12" ry="42" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5" transform="rotate(-15 50 50)"/><ellipse cx="50" cy="50" rx="9" ry="39" fill="#0d0820" stroke="#a78bfa" strokeWidth="1" transform="rotate(-15 50 50)"/>{[-3,-1,1,3].map(i=><ellipse key={i} cx={50+i*2} cy={50+i*2} rx="6" ry="36" fill="none" stroke="#7c3aed" strokeWidth="0.7" opacity="0.4" transform="rotate(-15 50 50)"/>)}</svg>,
    38: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="42" y="44" width="16" height="12" rx="3" fill="#4c1d95"/><rect x="22" y="36" width="14" height="28" rx="5" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2"/><rect x="12" y="42" width="14" height="16" rx="5" fill="#7c3aed"/><rect x="64" y="36" width="14" height="28" rx="5" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2"/><rect x="74" y="42" width="14" height="16" rx="5" fill="#7c3aed"/><line x1="36" y1="50" x2="64" y2="50" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round"/></svg>,
    39: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="34" y="30" width="32" height="60" rx="10" fill="#0d0820" stroke="#7c3aed" strokeWidth="2.5"/><rect x="38" y="30" width="24" height="60" rx="8" fill="#7c3aed" opacity="0.08"/><rect x="38" y="18" width="24" height="16" rx="5" fill="#1a0d2e" stroke="#a78bfa" strokeWidth="1.5"/><rect x="44" y="12" width="12" height="10" rx="5" fill="#4c1d95"/><rect x="38" y="50" width="24" height="3" rx="1.5" fill="#a78bfa" opacity="0.4"/><rect x="38" y="58" width="24" height="3" rx="1.5" fill="#a78bfa" opacity="0.3"/><ellipse cx="50" cy="72" rx="10" ry="14" fill="#7c3aed" opacity="0.12"/></svg>,
    40: <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="10" y="72" width="80" height="14" rx="4" fill="#0d0820" stroke="#7c3aed" strokeWidth="2"/><rect x="14" y="48" width="18" height="26" rx="3" fill="#1a0d2e" stroke="#a78bfa" strokeWidth="1.5"/><rect x="36" y="38" width="18" height="36" rx="3" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="1.5"/><rect x="58" y="54" width="18" height="20" rx="3" fill="#1a0d2e" stroke="#a78bfa" strokeWidth="1.5"/><line x1="20" y1="48" x2="20" y2="64" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/><line x1="24" y1="48" x2="24" y2="60" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"/><line x1="44" y1="38" x2="44" y2="62" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  };
  const fallback = <svg width={s} height={s} viewBox="0 0 100 100" fill="none"><rect x="20" y="20" width="60" height="60" rx="10" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2"/><text x="50" y="56" textAnchor="middle" fill="#a78bfa" fontSize="22">?</text></svg>;
  return <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}}>{svgs[id] || fallback}</div>;
};

const PRODUCTS = [
  { id:1,  name:"Obsidian Wireless Headphones", price:299.99, category:"Electronics",  stock:15, rating:4.8, reviews:124, description:"Premium noise-cancelling headphones with 30hr battery and spatial audio.", badge:"Best Seller" },
  { id:2,  name:"Noir Leather Watch",           price:549.00, category:"Accessories",  stock:8,  rating:4.9, reviews:87,  description:"Handcrafted Italian leather strap, sapphire crystal, automatic movement.", badge:"Limited" },
  { id:3,  name:"Shadow Mechanical Keyboard",   price:189.99, category:"Electronics",  stock:22, rating:4.7, reviews:203, description:"Full aluminum body, tactile switches, per-key RGB, wireless.", badge:"" },
  { id:4,  name:"Eclipse Sunglasses",           price:249.00, category:"Accessories",  stock:30, rating:4.6, reviews:56,  description:"UV400 polarized lenses, lightweight titanium frame, matte black.", badge:"New" },
  { id:5,  name:"Phantom Slim Backpack",        price:179.99, category:"Bags",         stock:18, rating:4.8, reviews:91,  description:"16L ultra-slim with laptop sleeve, hidden pockets, waterproof.", badge:"" },
  { id:6,  name:"Vortex Gaming Mouse",          price:89.99,  category:"Electronics",  stock:45, rating:4.7, reviews:312, description:"25K DPI optical sensor, 8 programmable buttons, ultra-light 58g.", badge:"Top Rated" },
  { id:7,  name:"Abyss Desk Lamp",             price:129.00, category:"Home",          stock:14, rating:4.5, reviews:67,  description:"Articulating LED arm, touch dimming, wireless charging base, USB-C hub.", badge:"" },
  { id:8,  name:"Carbon Fiber Wallet",          price:79.99,  category:"Accessories",  stock:50, rating:4.6, reviews:178, description:"RFID-blocking carbon fiber, 8 cards, ultra-slim 3mm profile.", badge:"" },
  { id:9,  name:"Stealth Running Shoes",        price:219.99, category:"Apparel",      stock:25, rating:4.8, reviews:445, description:"Responsive foam midsole, breathable knit upper, engineered for speed.", badge:"Popular" },
  { id:10, name:"Nexus Smart Speaker",          price:159.00, category:"Electronics",  stock:20, rating:4.4, reviews:89,  description:"360° spatial audio, far-field voice recognition, smart home hub.", badge:"" },
  { id:11, name:"Obsidian Fragrance",           price:149.99, category:"Beauty",       stock:40, rating:4.9, reviews:234, description:"Dark woody notes: bergamot, oud, cedarwood. 100ml EDP. Vegan.", badge:"New" },
  { id:12, name:"Void Notebook Set",            price:49.99,  category:"Stationery",   stock:100,rating:4.7, reviews:156, description:"A5 lay-flat, dotted grid, 180gsm fountain pen paper, set of 3.", badge:"" },
  { id:13, name:"Eclipse Drone Pro",            price:699.00, category:"Electronics",  stock:10, rating:4.8, reviews:62,  description:"4K stabilised camera, 30min flight, obstacle avoidance, foldable.", badge:"New" },
  { id:14, name:"Pulse Fitness Watch",          price:249.99, category:"Electronics",  stock:28, rating:4.7, reviews:193, description:"Heart rate, SpO2, GPS, 7-day battery, water resistant to 50m.", badge:"" },
  { id:15, name:"Noir Slim Laptop",             price:1299.00,category:"Electronics",  stock:7,  rating:4.9, reviews:44,  description:"14\" OLED, Intel Core Ultra 7, 32GB RAM, 1TB SSD, 1.2kg.", badge:"Limited" },
  { id:16, name:"Shadow Wireless Earbuds",      price:179.99, category:"Electronics",  stock:35, rating:4.6, reviews:287, description:"Active noise cancellation, 8+24h battery, IPX5, custom EQ app.", badge:"" },
  { id:17, name:"Void 4K Monitor",             price:599.00, category:"Electronics",  stock:12, rating:4.8, reviews:75,  description:"27\" 4K IPS, 144Hz, 1ms, USB-C 90W, VESA mount, factory calibrated.", badge:"Top Rated" },
  { id:18, name:"Phantom DSLR Camera",         price:849.00, category:"Electronics",  stock:9,  rating:4.9, reviews:51,  description:"24.2MP full-frame, 4K video, dual card slots, weather sealed body.", badge:"" },
  { id:19, name:"Abyss Gaming Controller",     price:79.99,  category:"Electronics",  stock:42, rating:4.6, reviews:334, description:"Haptic feedback, adaptive triggers, 40h battery, multi-platform.", badge:"" },
  { id:20, name:"Nexus Pro Tablet",            price:749.00, category:"Electronics",  stock:16, rating:4.7, reviews:108, description:"12.9\" AMOLED, Snapdragon 8 Gen 3, 5G, 256GB, stylus included.", badge:"New" },
  { id:21, name:"Obsidian Leather Belt",       price:89.00,  category:"Accessories",  stock:60, rating:4.5, reviews:43,  description:"Full-grain vegetable-tanned leather, matte gunmetal buckle, 35mm.", badge:"" },
  { id:22, name:"Shadow Cap",                  price:55.00,  category:"Accessories",  stock:80, rating:4.4, reviews:98,  description:"6-panel structured cap, 100% cotton twill, embossed logo, adjustable.", badge:"" },
  { id:23, name:"Noir Fountain Pen",           price:129.00, category:"Stationery",   stock:35, rating:4.8, reviews:67,  description:"German steel nib, resin barrel, converter included, matte black.", badge:"" },
  { id:24, name:"Void Titanium Bracelet",      price:199.00, category:"Accessories",  stock:22, rating:4.7, reviews:38,  description:"Grade 5 titanium links, magnetic clasp, hypoallergenic, unisex.", badge:"Limited" },
  { id:25, name:"Eclipse Tote Bag",            price:119.00, category:"Bags",         stock:45, rating:4.6, reviews:82,  description:"Waxed canvas exterior, leather handles, interior zip pocket, 20L.", badge:"" },
  { id:26, name:"Phantom Duffle Bag",          price:239.00, category:"Bags",         stock:18, rating:4.8, reviews:56,  description:"40L waterproof nylon, detachable strap, shoe compartment, carry-on ok.", badge:"" },
  { id:27, name:"Noir Laptop Briefcase",       price:189.00, category:"Bags",         stock:24, rating:4.7, reviews:71,  description:"Vegan leather, 15.6\" laptop sleeve, TSA lock, trolley strap.", badge:"Best Seller" },
  { id:28, name:"Shadow Premium Hoodie",       price:139.99, category:"Apparel",      stock:55, rating:4.8, reviews:312, description:"420gsm cotton fleece, kangaroo pocket, brushed interior, unisex fit.", badge:"Popular" },
  { id:29, name:"Void Essential Tee",          price:59.99,  category:"Apparel",      stock:90, rating:4.5, reviews:224, description:"200gsm pima cotton, enzyme washed for softness, relaxed fit.", badge:"" },
  { id:30, name:"Obsidian Joggers",            price:99.99,  category:"Apparel",      stock:48, rating:4.7, reviews:145, description:"Heavyweight fleece, tapered fit, YKK zip pockets, embroidered logo.", badge:"" },
  { id:31, name:"Noir Soy Candle",             price:44.99,  category:"Home",         stock:75, rating:4.6, reviews:189, description:"Hand-poured soy wax, oud & sandalwood scent, 55hr burn, reusable jar.", badge:"" },
  { id:32, name:"Void Indoor Plant Kit",       price:69.99,  category:"Home",         stock:30, rating:4.5, reviews:77,  description:"Pothos cutting in matte black ceramic pot, soil, nutrients included.", badge:"New" },
  { id:33, name:"Shadow Throw Pillow",         price:49.99,  category:"Home",         stock:65, rating:4.4, reviews:93,  description:"100% cotton velvet cover, insert included, 45×45cm, removable cover.", badge:"" },
  { id:34, name:"Eclipse Coffee Maker",        price:219.00, category:"Home",         stock:20, rating:4.8, reviews:134, description:"Programmable 12-cup, thermal carafe, bloom pre-infusion, matte black.", badge:"Top Rated" },
  { id:35, name:"Noir Skincare Set",           price:189.00, category:"Beauty",       stock:25, rating:4.9, reviews:156, description:"Cleanser, serum & moisturiser trio. Dermatologist tested, fragrance-free.", badge:"Best Seller" },
  { id:36, name:"Obsidian Lip Collection",     price:79.00,  category:"Beauty",       stock:55, rating:4.7, reviews:112, description:"6 matte shades, long-wear formula, enriched with vitamin E. Vegan.", badge:"" },
  { id:37, name:"Void Yoga Mat",              price:89.99,  category:"Sports",        stock:38, rating:4.8, reviews:201, description:"6mm TPE foam, 183×61cm, alignment lines, carry strap, non-slip.", badge:"" },
  { id:38, name:"Shadow Dumbbell Set",         price:149.99, category:"Sports",        stock:20, rating:4.7, reviews:88,  description:"Neoprene coated, 2×5kg + 2×10kg, compact rack included.", badge:"" },
  { id:39, name:"Eclipse Insulated Bottle",    price:49.99,  category:"Sports",        stock:80, rating:4.6, reviews:367, description:"500ml double-wall vacuum, 24h cold / 12h hot, leak-proof lid, BPA-free.", badge:"Popular" },
  { id:40, name:"Noir Desk Organiser",         price:69.99,  category:"Stationery",   stock:42, rating:4.6, reviews:103, description:"Powder-coated steel, 5 compartments, non-slip base, cable management slot.", badge:"" },
];

const USERS = [
  { id:1, email:"admin@luxenoir.com", password:"admin123", name:"Admin User", role:"admin", joined:"2024-01-15" },
  { id:2, email:"user@luxenoir.com",  password:"user123",  name:"Alex Chen",  role:"user",  joined:"2024-06-20" },
];

const SAMPLE_ORDERS = [
  { id:"LN-001", userId:2, items:[{productId:1,qty:1,price:299.99},{productId:8,qty:2,price:79.99}], total:459.97, status:"Delivered",  date:"2024-11-10", address:"123 Dark St, NYC 10001" },
  { id:"LN-002", userId:2, items:[{productId:2,qty:1,price:549.00}],                                 total:549.00, status:"Shipped",     date:"2024-11-18", address:"123 Dark St, NYC 10001" },
  { id:"LN-003", userId:2, items:[{productId:5,qty:1,price:179.99},{productId:6,qty:1,price:89.99}], total:269.98, status:"Processing",  date:"2024-11-22", address:"123 Dark St, NYC 10001" },
];

function cartReducer(state, action) {
  switch(action.type) {
    case "ADD":{ const ex=state.find(i=>i.id===action.product.id); if(ex) return state.map(i=>i.id===action.product.id?{...i,qty:i.qty+1}:i); return [...state,{...action.product,qty:1}]; }
    case "REMOVE": return state.filter(i=>i.id!==action.id);
    case "UPDATE_QTY": return state.map(i=>i.id===action.id?{...i,qty:Math.max(1,action.qty)}:i);
    case "CLEAR": return [];
    default: return state;
  }
}

function Toast({msg,type,onClose}){
  useEffect(()=>{const t=setTimeout(onClose,3000);return()=>clearTimeout(t);},[]);
  const bg=type==="success"?"#22c55e":type==="error"?"#ef4444":"#7c3aed";
  return(<div style={{position:"fixed",bottom:24,right:24,background:bg,color:"#fff",padding:"12px 20px",borderRadius:10,zIndex:9999,fontSize:14,fontWeight:500,boxShadow:"0 4px 20px rgba(0,0,0,0.4)",display:"flex",alignItems:"center",gap:10,maxWidth:320}}><span style={{fontSize:18}}>{type==="success"?"✓":type==="error"?"✕":"ℹ"}</span>{msg}<button onClick={onClose} style={{background:"none",border:"none",color:"#fff",cursor:"pointer",marginLeft:"auto",fontSize:18}}>×</button></div>);
}

function StarRating({rating,size=14}){
  return(<span style={{display:"inline-flex",gap:2}}>{[1,2,3,4,5].map(s=><span key={s} style={{color:s<=Math.round(rating)?"#f59e0b":"#374151",fontSize:size}}>★</span>)}</span>);
}

function Badge({text}){
  const c={"Best Seller":"#7c3aed","Limited":"#dc2626","New":"#059669","Top Rated":"#d97706","Popular":"#2563eb"};
  if(!text) return null;
  return <span style={{background:c[text]||"#7c3aed",color:"#fff",fontSize:10,fontWeight:700,padding:"2px 7px",borderRadius:4,letterSpacing:"0.04em",textTransform:"uppercase"}}>{text}</span>;
}

export default function App(){
  const [cart,dispatch]=useReducer(cartReducer,[]);
  const [user,setUser]=useState(null);
  const [page,setPage]=useState("home");
  const [products,setProducts]=useState(PRODUCTS);
  const [orders,setOrders]=useState(SAMPLE_ORDERS);
  const [toast,setToast]=useState(null);
  const [wishlist,setWishlist]=useState([]);
  const [searchQ,setSearchQ]=useState("");
  const [filterCat,setFilterCat]=useState("All");
  const [sortBy,setSortBy]=useState("default");
  const [cartOpen,setCartOpen]=useState(false);
  const [selectedProduct,setSelectedProduct]=useState(null);
  const [cartAnim,setCartAnim]=useState(false);

  const showToast=(msg,type="success")=>setToast({msg,type});
  const addToCart=(product)=>{dispatch({type:"ADD",product});setCartAnim(true);setTimeout(()=>setCartAnim(false),400);showToast(`${product.name} added to cart`);};
  const toggleWishlist=(id)=>setWishlist(w=>w.includes(id)?w.filter(x=>x!==id):[...w,id]);
  const cartTotal=cart.reduce((s,i)=>s+i.price*i.qty,0);
  const cartCount=cart.reduce((s,i)=>s+i.qty,0);
  const categories=["All",...new Set(PRODUCTS.map(p=>p.category))];
  const filtered=products.filter(p=>filterCat==="All"||p.category===filterCat).filter(p=>p.name.toLowerCase().includes(searchQ.toLowerCase())||p.category.toLowerCase().includes(searchQ.toLowerCase())).sort((a,b)=>{if(sortBy==="price-asc") return a.price-b.price;if(sortBy==="price-desc") return b.price-a.price;if(sortBy==="rating") return b.rating-a.rating;return 0;});

  const ctx={user,setUser,cart,dispatch,orders,setOrders,products,setProducts,showToast,page,setPage,wishlist,toggleWishlist,searchQ,setSearchQ,filterCat,setFilterCat,sortBy,setSortBy,filtered,categories,addToCart,cartTotal,cartCount,cartOpen,setCartOpen,selectedProduct,setSelectedProduct};

  return(
    <AppContext.Provider value={ctx}>
      <div style={{fontFamily:"'Inter',-apple-system,sans-serif",background:"#0a0a0f",color:"#e8e8f0",minHeight:"100vh"}}>
        <Header cartAnim={cartAnim}/>
        <main>
          {page==="home"     && <HomePage/>}
          {page==="shop"     && <ShopPage/>}
          {page==="product"  && <ProductPage/>}
          {page==="cart"     && <CartPage/>}
          {page==="checkout" && <CheckoutPage/>}
          {page==="orders"   && <OrdersPage/>}
          {page==="login"    && <LoginPage/>}
          {page==="admin"    && <AdminPage/>}
          {page==="wishlist" && <WishlistPage/>}
          {page==="profile"  && <ProfilePage/>}
        </main>
        <Footer/>
        {cartOpen && <CartDrawer/>}
        {toast && <Toast msg={toast.msg} type={toast.type} onClose={()=>setToast(null)}/>}
      </div>
    </AppContext.Provider>
  );
}

function Header({cartAnim}){
  const {page,setPage,user,cartCount,setCartOpen,cartOpen,searchQ,setSearchQ}=useContext(AppContext);
  const nl=(p,label)=>(<button onClick={()=>setPage(p)} style={{background:"none",border:"none",color:page===p?"#a78bfa":"#9ca3af",cursor:"pointer",fontSize:14,fontWeight:500,padding:"6px 12px",borderRadius:6}}>{label}</button>);
  return(
    <header style={{background:"rgba(10,10,20,0.97)",borderBottom:"1px solid #1f1f35",position:"sticky",top:0,zIndex:100,backdropFilter:"blur(20px)"}}>
      <div style={{maxWidth:1280,margin:"0 auto",padding:"0 24px",display:"flex",alignItems:"center",height:64,gap:24}}>
        <button onClick={()=>setPage("home")} style={{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:6}}>
          <span style={{fontSize:20,fontWeight:800,background:"linear-gradient(135deg,#a78bfa,#7c3aed)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>LUXE</span>
          <span style={{fontSize:20,fontWeight:300,color:"#e8e8f0",letterSpacing:"0.2em"}}>NOIR</span>
        </button>
        <nav style={{display:"flex",gap:4,flex:1}}>{nl("home","Home")}{nl("shop","Shop")}{user?.role==="admin"&&nl("admin","Dashboard")}</nav>
        <div style={{display:"flex",alignItems:"center",gap:8,background:"#12121e",border:"1px solid #2a2a40",borderRadius:8,padding:"6px 12px",width:200}}>
          <span style={{color:"#6b7280",fontSize:14}}>⌕</span>
          <input value={searchQ} onChange={e=>{setSearchQ(e.target.value);setPage("shop");}} placeholder="Search…" style={{background:"none",border:"none",outline:"none",color:"#e8e8f0",fontSize:13,width:"100%"}}/>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:4}}>
          {user?(<>
            <button onClick={()=>setPage("wishlist")} style={{background:"none",border:"none",color:"#9ca3af",cursor:"pointer",fontSize:20,padding:"8px"}}>♡</button>
            <button onClick={()=>setPage("orders")} style={{background:"none",border:"none",color:"#9ca3af",cursor:"pointer",fontSize:13,padding:"6px 10px"}}>Orders</button>
            <button onClick={()=>setPage("profile")} style={{background:"#1f1f35",border:"1px solid #2a2a40",color:"#a78bfa",cursor:"pointer",fontSize:12,fontWeight:600,padding:"6px 14px",borderRadius:6}}>{user.name.split(" ")[0]}</button>
          </>):(<button onClick={()=>setPage("login")} style={{background:"none",border:"1px solid #2a2a40",color:"#9ca3af",cursor:"pointer",fontSize:13,padding:"6px 14px",borderRadius:6}}>Sign In</button>)}
          <button onClick={()=>setCartOpen(!cartOpen)} style={{position:"relative",background:cartAnim?"#2d1f5e":"#1f1f35",border:"1px solid #2a2a40",color:"#e8e8f0",cursor:"pointer",fontSize:18,padding:"7px 12px",borderRadius:8,transition:"background 0.3s"}}>
            🛒{cartCount>0&&<span style={{position:"absolute",top:-6,right:-6,background:"#7c3aed",color:"#fff",fontSize:10,fontWeight:700,width:18,height:18,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}>{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}

function ProductCard({product}){
  const {addToCart,setPage,setSelectedProduct,wishlist,toggleWishlist}=useContext(AppContext);
  const inWish=wishlist.includes(product.id);
  return(
    <div style={{background:"#0d0d1a",border:"1px solid #1f1f35",borderRadius:14,overflow:"hidden",position:"relative"}}>
      <div style={{background:"#12121e",padding:"28px",textAlign:"center",position:"relative",height:130,display:"flex",alignItems:"center",justifyContent:"center"}}>
        <button onClick={()=>toggleWishlist(product.id)} style={{position:"absolute",top:10,right:10,background:"none",border:"none",cursor:"pointer",fontSize:18,color:inWish?"#ef4444":"#374151"}}>{inWish?"♥":"♡"}</button>
        {product.badge&&<div style={{position:"absolute",top:10,left:10}}><Badge text={product.badge}/></div>}
        <ProductSVG id={product.id} size={90}/>
      </div>
      <div style={{padding:"14px 18px 18px"}}>
        <div style={{fontSize:10,color:"#4b5563",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:4}}>{product.category}</div>
        <button onClick={()=>{setSelectedProduct(product);setPage("product");}} style={{background:"none",border:"none",cursor:"pointer",color:"#e8e8f0",fontSize:13,fontWeight:600,textAlign:"left",padding:0,lineHeight:1.3,marginBottom:6,display:"block"}}>{product.name}</button>
        <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:10}}>
          <StarRating rating={product.rating}/><span style={{fontSize:11,color:"#4b5563"}}>{product.rating} ({product.reviews})</span>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
          <span style={{fontSize:16,fontWeight:700,color:"#a78bfa"}}>${product.price.toFixed(2)}</span>
          {product.stock<=10&&<span style={{fontSize:10,color:"#f59e0b"}}>Only {product.stock} left</span>}
        </div>
        <div style={{display:"flex",gap:8}}>
          <button onClick={()=>addToCart(product)} style={{flex:1,background:"linear-gradient(135deg,#7c3aed,#5b21b6)",color:"#fff",border:"none",padding:"9px 10px",borderRadius:8,fontSize:12,fontWeight:600,cursor:"pointer"}}>Add to Cart</button>
          <button onClick={()=>{setSelectedProduct(product);setPage("product");}} style={{background:"#1f1f35",border:"1px solid #2a2a40",color:"#9ca3af",padding:"9px 12px",borderRadius:8,fontSize:12,cursor:"pointer"}}>View</button>
        </div>
      </div>
    </div>
  );
}

function HomePage(){
  const {setPage,setFilterCat,products}=useContext(AppContext);
  const featured=products.filter(p=>p.badge).slice(0,4);
  const cats=[{name:"Electronics",icon:"⚡"},{name:"Accessories",icon:"💎"},{name:"Bags",icon:"🎒"},{name:"Apparel",icon:"👗"},{name:"Home",icon:"🏠"},{name:"Beauty",icon:"✨"},{name:"Sports",icon:"🏃"},{name:"Stationery",icon:"✏️"}];
  return(
    <div>
      <section style={{background:"linear-gradient(160deg,#0a0a0f 0%,#0d0d1f 40%,#110d1f 100%)",padding:"90px 24px 70px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"10%",left:"10%",width:300,height:300,background:"radial-gradient(circle,rgba(124,58,237,0.12) 0%,transparent 70%)",pointerEvents:"none"}}/>
        <div style={{position:"absolute",bottom:"10%",right:"10%",width:400,height:400,background:"radial-gradient(circle,rgba(167,139,250,0.08) 0%,transparent 70%)",pointerEvents:"none"}}/>
        <div style={{maxWidth:700,margin:"0 auto",position:"relative"}}>
          <span style={{background:"rgba(124,58,237,0.2)",border:"1px solid rgba(124,58,237,0.4)",color:"#a78bfa",fontSize:11,fontWeight:700,padding:"4px 14px",borderRadius:20,letterSpacing:"0.1em",textTransform:"uppercase"}}>Premium Collection 2025</span>
          <h1 style={{fontSize:52,fontWeight:800,lineHeight:1.1,margin:"20px 0 16px",color:"#f0f0ff"}}>Where <span style={{background:"linear-gradient(135deg,#a78bfa,#7c3aed)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Luxury</span> Meets Darkness</h1>
          <p style={{fontSize:16,color:"#6b7280",lineHeight:1.7,marginBottom:36,maxWidth:500,margin:"0 auto 36px"}}>Curated essentials for those who demand the exceptional. 40+ products across 8 categories.</p>
          <div style={{display:"flex",gap:14,justifyContent:"center"}}>
            <button onClick={()=>setPage("shop")} style={{background:"linear-gradient(135deg,#7c3aed,#5b21b6)",color:"#fff",border:"none",padding:"13px 32px",borderRadius:8,fontSize:15,fontWeight:600,cursor:"pointer"}}>Shop Collection</button>
            <button onClick={()=>setPage("shop")} style={{background:"transparent",color:"#a78bfa",border:"1px solid #2d1f5e",padding:"13px 32px",borderRadius:8,fontSize:15,cursor:"pointer"}}>View Lookbook</button>
          </div>
          <div style={{display:"flex",gap:36,justifyContent:"center",marginTop:56,flexWrap:"wrap"}}>
            {[["40+","Products"],["12K+","Customers"],["Free","Returns"],["24/7","Support"]].map(([n,l])=>(<div key={n} style={{textAlign:"center"}}><div style={{fontSize:22,fontWeight:800,color:"#a78bfa"}}>{n}</div><div style={{fontSize:12,color:"#4b5563",marginTop:4}}>{l}</div></div>))}
          </div>
        </div>
      </section>

      <section style={{maxWidth:1280,margin:"0 auto",padding:"56px 24px"}}>
        <h2 style={{fontSize:26,fontWeight:700,color:"#f0f0ff",marginBottom:28,textAlign:"center"}}>Shop by Category</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(140px,1fr))",gap:14}}>
          {cats.map(cat=>(<button key={cat.name} onClick={()=>{setFilterCat(cat.name);setPage("shop");}} style={{background:"#0d0d1a",border:"1px solid #1f1f35",borderRadius:12,padding:"20px 12px",cursor:"pointer",textAlign:"center"}}>
            <div style={{fontSize:28,marginBottom:8}}>{cat.icon}</div>
            <div style={{color:"#e8e8f0",fontSize:12,fontWeight:600}}>{cat.name}</div>
            <div style={{color:"#4b5563",fontSize:11,marginTop:2}}>{products.filter(p=>p.category===cat.name).length} items</div>
          </button>))}
        </div>
      </section>

      <section style={{maxWidth:1280,margin:"0 auto",padding:"0 24px 56px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:28}}>
          <h2 style={{fontSize:26,fontWeight:700,color:"#f0f0ff"}}>Featured Products</h2>
          <button onClick={()=>setPage("shop")} style={{background:"none",border:"none",color:"#7c3aed",cursor:"pointer",fontSize:14,fontWeight:500}}>View All →</button>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:22}}>
          {featured.map(p=><ProductCard key={p.id} product={p}/>)}
        </div>
      </section>

      <section style={{background:"linear-gradient(135deg,#0d0a1f,#1a0d2e)",borderTop:"1px solid #1f1f35",borderBottom:"1px solid #1f1f35",padding:"56px 24px",textAlign:"center"}}>
        <div style={{maxWidth:560,margin:"0 auto"}}>
          <div style={{fontSize:36,marginBottom:14}}>✦</div>
          <h2 style={{fontSize:28,fontWeight:800,color:"#f0f0ff",marginBottom:10}}>Free Shipping Over $150</h2>
          <p style={{color:"#6b7280",fontSize:14,marginBottom:24}}>30-day free returns and complimentary gift wrapping on every order.</p>
          <button onClick={()=>setPage("shop")} style={{background:"linear-gradient(135deg,#7c3aed,#5b21b6)",color:"#fff",border:"none",padding:"13px 32px",borderRadius:8,fontSize:15,fontWeight:600,cursor:"pointer"}}>Start Shopping</button>
        </div>
      </section>
    </div>
  );
}

function ShopPage(){
  const {filtered,filterCat,setFilterCat,sortBy,setSortBy,categories,searchQ}=useContext(AppContext);
  return(
    <div style={{maxWidth:1280,margin:"0 auto",padding:"36px 24px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:28,flexWrap:"wrap",gap:14}}>
        <div>
          <h1 style={{fontSize:28,fontWeight:800,color:"#f0f0ff",margin:0}}>Shop All Products</h1>
          <p style={{color:"#4b5563",fontSize:13,marginTop:4}}>{filtered.length} products{searchQ&&` for "${searchQ}"`}</p>
        </div>
        <select value={sortBy} onChange={e=>setSortBy(e.target.value)} style={{background:"#12121e",border:"1px solid #1f1f35",color:"#e8e8f0",padding:"8px 14px",borderRadius:8,fontSize:13,cursor:"pointer"}}>
          <option value="default">Sort: Featured</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>
      <div style={{display:"flex",gap:8,marginBottom:28,flexWrap:"wrap"}}>
        {categories.map(cat=>(<button key={cat} onClick={()=>setFilterCat(cat)} style={{background:filterCat===cat?"#7c3aed":"#12121e",color:filterCat===cat?"#fff":"#9ca3af",border:`1px solid ${filterCat===cat?"#7c3aed":"#1f1f35"}`,padding:"5px 14px",borderRadius:20,fontSize:12,cursor:"pointer",fontWeight:filterCat===cat?600:400}}>{cat}</button>))}
      </div>
      {filtered.length===0?(<div style={{textAlign:"center",padding:"80px 0",color:"#4b5563"}}><div style={{fontSize:48,marginBottom:16}}>🔍</div><div style={{fontSize:16,color:"#6b7280"}}>No products found</div></div>):(
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))",gap:20}}>
          {filtered.map(p=><ProductCard key={p.id} product={p}/>)}
        </div>
      )}
    </div>
  );
}

function ProductPage(){
  const {selectedProduct:p,addToCart,setPage,wishlist,toggleWishlist}=useContext(AppContext);
  const [qty,setQty]=useState(1);
  if(!p){setPage("shop");return null;}
  const inWish=wishlist.includes(p.id);
  return(
    <div style={{maxWidth:1280,margin:"0 auto",padding:"36px 24px"}}>
      <button onClick={()=>setPage("shop")} style={{background:"none",border:"none",color:"#7c3aed",cursor:"pointer",fontSize:14,marginBottom:28}}>← Back to Shop</button>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:56}}>
        <div style={{background:"#0d0d1a",border:"1px solid #1f1f35",borderRadius:20,display:"flex",alignItems:"center",justifyContent:"center",minHeight:380}}>
          <ProductSVG id={p.id} size={180}/>
        </div>
        <div>
          <div style={{display:"flex",gap:8,marginBottom:14}}><span style={{fontSize:11,color:"#4b5563",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",background:"#12121e",padding:"4px 10px",borderRadius:4}}>{p.category}</span>{p.badge&&<Badge text={p.badge}/>}</div>
          <h1 style={{fontSize:28,fontWeight:800,color:"#f0f0ff",margin:"0 0 14px",lineHeight:1.2}}>{p.name}</h1>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:18}}><StarRating rating={p.rating} size={18}/><span style={{color:"#6b7280",fontSize:13}}>{p.rating} · {p.reviews} reviews</span></div>
          <div style={{fontSize:32,fontWeight:800,color:"#a78bfa",marginBottom:20}}>${p.price.toFixed(2)}</div>
          <p style={{color:"#9ca3af",fontSize:14,lineHeight:1.8,marginBottom:28}}>{p.description}</p>
          <div style={{background:"#0d0d1a",border:"1px solid #1f1f35",borderRadius:10,padding:"14px 18px",marginBottom:24,display:"flex",gap:28}}>
            <div><div style={{fontSize:10,color:"#4b5563",marginBottom:3}}>STOCK</div><div style={{color:p.stock>0?"#22c55e":"#ef4444",fontSize:13,fontWeight:600}}>{p.stock>0?`In Stock (${p.stock})`:"Out of Stock"}</div></div>
            <div><div style={{fontSize:10,color:"#4b5563",marginBottom:3}}>SHIPPING</div><div style={{color:"#e8e8f0",fontSize:13}}>Free over $150</div></div>
            <div><div style={{fontSize:10,color:"#4b5563",marginBottom:3}}>RETURNS</div><div style={{color:"#e8e8f0",fontSize:13}}>30 days free</div></div>
          </div>
          <div style={{display:"flex",gap:14,alignItems:"center",marginBottom:14}}>
            <div style={{display:"flex",alignItems:"center",background:"#12121e",border:"1px solid #1f1f35",borderRadius:8,overflow:"hidden"}}>
              <button onClick={()=>setQty(Math.max(1,qty-1))} style={{background:"none",border:"none",color:"#e8e8f0",padding:"10px 14px",cursor:"pointer",fontSize:18}}>−</button>
              <span style={{color:"#e8e8f0",fontSize:15,fontWeight:600,minWidth:28,textAlign:"center"}}>{qty}</span>
              <button onClick={()=>setQty(Math.min(p.stock,qty+1))} style={{background:"none",border:"none",color:"#e8e8f0",padding:"10px 14px",cursor:"pointer",fontSize:18}}>+</button>
            </div>
            <button onClick={()=>{for(let i=0;i<qty;i++) addToCart(p);}} style={{flex:1,background:"linear-gradient(135deg,#7c3aed,#5b21b6)",color:"#fff",border:"none",padding:"12px 20px",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer"}}>Add {qty} to Cart</button>
            <button onClick={()=>toggleWishlist(p.id)} style={{background:"#12121e",border:"1px solid #1f1f35",color:inWish?"#ef4444":"#6b7280",padding:"12px 14px",borderRadius:8,cursor:"pointer",fontSize:20}}>{inWish?"♥":"♡"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartDrawer(){
  const {cart,dispatch,cartTotal,setCartOpen,setPage,user,showToast}=useContext(AppContext);
  return(
    <div style={{position:"fixed",inset:0,zIndex:200,display:"flex"}}>
      <div onClick={()=>setCartOpen(false)} style={{flex:1,background:"rgba(0,0,0,0.7)"}}/>
      <div style={{width:380,background:"#0d0d1a",borderLeft:"1px solid #1f1f35",display:"flex",flexDirection:"column",height:"100vh"}}>
        <div style={{padding:"18px 22px",borderBottom:"1px solid #1f1f35",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <h2 style={{fontSize:17,fontWeight:700,color:"#f0f0ff",margin:0}}>Cart ({cart.reduce((s,i)=>s+i.qty,0)})</h2>
          <button onClick={()=>setCartOpen(false)} style={{background:"none",border:"none",color:"#6b7280",cursor:"pointer",fontSize:22}}>×</button>
        </div>
        <div style={{flex:1,overflowY:"auto",padding:"14px 22px"}}>
          {cart.length===0?(<div style={{textAlign:"center",padding:"60px 0",color:"#4b5563"}}><div style={{fontSize:40,marginBottom:12}}>🛒</div><div style={{fontSize:14,color:"#6b7280"}}>Your cart is empty</div></div>):cart.map(item=>(
            <div key={item.id} style={{display:"flex",gap:12,padding:"12px 0",borderBottom:"1px solid #1a1a2e"}}>
              <div style={{background:"#12121e",borderRadius:10,width:58,height:58,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><ProductSVG id={item.id} size={44}/></div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:12,fontWeight:600,color:"#e8e8f0",marginBottom:3,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{item.name}</div>
                <div style={{fontSize:13,color:"#a78bfa",fontWeight:700,marginBottom:6}}>${(item.price*item.qty).toFixed(2)}</div>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <div style={{display:"flex",alignItems:"center",background:"#12121e",border:"1px solid #1f1f35",borderRadius:6,overflow:"hidden"}}>
                    <button onClick={()=>dispatch({type:"UPDATE_QTY",id:item.id,qty:item.qty-1})} style={{background:"none",border:"none",color:"#e8e8f0",padding:"3px 9px",cursor:"pointer"}}>−</button>
                    <span style={{color:"#e8e8f0",fontSize:12,minWidth:18,textAlign:"center"}}>{item.qty}</span>
                    <button onClick={()=>dispatch({type:"UPDATE_QTY",id:item.id,qty:item.qty+1})} style={{background:"none",border:"none",color:"#e8e8f0",padding:"3px 9px",cursor:"pointer"}}>+</button>
                  </div>
                  <button onClick={()=>dispatch({type:"REMOVE",id:item.id})} style={{background:"none",border:"none",color:"#ef4444",cursor:"pointer",fontSize:11}}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cart.length>0&&(
          <div style={{padding:"18px 22px",borderTop:"1px solid #1f1f35"}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:14}}>
              <span style={{color:"#9ca3af",fontSize:13}}>Subtotal</span>
              <span style={{color:"#f0f0ff",fontWeight:700,fontSize:17}}>${cartTotal.toFixed(2)}</span>
            </div>
            <button onClick={()=>{setCartOpen(false);if(!user){showToast("Please sign in","error");setPage("login");}else setPage("checkout");}} style={{width:"100%",background:"linear-gradient(135deg,#7c3aed,#5b21b6)",color:"#fff",border:"none",padding:"13px",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer",marginBottom:8}}>Checkout → ${cartTotal.toFixed(2)}</button>
            <button onClick={()=>{setCartOpen(false);setPage("cart");}} style={{width:"100%",background:"none",color:"#6b7280",border:"1px solid #1f1f35",padding:"9px",borderRadius:8,fontSize:12,cursor:"pointer"}}>View Full Cart</button>
          </div>
        )}
      </div>
    </div>
  );
}

function CartPage(){
  const {cart,dispatch,cartTotal,setPage,user,showToast}=useContext(AppContext);
  return(
    <div style={{maxWidth:960,margin:"0 auto",padding:"36px 24px"}}>
      <h1 style={{fontSize:28,fontWeight:800,color:"#f0f0ff",marginBottom:28}}>Shopping Cart</h1>
      {cart.length===0?(<div style={{textAlign:"center",padding:"80px 0"}}><div style={{fontSize:56,marginBottom:18}}>🛒</div><h2 style={{color:"#6b7280",fontSize:18,fontWeight:400}}>Your cart is empty</h2><button onClick={()=>setPage("shop")} style={{marginTop:20,background:"linear-gradient(135deg,#7c3aed,#5b21b6)",color:"#fff",border:"none",padding:"11px 24px",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer"}}>Continue Shopping</button></div>):(
        <div style={{display:"grid",gridTemplateColumns:"1fr 320px",gap:28}}>
          <div>
            {cart.map(item=>(
              <div key={item.id} style={{display:"flex",gap:18,padding:"18px 0",borderBottom:"1px solid #1a1a2e"}}>
                <div style={{background:"#12121e",borderRadius:12,width:84,height:84,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><ProductSVG id={item.id} size={64}/></div>
                <div style={{flex:1}}>
                  <div style={{fontSize:15,fontWeight:600,color:"#e8e8f0",marginBottom:3}}>{item.name}</div>
                  <div style={{fontSize:12,color:"#4b5563",marginBottom:10}}>{item.category}</div>
                  <div style={{display:"flex",alignItems:"center",gap:18}}>
                    <div style={{display:"flex",alignItems:"center",background:"#12121e",border:"1px solid #1f1f35",borderRadius:8,overflow:"hidden"}}>
                      <button onClick={()=>dispatch({type:"UPDATE_QTY",id:item.id,qty:item.qty-1})} style={{background:"none",border:"none",color:"#e8e8f0",padding:"7px 12px",cursor:"pointer",fontSize:16}}>−</button>
                      <span style={{color:"#e8e8f0",fontSize:13,fontWeight:600,minWidth:24,textAlign:"center"}}>{item.qty}</span>
                      <button onClick={()=>dispatch({type:"UPDATE_QTY",id:item.id,qty:item.qty+1})} style={{background:"none",border:"none",color:"#e8e8f0",padding:"7px 12px",cursor:"pointer",fontSize:16}}>+</button>
                    </div>
                    <button onClick={()=>dispatch({type:"REMOVE",id:item.id})} style={{background:"none",border:"none",color:"#ef4444",cursor:"pointer",fontSize:12}}>Remove</button>
                  </div>
                </div>
                <div style={{fontSize:16,fontWeight:700,color:"#a78bfa"}}>${(item.price*item.qty).toFixed(2)}</div>
              </div>
            ))}
          </div>
          <div style={{background:"#0d0d1a",border:"1px solid #1f1f35",borderRadius:14,padding:"22px",height:"fit-content",position:"sticky",top:84}}>
            <h3 style={{fontSize:15,fontWeight:700,color:"#f0f0ff",marginBottom:16}}>Order Summary</h3>
            {cart.map(i=>(<div key={i.id} style={{display:"flex",justifyContent:"space-between",marginBottom:8,fontSize:12}}><span style={{color:"#9ca3af"}}>{i.name} ×{i.qty}</span><span style={{color:"#e8e8f0"}}>${(i.price*i.qty).toFixed(2)}</span></div>))}
            <div style={{borderTop:"1px solid #1f1f35",marginTop:14,paddingTop:14}}>
              {[["Shipping",cartTotal>=150?"Free":"$9.99"],["Tax (8%)",`$${(cartTotal*0.08).toFixed(2)}`]].map(([l,v])=>(<div key={l} style={{display:"flex",justifyContent:"space-between",marginBottom:7,fontSize:12}}><span style={{color:"#9ca3af"}}>{l}</span><span style={{color:l==="Shipping"&&cartTotal>=150?"#22c55e":"#e8e8f0"}}>{v}</span></div>))}
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:20,fontSize:17,fontWeight:700}}><span style={{color:"#f0f0ff"}}>Total</span><span style={{color:"#a78bfa"}}>${(cartTotal*1.08+(cartTotal>=150?0:9.99)).toFixed(2)}</span></div>
              <button onClick={()=>{if(!user){showToast("Please sign in","error");setPage("login");}else setPage("checkout");}} style={{width:"100%",background:"linear-gradient(135deg,#7c3aed,#5b21b6)",color:"#fff",border:"none",padding:"13px",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer"}}>Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CheckoutPage(){
  const {cart,dispatch,cartTotal,orders,setOrders,setPage,user,showToast}=useContext(AppContext);
  const [step,setStep]=useState(1);
  const [form,setForm]=useState({name:user?.name||"",email:user?.email||"",address:"",city:"",zip:"",card:"",expiry:"",cvv:""});
  const shipping=cartTotal>=150?0:9.99; const tax=cartTotal*0.08; const total=cartTotal+shipping+tax;
  const upd=(k,v)=>setForm(f=>({...f,[k]:v}));
  const placeOrder=()=>{
    if(!form.name||!form.address||!form.city||!form.zip||!form.card){showToast("Please fill all required fields","error");return;}
    const o={id:`LN-${String(orders.length+4).padStart(3,"0")}`,userId:user.id,items:cart.map(i=>({productId:i.id,qty:i.qty,price:i.price})),total,status:"Processing",date:new Date().toISOString().split("T")[0],address:`${form.address}, ${form.city} ${form.zip}`};
    setOrders(o=>[...o,o]);dispatch({type:"CLEAR"});setStep(3);showToast("Order placed! 🎉");
  };
  const inp={background:"#12121e",border:"1px solid #1f1f35",color:"#e8e8f0",padding:"11px 13px",borderRadius:8,fontSize:13,outline:"none",width:"100%",boxSizing:"border-box"};
  const lbl={fontSize:11,color:"#6b7280",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",display:"block",marginBottom:5};
  return(
    <div style={{maxWidth:940,margin:"0 auto",padding:"36px 24px"}}>
      <div style={{display:"flex",gap:10,alignItems:"center",marginBottom:36}}>
        {["Shipping","Payment","Confirm"].map((s,i)=>(<div key={s} style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:26,height:26,borderRadius:"50%",background:step>i+1?"#22c55e":step===i+1?"#7c3aed":"#1f1f35",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:step>=i+1?"#fff":"#4b5563"}}>{step>i+1?"✓":i+1}</div>
          <span style={{fontSize:12,color:step===i+1?"#e8e8f0":"#4b5563",fontWeight:step===i+1?600:400}}>{s}</span>
          {i<2&&<div style={{width:36,height:1,background:"#1f1f35"}}/>}
        </div>))}
      </div>
      {step===3?(<div style={{textAlign:"center",padding:"60px 0"}}>
        <div style={{fontSize:64,marginBottom:20}}>✅</div>
        <h2 style={{fontSize:26,fontWeight:800,color:"#f0f0ff",marginBottom:10}}>Order Confirmed!</h2>
        <p style={{color:"#6b7280",fontSize:14,marginBottom:28}}>Thank you! You'll receive a confirmation email shortly.</p>
        <div style={{display:"flex",gap:14,justifyContent:"center"}}>
          <button onClick={()=>setPage("orders")} style={{background:"linear-gradient(135deg,#7c3aed,#5b21b6)",color:"#fff",border:"none",padding:"11px 24px",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer"}}>Track Order</button>
          <button onClick={()=>setPage("shop")} style={{background:"none",color:"#a78bfa",border:"1px solid #2d1f5e",padding:"11px 24px",borderRadius:8,fontSize:14,cursor:"pointer"}}>Continue Shopping</button>
        </div>
      </div>):(
        <div style={{display:"grid",gridTemplateColumns:"1fr 300px",gap:28}}>
          <div>
            {step===1&&(<div style={{background:"#0d0d1a",border:"1px solid #1f1f35",borderRadius:14,padding:26}}>
              <h2 style={{fontSize:16,fontWeight:700,color:"#f0f0ff",marginBottom:22}}>Shipping Information</h2>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:14}}>
                <div><label style={lbl}>Full Name *</label><input value={form.name} onChange={e=>upd("name",e.target.value)} style={inp} placeholder="John Doe"/></div>
                <div><label style={lbl}>Email *</label><input value={form.email} onChange={e=>upd("email",e.target.value)} style={inp} placeholder="john@example.com"/></div>
              </div>
              <div style={{marginBottom:14}}><label style={lbl}>Street Address *</label><input value={form.address} onChange={e=>upd("address",e.target.value)} style={inp} placeholder="123 Main Street"/></div>
              <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:14}}>
                <div><label style={lbl}>City *</label><input value={form.city} onChange={e=>upd("city",e.target.value)} style={inp} placeholder="New York"/></div>
                <div><label style={lbl}>ZIP *</label><input value={form.zip} onChange={e=>upd("zip",e.target.value)} style={inp} placeholder="10001"/></div>
              </div>
              <button onClick={()=>{if(!form.name||!form.address||!form.city||!form.zip){showToast("Fill all fields","error");return;}setStep(2);}} style={{marginTop:22,width:"100%",background:"linear-gradient(135deg,#7c3aed,#5b21b6)",color:"#fff",border:"none",padding:"12px",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer"}}>Continue to Payment →</button>
            </div>)}
            {step===2&&(<div style={{background:"#0d0d1a",border:"1px solid #1f1f35",borderRadius:14,padding:26}}>
              <h2 style={{fontSize:16,fontWeight:700,color:"#f0f0ff",marginBottom:22}}>Payment Details</h2>
              <div style={{background:"#12121e",border:"1px solid #2d1f5e",borderRadius:9,padding:"10px 14px",marginBottom:18,fontSize:12,color:"#6b7280"}}>🔒 Secured with SSL encryption. Demo mode — no real charges.</div>
              <div style={{marginBottom:14}}><label style={lbl}>Card Number *</label><input value={form.card} onChange={e=>upd("card",e.target.value)} style={inp} placeholder="1234 5678 9012 3456" maxLength={19}/></div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:22}}>
                <div><label style={lbl}>Expiry *</label><input value={form.expiry} onChange={e=>upd("expiry",e.target.value)} style={inp} placeholder="MM/YY"/></div>
                <div><label style={lbl}>CVV *</label><input value={form.cvv} onChange={e=>upd("cvv",e.target.value)} style={inp} placeholder="123" maxLength={4}/></div>
              </div>
              <div style={{display:"flex",gap:10}}>
                <button onClick={()=>setStep(1)} style={{flex:1,background:"none",color:"#6b7280",border:"1px solid #1f1f35",padding:"12px",borderRadius:8,fontSize:13,cursor:"pointer"}}>← Back</button>
                <button onClick={placeOrder} style={{flex:2,background:"linear-gradient(135deg,#7c3aed,#5b21b6)",color:"#fff",border:"none",padding:"12px",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer"}}>Place Order — ${total.toFixed(2)}</button>
              </div>
            </div>)}
          </div>
          <div style={{background:"#0d0d1a",border:"1px solid #1f1f35",borderRadius:14,padding:18,height:"fit-content"}}>
            <h3 style={{fontSize:14,fontWeight:700,color:"#f0f0ff",marginBottom:14}}>Order Summary</h3>
            {cart.map(i=>(<div key={i.id} style={{display:"flex",gap:10,marginBottom:10}}>
              <div style={{background:"#12121e",borderRadius:7,width:40,height:40,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><ProductSVG id={i.id} size={30}/></div>
              <div style={{flex:1}}><div style={{fontSize:11,color:"#e8e8f0",fontWeight:500}}>{i.name}</div><div style={{fontSize:10,color:"#4b5563"}}>×{i.qty}</div></div>
              <div style={{fontSize:12,color:"#a78bfa",fontWeight:600}}>${(i.price*i.qty).toFixed(2)}</div>
            </div>))}
            <div style={{borderTop:"1px solid #1f1f35",marginTop:14,paddingTop:14,fontSize:12}}>
              {[["Subtotal",`$${cartTotal.toFixed(2)}`],["Shipping",shipping===0?"Free":`$${shipping.toFixed(2)}`],["Tax (8%)",`$${tax.toFixed(2)}`]].map(([l,v])=>(<div key={l} style={{display:"flex",justifyContent:"space-between",marginBottom:7}}><span style={{color:"#6b7280"}}>{l}</span><span style={{color:l==="Shipping"&&shipping===0?"#22c55e":"#e8e8f0"}}>{v}</span></div>))}
              <div style={{display:"flex",justifyContent:"space-between",marginTop:10,fontSize:15,fontWeight:700}}><span style={{color:"#f0f0ff"}}>Total</span><span style={{color:"#a78bfa"}}>${total.toFixed(2)}</span></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function OrdersPage(){
  const {orders,user,products,setPage}=useContext(AppContext);
  if(!user){setPage("login");return null;}
  const myOrders=orders.filter(o=>o.userId===user.id);
  const sc={"Delivered":"#22c55e","Shipped":"#3b82f6","Processing":"#f59e0b","Cancelled":"#ef4444"};
  return(
    <div style={{maxWidth:940,margin:"0 auto",padding:"36px 24px"}}>
      <h1 style={{fontSize:28,fontWeight:800,color:"#f0f0ff",marginBottom:28}}>My Orders</h1>
      {myOrders.length===0?(<div style={{textAlign:"center",padding:"80px 0"}}><div style={{fontSize:48,marginBottom:14}}>📦</div><div style={{fontSize:15,color:"#6b7280"}}>No orders yet.</div><button onClick={()=>setPage("shop")} style={{marginTop:18,background:"linear-gradient(135deg,#7c3aed,#5b21b6)",color:"#fff",border:"none",padding:"11px 22px",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer"}}>Shop Now</button></div>):myOrders.slice().reverse().map(order=>(
      <div key={order.id} style={{background:"#0d0d1a",border:"1px solid #1f1f35",borderRadius:14,padding:22,marginBottom:14}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
          <div><div style={{fontSize:15,fontWeight:700,color:"#f0f0ff"}}>{order.id}</div><div style={{fontSize:12,color:"#4b5563",marginTop:3}}>Placed on {order.date} · {order.address}</div></div>
          <div style={{display:"flex",gap:14,alignItems:"center"}}>
            <span style={{background:`${sc[order.status]}20`,color:sc[order.status],fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:20,border:`1px solid ${sc[order.status]}40`}}>{order.status}</span>
            <div style={{fontSize:16,fontWeight:700,color:"#a78bfa"}}>${order.total.toFixed(2)}</div>
          </div>
        </div>
        <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
          {order.items.map(item=>{const p=products.find(p=>p.id===item.productId);return p?(<div key={item.productId} style={{display:"flex",gap:8,alignItems:"center",background:"#12121e",borderRadius:8,padding:"8px 12px"}}>
            <div style={{width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center"}}><ProductSVG id={p.id} size={28}/></div>
            <div><div style={{fontSize:11,color:"#e8e8f0",fontWeight:500}}>{p.name}</div><div style={{fontSize:10,color:"#4b5563"}}>×{item.qty} · ${item.price.toFixed(2)}</div></div>
          </div>):null;})}
        </div>
      </div>
    ))}
    </div>
  );
}

function LoginPage(){
  const {setUser,setPage,showToast}=useContext(AppContext);
  const [mode,setMode]=useState("login");
  const [form,setForm]=useState({name:"",email:"",password:""});
  const [users,setUsers]=useState(USERS);
  const upd=(k,v)=>setForm(f=>({...f,[k]:v}));
  const submit=()=>{
    if(mode==="login"){const found=users.find(u=>u.email===form.email&&u.password===form.password);if(found){setUser(found);showToast(`Welcome back, ${found.name}!`);setPage("home");}else showToast("Invalid credentials","error");}
    else{if(!form.name||!form.email||!form.password){showToast("Fill all fields","error");return;}if(users.find(u=>u.email===form.email)){showToast("Email already registered","error");return;}const nu={id:users.length+1,email:form.email,password:form.password,name:form.name,role:"user",joined:new Date().toISOString().split("T")[0]};setUsers(u=>[...u,nu]);setUser(nu);showToast(`Welcome, ${nu.name}!`);setPage("home");}
  };
  const inp={background:"#12121e",border:"1px solid #1f1f35",color:"#e8e8f0",padding:"12px 14px",borderRadius:8,fontSize:14,outline:"none",width:"100%",boxSizing:"border-box",marginTop:5};
  return(
    <div style={{minHeight:"80vh",display:"flex",alignItems:"center",justifyContent:"center",padding:24}}>
      <div style={{background:"#0d0d1a",border:"1px solid #1f1f35",borderRadius:20,padding:"36px 42px",width:"100%",maxWidth:400}}>
        <div style={{textAlign:"center",marginBottom:28}}>
          <div style={{fontSize:32,fontWeight:800,marginBottom:8}}><span style={{background:"linear-gradient(135deg,#a78bfa,#7c3aed)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>LUXE</span><span style={{color:"#e8e8f0",fontWeight:300,letterSpacing:"0.15em"}}> NOIR</span></div>
          <h2 style={{fontSize:18,fontWeight:600,color:"#f0f0ff",margin:0}}>{mode==="login"?"Sign in":"Create account"}</h2>
        </div>
        <div style={{background:"#12121e",border:"1px solid #1f1f35",borderRadius:9,padding:"10px 14px",marginBottom:20,fontSize:12,color:"#6b7280"}}><strong style={{color:"#a78bfa"}}>Demo:</strong> admin@luxenoir.com / admin123 &nbsp;|&nbsp; user@luxenoir.com / user123</div>
        {mode==="register"&&<div style={{marginBottom:14}}><label style={{fontSize:12,color:"#6b7280",fontWeight:600}}>Full Name</label><input value={form.name} onChange={e=>upd("name",e.target.value)} style={inp} placeholder="Your name"/></div>}
        <div style={{marginBottom:14}}><label style={{fontSize:12,color:"#6b7280",fontWeight:600}}>Email</label><input value={form.email} onChange={e=>upd("email",e.target.value)} style={inp} placeholder="you@example.com" type="email"/></div>
        <div style={{marginBottom:22}}><label style={{fontSize:12,color:"#6b7280",fontWeight:600}}>Password</label><input value={form.password} onChange={e=>upd("password",e.target.value)} style={inp} placeholder="••••••••" type="password" onKeyDown={e=>e.key==="Enter"&&submit()}/></div>
        <button onClick={submit} style={{width:"100%",background:"linear-gradient(135deg,#7c3aed,#5b21b6)",color:"#fff",border:"none",padding:"13px",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer",marginBottom:14}}>{mode==="login"?"Sign In":"Create Account"}</button>
        <p style={{textAlign:"center",fontSize:12,color:"#6b7280",margin:0}}>{mode==="login"?"No account? ":"Have an account? "}<button onClick={()=>setMode(mode==="login"?"register":"login")} style={{background:"none",border:"none",color:"#a78bfa",cursor:"pointer",fontSize:12,fontWeight:600}}>{mode==="login"?"Sign Up":"Sign In"}</button></p>
      </div>
    </div>
  );
}

function AdminPage(){
  const {user,products,setProducts,orders,showToast}=useContext(AppContext);
  const [tab,setTab]=useState("dashboard");
  const [showAdd,setShowAdd]=useState(false);
  const [np,setNp]=useState({name:"",price:"",category:"",stock:"",description:"",badge:""});
  if(!user||user.role!=="admin") return <div style={{textAlign:"center",padding:"80px 24px",color:"#ef4444",fontSize:16}}>Access Denied. Admin only.</div>;
  const rev=orders.reduce((s,o)=>s+o.total,0);
  const sc={"Delivered":"#22c55e","Shipped":"#3b82f6","Processing":"#f59e0b","Cancelled":"#ef4444"};
  const inp={background:"#12121e",border:"1px solid #1f1f35",color:"#e8e8f0",padding:"9px 11px",borderRadius:7,fontSize:12,outline:"none",width:"100%",boxSizing:"border-box"};
  const addP=()=>{if(!np.name||!np.price||!np.category){showToast("Name, price, category required","error");return;}setProducts(p=>[...p,{...np,id:Math.max(...p.map(x=>x.id))+1,price:parseFloat(np.price),stock:parseInt(np.stock)||0,rating:0,reviews:0}]);setNp({name:"",price:"",category:"",stock:"",description:"",badge:""});setShowAdd(false);showToast("Product added!");};
  const delP=(id)=>{setProducts(p=>p.filter(x=>x.id!==id));showToast("Product deleted","error");};
  const tb=(t,l)=>(<button onClick={()=>setTab(t)} style={{background:tab===t?"#7c3aed":"none",color:tab===t?"#fff":"#9ca3af",border:tab===t?"none":"1px solid #1f1f35",padding:"7px 16px",borderRadius:8,cursor:"pointer",fontSize:12,fontWeight:tab===t?600:400}}>{l}</button>);
  return(
    <div style={{maxWidth:1280,margin:"0 auto",padding:"36px 24px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:28}}>
        <div><h1 style={{fontSize:26,fontWeight:800,color:"#f0f0ff",margin:0}}>Admin Dashboard</h1><p style={{color:"#4b5563",fontSize:12,marginTop:5}}>Manage store, products & orders</p></div>
        <span style={{background:"#7c3aed20",color:"#a78bfa",border:"1px solid #7c3aed40",fontSize:10,fontWeight:700,padding:"4px 12px",borderRadius:20}}>ADMIN</span>
      </div>
      <div style={{display:"flex",gap:10,marginBottom:28}}>{tb("dashboard","Dashboard")}{tb("products","Products")}{tb("orders","Orders")}</div>
      {tab==="dashboard"&&(<div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))",gap:16,marginBottom:32}}>
          {[["💰","Total Revenue",`$${rev.toFixed(0)}`,"#a78bfa"],["📦","Total Orders",orders.length,"#3b82f6"],["🛍️","Products",products.length,"#22c55e"],["📊","Avg Order",`$${(rev/orders.length).toFixed(0)}`,"#f59e0b"]].map(([icon,l,v,c])=>(<div key={l} style={{background:"#0d0d1a",border:"1px solid #1f1f35",borderRadius:12,padding:22}}><div style={{fontSize:26,marginBottom:10}}>{icon}</div><div style={{fontSize:26,fontWeight:800,color:c}}>{v}</div><div style={{fontSize:12,color:"#4b5563",marginTop:3}}>{l}</div></div>))}
        </div>
        <div style={{background:"#0d0d1a",border:"1px solid #1f1f35",borderRadius:14,padding:22}}>
          <h3 style={{fontSize:15,fontWeight:700,color:"#f0f0ff",marginBottom:14}}>Recent Orders</h3>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
            <thead><tr style={{borderBottom:"1px solid #1f1f35"}}>{["Order ID","Date","Total","Status"].map(h=><th key={h} style={{padding:"7px 10px",color:"#4b5563",fontWeight:600,textAlign:"left",fontSize:10,textTransform:"uppercase",letterSpacing:"0.06em"}}>{h}</th>)}</tr></thead>
            <tbody>{orders.slice(-5).reverse().map(o=>(<tr key={o.id} style={{borderBottom:"1px solid #12121e"}}>
              <td style={{padding:"10px",color:"#a78bfa",fontWeight:600}}>{o.id}</td>
              <td style={{padding:"10px",color:"#9ca3af"}}>{o.date}</td>
              <td style={{padding:"10px",color:"#e8e8f0",fontWeight:600}}>${o.total.toFixed(2)}</td>
              <td style={{padding:"10px"}}><span style={{background:`${sc[o.status]}20`,color:sc[o.status],fontSize:10,fontWeight:700,padding:"3px 9px",borderRadius:20}}>{o.status}</span></td>
            </tr>))}</tbody>
          </table>
        </div>
      </div>)}
      {tab==="products"&&(<div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
          <h2 style={{fontSize:16,fontWeight:700,color:"#f0f0ff",margin:0}}>All Products ({products.length})</h2>
          <button onClick={()=>setShowAdd(true)} style={{background:"linear-gradient(135deg,#7c3aed,#5b21b6)",color:"#fff",border:"none",padding:"8px 18px",borderRadius:8,fontSize:12,fontWeight:600,cursor:"pointer"}}>+ Add Product</button>
        </div>
        {showAdd&&(<div style={{background:"#0d0d1a",border:"1px solid #7c3aed40",borderRadius:14,padding:22,marginBottom:20}}>
          <h3 style={{fontSize:14,fontWeight:700,color:"#f0f0ff",marginBottom:14}}>Add New Product</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12}}>
            {[["name","Product Name *"],["price","Price *"],["category","Category *"],["stock","Stock"],["badge","Badge (optional)"]].map(([k,l])=>(<div key={k}><label style={{fontSize:10,color:"#6b7280",fontWeight:600,display:"block",marginBottom:3}}>{l}</label><input value={np[k]} onChange={e=>setNp(p=>({...p,[k]:e.target.value}))} style={inp}/></div>))}
          </div>
          <div style={{marginTop:12}}><label style={{fontSize:10,color:"#6b7280",fontWeight:600,display:"block",marginBottom:3}}>Description</label><textarea value={np.description} onChange={e=>setNp(p=>({...p,description:e.target.value}))} style={{...inp,minHeight:55,resize:"vertical"}}/></div>
          <div style={{display:"flex",gap:10,marginTop:14}}>
            <button onClick={addP} style={{background:"linear-gradient(135deg,#7c3aed,#5b21b6)",color:"#fff",border:"none",padding:"8px 20px",borderRadius:8,fontSize:12,fontWeight:600,cursor:"pointer"}}>Save</button>
            <button onClick={()=>setShowAdd(false)} style={{background:"none",color:"#6b7280",border:"1px solid #1f1f35",padding:"8px 20px",borderRadius:8,fontSize:12,cursor:"pointer"}}>Cancel</button>
          </div>
        </div>)}
        <div style={{background:"#0d0d1a",border:"1px solid #1f1f35",borderRadius:14,overflow:"hidden"}}>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
              <thead><tr style={{background:"#12121e"}}>{["Product","Category","Price","Stock","Rating","Actions"].map(h=><th key={h} style={{padding:"10px 14px",color:"#4b5563",fontWeight:600,textAlign:"left",fontSize:10,textTransform:"uppercase",letterSpacing:"0.06em"}}>{h}</th>)}</tr></thead>
              <tbody>{products.map(p=>(<tr key={p.id} style={{borderBottom:"1px solid #12121e"}}>
                <td style={{padding:"10px 14px"}}><div style={{display:"flex",gap:8,alignItems:"center"}}><div style={{width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center",background:"#12121e",borderRadius:6}}><ProductSVG id={p.id} size={24}/></div><div><div style={{color:"#e8e8f0",fontWeight:500,fontSize:12}}>{p.name}</div>{p.badge&&<Badge text={p.badge}/>}</div></div></td>
                <td style={{padding:"10px 14px",color:"#6b7280"}}>{p.category}</td>
                <td style={{padding:"10px 14px",color:"#a78bfa",fontWeight:600}}>${p.price.toFixed(2)}</td>
                <td style={{padding:"10px 14px"}}><span style={{color:p.stock<=10?"#f59e0b":"#22c55e"}}>{p.stock}</span></td>
                <td style={{padding:"10px 14px"}}><StarRating rating={p.rating} size={11}/></td>
                <td style={{padding:"10px 14px"}}><button onClick={()=>delP(p.id)} style={{background:"#1f0a0a",border:"none",color:"#ef4444",padding:"4px 9px",borderRadius:5,cursor:"pointer",fontSize:11}}>Delete</button></td>
              </tr>))}</tbody>
            </table>
          </div>
        </div>
      </div>)}
      {tab==="orders"&&(<div style={{background:"#0d0d1a",border:"1px solid #1f1f35",borderRadius:14,overflow:"hidden"}}>
        <div style={{padding:"14px 18px",borderBottom:"1px solid #1f1f35"}}><h2 style={{fontSize:15,fontWeight:700,color:"#f0f0ff",margin:0}}>All Orders ({orders.length})</h2></div>
        <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
          <thead><tr style={{background:"#12121e"}}>{["Order","User","Date","Items","Total","Status"].map(h=><th key={h} style={{padding:"10px 14px",color:"#4b5563",fontWeight:600,textAlign:"left",fontSize:10,textTransform:"uppercase",letterSpacing:"0.06em"}}>{h}</th>)}</tr></thead>
          <tbody>{orders.slice().reverse().map(o=>(<tr key={o.id} style={{borderBottom:"1px solid #12121e"}}>
            <td style={{padding:"10px 14px",color:"#a78bfa",fontWeight:600}}>{o.id}</td>
            <td style={{padding:"10px 14px",color:"#9ca3af"}}>User #{o.userId}</td>
            <td style={{padding:"10px 14px",color:"#6b7280"}}>{o.date}</td>
            <td style={{padding:"10px 14px",color:"#e8e8f0"}}>{o.items.reduce((s,i)=>s+i.qty,0)}</td>
            <td style={{padding:"10px 14px",color:"#e8e8f0",fontWeight:600}}>${o.total.toFixed(2)}</td>
            <td style={{padding:"10px 14px"}}><span style={{background:`${sc[o.status]}20`,color:sc[o.status],fontSize:10,fontWeight:700,padding:"3px 9px",borderRadius:20}}>{o.status}</span></td>
          </tr>))}</tbody>
        </table>
      </div>)}
    </div>
  );
}

function WishlistPage(){
  const {wishlist,products,setPage}=useContext(AppContext);
  const items=products.filter(p=>wishlist.includes(p.id));
  return(<div style={{maxWidth:1280,margin:"0 auto",padding:"36px 24px"}}>
    <h1 style={{fontSize:28,fontWeight:800,color:"#f0f0ff",marginBottom:28}}>Wishlist ({items.length})</h1>
    {items.length===0?(<div style={{textAlign:"center",padding:"80px 0"}}><div style={{fontSize:48,marginBottom:14}}>♡</div><div style={{fontSize:15,color:"#6b7280"}}>Your wishlist is empty.</div><button onClick={()=>setPage("shop")} style={{marginTop:18,background:"linear-gradient(135deg,#7c3aed,#5b21b6)",color:"#fff",border:"none",padding:"11px 22px",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer"}}>Browse Shop</button></div>):(
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))",gap:20}}>{items.map(p=><ProductCard key={p.id} product={p}/>)}</div>)}
  </div>);
}

function ProfilePage(){
  const {user,setUser,setPage,showToast}=useContext(AppContext);
  const [editing,setEditing]=useState(false);
  const [name,setName]=useState(user?.name||"");
  if(!user){setPage("login");return null;}
  const save=()=>{setUser(u=>({...u,name}));setEditing(false);showToast("Profile updated!");};
  return(<div style={{maxWidth:560,margin:"36px auto",padding:"0 24px"}}>
    <h1 style={{fontSize:28,fontWeight:800,color:"#f0f0ff",marginBottom:28}}>My Profile</h1>
    <div style={{background:"#0d0d1a",border:"1px solid #1f1f35",borderRadius:20,padding:34}}>
      <div style={{display:"flex",alignItems:"center",gap:18,marginBottom:28}}>
        <div style={{width:66,height:66,borderRadius:"50%",background:"linear-gradient(135deg,#7c3aed,#a78bfa)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,fontWeight:700,color:"#fff"}}>{user.name.split(" ").map(n=>n[0]).join("").slice(0,2)}</div>
        <div>
          {editing?<input value={name} onChange={e=>setName(e.target.value)} style={{background:"#12121e",border:"1px solid #7c3aed",color:"#e8e8f0",padding:"7px 11px",borderRadius:7,fontSize:17,fontWeight:700,outline:"none"}}/>:<div style={{fontSize:20,fontWeight:700,color:"#f0f0ff"}}>{user.name}</div>}
          <div style={{fontSize:12,color:"#6b7280",marginTop:3}}>{user.email}</div>
          <span style={{background:user.role==="admin"?"#7c3aed30":"#12121e",color:user.role==="admin"?"#a78bfa":"#4b5563",fontSize:10,fontWeight:700,padding:"2px 9px",borderRadius:20,marginTop:5,display:"inline-block"}}>{user.role.toUpperCase()}</span>
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:24}}>
        {[["Member Since",user.joined],["Role",user.role==="admin"?"Administrator":"Customer"],["Email",user.email],["User ID",`#${user.id}`]].map(([l,v])=>(<div key={l} style={{background:"#12121e",borderRadius:9,padding:14}}><div style={{fontSize:10,color:"#4b5563",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:5}}>{l}</div><div style={{fontSize:13,color:"#e8e8f0",fontWeight:500}}>{v}</div></div>))}
      </div>
      <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
        {editing?(<><button onClick={save} style={{background:"linear-gradient(135deg,#7c3aed,#5b21b6)",color:"#fff",border:"none",padding:"9px 20px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer"}}>Save</button><button onClick={()=>setEditing(false)} style={{background:"none",color:"#6b7280",border:"1px solid #1f1f35",padding:"9px 20px",borderRadius:8,fontSize:13,cursor:"pointer"}}>Cancel</button></>):(<>
          <button onClick={()=>setEditing(true)} style={{background:"#1f1f35",color:"#a78bfa",border:"1px solid #2d1f5e",padding:"9px 20px",borderRadius:8,fontSize:13,cursor:"pointer"}}>Edit Profile</button>
          <button onClick={()=>setPage("orders")} style={{background:"#12121e",color:"#9ca3af",border:"1px solid #1f1f35",padding:"9px 20px",borderRadius:8,fontSize:13,cursor:"pointer"}}>My Orders</button>
          {user.role==="admin"&&<button onClick={()=>setPage("admin")} style={{background:"#12121e",color:"#9ca3af",border:"1px solid #1f1f35",padding:"9px 20px",borderRadius:8,fontSize:13,cursor:"pointer"}}>Dashboard</button>}
          <button onClick={()=>{setUser(null);setPage("home");showToast("Signed out");}} style={{background:"#1f0a0a",color:"#ef4444",border:"1px solid #3f1515",padding:"9px 20px",borderRadius:8,fontSize:13,cursor:"pointer"}}>Sign Out</button>
        </>)}
      </div>
    </div>
  </div>);
}

function Footer(){
  const {setPage}=useContext(AppContext);
  return(<footer style={{background:"#06060f",borderTop:"1px solid #1f1f35",padding:"48px 24px 28px"}}>
    <div style={{maxWidth:1280,margin:"0 auto"}}>
      <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:40,marginBottom:40}}>
        <div>
          <div style={{fontSize:20,fontWeight:800,marginBottom:14}}><span style={{background:"linear-gradient(135deg,#a78bfa,#7c3aed)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>LUXE</span><span style={{color:"#e8e8f0",fontWeight:300,letterSpacing:"0.15em"}}> NOIR</span></div>
          <p style={{color:"#4b5563",fontSize:13,lineHeight:1.8,maxWidth:240}}>40+ premium products for those who demand the exceptional.</p>
        </div>
        {[{title:"Shop",links:[["All Products","shop"],["Electronics","shop"],["Accessories","shop"],["New Arrivals","shop"]]},{title:"Account",links:[["My Orders","orders"],["Wishlist","wishlist"],["Profile","profile"],["Sign In","login"]]},{title:"Info",links:[["About Us","home"],["Returns","home"],["Shipping","home"],["Privacy","home"]]}].map(col=>(<div key={col.title}>
          <h4 style={{fontSize:10,fontWeight:700,color:"#4b5563",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:14}}>{col.title}</h4>
          {col.links.map(([l,p])=>(<button key={l} onClick={()=>setPage(p)} style={{display:"block",background:"none",border:"none",color:"#6b7280",cursor:"pointer",fontSize:13,padding:"3px 0",textAlign:"left"}}>{l}</button>))}
        </div>))}
      </div>
      <div style={{borderTop:"1px solid #1a1a2e",paddingTop:20,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:10}}>
        <span style={{color:"#374151",fontSize:12}}>© 2025 LUXE NOIR. All rights reserved.</span>
        <span style={{color:"#374151",fontSize:12}}>🔒 Secure payments · Free returns · 24/7 support</span>
      </div>
    </div>
  </footer>);
}
