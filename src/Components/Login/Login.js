import React, { useState } from "react";
import "./Login.css";
import SignIn from "./SignIn";

function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="login">
      <div className="login__background">
        <img
          className="login__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"
          alt="logo"
        />

        <button className="login__btn" onClick={() => setSignIn(true)}>
          Sign In
        </button>

        <div className="login__gradient"></div>
      </div>

      <div className="login__content">
        {signIn ? (
          <SignIn />
        ) : (
          <>
            <h1>Unlimited films, Tv programmers and more,</h1>
            <h2>Watch anywhere.Cancel at any time</h2>
            <h3>
              Ready to watch? Enter your email to create of restart your
              membership
            </h3>
            <div className="login__input">
              <form>
                <input type="email" placeholder=" please enter email" />
                <button
                  onClick={() => setSignIn(true)}
                  className="login__inputBtn"
                >
                  Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
