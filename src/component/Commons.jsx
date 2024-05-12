import React, { useState } from "react";
import { useAuth } from "../Utils/AuthContext.jsx";

function Commons() {
  const { user, signOut } = useAuth();

  if (!user) {
    return <p>Please log in to see this page.</p>;
  }

  return (
    <>
      <div className=" flex flex-col space-y-6">
        <a className="text-white text-lg hover:text-gray-300" href="/profile">
          Mon profile
        </a>
        <hr />
        <a
          className="text-white text-lg hover:text-gray-300"
          href="/reservation"
        >
          Mes réservations
        </a>
        <hr />
        <a className="text-white text-lg hover:text-gray-300" href="/emprunt">
          Mes Livres empruntés
        </a>
        <hr />
        <a
          className="text-white text-lg hover:text-gray-300"
          href="/historique"
        >
          Historique
        </a>
        <hr />
      </div>
      <div className="mt-auto">
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

export default Commons;
