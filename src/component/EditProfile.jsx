import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../Utils/AuthContext.jsx";

function EditProfile({ children }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility2 = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <div className="mt-24 flex  justify-center  bg-darkBlue flex mx-auto space-y-1 h-auto w-2/5 rounded-lg">
        <form className="space-y-6 flex flex-col justify-center items-center h-full w-full">
          <br />
          <h1 className="text-4xl px-5 py-1 text-white pb-5">
            Modifier le profile
          </h1>
          <input
            className="w-2/3 p-2 rounded-full"
            type="text"
            name="nom"
            id="nom"
            defaultValue={children.nom}
            placeholder={children.nom}
          />
          <input
            className="w-2/3 p-2 rounded-full"
            type="text"
            name="prenom"
            id="prenom"
            defaultValue={children.prénom}
            placeholder={children.prénom}
          />
          <input
            className=" hidden w-2/3 p-2 rounded-full"
            type="text"
            name="role"
            id="role"
            defaultValue={children.role}
            placeholder={children.prénom}
          />
          <input
            className="w-2/3 p-2 rounded-full"
            type="email"
            name="email"
            id="email"
            defaultValue={children.email}
            placeholder={children.email}
          />
          <div className="relative w-2/3">
            <input
              className="w-full p-2 rounded-full"
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              defaultValue={children.password_}
              placeholder={children.password_}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
          <div className="relative w-2/3">
            <input
              className="w-full p-2 rounded-full"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmpassword"
              id="confirmpassword"
              defaultValue={children.password_}
              placeholder={children.password_}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility2}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            >
              <FontAwesomeIcon
                icon={showConfirmPassword ? faEyeSlash : faEye}
              />
            </button>
          </div>
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

export default EditProfile;
