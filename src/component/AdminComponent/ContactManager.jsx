import React from "react";
import AdminCommon from "./AdminCommon";
import axios from "axios";
import { useState, useEffect } from "react";

function ContactManager() {
  const [contacts, setContacts] = useState([]);
  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/contact", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setContacts(response.data);
    } catch (error) {
      console.error("Failed to fetch Contacts:", error);
    }
  };
  useEffect(() => {
    fetchContacts();
  });
  return (
    <>
      <div className="pt-14 flex min-h-screen ">
        <div className="p-20 mx-auto shadow-lg bg-darkBlue h-100 w-1/3 flex flex-col justify-between">
          <AdminCommon />
        </div>

        <div className="bg-white w-full flex-col items-start mt-20  justify-center">
          <h1 className="text-3xl text-darkBlue font-bold text-center md:text-left md:text-4xl ml-20 md:max-w-md">
            Gestion des contacts
          </h1>
          <div className="mx-20">
            <table className="m-20 table-auto w-full mx-auto">
              <thead className="bg-darkBlue">
                <tr>
                  <th className="px-4 py-2 text-white text-left">Nom</th>
                  <th className="px-4 py-2 text-white text-left">Prénomt</th>
                  <th className="px-4 py-2 text-white text-left">Email</th>
                  <th className="px-4 py-2 text-white text-left">Message</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact.id} className="border-b">
                    <td className="px-4 py-2">{contact.nom}</td>
                    <td className="px-4 py-2">{contact.prénom}</td>
                    <td className="px-4 py-2">{contact.email}</td>
                    <td className="px-4 py-2">{contact.message_}</td>
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

export default ContactManager;
