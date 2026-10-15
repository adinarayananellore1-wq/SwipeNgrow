// src/components/icons.jsx
const base = {
  width: 40,
  height: 40,
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ChartIcon() {
  return (
    <svg {...base}>
      <rect x="1" y="1" width="38" height="38" rx="11" />
      <path d="M20 21v7" strokeWidth="1.4" />
    </svg>
  );
}

export function PlanIcon() {
  return (
    <svg {...base}>
      <rect x="1" y="4" width="35" height="35" rx="11" />
      <circle cx="34" cy="6" r="3.2" fill="white" />
      <path d="M11 28 L17 22 L22 26 L29 18" />
    </svg>
  );
}

export function WalletIcon() {
  return (
    <svg {...base}>
      <rect x="1" y="9" width="38" height="25" rx="9" />
      <path d="M39 17H31a4 4 0 0 0 0 8h8" />
      <circle cx="31.5" cy="21" r="1" fill="currentColor" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg {...base}>
      <rect x="1" y="1" width="38" height="38" rx="11" />
      <path d="M12 20.5 L18 26.5 L28.5 13.5" />
    </svg>
  );
}