import NavBar from "../../component/NavBar.jsx";
import React from "react";
import { useAuth } from "../../Utils/AuthContext.jsx";
import Profile from "../../component/Profile.jsx";

function ProfilScreen() {
  return (
    <>
      <NavBar />
      <Profile />
    </>
  );
}

export default ProfilScreen;
