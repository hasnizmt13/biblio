import React, { useState } from "react";
import { useAuth } from "../Utils/AuthContext.jsx";
import Commons from "./Commons.jsx";
import EditProfile from "./EditProfile.jsx";
import Modal from "react-modal";

function Profile() {
  const { user } = useAuth();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  if (!user) {
    return <p>Please log in to see this page.</p>;
  }

  return (
    <>
      <div className="pt-14 flex min-h-screen bg-gray-200">
        <div className="p-20 mx-auto shadow-lg bg-darkBlue h-100 w-1/3 flex flex-col justify-between">
          <Commons />
        </div>

        <div className=" w-full flex flex-col items-center my-auto justify-center">
          <div className="bg-white flex flex-col w-1/2 h-auto rounded-xl p-10">
            <img
              className="w-40 h-40 mx-auto mb-10 align-center  rounded-full"
              src="src\assets\profile.jpg"
              alt="Photo de profile"
            />

            <div className="mx-auto flex space-x-0">
              <h1 className="px-2 font-bold text-lg text-darkBlue">Nom :</h1>
              <h1 className="px-2 text-lg text-darkBlue">{user.nom}</h1>
            </div>
            <div className="mx-auto flex space-x-0">
              <h1 className="p-2 font-bold text-lg text-darkBlue">Prénom :</h1>
              <h1 className="p-2 text-lg text-darkBlue">{user.prénom}</h1>
            </div>
            <div className="mx-auto flex space-x-0">
              <h1 className="px-2 font-bold text-lg text-darkBlue">Email :</h1>
              <h1 className="px-2 text-lg text-darkBlue">{user.email}</h1>
            </div>
          </div>
          <a
            onClick={() => openModal()}
            className="mt-10 p-2 px-6 text-white bg-darkBlue rounded-full baseline hover:bg-white hover:text-darkBlue"
            href="#"
          >
            Modifier le profile
          </a>
        </div>
        {/* Modal pour afficher les détails du livre sélectionné */}
        <div className="hidden flex m-auto h-screen">
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="my-auto mx-auto flex flew-col justify-between "
          >
            {<EditProfile children={user} />}
          </Modal>
        </div>
      </div>
    </>
  );
}

{
  /* <h1>{user.id}</h1>
        <p>Nkhame: {user.nom}</p>
        <p>Email: {user.email}</p>
        <button onClick={signOut}>Sign Out</button> */
}
export default Profile;
