import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function AddUser() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("lecteur");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const handleAddUser = async (event) => {
    event.preventDefault();
    setError("");
    if (password.length >= 8) {
      if (password === confirmPassword) {
        // Construct the query URL
        const queryUrl = `http://localhost:3000/utilisateurs?email=eq.${email}`;

        try {
          const response = await axios.get(queryUrl);
          const users = response.data;

          // Assuming the correct user is returned if credentials match
          if (users.length > 0) {
            console.log("Already Have account:", users[0]);
            setError("Sign up failed. Vous avez déja un compte.");
          } else {
            const userData = {
              nom: nom,
              prénom: prenom,
              email: email,
              rôle: role,
              password_: password,
            };
            try {
              const response = await axios.post(
                "http://localhost:3000/utilisateurs",
                userData
              );
              console.log("Sign Up Success:", response.data);
              window.location.reload();
            } catch (err) {
              setError("Sign up failed. Please check your credentials.");
              console.error("SingUp Error:", err);
            }
          }
        } catch (err) {
          setError("The server did not repond.");
          console.error("Add Error:", err);
        }
      } else {
        console.log("Password and Confirm Password do not match.");
        setError("Password and Confirm Password do not match.");
      }
    } else {
      console.log("Password must be at least 8 characters.");
      setError("Password must be at least 8 characters.");
    }
  };
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
        <form
          className="space-y-6 flex flex-col justify-center items-center h-full w-full"
          action=""
          method="post"
          onSubmit={handleAddUser}
        >
          <br />
          <h1 className="text-4xl px-5 py-1 text-white pb-5">
            Créer un compte
          </h1>
          <input
            className="w-2/3 p-2 rounded-full"
            type="text"
            name="nom"
            id="nom"
            placeholder="Votre nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
          <input
            className="w-2/3 p-2 rounded-full"
            type="text"
            name="prenom"
            id="prenom"
            placeholder="Votre prenom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
          <input
            className=" hidden w-2/3 p-2 rounded-full"
            type="text"
            name="role"
            id="role"
            value="lecteur"
            onChange={(e) => setRole(e.target.value)}
          />
          <input
            className="w-2/3 p-2 rounded-full"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative w-2/3">
            <input
              className="w-full p-2 rounded-full"
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
            Ajouter
          </button>
          {error && <div className="text-red-500">{error}</div>}

          <br />
          <br />
        </form>
      </div>
    </>
  );
}

export default AddUser;
