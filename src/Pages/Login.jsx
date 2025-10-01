import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [step, setStep] = useState("login"); // "login" ou "otp"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      // Simuler une requête d’authentification
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Exemple : si mot de passe correct → passer à l’étape OTP
      if (email && password.length >= 4) {
        setStep("otp");
      } else {
        throw new Error("Identifiants invalides");
      }
    } catch (err) {
      setErrorMsg(err.message || "Échec de connexion.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      // Simuler la vérification OTP
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (otp === "123456") {
        login()
        alert("✅ Connexion réussie !");
        // navigate('/dashboard')
      } else {
        throw new Error("Code OTP incorrect");
      }
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {step === "login" && (
        <form
          onSubmit={handleLogin}
          className="w-full"
          autoComplete="off"
        >
          {errorMsg && (
            <p className="text-red-500 text-sm mb-4 text-center">{errorMsg}</p>
          )}

          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 font-medium">Mot de passe</label>
            <input
              type="password"
              className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 rounded text-white transition cursor-pointer ${
              isLoading ? "bg-blue-700" : "bg-blue-900 hover:bg-blue-800"
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>Connexion...</span>
              </div>
            ) : (
              "Se connecter"
            )}
          </button>
        </form>
      )}

      {step === "otp" && (
        <form
          onSubmit={handleOtp}
          className="w-full"
          autoComplete="off"
        >
          <h2 className="text-xl font-semibold text-center mb-4">
            Vérification OTP
          </h2>
          <p className="text-gray-600 text-sm text-center mb-4">
            Un code à 6 chiffres a été envoyé à <span className="font-semibold">{email}</span>
          </p>

          {errorMsg && (
            <p className="text-red-500 text-sm mb-4 text-center">{errorMsg}</p>
          )}

          <input
            type="text"
            maxLength={6}
            className="w-full border px-3 py-2 text-center tracking-widest rounded focus:ring-2 focus:ring-blue-500 mb-4"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Entrer le code OTP"
            required
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 rounded text-white transition cursor-pointer ${
              isLoading ? "bg-blue-700" : "bg-blue-900 hover:bg-blue-800"
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>Vérification...</span>
              </div>
            ) : (
              "Confirmer"
            )}
          </button>

          <button
            type="button"
            onClick={() => setStep("login")}
            className="mt-3 w-full text-sm text-blue-700 hover:underline"
          >
            ⬅️ Retour
          </button>
        </form>
      )}
    </div>
  );
}
