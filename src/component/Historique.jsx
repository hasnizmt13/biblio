import React from "react";
import Commons from "./Commons.jsx";
import axios from "axios";
import { useAuth } from "../Utils/AuthContext.jsx";
import { useEffect , useState} from "react";

function Historique() {
  const [historiques, setHistorique] = useState([]);
  const { user } = useAuth();

  const fetchHistorique = async () => {
    if (!user) {
      console.error("User not authenticated");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/rpc/historiques_user",
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
      setHistorique(response.data);
     
    } catch (error) {
      console.error("Failed to fetch Historique:", error);
      if (error.response) {
      }
    }
  };
  useEffect(() => {
    fetchHistorique();
  }, [user]);
  return (
    <div className='pt-14 flex min-h-screen '>

      <div className='p-20 mx-auto shadow-lg bg-darkBlue h-100 w-1/3 flex flex-col justify-between'>
        <Commons/>
      </div>

      <div className='bg-white w-full flex-col items-start mt-20  justify-center'>
          <h1 className="text-3xl text-darkBlue font-bold text-center md:text-left md:text-4xl ml-20 md:max-w-md">
            Historique
          </h1>
          <div className='mx-20'>
            <table className="m-20 table-auto w-full mx-auto">
              <thead className="bg-darkBlue">
                <tr>
                  <th className="px-4 py-2 text-white text-left">Nom du livre</th>
                  <th className="px-4 py-2 text-white text-left">Date d'emprunt</th>
                  <th className="px-4 py-2 text-white text-left">Date de retour réelle</th>
                </tr>
              </thead> 
              <tbody>
                {historiques.map(reserv => (
                  <tr key={reserv.id} className="border-b">
                    <td className="px-4 py-2">{reserv.titre}</td>
                    <td className="px-4 py-2">{reserv.date_emprunt}</td>
                    <td className="px-4 py-2">{reserv.date_retour_reelle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
    </div>
  )
}

export default Historique