import React, { useRef } from "react";
import "./SignIn.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";

function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        // Signed in
        // ...
      })
      .catch((error) => {
        alert(error.message);
        // ..
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        // Signed in
        // ...
      })
      .catch((error) => {
        alert(error.message);
        // ..
      });
  };

  return (
    <div className="signIn">
      <form>
        <input ref={emailRef} type="email" placeholder="email" />
        <input ref={passwordRef} type="password" placeholder="passrowd" />
        <button onClick={signIn} type="submit">
          Submit
        </button>

        <h4>
          <span className="signUp__gray">New to Netflix?</span>
          <span onClick={register} className="signUp__link">
            Sign Up Now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignIn;
