import React from "react";
import "./Profile.css";
import Nav from "../Nav/Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slice/userSlice";
import { auth } from "../../firebase/firebase";
function Profile() {
  const user = useSelector(selectUser);
  return (
    <div className="profile">
      <Nav />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt="profile__img"
          />
          <div className="profile__details">
            <h2>{user.email}</h2>
            <div className="profile__plans">
              <button
                onClick={() => auth.signOut()}
                className="profile__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
