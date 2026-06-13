// SVG product illustrations for LUXE NOIR
export const ProductImage = ({ productId, size = 80 }) => {
  const images = {
    // ELECTRONICS
    1: ( // Headphones
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <ellipse cx="50" cy="58" rx="26" ry="20" stroke="#a78bfa" strokeWidth="3" fill="none"/>
        <path d="M24 58 C24 35 76 35 76 58" stroke="#7c3aed" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
        <rect x="15" y="52" width="12" height="18" rx="6" fill="#7c3aed"/>
        <rect x="73" y="52" width="12" height="18" rx="6" fill="#7c3aed"/>
        <circle cx="50" cy="20" r="4" fill="#a78bfa" opacity="0.5"/>
      </svg>
    ),
    2: ( // Watch
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="38" y="8" width="24" height="12" rx="3" fill="#4c1d95"/>
        <rect x="38" y="80" width="24" height="12" rx="3" fill="#4c1d95"/>
        <circle cx="50" cy="50" r="28" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="3"/>
        <circle cx="50" cy="50" r="22" fill="#0d0820" stroke="#a78bfa" strokeWidth="1"/>
        <line x1="50" y1="50" x2="50" y2="34" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="50" y1="50" x2="62" y2="50" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="50" cy="50" r="3" fill="#a78bfa"/>
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((a,i) => (
          <line key={i} x1={50+19*Math.sin(a*Math.PI/180)} y1={50-19*Math.cos(a*Math.PI/180)} x2={50+22*Math.sin(a*Math.PI/180)} y2={50-22*Math.cos(a*Math.PI/180)} stroke="#4c1d95" strokeWidth={i%3===0?2:1}/>
        ))}
      </svg>
    ),
    3: ( // Keyboard
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="8" y="30" width="84" height="44" rx="6" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2"/>
        {[0,1,2,3,4,5,6,7,8,9].map(i => <rect key={i} x={12+i*8} y={38} width="6" height="6" rx="1.5" fill="#7c3aed" opacity="0.8"/>)}
        {[0,1,2,3,4,5,6,7,8].map(i => <rect key={i} x={14+i*8} y={48} width="6" height="6" rx="1.5" fill="#5b21b6" opacity="0.8"/>)}
        {[0,1,2,3,4,5,6].map(i => <rect key={i} x={16+i*8} y={58} width="6" height="6" rx="1.5" fill="#4c1d95" opacity="0.8"/>)}
        <rect x="30" y="65" width="40" height="5" rx="2.5" fill="#7c3aed" opacity="0.6"/>
        <rect x="8" y="20" width="84" height="4" rx="2" fill="#a78bfa" opacity="0.3"/>
      </svg>
    ),
    4: ( // Sunglasses
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <path d="M5 50 L20 50" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round"/>
        <path d="M80 50 L95 50" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round"/>
        <ellipse cx="30" cy="50" rx="18" ry="14" fill="#0d0820" stroke="#a78bfa" strokeWidth="2.5"/>
        <ellipse cx="70" cy="50" rx="18" ry="14" fill="#0d0820" stroke="#a78bfa" strokeWidth="2.5"/>
        <line x1="48" y1="50" x2="52" y2="50" stroke="#7c3aed" strokeWidth="2.5"/>
        <ellipse cx="30" cy="50" rx="18" ry="14" fill="#7c3aed" opacity="0.15"/>
        <ellipse cx="70" cy="50" rx="18" ry="14" fill="#7c3aed" opacity="0.15"/>
        <ellipse cx="24" cy="44" rx="5" ry="4" fill="white" opacity="0.08"/>
      </svg>
    ),
    5: ( // Backpack
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="22" y="25" width="56" height="60" rx="12" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5"/>
        <path d="M38 25 C38 15 62 15 62 25" stroke="#7c3aed" strokeWidth="2.5" fill="none"/>
        <rect x="32" y="42" width="36" height="22" rx="6" fill="none" stroke="#a78bfa" strokeWidth="1.5"/>
        <line x1="50" y1="42" x2="50" y2="64" stroke="#a78bfa" strokeWidth="1.5"/>
        <circle cx="50" cy="53" r="3" fill="#7c3aed"/>
        <rect x="40" y="70" width="20" height="8" rx="4" fill="#4c1d95"/>
      </svg>
    ),
    6: ( // Gaming Mouse
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <path d="M35 70 C25 70 20 55 20 45 C20 28 33 18 50 18 C67 18 80 28 80 45 C80 55 75 70 65 70 Z" fill="#0d0820" stroke="#7c3aed" strokeWidth="2.5"/>
        <line x1="50" y1="18" x2="50" y2="48" stroke="#a78bfa" strokeWidth="1.5"/>
        <ellipse cx="50" cy="32" rx="8" ry="5" fill="none" stroke="#7c3aed" strokeWidth="1.5"/>
        <circle cx="50" cy="32" rx="3" ry="3" fill="#a78bfa" opacity="0.7"/>
        <ellipse cx="34" cy="52" rx="7" ry="10" fill="#7c3aed" opacity="0.15"/>
        <rect x="44" y="60" width="12" height="6" rx="3" fill="#4c1d95"/>
      </svg>
    ),
    7: ( // Desk Lamp
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="25" y="88" width="50" height="6" rx="3" fill="#4c1d95"/>
        <rect x="46" y="65" width="8" height="24" rx="4" fill="#7c3aed"/>
        <path d="M50 65 C50 65 30 52 28 38" stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" fill="none"/>
        <path d="M28 38 C20 24 38 14 50 20" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <ellipse cx="44" cy="22" rx="20" ry="10" fill="#1a0d2e" stroke="#a78bfa" strokeWidth="2" transform="rotate(-20 44 22)"/>
        <ellipse cx="44" cy="22" rx="16" ry="7" fill="#fef08a" opacity="0.25" transform="rotate(-20 44 22)"/>
      </svg>
    ),
    8: ( // Wallet
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="12" y="32" width="72" height="46" rx="7" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5"/>
        <rect x="54" y="44" width="30" height="22" rx="5" fill="#0d0820" stroke="#a78bfa" strokeWidth="1.5"/>
        <circle cx="72" cy="55" r="5" fill="#7c3aed" opacity="0.6"/>
        <rect x="12" y="42" width="32" height="2" rx="1" fill="#a78bfa" opacity="0.4"/>
        <rect x="12" y="48" width="24" height="2" rx="1" fill="#a78bfa" opacity="0.3"/>
        <rect x="12" y="28" width="72" height="8" rx="3" fill="#4c1d95"/>
      </svg>
    ),
    9: ( // Running Shoes
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <path d="M10 68 C10 68 30 40 50 38 C70 36 85 46 90 58 C92 63 88 68 80 68 Z" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5"/>
        <path d="M20 68 C20 55 35 45 50 44" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" fill="none" strokeDasharray="4 3"/>
        <path d="M80 68 L10 68" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round"/>
        <ellipse cx="70" cy="52" rx="12" ry="8" fill="#7c3aed" opacity="0.2"/>
        <path d="M50 44 L54 38 M58 43 L62 37 M66 46 L70 41" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    10: ( // Smart Speaker
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="28" y="20" width="44" height="65" rx="14" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5"/>
        <circle cx="50" cy="48" r="16" fill="none" stroke="#a78bfa" strokeWidth="1.5"/>
        <circle cx="50" cy="48" r="10" fill="none" stroke="#7c3aed" strokeWidth="1.5"/>
        <circle cx="50" cy="48" r="4" fill="#a78bfa" opacity="0.7"/>
        <rect x="38" y="72" width="24" height="5" rx="2.5" fill="#4c1d95"/>
        {[-1,0,1].map(i => <circle key={i} cx={50+i*10} cy={28} r="2.5" fill="#7c3aed" opacity="0.8"/>)}
      </svg>
    ),
    11: ( // Fragrance bottle
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="32" y="35" width="36" height="52" rx="8" fill="#1a0d2e" stroke="#a78bfa" strokeWidth="2"/>
        <rect x="38" y="35" width="24" height="52" rx="6" fill="#7c3aed" opacity="0.1"/>
        <rect x="40" y="25" width="20" height="12" rx="4" fill="#4c1d95" stroke="#7c3aed" strokeWidth="1.5"/>
        <rect x="46" y="18" width="8" height="10" rx="3" fill="#7c3aed"/>
        <ellipse cx="50" cy="60" rx="10" ry="14" fill="#a78bfa" opacity="0.12"/>
        <path d="M38 52 Q50 46 62 52" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      </svg>
    ),
    12: ( // Notebook
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="20" y="15" width="58" height="72" rx="4" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5"/>
        <rect x="20" y="15" width="10" height="72" rx="3" fill="#4c1d95"/>
        {[25,30,35,40,45,50,55].map(y => <circle key={y} cx="25" cy={y} r="2" fill="#7c3aed" opacity="0.7"/>)}
        {[30,38,46,54,62,70].map(y => <line key={y} x1="36" y1={y} x2="72" y2={y} stroke="#a78bfa" strokeWidth="1" opacity="0.4"/>)}
        <rect x="36" y="22" width="28" height="3" rx="1.5" fill="#7c3aed" opacity="0.5"/>
      </svg>
    ),
    // NEW PRODUCTS
    13: ( // Drone
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="36" y="38" width="28" height="18" rx="5" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2"/>
        <circle cx="22" cy="36" r="10" fill="none" stroke="#a78bfa" strokeWidth="2"/>
        <circle cx="78" cy="36" r="10" fill="none" stroke="#a78bfa" strokeWidth="2"/>
        <circle cx="22" cy="64" r="10" fill="none" stroke="#a78bfa" strokeWidth="2"/>
        <circle cx="78" cy="64" r="10" fill="none" stroke="#a78bfa" strokeWidth="2"/>
        <line x1="32" y1="40" x2="36" y2="44" stroke="#7c3aed" strokeWidth="2"/>
        <line x1="68" y1="40" x2="64" y2="44" stroke="#7c3aed" strokeWidth="2"/>
        <line x1="32" y1="60" x2="36" y2="56" stroke="#7c3aed" strokeWidth="2"/>
        <line x1="68" y1="60" x2="64" y2="56" stroke="#7c3aed" strokeWidth="2"/>
        <circle cx="50" cy="47" r="5" fill="#7c3aed"/>
        <circle cx="50" cy="47" r="2" fill="#a78bfa"/>
      </svg>
    ),
    14: ( // Smartwatch fitness
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="34" y="10" width="16" height="10" rx="3" fill="#4c1d95"/>
        <rect x="34" y="80" width="16" height="10" rx="3" fill="#4c1d95"/>
        <rect x="28" y="25" width="44" height="52" rx="10" fill="#0d0820" stroke="#7c3aed" strokeWidth="2.5"/>
        <rect x="32" y="29" width="36" height="44" rx="7" fill="#1a0d2e"/>
        <path d="M38 58 L43 48 L48 54 L53 42 L58 50 L63 46" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <text x="50" y="38" textAnchor="middle" fill="#a78bfa" fontSize="9" fontWeight="bold">98</text>
        <text x="50" y="68" textAnchor="middle" fill="#4b5563" fontSize="7">BPM</text>
      </svg>
    ),
    15: ( // Laptop
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="15" y="20" width="70" height="48" rx="5" fill="#0d0820" stroke="#7c3aed" strokeWidth="2.5"/>
        <rect x="19" y="24" width="62" height="40" rx="3" fill="#12121e"/>
        <rect x="22" y="27" width="56" height="34" rx="2" fill="#1a0d2e"/>
        <rect x="5" y="68" width="90" height="8" rx="4" fill="#0d0820" stroke="#7c3aed" strokeWidth="1.5"/>
        <rect x="38" y="68" width="24" height="4" rx="2" fill="#4c1d95"/>
        {[35,43,51].map(y => <line key={y} x1="28" y1={y} x2="54" y2={y} stroke="#a78bfa" strokeWidth="1" opacity="0.4"/>)}
        <rect x="58" y="33" width="18" height="24" rx="3" fill="#0d0820" stroke="#a78bfa" strokeWidth="1"/>
        <rect x="60" y="35" width="14" height="10" rx="1" fill="#7c3aed" opacity="0.3"/>
      </svg>
    ),
    16: ( // Wireless Earbuds
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="22" y="25" width="56" height="52" rx="14" fill="#0d0820" stroke="#7c3aed" strokeWidth="2"/>
        <ellipse cx="36" cy="52" rx="9" ry="13" fill="#1a0d2e" stroke="#a78bfa" strokeWidth="1.5"/>
        <ellipse cx="64" cy="52" rx="9" ry="13" fill="#1a0d2e" stroke="#a78bfa" strokeWidth="1.5"/>
        <circle cx="36" cy="52" r="4" fill="#7c3aed"/>
        <circle cx="64" cy="52" r="4" fill="#7c3aed"/>
        <rect x="43" y="30" width="14" height="3" rx="1.5" fill="#4c1d95"/>
        <circle cx="36" cy="52" r="2" fill="#a78bfa"/>
        <circle cx="64" cy="52" r="2" fill="#a78bfa"/>
      </svg>
    ),
    17: ( // 4K Monitor
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="8" y="15" width="84" height="56" rx="5" fill="#0d0820" stroke="#7c3aed" strokeWidth="2.5"/>
        <rect x="12" y="19" width="76" height="48" rx="3" fill="#12121e"/>
        <rect x="40" y="71" width="20" height="12" rx="2" fill="#4c1d95"/>
        <rect x="28" y="83" width="44" height="5" rx="2.5" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="1.5"/>
        <rect x="16" y="23" width="68" height="40" rx="2" fill="#1a0d2e"/>
        {[28,36,44].map(y=><line key={y} x1="20" y1={y} x2="80" y2={y} stroke="#a78bfa" strokeWidth="0.7" opacity="0.3"/>)}
        <text x="50" y="46" textAnchor="middle" fill="#7c3aed" fontSize="11" fontWeight="bold">4K</text>
      </svg>
    ),
    18: ( // Camera
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="12" y="32" width="76" height="48" rx="8" fill="#0d0820" stroke="#7c3aed" strokeWidth="2.5"/>
        <path d="M36 32 L42 22 L58 22 L64 32" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2"/>
        <circle cx="50" cy="56" r="18" fill="none" stroke="#a78bfa" strokeWidth="2"/>
        <circle cx="50" cy="56" r="12" fill="none" stroke="#7c3aed" strokeWidth="2"/>
        <circle cx="50" cy="56" r="7" fill="#1a0d2e"/>
        <circle cx="50" cy="56" r="4" fill="#7c3aed" opacity="0.6"/>
        <circle cx="24" cy="42" r="4" fill="#1a0d2e" stroke="#a78bfa" strokeWidth="1.5"/>
        <circle cx="24" cy="42" r="2" fill="#22c55e" opacity="0.8"/>
      </svg>
    ),
    19: ( // Gaming Controller
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <path d="M20 50 C15 38 18 25 30 22 L70 22 C82 25 85 38 80 50 L70 70 C65 76 35 76 30 70 Z" fill="#0d0820" stroke="#7c3aed" strokeWidth="2.5"/>
        <rect x="28" y="38" width="14" height="3" rx="1.5" fill="#a78bfa"/>
        <rect x="33" y="33" width="3" height="14" rx="1.5" fill="#a78bfa"/>
        <circle cx="66" cy="36" r="4" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <circle cx="72" cy="42" r="4" fill="none" stroke="#ef4444" strokeWidth="1.5"/>
        <circle cx="60" cy="42" r="4" fill="none" stroke="#3b82f6" strokeWidth="1.5"/>
        <circle cx="66" cy="48" r="4" fill="none" stroke="#f59e0b" strokeWidth="1.5"/>
        <ellipse cx="38" cy="58" rx="8" ry="5" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="1"/>
        <ellipse cx="62" cy="58" rx="8" ry="5" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="1"/>
      </svg>
    ),
    20: ( // Tablet
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="18" y="10" width="64" height="82" rx="8" fill="#0d0820" stroke="#7c3aed" strokeWidth="2.5"/>
        <rect x="22" y="18" width="56" height="66" rx="4" fill="#12121e"/>
        <circle cx="50" cy="88" r="3" fill="#4c1d95"/>
        <rect x="26" y="22" width="48" height="58" rx="2" fill="#1a0d2e"/>
        {[30,40,50,60,68].map(y=><line key={y} x1="30" y1={y} x2="70" y2={y} stroke="#a78bfa" strokeWidth="0.8" opacity="0.35"/>)}
        <rect x="30" y="26" width="32" height="6" rx="2" fill="#7c3aed" opacity="0.4"/>
      </svg>
    ),
    // ACCESSORIES
    21: ( // Leather Belt
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="8" y="44" width="70" height="14" rx="5" fill="#3b1f0a" stroke="#a78bfa" strokeWidth="2"/>
        <rect x="8" y="44" width="70" height="14" rx="5" fill="#7c3aed" opacity="0.1"/>
        <rect x="72" y="40" width="18" height="22" rx="4" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2"/>
        <rect x="76" y="44" width="10" height="14" rx="2" fill="#0d0820"/>
        <line x1="81" y1="44" x2="81" y2="58" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round"/>
        {[20,30,40,50].map(x=><circle key={x} cx={x} cy={51} r="2.5" fill="#a78bfa" opacity="0.5"/>)}
      </svg>
    ),
    22: ( // Cap / Hat
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <ellipse cx="50" cy="62" rx="44" ry="10" fill="#0d0820" stroke="#7c3aed" strokeWidth="2"/>
        <path d="M14 62 C14 40 86 40 86 62" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5"/>
        <path d="M14 62 C14 40 50 35 50 62" fill="#0d0820"/>
        <path d="M50 35 C60 35 86 40 86 62" fill="#1a0d2e" opacity="0.5"/>
        <ellipse cx="50" cy="38" rx="12" ry="5" fill="#7c3aed" opacity="0.4"/>
        <rect x="38" y="55" width="24" height="4" rx="2" fill="#4c1d95"/>
      </svg>
    ),
    23: ( // Luxury Pen
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="20" y="44" width="58" height="12" rx="6" fill="#1a0d2e" stroke="#a78bfa" strokeWidth="2"/>
        <rect x="20" y="44" width="58" height="12" rx="6" fill="#7c3aed" opacity="0.12"/>
        <ellipse cx="78" cy="50" rx="6" ry="4" fill="#4c1d95"/>
        <path d="M78 46 L90 48 L90 52 L78 54 Z" fill="#a78bfa" opacity="0.7"/>
        <path d="M88 48 L95 50 L88 52" fill="#fef08a" opacity="0.6"/>
        <rect x="28" y="46" width="3" height="8" rx="1.5" fill="#a78bfa" opacity="0.5"/>
        <rect x="34" y="46" width="3" height="8" rx="1.5" fill="#a78bfa" opacity="0.5"/>
      </svg>
    ),
    24: ( // Bracelet
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="26" fill="none" stroke="#7c3aed" strokeWidth="6"/>
        <circle cx="50" cy="50" r="26" fill="none" stroke="#a78bfa" strokeWidth="2" strokeDasharray="8 4"/>
        {[0,45,90,135,180,225,270,315].map((a,i)=>(
          <circle key={i} cx={50+26*Math.sin(a*Math.PI/180)} cy={50-26*Math.cos(a*Math.PI/180)} r="4" fill={i%2===0?"#7c3aed":"#a78bfa"}/>
        ))}
        <circle cx="50" cy="24" r="6" fill="#fef08a" opacity="0.7"/>
      </svg>
    ),
    // BAGS
    25: ( // Tote Bag
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <path d="M20 40 L15 85 L85 85 L80 40 Z" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5"/>
        <path d="M35 40 C35 25 65 25 65 40" fill="none" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round"/>
        <line x1="38" y1="55" x2="62" y2="55" stroke="#a78bfa" strokeWidth="1.5" opacity="0.5"/>
        <line x1="36" y1="63" x2="64" y2="63" stroke="#a78bfa" strokeWidth="1.5" opacity="0.4"/>
        <rect x="44" y="70" width="12" height="10" rx="3" fill="#4c1d95"/>
      </svg>
    ),
    26: ( // Duffle Bag
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <ellipse cx="50" cy="58" rx="40" ry="26" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5"/>
        <ellipse cx="50" cy="52" rx="40" ry="20" fill="#0d0820" stroke="#7c3aed" strokeWidth="2"/>
        <path d="M25 45 C25 38 75 38 75 45" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"/>
        <rect x="38" y="22" width="24" height="20" rx="8" fill="none" stroke="#a78bfa" strokeWidth="2.5"/>
        <rect x="44" y="48" width="12" height="8" rx="3" fill="#4c1d95" stroke="#7c3aed" strokeWidth="1"/>
        <line x1="50" y1="48" x2="50" y2="56" stroke="#a78bfa" strokeWidth="1.5"/>
      </svg>
    ),
    27: ( // Laptop Bag
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="12" y="30" width="76" height="58" rx="8" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5"/>
        <path d="M35 30 C35 18 65 18 65 30" fill="none" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round"/>
        <rect x="20" y="42" width="60" height="34" rx="5" fill="#0d0820" stroke="#a78bfa" strokeWidth="1.5"/>
        <rect x="24" y="46" width="52" height="26" rx="3" fill="#12121e"/>
        <rect x="40" y="58" width="20" height="4" rx="2" fill="#4c1d95"/>
        <rect x="44" y="30" width="12" height="6" rx="3" fill="#4c1d95"/>
      </svg>
    ),
    // APPAREL
    28: ( // Hoodie
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <path d="M30 18 L20 35 L15 75 L85 75 L80 35 L70 18 C65 25 58 28 50 28 C42 28 35 25 30 18 Z" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5"/>
        <path d="M30 18 C28 12 20 10 15 15 L20 35" fill="#0d0820" stroke="#7c3aed" strokeWidth="2"/>
        <path d="M70 18 C72 12 80 10 85 15 L80 35" fill="#0d0820" stroke="#7c3aed" strokeWidth="2"/>
        <path d="M38 28 C38 28 50 32 62 28" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="42" y="44" width="16" height="20" rx="4" fill="#0d0820" stroke="#a78bfa" strokeWidth="1"/>
        <line x1="50" y1="44" x2="50" y2="64" stroke="#a78bfa" strokeWidth="1"/>
      </svg>
    ),
    29: ( // T-Shirt
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <path d="M35 15 L15 30 L25 40 L35 33 L35 80 L65 80 L65 33 L75 40 L85 30 L65 15 C63 22 56 26 50 26 C44 26 37 22 35 15 Z" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5"/>
        <path d="M40 50 Q50 56 60 50" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    30: ( // Joggers / Pants
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <path d="M20 18 L22 55 L35 90 L50 88 L50 55 L50 55 L50 88 L65 90 L78 55 L80 18 Z" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5"/>
        <rect x="20" y="18" width="60" height="10" rx="4" fill="#4c1d95"/>
        <line x1="50" y1="28" x2="50" y2="88" stroke="#a78bfa" strokeWidth="1.5" opacity="0.5"/>
        <rect x="30" y="22" width="16" height="4" rx="2" fill="#7c3aed" opacity="0.5"/>
      </svg>
    ),
    // HOME
    31: ( // Scented Candle
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="28" y="50" width="44" height="38" rx="6" fill="#1a0d2e" stroke="#a78bfa" strokeWidth="2"/>
        <ellipse cx="50" cy="50" rx="22" ry="6" fill="#0d0820" stroke="#a78bfa" strokeWidth="1.5"/>
        <line x1="50" y1="44" x2="50" y2="32" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/>
        <path d="M50 32 C46 25 44 18 50 14 C56 18 54 25 50 32" fill="#f59e0b" opacity="0.8"/>
        <path d="M50 26 C48 22 50 18 50 18 C50 18 52 22 50 26" fill="#fef08a" opacity="0.9"/>
        {[35,42,58,65].map(x=><line key={x} x1={x} y1="55" x2={x} y2="85" stroke="#a78bfa" strokeWidth="0.8" opacity="0.2"/>)}
      </svg>
    ),
    32: ( // Indoor Plant
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="32" y="68" width="36" height="20" rx="5" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2"/>
        <line x1="50" y1="68" x2="50" y2="42" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M50 55 C50 55 35 48 32 38 C38 30 50 36 50 42" fill="#22c55e" opacity="0.7"/>
        <path d="M50 50 C50 50 65 43 68 33 C62 25 50 31 50 37" fill="#16a34a" opacity="0.8"/>
        <path d="M50 65 C50 65 38 58 36 48 C42 42 50 48 50 54" fill="#4ade80" opacity="0.6"/>
        <ellipse cx="50" cy="69" rx="18" ry="4" fill="#0d0820"/>
      </svg>
    ),
    33: ( // Throw Pillow
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="15" y="25" width="70" height="54" rx="12" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5"/>
        <rect x="20" y="30" width="60" height="44" rx="8" fill="#0d0820" stroke="#a78bfa" strokeWidth="1"/>
        <line x1="50" y1="30" x2="50" y2="74" stroke="#a78bfa" strokeWidth="1" opacity="0.3"/>
        <line x1="20" y1="52" x2="80" y2="52" stroke="#a78bfa" strokeWidth="1" opacity="0.3"/>
        <circle cx="50" cy="52" r="10" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="3 3"/>
        <circle cx="50" cy="52" r="4" fill="#4c1d95"/>
        {[15,35,65,85].map((x,i)=><circle key={i} cx={x} cy={i<2?25:75} r="3" fill="#7c3aed" opacity="0.7"/>)}
      </svg>
    ),
    34: ( // Coffee Maker
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="25" y="20" width="50" height="68" rx="8" fill="#0d0820" stroke="#7c3aed" strokeWidth="2.5"/>
        <rect x="30" y="26" width="40" height="24" rx="5" fill="#1a0d2e" stroke="#a78bfa" strokeWidth="1.5"/>
        <circle cx="50" cy="38" rx="12" ry="12" r="12" fill="#12121e" stroke="#7c3aed" strokeWidth="1.5"/>
        <circle cx="50" cy="38" r="7" fill="#3b1f0a" opacity="0.8"/>
        <rect x="32" y="56" width="36" height="22" rx="4" fill="#1a0d2e"/>
        <path d="M42 67 L58 67" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="50" cy="75" r="3" fill="#7c3aed" opacity="0.6"/>
        <rect x="68" y="50" width="14" height="8" rx="3" fill="#0d0820" stroke="#a78bfa" strokeWidth="1.5"/>
      </svg>
    ),
    // BEAUTY
    35: ( // Skincare Set
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="15" y="40" width="28" height="48" rx="6" fill="#1a0d2e" stroke="#a78bfa" strokeWidth="2"/>
        <rect x="57" y="35" width="28" height="53" rx="6" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2"/>
        <rect x="15" y="32" width="28" height="12" rx="4" fill="#4c1d95" stroke="#a78bfa" strokeWidth="1"/>
        <rect x="57" y="26" width="28" height="13" rx="4" fill="#4c1d95" stroke="#7c3aed" strokeWidth="1"/>
        <rect x="20" y="36" width="18" height="3" rx="1.5" fill="#a78bfa" opacity="0.5"/>
        <rect x="62" y="30" width="18" height="3" rx="1.5" fill="#7c3aed" opacity="0.5"/>
        <ellipse cx="29" cy="64" rx="8" ry="10" fill="#7c3aed" opacity="0.1"/>
        <ellipse cx="71" cy="62" rx="8" ry="12" fill="#a78bfa" opacity="0.1"/>
      </svg>
    ),
    36: ( // Lipstick
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="38" y="55" width="24" height="32" rx="5" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2"/>
        <rect x="38" y="45" width="24" height="15" rx="3" fill="#4c1d95" stroke="#a78bfa" strokeWidth="1.5"/>
        <path d="M38 45 L44 22 L56 22 L62 45" fill="#dc2626" stroke="#ef4444" strokeWidth="1.5"/>
        <ellipse cx="50" cy="22" rx="6" ry="3" fill="#ef4444"/>
        <rect x="42" y="62" width="16" height="2" rx="1" fill="#a78bfa" opacity="0.5"/>
        <rect x="42" y="67" width="16" height="2" rx="1" fill="#a78bfa" opacity="0.3"/>
      </svg>
    ),
    // SPORTS & FITNESS
    37: ( // Yoga Mat
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <ellipse cx="50" cy="50" rx="12" ry="42" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2.5" transform="rotate(-15 50 50)"/>
        <ellipse cx="50" cy="50" rx="9" ry="39" fill="#0d0820" stroke="#a78bfa" strokeWidth="1" transform="rotate(-15 50 50)"/>
        {[-3,-1,1,3].map(i=><ellipse key={i} cx={50+i*3} cy={50+i*3} rx="6" ry="36" fill="none" stroke="#7c3aed" strokeWidth="0.8" opacity="0.4" transform="rotate(-15 50 50)"/>)}
        <path d="M25 78 L30 72" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    38: ( // Dumbbell
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="42" y="44" width="16" height="12" rx="3" fill="#4c1d95"/>
        <rect x="22" y="36" width="14" height="28" rx="5" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2"/>
        <rect x="12" y="42" width="14" height="16" rx="5" fill="#7c3aed"/>
        <rect x="64" y="36" width="14" height="28" rx="5" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2"/>
        <rect x="74" y="42" width="14" height="16" rx="5" fill="#7c3aed"/>
        <line x1="36" y1="50" x2="64" y2="50" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
    39: ( // Water Bottle
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="34" y="30" width="32" height="60" rx="10" fill="#0d0820" stroke="#7c3aed" strokeWidth="2.5"/>
        <rect x="38" y="30" width="24" height="60" rx="8" fill="#7c3aed" opacity="0.08"/>
        <rect x="38" y="18" width="24" height="16" rx="5" fill="#1a0d2e" stroke="#a78bfa" strokeWidth="1.5"/>
        <rect x="44" y="12" width="12" height="10" rx="5" fill="#4c1d95"/>
        <rect x="38" y="50" width="24" height="3" rx="1.5" fill="#a78bfa" opacity="0.4"/>
        <rect x="38" y="58" width="24" height="3" rx="1.5" fill="#a78bfa" opacity="0.3"/>
        <path d="M38 38 Q50 34 62 38" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
        <ellipse cx="50" cy="72" rx="10" ry="14" fill="#7c3aed" opacity="0.12"/>
      </svg>
    ),
    // STATIONERY
    40: ( // Desk Organizer
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="10" y="72" width="80" height="14" rx="4" fill="#0d0820" stroke="#7c3aed" strokeWidth="2"/>
        <rect x="14" y="48" width="18" height="26" rx="3" fill="#1a0d2e" stroke="#a78bfa" strokeWidth="1.5"/>
        <rect x="36" y="38" width="18" height="36" rx="3" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="1.5"/>
        <rect x="58" y="54" width="18" height="20" rx="3" fill="#1a0d2e" stroke="#a78bfa" strokeWidth="1.5"/>
        <line x1="20" y1="48" x2="20" y2="64" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="24" y1="48" x2="24" y2="60" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="44" y1="38" x2="44" y2="62" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="67" y1="54" x2="67" y2="68" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
      {images[productId] || (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <rect x="20" y="20" width="60" height="60" rx="10" fill="#1a0d2e" stroke="#7c3aed" strokeWidth="2"/>
          <text x="50" y="56" textAnchor="middle" fill="#a78bfa" fontSize="22">?</text>
        </svg>
      )}
    </div>
  );
};
