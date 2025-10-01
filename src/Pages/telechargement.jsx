// src/components/Telechargement.jsx
import { FaFilePdf, FaDownload } from "react-icons/fa";
import { useState } from "react";

export default function Telechargement() {
  const commandes = [
    {
      date: "12/10/2025",
      docs: [
        { label: "Titre Foncier", pdf: false, downloadable: true },
        { label: "Plan de Masse", pdf: true, downloadable: false },
        { label: "Plan de Situation", pdf: false, downloadable: true },
      ],
    },
    {
      date: "12/01/2025",
      docs: [
        { label: "Titre Foncier", pdf: true, downloadable: false },
        { label: "Plan de Masse", pdf: false, downloadable: true },
        { label: "Plan de Situation", pdf: false, downloadable: true },
      ],
    },
    {
      date: "17/03/2025",
      docs: [
        { label: "Titre Foncier", pdf: true, downloadable: true },
        { label: "Plan de Masse", pdf: false, downloadable: false },
        { label: "Plan de Situation", pdf: false, downloadable: true },
      ],
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg flex overflow-hidden w-[600px]">
        
        {/* Colonne Commandes */}
        <div className="bg-gray-100 w-[140px] p-4">
          <h2 className="text-sm font-semibold mb-4">Commandes</h2>
          {commandes.map((cmd, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`block w-full text-left px-2 py-1 rounded mb-2 text-sm transition ${
                selectedIndex === idx
                  ? "bg-white font-semibold shadow"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cmd.date}
            </button>
          ))}
        </div>

        {/* Colonne Villas */}
        <div className="flex-1 p-4">
          <h2 className="text-sm font-semibold mb-4">Villas</h2>
          <div className="space-y-4">
            {commandes[selectedIndex].docs.map((doc, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2 shadow-sm"
              >
                <span className="text-sm text-gray-700">{doc.label}</span>
                <div className="flex gap-3">
                  <span
                    className={`text-xl ${
                      doc.pdf ? "text-red-500" : "text-gray-300"
                    }`}
                  >
                    <FaFilePdf />
                  </span>
                  <button
                    className={`text-xl ${
                      doc.downloadable
                        ? "text-green-500 hover:text-green-600"
                        : "text-gray-300"
                    }`}
                    disabled={!doc.downloadable}
                    onClick={() => {
                      if (doc.downloadable) alert(`Téléchargement de ${doc.label}`);
                    }}
                  >
                    <FaDownload />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
