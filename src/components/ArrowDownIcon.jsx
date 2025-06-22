// src/components/ArrowDownIcon.jsx
import React from 'react';
import './ArrowDownIcon.css'; // Archivo CSS que crearemos

export default function ArrowDownIcon() {
  return (
    <svg
      className="arrow-down-icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}