import React, { useEffect, useState } from "react";
import "./SignUp.css";
import logo from "../../images/logo2.png";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const SignUp = () => {
  const [createUserWithEmailAndPassword, newUser, newLoading, newError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [userError, setUserError] = useState({
    email: "",
    name: "",
    password: "",
    others: "",
  });

  useEffect(() => {
    if (newError) {
      setUserError({ ...userError, others: newError?.message });
    }
  }, [newError]);
  const handleName = (event) => {
    console.log("hello");
  };
  const handleEmail = (event) => {
    const emailRegx = /\S+@\S+\.\S+/;
    const vaidEmail = emailRegx.test(event.target.value);
    if (vaidEmail) {
      setUserInfo({ ...userInfo, email: event.target.value });
      setUserError({ email: "" });
    } else {
      setUserError({ email: "invalid email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };
  const handlePassword = (event) => {
    const passwordRegx =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validPassword = passwordRegx.test(event.target.value);
    if (validPassword) {
      setUserInfo({ ...userInfo, password: event.target.value });
      setUserError({ password: "" });
    } else {
      setUserError({
        password:
          "Minimum eight characters, at least one letter and one number",
      });
      setUserInfo({ ...userInfo, password: "" });
    }
  };
  const handleConfirmPassword = (event) => {
    if (event.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPassword: event.target.value });
      setUserError({ ...userError, confirmPassword: "" });
    } else {
      setUserError({ ...userError, confirmPassword: "password don't match" });
      setUserInfo({ ...userInfo, confirmPassword: "" });
    }
  };
  console.log(userInfo);

  const signUpButton = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  return (
    <div className="signUp-bg">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="mb-6">
          <img className="w-52" src={logo} alt="" />
        </div>
        <form onSubmit={signUpButton} className=" from flex flex-col w-1/3 ">
          <input
            onChange={handleName}
            type="text"
            name="name"
            id=""
            placeholder="Name"
          />
          <input
            onChange={handleEmail}
            type="text"
            name="email"
            id=""
            placeholder="Email"
          />
          {userError?.email && <p>{userError.email}</p>}
          <input
            onChange={handlePassword}
            type="password"
            name="password"
            id=""
            placeholder="Password"
          />
          {userError?.password && <p>{userError.password}</p>}
          <input
            onChange={handleConfirmPassword}
            type="password"
            name="confirmPassword"
            id=""
            placeholder="Confirm Password"
          />
          {userError?.confirmPassword && <p>{userError?.confirmPassword}</p>}

          {newError?.message && <p>{newError?.message}</p>}

          {userError ? (
            <button
              onClick={signUpButton}
              className=" hover:bg-red-400 bg-red-500 py-2 text-white text-lg w-full block mx-auto mt-5 rounded"
            >
              Sign Up
            </button>
          ) : (
            <button
              onClick={signUpButton}
              className=" hover:bg-red-400 bg-red-500 py-2 text-white text-lg w-full block mx-auto mt-5 rounded"
            >
              Sign Up
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
