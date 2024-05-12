import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");

    // Construct the query URL
    const queryUrl = `http://localhost:3000/utilisateurs?email=eq.${email}&password_=eq.${password}`;

    try {
      const response = await axios.get(queryUrl);
      const users = response.data;
      if (users.length > 0) {
        console.log("Login Successful:", users[0]); // Debug: show user data
        localStorage.setItem("user", JSON.stringify(users[0])); // Store user data in local storage
        if (users[0].rôle === "admin") {
          navigate("/empruntManager");
        } else {
          navigate("/");
        }
        window.location.reload();
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (err) {
      setError("The server did not respond.");
      console.error("Login Error:", err);
    }
  };
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="mt-40 flex  justify-center  bg-darkBlue flex mx-auto space-y-1 h-auto w-2/5 rounded-lg">
        <form
          onSubmit={handleLogin}
          className="space-y-6 flex flex-col justify-center items-center h-full w-full"
          action=""
          method="post"
        >
          <br />
          <h1 className="text-4xl px-5 py-1 text-white pb-5">Se connecter</h1>
          <input
            className="mt-5 w-2/3 p-2 rounded-full"
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
          <button
            className="my-10 w-1/5 p-2 font-bold rounded-full text-darkBlue bg-white hover:text-green-500"
            type="submit"
          >
            Sign In
          </button>
          {error && <div className="text-red-500">{error}</div>}
          <div className="flex flex-row justify-center space-x-5">
            <p className="text-white">Premiere inscription ? </p>
            <a className="text-white font-bold" href="/signup">
              {" "}
              Créer un compte
            </a>
          </div>
          <br />
          <br />
        </form>
      </div>
    </>
  );
}

export default SignIn;
