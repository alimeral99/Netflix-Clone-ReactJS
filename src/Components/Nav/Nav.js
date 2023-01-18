import React from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
function Nav() {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="nav__contents">
        <img
          onClick={() => navigate("/")}
          className="nav__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"
          alt="nav_logo"
        />

        <img
          onClick={() => navigate("/profile")}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
          alt="nav_avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
