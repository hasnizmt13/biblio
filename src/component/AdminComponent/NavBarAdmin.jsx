import React from "react";
import { useAuth } from "../../Utils/AuthContext";

function NavBarAdmin() {
  const { user } = useAuth();
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-darkBlue mb-5 px-28 flex items-center justify-between">
      <a href="#">
        <img
          className="h-16 w-18 p-2 ml-16"
          src="src/assets/logo-no-background.png"
          alt=""
        />
      </a>

      <a className="text-white font-bold" href="#">
        Welcome {user.nom}
      </a>
    </div>
  );
}

export default NavBarAdmin;
