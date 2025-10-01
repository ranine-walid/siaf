import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { FaDownload, FaMoneyBillWave, FaTruck, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "../context/AuthContext";

const items = [
  { title: "Paiement", url: "/dashboard", icon: FaMoneyBillWave },
  { title: "Track", url: "/dashboard/Track", icon: FaTruck },
  { title: "Téléchargement", url: "/dashboard/Telechargement", icon: FaDownload },
];

export function AppSidebar() {
  const location = useLocation(); // Pour détecter la page active
  const navigate = useNavigate(); // <-- créer navigate
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    // Ici tu peux aussi supprimer le token ou faire d'autres actions de logout
    navigate("/"); // Redirection vers la page d'accueil
  };

  return (
    <Sidebar className="flex flex-col" >
      {/* Profil en haut */}
      <div className="flex flex-col items-center py-6 border-b border-white bg-blue-900 text-white">
        <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-5xl">
          <FaUserCircle />
        </div>
        <p className="mt-2 font-semibold ">Omar Abdillahi Hassan</p>
      </div>

      {/* Menu */}
      <SidebarContent className="flex-1 overflow-y-auto  bg-blue-900 " >
        <SidebarGroup>
          <SidebarGroupLabel className="text-white">Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-2">
              {items.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                        ? "bg-white text-orange-400"
                        : "text-white hover:bg-blue-700 hover:text-orange-300"
                        }`}
                    >
                      <a href={item.url} className="flex items-center gap-3">
                        <item.icon className="text-xl" />
                        <span className="font-medium">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Bouton Déconnexion */}
      <div className="p-4 border-t border-white bg-blue-900 text-white">
        <Button
          variant="ghost"
          className="w-full flex items-center justify-center gap-2  hover:bg-red-600 cursor-pointer"
          onClick={handleLogout}
        >
          <FaSignOutAlt className="text-xl" />
          Déconnexion
        </Button>
      </div>
    </Sidebar>
  );
}
