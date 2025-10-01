// src/components/Track.jsx
import { useState } from "react";
import { FaCheckCircle, FaBriefcase, FaSpinner, FaFileAlt } from "react-icons/fa";

export default function Track() {
  const commandes = [
    {
      date: "12/10/2025",
      status: [
        { label: "Paiement effectué", icon: <FaBriefcase />, active: true },
        { label: "Traitement en cours", icon: <FaSpinner className="animate-spin" />, active: false },
        { label: "Envoi des documents", icon: <FaFileAlt />, active: false },
      ],
    },
    {
      date: "12/01/2025",
      status: [
        { label: "Paiement effectué", icon: <FaCheckCircle />, active: true },
        { label: "Traitement en cours", icon: <FaSpinner />, active: true },
        { label: "Envoi des documents", icon: <FaFileAlt />, active: false },
      ],
    },
    {
      date: "17/03/2025",
      status: [
        { label: "Paiement effectué", icon: <FaCheckCircle />, active: true },
        { label: "Traitement en cours", icon: <FaCheckCircle />, active: true },
        { label: "Envoi des documents", icon: <FaFileAlt />, active: true },
      ],
    },
  ];

  // 👉 on garde l'index de la commande sélectionnée
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-md flex overflow-hidden w-[440px]">
        {/* Sidebar des dates */}
        <div className="bg-gray-100 p-4 w-[120px]">
          <h2 className="text-sm font-semibold mb-4">Commandes</h2>
          {commandes.map((cmd, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`block w-full text-left px-2 py-1 rounded mb-2 text-sm transition ${
                selectedIndex === index
                  ? "bg-white text-black font-semibold shadow"
                  : "text-gray-500 hover:bg-gray-200"
              }`}
            >
              {cmd.date}
            </button>
          ))}
        </div>

        {/* Timeline & Status */}
        <div className="flex-1 p-4">
          {commandes[selectedIndex].status.map((step, idx) => (
            <div className="flex items-start mb-6" key={idx}>
              {/* Timeline indicator */}
              <div className="flex flex-col items-center mr-4">
                <div
                  className={`w-3 h-3 rounded-full ${
                    step.active ? "bg-purple-600" : "border-2 border-gray-300 bg-white"
                  }`}
                />
                {idx < commandes[selectedIndex].status.length - 1 && (
                  <div className="h-10 w-px bg-gray-300" />
                )}
              </div>

              {/* Step content */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-800">{step.label}</span>
                <span className={`text-lg ${step.active ? "text-purple-600" : "text-gray-400"}`}>
                  {step.icon}
                </span>
              </div>
            </div>
          ))}

          {commandes[selectedIndex].status.length === 0 && (
            <p className="text-gray-500 text-sm">Aucun suivi pour cette commande.</p>
          )}
        </div>
      </div>
    </div>
  );
}
