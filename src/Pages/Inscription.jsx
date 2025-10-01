import { useState } from "react";

export default function Inscription() {
  const [form, setForm] = useState({
    nom: "",
    naissance: "",
    telephone: "",
    adresse: "",
    email: "",
    situation: "celibataire",
    nationalite: "",
    communication: "",
    profession: "",
    residence: "",
    dimension: "",
    dateAchat: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      // Simuler un appel à l’API
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("✅ Formulaire envoyé :", form);
      setMessage("✅ Inscription réussie !");
      // Ici, tu peux envoyer `form` vers ton API
    } catch (error) {
      console.error("❌ Erreur lors de l’inscription :", error);
      setMessage("❌ Une erreur est survenue, réessaie.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full grid grid-cols-2 gap-6"
      >
       
        {message && (
          <div
            className={`col-span-2 p-2 text-center rounded ${
              message.includes("✅")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        {/* Nom complet */}
        <div>
          <label className="block font-semibold">Nom complet</label>
          <input
            type="text"
            name="nom"
            value={form.nom}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* Date de naissance */}
        <div>
          <label className="block font-semibold">Date de naissance</label>
          <input
            type="date"
            name="naissance"
            value={form.naissance}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* Téléphone */}
        <div>
          <label className="block font-semibold">Téléphone</label>
          <input
            type="tel"
            name="telephone"
            value={form.telephone}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Adresse */}
        <div>
          <label className="block font-semibold">Adresse</label>
          <input
            type="text"
            name="adresse"
            value={form.adresse}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* Situation familiale */}
        <div>
          <label className="block font-semibold">Situation familiale</label>
          <div className="flex gap-4 mt-1">
            {["celibataire", "marie", "divorce"].map((opt) => (
              <label key={opt}>
                <input
                  type="radio"
                  name="situation"
                  value={opt}
                  checked={form.situation === opt}
                  onChange={handleChange}
                />{" "}
                {opt === "celibataire"
                  ? "Célibataire"
                  : opt === "marie"
                  ? "Marié(e)"
                  : "Divorcé(e)"}
              </label>
            ))}
          </div>
        </div>

        {/* Nationalité */}
        <div>
          <label className="block font-semibold">Nationalité</label>
          <select
            name="nationalite"
            value={form.nationalite}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">--Choisir--</option>
            <option value="djibouti">Djibouti</option>
            <option value="somalie">Somalie</option>
            <option value="ethiopie">Éthiopie</option>
          </select>
        </div>

        {/* Communication */}
        <div>
          <label className="block font-semibold">Communication</label>
          <select
            name="communication"
            value={form.communication}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">--Choisir--</option>
            <option value="email">Email</option>
            <option value="telephone">Téléphone</option>
          </select>
        </div>

        {/* Profession */}
        <div>
          <label className="block font-semibold">Profession</label>
          <input
            type="text"
            name="profession"
            value={form.profession}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Statut de résidence */}
        <div>
          <label className="block font-semibold">Statut de résidence</label>
          <select
            name="residence"
            value={form.residence}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">--Choisir--</option>
            <option value="locataire">Locataire</option>
            <option value="proprietaire">Propriétaire</option>
          </select>
        </div>

        {/* Dimension */}
        <div>
          <label className="block font-semibold">Dimension (m²)</label>
          <input
            type="text"
            name="dimension"
            value={form.dimension}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Date d’achat */}
        <div>
          <label className="block font-semibold">Date d’achat</label>
          <input
            type="date"
            name="dateAchat"
            value={form.dateAchat}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Bouton */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`col-span-2 py-2 rounded text-white transition ${
            isSubmitting ? "bg-blue-700" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              <span>Envoi...</span>
            </div>
          ) : (
            "S’inscrire"
          )}
        </button>
      </form>
    </div>
  );
}
