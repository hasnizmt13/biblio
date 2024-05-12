import React from "react";
import { useAuth } from "../../Utils/AuthContext";

function AdminCommon() {
  const { user, signOut } = useAuth();

  if (!user) {
    return <p>Please log in to see this page.</p>;
  }
  return (
    <>
      <div className="fixed  flex flex-col space-y-6">
        <a
          className="text-white text-lg hover:text-gray-300"
          href="/livresManager"
        >
          Gestion des livres
        </a>
        <hr />
        <a
          className="text-white text-lg hover:text-gray-300"
          href="/reservationManager"
        >
          Gestion des réservations
        </a>
        <hr />
        <a
          className="text-white text-lg hover:text-gray-300"
          href="/empruntManager"
        >
          Gestion des emprunts
        </a>
        <hr />
        <a
          className="text-white text-lg hover:text-gray-300"
          href="/historiqueManager"
        >
          Gestion d'historiques
        </a>
        <hr />
        <a
          className="text-white text-lg hover:text-gray-300"
          href="/userManager"
        >
          Gestion des utilisateurs
        </a>
        <hr />
      </div>
      <div className="fixed bottom-10 mt-auto">
        <button
          className="hover:text-gray-300 font-bold text-start text-white text-lg hover:text-gray-300"
          onClick={signOut}
        >
          Sign Out
        </button>
      </div>
    </>
  );
}

export default AdminCommon;
