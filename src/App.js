import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllFoods from "./Pages/Home/AllFoods/AllFoods";
import HomePage from "./Pages/Home/HomePage";
import Navbar from "./Pages/Navbar/Navbar";

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
      </Routes>
    </div>
  );
}

export default App;
