import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import Login from "../Pages/Login";

export default function PropertyCard({ property, isConnected, variant = "card" }) {
  const [openPurchase, setOpenPurchase] = useState(false);
  const [openOtp, setOpenOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Soumission du formulaire
  const handlePurchaseSubmit = (e) => {
    e.preventDefault();
    setOpenPurchase(false);
    setOpenOtp(true);
  };

  // Vérification OTP
  const handleOtpValidation = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (otp === "123456") {
      alert("✅ Achat confirmé avec succès !");
      setOpenOtp(false);
      setOtp("");
    } else {
      alert("❌ Code OTP invalide !");
    }
    setIsSubmitting(false);
  };

  /**
   * ===========================
   * VARIANT "BANNER"
   * ===========================
   */
  if (variant === "banner") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 bg-blue-900 rounded-xl overflow-hidden shadow-lg">
        {/* Image gauche */}
        {property.imagePosition === "left" && (
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-64 object-cover"
          />
        )}

        {/* Texte */}
        <div
          className={`p-6 flex flex-col justify-center text-white ${property.imagePosition === "right" ? "order-2 md:order-1" : ""}`}
        >
          <h4 className="text-xl font-semibold uppercase mb-2">{property.title}</h4>
          <p className="text-gray-200 mb-4">{property.pieces}</p>
          <p className="text-gray-300 mb-4">{property.description}</p>
          <p className="text-blue-300 font-semibold mb-4">{property.price}</p>

          {isConnected ? (
            <Button
              onClick={() => setOpenPurchase(true)}
              className="mt-4 border border-blue-900 text-blue-900 hover:bg-blue-50"
            >
              {property.cta || "Acheter"}
            </Button>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="mt-4 px-4 py-2">
                  {property.cta || "Acheter"}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="text-center font-semibold text-2xl">
                    Connexion
                  </DialogTitle>
                </DialogHeader>
                <Login />
              </DialogContent>
            </Dialog>
          )}
        </div>

        {/* Image droite */}
        {property.imagePosition === "right" && (
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-64 object-cover order-1 md:order-2"
          />
        )}

        {/* Dialog d'achat + OTP réutilisés */}
        {renderDialogs()}
      </div>
    );
  }


  /**
   * ===========================
   * VARIANT "CARD"
   * ===========================
   */
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden">
      {/* Image */}
      <img src={property.image} alt={property.title} className="w-full h-56 object-cover" />

      {/* Infos */}
      <div className="p-4">
        <h4 className="text-lg font-semibold">{property.title}</h4>
        <p className="text-gray-500">{property.description}</p>
        <p className="text-blue-900 font-bold mt-2">{property.price}</p>

        {isConnected ? (
          <Button
            onClick={() => setOpenPurchase(true)}
            variant="outline"
            className="cursor-pointer"
          >
            {property.cta || "Acheter"}
          </Button>
        ) : (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="mt-4 px-4 py-2">
                {property.cta || "Acheter"}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-center font-semibold text-2xl">
                  Connexion
                </DialogTitle>
              </DialogHeader>
              <Login />
            </DialogContent>
          </Dialog>
        )}
      </div>

      {/* Dialog d'achat + OTP */}
      {renderDialogs()}
    </div>
  );

  /**
   * ===========================
   * SOUS-COMPONENT : Dialogs
   * ===========================
   */
  function renderDialogs() {
    return (
      <>
        {/* Formulaire d'achat */}
        <Dialog open={openPurchase} onOpenChange={setOpenPurchase}>
          <DialogContent className="w-[900px]">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl font-semibold text-blue-900">
                Acheter la propriété
              </DialogTitle>
            </DialogHeader>

            <div className="flex flex-col md:flex-row gap-6 mt-4">
              {/* Détails du bien */}
              <div className="flex-1 bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3">Détails du bien</h3>
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover rounded"
                />
                <p className="mt-3 text-sm text-gray-700">
                  <strong>Nom :</strong> {property.title}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Localisation :</strong> {property.location || "Non précisée"}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Prix :</strong> {property.price}
                </p>
              </div>

              {/* Formulaire */}
              <div className="flex-1">
                <form onSubmit={handlePurchaseSubmit} className="space-y-4">
                  <div>
                    <label className="block mb-1 text-sm font-medium">Communication</label>
                    <input
                      type="text"
                      placeholder="Ex: Email ou téléphone"
                      className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium">Dimension</label>
                    <input
                      type="text"
                      placeholder="Ex: 200 m²"
                      className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium">Date actuelle</label>
                    <input
                      type="date"
                      defaultValue={new Date().toISOString().split("T")[0]}
                      className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium">Statut de résidence</label>
                    <select
                      className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">-- Sélectionner --</option>
                      <option value="resident">Résident</option>
                      <option value="non-resident">Non résident</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium">Pièce jointe</label>
                    <input
                      type="file"
                      className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                      accept=".pdf,.jpg,.png"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                    Acheter
                  </Button>
                </form>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* OTP */}
        <Dialog open={openOtp} onOpenChange={setOpenOtp}>
          <DialogContent className="sm:max-w-[400px]">
            <DialogHeader>
              <DialogTitle className="text-center text-xl font-semibold">
                Vérification OTP
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleOtpValidation} className="space-y-4 mt-4">
              <p className="text-sm text-gray-600 text-center">
                Entrez le code OTP envoyé sur votre email ou téléphone.
              </p>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={6}
                placeholder="Code à 6 chiffres"
                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 text-center tracking-widest"
                required
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-900 hover:bg-blue-800 text-white"
              >
                {isSubmitting ? "Vérification..." : "Confirmer"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </>
    );
  }
}
