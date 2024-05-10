import React, { useState } from "react";
import Commons from "./Commons.jsx";
import axios from "axios";
import { useAuth } from "../Utils/AuthContext.jsx";
import { useEffect } from "react";

function Reservation() {
  const [reservations, setReservation] = useState([]);
  const { user } = useAuth();

  const annulerReservation = async (res) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/reservations?id=eq.${res.id}`
      );
      console.log(`Reservation annulée: pour ${res.id}`, response.data);
      window.location.reload();
      const reservationsResponse = await axios.get(
        `http://localhost:3000/reservations?id_livre=eq.${res.id_livre}`
      );
      const remainingReservations = reservationsResponse.data;
      if (remainingReservations.length === 0) {
        try {
          await axios.patch(
            `http://localhost:3000/livres?id=eq.${res.id_livre}`,
            { disponible: true },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log("Book updated to available:", res.id_livre);
        } catch (updateError) {
          console.error("Failed to update book availability:", updateError);
        }
      }

      fetchLivres();
    } catch (error) {
      console.error("Failed to cancel reservation:", error);
      // Handle errors here
    }
  };

  const fetchReservations = async () => {
    if (!user) {
      console.error("User not authenticated");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/rpc/reservations_user",
        { id_ut: user.id },
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
  }, [user]);

  return (
    <>
      <div className="pt-14 flex min-h-screen ">
        <div className="p-20 mx-auto shadow-lg bg-darkBlue h-100 w-1/3 flex flex-col justify-between">
          <Commons />
        </div>

        <div className="bg-white w-full flex-col items-start mt-20  justify-center">
          <h1 className="text-3xl text-darkBlue font-bold text-center md:text-left md:text-4xl ml-20 md:max-w-md">
            Mes réservations
          </h1>
          <div className="mx-20">
            <table className="m-20 table-auto w-full mx-auto">
              <thead className="bg-darkBlue">
                <tr>
                  <th className="px-4 py-2 text-white text-left">
                    Nom du livre
                  </th>
                  <th className="px-4 py-2 text-white text-left">
                    Date de réservation
                  </th>
                  <th className="px-4 py-2 text-white text-left">Statut</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((reserv) => (
                  <tr key={reserv.id} className="border-b">
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
                      <button
                        onClick={() => annulerReservation(reserv)}
                        className="border hover:bg-red-700 px-3 rounded-full text-white bg-red-500"
                      >
                        Annuler
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

export default Reservation;
