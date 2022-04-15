import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const LogIn = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [userError, setUserError] = useState({
    email: "",
    password: "",
    others: "",
  });

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleEmailChange = (event) => {
    const emailRegx = /\S+@\S+\.\S+/;
    const validEmail = emailRegx.test(event.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: event.target.value });
      setUserError({ ...userError, email: "" });
    } else {
      setUserError({ ...userError, email: "please enter valid email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  const handlePasswordChange = (event) => {
    const passwordRegx =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validPassword = passwordRegx.test(event.target.value);
    if (validPassword) {
      setUserInfo({ ...userInfo, password: event.target.value });
      setUserError({ ...userError, password: "" });
    } else {
      setUserError({
        ...userError,
        password:
          "Minimum eight characters, at least one letter and one number",
      });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const navigate = useNavigate();
  if (user) {
    navigate("/");
  }

  const LogInButton = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  console.log(error);

  return (
    <div className="signUp-bg">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="mb-6">
          {/* <img className="w-52" src={logo} alt="" /> */}
        </div>
        <form onSubmit={LogInButton} className=" from flex flex-col w-1/3 ">
          <input
            onChange={handleEmailChange}
            type="text"
            name="email"
            id=""
            placeholder="Email"
          />
          {userError?.email && <p>{userError?.email}</p>}
          <input
            onChange={handlePasswordChange}
            type="password"
            name="password"
            id=""
            placeholder="Password"
          />
          {userError?.password && <p>{userError?.password}</p>}

          {error?.message && <p>error?.message</p>}
          <button
            onClick={LogInButton}
            className=" hover:bg-red-400 bg-red-500 py-2 text-white text-lg w-full block mx-auto mt-5 rounded"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
