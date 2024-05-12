import React, { useState, useEffect } from "react";
import axios from "axios";

function EditUser({ children }) {
  const [nom, setNom] = useState(children.nom);
  const [prenom, setPrenom] = useState(children.prénom);
  const [email, setEmail] = useState(children.email);
  const [role, setRole] = useState(children.rôle);

  const handleEditUser = async (event) => {
    event.preventDefault();
    const userData = {
      nom: nom,
      prénom: prenom,
      email: email,
      rôle: role,
    };
    try {
      const response = await axios.patch(
        `http://localhost:3000/utilisateurs?email=eq.${email}`,
        userData
      );
      console.log("Edit User Success:", response.data);
      window.location.reload();
    } catch (err) {
      console.error("Edit User Error:", err);
    }
  };

  return (
    <>
      <div className="mt-24 flex  justify-center  bg-darkBlue flex mx-auto space-y-1 h-auto w-2/5 rounded-lg">
        <form
          className="space-y-6 flex flex-col justify-center items-center h-full w-full"
          action=""
          method="post"
          onSubmit={handleEditUser}
        >
          <br />
          <h1 className="text-4xl px-5 py-1 text-white pb-5">
            Modifier le profile
          </h1>
          <input
            className="w-2/3 p-2 rounded-full"
            type="text"
            name="nom"
            id="nom"
            value={nom}
            defaultValue={children.nom}
            placeholder={children.nom}
            onChange={(e) => setNom(e.target.value)}
          />
          <input
            className="w-2/3 p-2 rounded-full"
            type="text"
            name="prenom"
            id="prenom"
            value={prenom}
            defaultValue={children.prénom}
            placeholder={children.prénom}
            onChange={(e) => setPrenom(e.target.value)}
          />
          <input
            className=" w-2/3 p-2 rounded-full"
            type="text"
            name="role"
            id="role"
            value={role}
            defaultValue={children.rôle}
            placeholder={children.rôle}
            onChange={(e) => setRole(e.target.value)}
          />
          <input
            className="w-2/3 p-2 rounded-full"
            type="email"
            name="email"
            id="email"
            value={email}
            defaultValue={children.email}
            placeholder={children.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="my-10 w-1/5 p-2 font-bold rounded-full text-darkBlue bg-white hover:text-green-500"
            type="submit"
          >
            Sauvegarder
          </button>

          <br />
          <br />
        </form>
      </div>
    </>
  );
}

export default EditUser;
