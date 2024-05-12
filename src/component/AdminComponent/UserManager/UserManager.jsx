import React, { useState, useEffect } from "react";
import AdminCommon from "../AdminCommon";
import axios from "axios";
import EditUser from "./EditUser";
import Modal from "react-modal";
import AddUser from "./AddUser";

function UserManager() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen2, setModalIsOpen1] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);

  const openModal2 = () => {
    setModalIsOpen1(true);
  };
  const closeModal2 = () => {
    setModalIsOpen1(false);
  };
  const openModal = (user) => {
    setSelectedUser(user);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const supprimerUser = async (us) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/utilisateurs?id=eq.${us.id}`
      );
      console.log(`User  ${us.id} supprimé: pour`, response.data);
      window.location.reload();

      fetchUsers();
    } catch (error) {
      console.error("Failed to remove user:", error);
      // Handle errors here
    }
  };

  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/utilisateurs"); // URL de votre API
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <div className="pt-14 flex min-h-screen ">
        <div className=" p-20 mx-auto shadow-lg bg-darkBlue h-100 w-1/3 flex flex-col justify-between">
          <AdminCommon />
        </div>

        <div className="bg-white w-full flex-col items-start mt-20  justify-center">
          <h1 className="text-3xl text-darkBlue font-bold text-center md:text-left md:text-4xl ml-20 md:max-w-md">
            Gestion des utilisateurs
          </h1>
          <div className="mx-20">
            <table className="m-20 table-auto w-full mx-auto">
              <thead className="bg-darkBlue">
                <tr>
                  <th className="px-4 py-2 text-white text-left">Nom</th>
                  <th className="px-4 py-2 text-white text-left">Prénom</th>
                  <th className="px-4 py-2 text-white text-left">Email</th>
                  <th className="px-4 py-2 text-white text-left">Role</th>
                  <th className="px-4 py-2 text-white text-left">Photo</th>
                  <th className="px-4 py-2 text-white text-left"></th>
                  <th className="px-4 py-2 text-white text-left"></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user_) => (
                  <tr key={user_.id} className="border-b">
                    <td className="px-4 py-2">{user_.nom}</td>
                    <td className="px-4 py-2">{user_.prénom}</td>
                    <td className="px-4 py-2">{user_.email}</td>
                    <td className="px-4 py-2">{user_.rôle}</td>
                    <td className="px-4 py-2">{user_.photo}</td>
                    <td className="px-4 py-2">
                      <button
                        className="border hover:bg-red-700 px-3 rounded-full text-white bg-red-500"
                        onClick={() => supprimerUser(user_)}
                      >
                        Supprimer
                      </button>
                    </td>
                    <td className="px-4 py-2">
                      <button
                        className="border hover:bg-green-200 px-3 rounded-full text-white bg-green-500"
                        onClick={() => openModal(user_)}
                      >
                        Modifier
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <button
                className="border p-3 hover:bg-green-200 text-base mx-auto rounded-full text-white bg-green-500"
                onClick={() => openModal2()}
              >
                Ajouter un utilisateur
              </button>
            </div>
          </div>
          <div className="hidden flex m-auto h-screen">
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              className=" my-auto mx-auto flex flew-col justify-between"
            >
              {<EditUser children={selectedUser} />}
            </Modal>
          </div>
          <div className="hidden flex m-auto h-screen">
            <Modal
              isOpen={modalIsOpen2}
              onRequestClose={closeModal2}
              className=" my-auto mx-auto flex flew-col justify-between"
            >
              {<AddUser />}
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserManager;
