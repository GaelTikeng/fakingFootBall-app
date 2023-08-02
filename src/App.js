import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./pages/home/header";
import SelectTeam from "./components/teamsInput";
import TeamCart from "./components/pronostics/pronostics";
import { ContextProvider } from "./utiles/Context";

function App() {
  // const teamCountry = JSON.parse(localStorage.getItem("teams"));
  const pickedClub = JSON.parse(localStorage.getItem("pickedClub"));
  const scoreCountry1 = JSON.parse(localStorage.getItem("score1"));
  const scoreCountry2 = JSON.parse(localStorage.getItem("score2"));
  const scoreClub1 = JSON.parse(localStorage.getItem("score3"));
  const scoreClub2 = JSON.parse(localStorage.getItem("score4"));

  return (
    <div className="App">
      <ContextProvider
        value={{
          // teamCountry,
          pickedClub,
          scoreCountry1,
          scoreCountry2,
          scoreClub1,
          scoreClub2,
        }}
      >
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<SelectTeam />} />
            <Route path="/TeamCart" element={<TeamCart />} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
