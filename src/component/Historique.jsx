import React from 'react'
import Commons from './Commons.jsx';

function Historique() {
  const reservs = [
    { id: 1, name: 'Alice', age: 24, city: '22/05/2024' },
    { id: 2, name: 'Bob', age: 30, city: '22/05/2024'  },
    { id: 3, name: 'Carla', age: 29, city: '22/05/2024' }
  ];

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
                  <th className="px-4 py-2 text-white text-left">Date de réservation</th>
                  <th className="px-4 py-2 text-white text-left">Date d'emprunt</th>
                  <th className="px-4 py-2 text-white text-left">Date de retour</th>
                </tr>
              </thead> 
              <tbody>
                {reservs.map(reserv => (
                  <tr key={reserv.id} className="border-b">
                    <td className="px-4 py-2">{reserv.name}</td>
                    <td className="px-4 py-2">{reserv.age}</td>
                    <td className="px-4 py-2">{reserv.city}</td>
                    <td className="px-4 py-2">{reserv.city}</td>
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