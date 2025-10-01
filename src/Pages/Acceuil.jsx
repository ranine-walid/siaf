import React, { useState } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Button } from "@/components/ui/button";
import Login from './Login';
import Inscription from './Inscription';
import PropertyCard from '../components/PropertyCard';
import { useAuth } from '../context/AuthContext';

const properties = [
  {
    id: 1,
    image: "/villa1.jpg",
    title: "Grande Villa",
    description: "4 pièces · Djibouti",
    price: "150 000 €",
    cta: "Acheter",
  },
  {
    id: 2,
    image: "/villa2.jpg",
    title: "Villa Moderne",
    description: "4 pièces · Balbala",
    price: "120 000 €",
    cta: "Acheter",
  },
  {
    id: 3,
    image: "/villa3.jpeg",
    title: "Villa Familiale",
    description: "5 pièces · Djibouti",
    price: "180 000 €",
    cta: "Acheter",
  },
];
const terrains = [
  {
    id: 1,
    image: "/terrain1.jpg",
    title: "Avenue des Roses",
    pieces: "4 pièces",
    description:
      "Cliquez ici pour ajouter votre propre texte. Ajoutez plus d’informations sur le terrain, sa localisation et ses avantages pour les visiteurs.",
    price: "500 000 €",
    imagePosition: "left", // image à gauche
  },
  {
    id: 2,
    image: "/terrain1.jpg",
    title: "Rue de la Chouette",
    pieces: "3 pièces",
    description:
      "Cliquez ici pour ajouter votre propre texte. Ajoutez plus d’informations sur le terrain, sa localisation et ses avantages pour les visiteurs.",
    price: "350 000 €",
    imagePosition: "right", // image à droite
  },
];


export default function Acceuil() {
 // ✅ On récupère le state depuis le contexte
  const { isconnected } = useAuth();
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          {/* LOGO */}
          <a href="/" className="flex items-center space-x-2">
            <img
              src="/logo.jpeg"
              alt="Logo ImmoVente"
              className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
            />
            <span className="text-2xl font-bold text-blue-800 tracking-wide">
              Siaf
            </span>
          </a>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center space-x-6 font-medium">
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Accueil
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Contact
            </a>

            {!isconnected && (
              <>
                {/* Bouton Inscription */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-transparent border border-blue-700 px-4 py-2 rounded-full text-blue-700 hover:bg-blue-700 hover:text-white transition duration-300">
                      Inscription
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-[800px]">
                    <DialogHeader>
                      <DialogTitle className="text-center font-semibold text-2xl pb-2">
                        Formulaire d’inscription
                      </DialogTitle>
                    </DialogHeader>
                    <Inscription />
                  </DialogContent>
                </Dialog>

                {/* Bouton Connexion */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition duration-300">
                      Se connecter
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
              </>
            )}

            {isconnected && (
              <a
                href="/dashboard"
                className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 shadow-md transition duration-300"
              >
                Dashboard
              </a>
            )}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        <img
          src="/acc.png"
          alt="Vue aérienne"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2/4 left-10 bg-blue-900 bg-opacity-70 text-white p-8 max-w-md rounded-xl shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Trouvez votre villa ou terrain de rêve
          </h2>

          {/* Ligne horizontale */}
          <div className="w-100 h-[3px] bg-white mx-auto mb-4 rounded-full"></div>

          <p className="mb-6 text-gray-100">
            Beaucoup sont populaires et vite réservés, explorez dès maintenant nos villas et terrains.
          </p>

          <button className="bg-white text-blue-900 px-6 py-2 rounded-full font-medium shadow hover:bg-gray-200 transition">
            En savoir plus
          </button>
        </div>
      </section>


      {/* Propriétés à vendre */}
      <section className="py-12 px-6">
        <h3 className="text-2xl font-bold text-center text-blue-900 mb-10">
          PROPRIÉTÉS À VENDRE
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              isConnected={isconnected}
            />
          ))}
        </div>
      </section >

      {/* Terrain à vendre */}
      <section className="bg-blue-900 text-white py-16 px-6">
        <h3 className="text-2xl font-bold text-center mb-12">
          Terrain À Vendre
        </h3>

        <div className="max-w-5xl mx-auto space-y-12">
          {terrains.map((terrain) => (
            <div
              key={terrain.id}
              className="grid grid-cols-1 md:grid-cols-2 bg-blue-900 rounded-xl overflow-hidden"
            >
              {/* Image */}
              {terrain.imagePosition === "left" && (
                <img
                  src={terrain.image}
                  alt={terrain.title}
                  className="w-full h-64 object-cover"
                />
              )}

              {/* Texte */}
              <div
                className={`p-6 flex flex-col justify-center ${terrain.imagePosition === "right" ? "order-2 md:order-1" : ""
                  }`}
              >
                <h4 className="text-xl font-semibold uppercase mb-2">
                  {terrain.title}
                </h4>
                <p className="text-gray-200 mb-4">{terrain.pieces}</p>
                <p className="text-gray-300 mb-4">{terrain.description}</p>
                <p className="text-blue-300 font-semibold mb-4">{terrain.price}</p>

                <button
                  className="bg-white text-blue-900 px-1 py-1.5 rounded-full font-medium shadow hover:bg-gray-200 transition duration-300"
                >

                  Acheter
                </button>

              </div>

              {/* Image si à droite */}
              {terrain.imagePosition === "right" && (
                <img
                  src={terrain.image}
                  alt={terrain.title}
                  className="w-full h-64 object-cover order-1 md:order-2"
                />
              )}
            </div>
          ))}
        </div>
      </section>


      {/* Section Agence de Confiance */}
      <section className="bg-white py-16 px-6">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">
          UNE AGENCE DE CONFIANCE
        </h3>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          {/* Bloc 1 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-3xl mb-4">
              🏠
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Choisir votre immobilier
            </h4>
            <p className="text-gray-500">
              Découvrez notre sélection de villas et de terrains selon vos critères :
              surface, emplacement et budget.
            </p>
          </div>

          {/* Bloc 2 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-3xl mb-4">
              💳
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Payer en ligne
            </h4>
            <p className="text-gray-500">
              Achetez en toute sécurité et en quelques clics grâce à nos solutions
              de paiement fiables et sécurisées.
            </p>
          </div>

          {/* Bloc 3 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-3xl mb-4">
              📄
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Obtenir les documents
            </h4>
            <p className="text-gray-500">
              Recevez immédiatement tous les documents nécessaires pour concrétiser
              votre achat immobilier.
            </p>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        © 2025 ImmoVente - Tous droits réservés
      </footer>
    </div >
  );
}
