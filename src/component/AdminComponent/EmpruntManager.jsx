import React from "react";
import AdminCommon from "./AdminCommon";
import axios from "axios";
import { useState, useEffect } from "react";

function EmpruntManager() {
  const [emprunts, setEmprunts] = useState([]);

  const RendreLivre = async (info) => {
    const historiqueData = {
      id_utilisateur: info.id_user,
      id_livre: info.id_livre,
      date_emprunt: info.date_emprunt,
      date_retour_reelle: new Date().toISOString().split("T")[0],
    };
    console.log("historiqueData data:", historiqueData);
    try {
      const response = await axios.post(
        "http://localhost:3000/historique",
        historiqueData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      try {
        const updateResponse = await axios.delete(
          `http://localhost:3000/emprunts?id=eq.${info.id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } catch (error) {
        console.error("Failed to delete reservation:", updateError);
      }
    } catch (error) {
      console.error("Failed to rendre Book:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      }
    }
  };

  const fetchEmprunts = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/rpc/all_emprunts",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setEmprunts(response.data);
    } catch (error) {
      console.error("Failed to fetch emprunts:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      }
    }
  };
  useEffect(() => {
    fetchEmprunts();
  });
  return (
    <>
      <div className="pt-14 flex min-h-screen ">
        <div className="p-20 mx-auto shadow-lg bg-darkBlue h-100 w-1/3 flex flex-col justify-between">
          <AdminCommon />
        </div>

        <div className="bg-white w-full flex-col items-start mt-20  justify-center">
          <h1 className="text-3xl text-darkBlue font-bold text-center md:text-left md:text-4xl ml-20 md:max-w-md">
            Gestion des emprunts
          </h1>
          <div className="mx-20">
            <table className="m-20 table-auto w-full mx-auto">
              <thead className="bg-darkBlue">
                <tr>
                  <th className="px-4 py-2 text-white text-left">
                    Nom du client
                  </th>
                  <th className="px-4 py-2 text-white text-left">
                    Nom du livre
                  </th>
                  <th className="px-4 py-2 text-white text-left">
                    Date d'emprunt
                  </th>
                  <th className="px-4 py-2 text-white text-left">
                    Date de retour prévue
                  </th>
                </tr>
              </thead>
              <tbody>
                {emprunts.map((emprunt) => (
                  <tr key={emprunt.id} className="border-b">
                    <td className="px-4 py-2">{emprunt.nom}</td>
                    <td className="px-4 py-2">{emprunt.titre}</td>
                    <td className="px-4 py-2">{emprunt.date_emprunt}</td>
                    <td className="px-4 py-2">{emprunt.date_retour_prevue}</td>
                    <td className="px-4 py-2">
                      <button
                        className="bg-darkBlue text-white p-3 hover:bg-veryDarkBlue rounded-full"
                        onClick={(e) => {
                          RendreLivre(emprunt);
                        }}
                      >
                        Rendre Livre
                      </button>
                    </td>
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

export default EmpruntManager;
