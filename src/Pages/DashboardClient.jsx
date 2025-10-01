import React, { useState } from "react";
import {
  FaMoneyBillWave,
  FaTruck,
  FaDownload,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

export default function DashboardClient() {
  const [activeTab, setActiveTab] = useState("paiement");
  const [paymentMethod, setPaymentMethod] = useState("carte");

  const handleLogout = () => {
    // Effacer token/session
    localStorage.removeItem("token");
    // Rediriger
    window.location.href = "/login";
  };

  // === Paiement ===
  const renderPaymentForm = () => {
    if (paymentMethod === "carte") {
      return (
        <form className="bg-white p-6 rounded shadow-md w-full max-w-lg">
          <h2 className="text-xl font-bold mb-4 text-blue-900">Paiement par Carte</h2>
          <input
            type="text"
            placeholder="Nom sur la carte"
            className="border p-2 w-full mb-4 rounded"
          />
          <input
            type="text"
            placeholder="Numéro de carte"
            className="border p-2 w-full mb-4 rounded"
          />
          <input type="month" className="border p-2 w-full mb-4 rounded" />
          <input
            type="text"
            placeholder="CVC"
            className="border p-2 w-full mb-4 rounded"
          />
          <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 w-full">
            Payer
          </button>
        </form>
      );
    } else if (paymentMethod === "wallet") {
      return (
        <form className="bg-white p-6 rounded shadow-md w-full max-w-lg">
          <h2 className="text-xl font-bold mb-4 text-blue-900">Paiement par Wallet</h2>
          <input
            type="text"
            placeholder="Numéro du Wallet"
            className="border p-2 w-full mb-4 rounded"
          />
          <input
            type="number"
            placeholder="Montant"
            className="border p-2 w-full mb-4 rounded"
          />
          <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 w-full">
            Payer
          </button>
        </form>
      );
    }
  };

  // === Render selon onglet ===
  const renderForm = () => {
    switch (activeTab) {
      case "paiement":
        return (
          <div className="w-full max-w-lg">
            {/* Choix méthode */}
            <div className="bg-white p-4 rounded shadow-md mb-4">
              <label className="block text-blue-900 font-semibold mb-2">
                Méthode de paiement
              </label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="border p-2 w-full rounded"
              >
                <option value="carte">Carte</option>
                <option value="wallet">Wallet</option>
              </select>
            </div>

            {renderPaymentForm()}
          </div>
        );

      case "track":
        return (
          <form className="bg-white p-6 rounded shadow-md w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4 text-blue-900">Track</h2>
            <input
              type="text"
              placeholder="ID de suivi"
              className="border p-2 w-full mb-4 rounded"
            />
            <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">
              Suivre
            </button>
          </form>
        );

      case "telechargement":
        return (
          <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4 text-blue-900">Téléchargement</h2>
            <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">
              Télécharger mes documents
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 w-full">
      {/* Main content */}
      <div className="flex-1 p-6">
        {/* Navbar
        <div className="flex justify-end items-center mb-6">
          <div className="flex items-center gap-3 bg-white p-2 rounded shadow">
            <FaUserCircle className="text-blue-900 text-2xl" />
            <span className="font-semibold text-blue-900">
              Omar Abdillahi Hassan
            </span>
          </div>
        </div> */}

        {/* Dynamic content */}
        <div className="flex justify-center">{renderForm()}</div>
      </div>
    </div>
  );
}
