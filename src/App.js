import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllFoods from "./Pages/Home/AllFoods/AllFoods";
import HomePage from "./Pages/Home/HomePage";
import LogIn from "./Pages/LogIn/LogIn";
import Navbar from "./Pages/Navbar/Navbar";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/:breakfast" element={<AllFoods />} />
          <Route path="/:lunch" element={<AllFoods />} />
          <Route path="/:dinner" element={<AllFoods />} />
        </Route>
        {/* <Route path="/home" element={<HomePage />} /> */}

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
