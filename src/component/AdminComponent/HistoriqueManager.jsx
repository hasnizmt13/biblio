import React from "react";
import AdminCommon from "./AdminCommon";
import axios from "axios";
import { useState, useEffect } from "react";

function HistoriqueManager() {
  const [historique, setHistorique] = useState([]);
  const fetchHistorique = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/rpc/all_historique",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setHistorique(response.data);
    } catch (error) {
      console.error("Failed to fetch Reservations:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      }
    }
  };
  useEffect(() => {
    fetchHistorique();
  });

  return (
    <>
      <div className="pt-14 flex min-h-screen ">
        <div className="p-20 mx-auto shadow-lg bg-darkBlue h-100 w-1/3 flex flex-col justify-between">
          <AdminCommon />
        </div>

        <div className="bg-white w-full flex-col items-start mt-20  justify-center">
          <h1 className="text-3xl text-darkBlue font-bold text-center md:text-left md:text-4xl ml-20 md:max-w-md">
            Gestion d'historiques
          </h1>
          <div className="mx-20">
            <table className="m-20 table-auto w-full mx-auto">
              <thead className="bg-darkBlue">
                <tr>
                  <th className="px-4 py-2 text-white text-left">
                    Nom du livre
                  </th>
                  <th className="px-4 py-2 text-white text-left">
                    Date d'emprunt
                  </th>
                  <th className="px-4 py-2 text-white text-left">
                    Date de retour prévue
                  </th>
                  <th className="px-4 py-2 text-white text-left">
                    Date de retour réelle
                  </th>
                </tr>
              </thead>
              <tbody>
                {historique.map((his) => (
                  <tr key={his.id} className="border-b">
                    <td className="px-4 py-2">{his.nom}</td>
                    <td className="px-4 py-2">{his.titre}</td>
                    <td className="px-4 py-2">{his.date_emprunt}</td>
                    <td className="px-4 py-2">{his.date_retour_reelle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoriqueManager;
