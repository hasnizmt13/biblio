import React, { useState, useEffect } from "react";
import AdminCommon from "./AdminCommon";
import axios from "axios";

function ReservationManager() {
  const [reservations, setReservation] = useState([]);

  const EmpruntToUser = async (info) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 14);
    const date_retour_prevue = currentDate.toISOString().split("T")[0];

    const empruntData = {
      id_utilisateur: info.id_user,
      id_livre: info.id_livre,
      date_emprunt: new Date().toISOString().split("T")[0],
      date_retour_prevue: date_retour_prevue,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/emprunts",
        empruntData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      try {
        const updateResponse = await axios.delete(
          `http://localhost:3000/reservations?id=eq.${info.id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } catch (error) {
        console.error("Failed to delete reservation:", updateError);
      }
      console.log("Reservation update success:", updateResponse.data);
      fetchReservations();
    } catch (error) {
      console.error("Failed to emprunt Book:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      }
    }
  };

  const fetchReservations = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/rpc/all_reservations",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 200) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      setReservation(response.data);
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
    fetchReservations();
  });

  return (
    <>
      <div className="pt-14 flex min-h-screen ">
        <div className="p-20 mx-auto shadow-lg bg-darkBlue h-screen w-1/3 flex flex-col justify-between">
          <AdminCommon />
        </div>

        <div className="bg-white w-full flex-col items-start mt-20  justify-center">
          <h1 className="text-3xl text-darkBlue font-bold text-center md:text-left md:text-4xl ml-20 md:max-w-md">
            Gestion des réservations
          </h1>
          <div className="mx-20">
            <table className="m-20 table-auto w-full mx-auto">
              <thead className="bg-darkBlue">
                <tr>
                  <th className="px-4 py-2 text-white text-left">
                    Nom du client
                  </th>
                  <th className="px-4 py-2 text-white text-left">
                    Titre du livre
                  </th>
                  <th className="px-4 py-2 text-white text-left">
                    Date de réservation
                  </th>
                  <th className="px-4 py-2 text-white text-left">Status</th>
                  <th className="px-4 py-2 text-white text-left"></th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((reserv) => (
                  <tr key={reserv.id} className="border-b">
                    <td className="px-4 py-2">{reserv.nom}</td>
                    <td className="px-4 py-2">{reserv.titre}</td>
                    <td className="px-4 py-2">{reserv.date_reservation}</td>
                    <td
                      className={`px-4 py-2 rounded-full font-bold ${
                        reserv.statut === "en attente"
                          ? "text-yellow-500"
                          : reserv.statut === "confirmé"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {reserv.statut}
                    </td>
                    <td className="px-4 py-2">
                      {reserv.statut === "confirmé" ? (
                        <button
                          className="bg-darkBlue text-white p-3 hover:bg-veryDarkBlue rounded-full"
                          onClick={(e) => {
                            EmpruntToUser(reserv);
                          }}
                        >
                          Emprunter
                        </button>
                      ) : null}
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

export default ReservationManager;
