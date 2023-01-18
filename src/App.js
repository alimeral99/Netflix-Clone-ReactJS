import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./firebase/firebase";
import { logout, login, selectUser } from "./store/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.id,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubcribe;
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
