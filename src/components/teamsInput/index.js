import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import "./teamsInput.css";

export default function SelectTeam() {
  const [selectTeam1, setSelectTeam1] = useState(null);
  const [selectTeam2, setSelectTeam2] = useState(null);
  const [selectedClub1, setSelectedClub1] = useState(null);
  const [selectedClub2, setSelectedClub2] = useState(null);
  const [scoreCountry1, setScoreCountry1] = useState("");
  const [scoreCountry2, setScoreCountry2] = useState("");
  const [scoreClub1, setScoreClub1] = useState("");
  const [scoreClub2, setScoreClub2] = useState("");
  const [clubs, setClubs] = useState([]);
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  const handleSelectTeam1 = (team1) => {
    const teams = JSON.parse(localStorage.getItem('teams')) || {
      team1: null,
      team2: null
    }

    teams.team1 = team1;
    localStorage.setItem('teams', JSON.stringify(teams));
  };

  const handleSelectTeam2 = (team2) => {
    const teams = JSON.parse(localStorage.getItem('teams')) || {
      team1: null,
      team2: null
    }
    teams.team2 = team2;
    localStorage.setItem('teams', JSON.stringify(teams));
  };

  const handleClub1 = (club1) => {
    const pickedClub = JSON.parse(localStorage.getItem('pickedClub')) || {
      club1: null,
      club2: null
    }
    pickedClub.club1 = club1;
    localStorage.setItem('pickedClub', JSON.stringify(pickedClub))
  }

  const handleClub2 = (club2) => {
    const pickedClubs = JSON.parse(localStorage.getItem('pickedClub')) || {
      club1: null,
      club2: null
    }
    pickedClubs.club2 = club2;
    localStorage.setItem('pickedClub', JSON.stringify(pickedClubs));
  };

  const handleChange1 = (event) => {
    setScoreCountry1(event.target.value);
    console.log(scoreCountry1);
  };

  const handleChange2 = (event) => {
    setScoreCountry2(event.target.value);
  };

  const handleChange3 = (e) => {
    setScoreClub1(e.target.value);
  };

  const handleChange4 = (e) => {
    setScoreClub2(e.target.value);
  };

  const handleClick = () => {
    // localStorage.setItem("contry1", JSON.stringify(selectTeam1));
    // localStorage.setItem("contry2", JSON.stringify(selectTeam2));
    // localStorage.setItem("club1", JSON.stringify(selectedClub1));
    // localStorage.setItem("club2", JSON.stringify(selectedClub2));
    // localStorage.setItem("score1", JSON.stringify(scoreCountry1));
    // localStorage.setItem("score2", JSON.stringify(scoreCountry2));
    // localStorage.setItem("score3", JSON.stringify(scoreClub1));
    // localStorage.setItem("score4", JSON.stringify(scoreClub2));
    // console.log(scoreClub1);
  
    const teams = JSON.parse(localStorage.getItem('teams'));

    if(!teams || !teams.team1 || !teams.team2) {
      return;
    }
    
    navigate("/TeamCart");
  };

  const renderImage = (data) => {
    return (
      <div>
        <img src={data} alt="country flag" />
      </div>
    );
  };

  useEffect(() => {
    fetch("footBallTeams.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setClubs(data.clubs);
        setCountries(data.countries);
        // console.log('names of clubs', data.clubs)
        // console.log('names of countries', data.countries);
      })
      .catch((err) => console.log("error", err));
  }, []);
  // console.log('names of club of gael', clubs)
  console.log("names of contries", clubs);

  return (
    <div style={{ paddingBottom: "15px" }}>
      <div style={{ width: "60%", margin: "0 auto" }}>
        <h3 style={{ color: "#fff", textAlign: "center" }}>
          Select team Country
        </h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="clubs-side">
            <p>Team 1</p>
            <input
              type="number"
              onChange={handleChange1}
              placeholder="Enter score"
              style={{ padding: "5px" }}
            />
            <div
              style={{
                color: "#fff",
                padding: "10px",
                height: "500px",
                overflow: "auto",
                borderRadius: "10px",
                boxShadow: "1px 1px 10px #fff",
                border: "1px solid #f1f1f1",
              }}
            >
              {countries.map((select, index) => (
                <div onClick={() => handleSelectTeam1(select)}>
                  <img
                    style={{
                      wifth: "40px",
                      height: "30px",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "center",
                      margin: "0 auto",
                    }}
                    src={select.flag}
                    alt="flag"
                  />
                  <p
                    key={index}
                    style={{
                      textAlign: "center",
                    }}
                  >
                    {select.country}
                  </p>
                  <hr></hr>
                </div>
              ))}
            </div>
          </div>
          <div className="clubs-side">
            <p>Team 2</p>
            <input
              onChange={handleChange2}
              type="number"
              placeholder="Enter score"
              style={{ padding: "5px" }}
            />
            <div
              style={{
                color: "#fff",
                padding: "10px",
                height: "500px",
                overflow: "auto",
                borderRadius: "10px",
                boxShadow: "1px 1px 10px #fff",
                border: "1px solid #f1f1f1",
              }}
            >
              {countries.map((select, index) => (
                <div onClick={() => handleSelectTeam2(select)}>
                  <img
                    style={{
                      wifth: "40px",
                      height: "30px",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "center",
                      margin: "0 auto",
                    }}
                    src={select.flag}
                    alt="flag"
                  />
                  <p
                    key={index}
                    style={{
                      textAlign: "center",
                    }}
                  >
                    {select.country}
                  </p>
                  <hr></hr>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="selected-countres">
            {selectTeam1 && selectTeam2 && (
              <p>
                The selected teams are <b>{selectTeam1}</b> and{" "}
                <b>{selectTeam2}</b>
              </p>
            )}
          </div>
        </div>

        <h3>Select Club</h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="clubs-side">
            <p>Team 1</p>
            <input
              onChange={handleChange3}
              type="number"
              placeholder="Enter score"
              style={{ padding: "5px" }}
            />
            <div
              style={{
                color: "#fff",
                padding: "10px",
                height: "500px",
                width:'300px',
                overflow: "auto",
                borderRadius: "10px",
                boxShadow: "1px 1px 10px #fff",
                border: "1px solid #f1f1f1",
              }}
            >
              {clubs.map((option, index) => (
                <div onClick={() => handleClub1(option)}>
                  <img
                    style={{
                      wifth: "50px",
                      height: "40px",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "center",
                      margin: "0 auto",
                    }}
                    src={option.url}
                    alt="flag"
                  />
                  <p
                    key={index}
                    style={{
                      textAlign: "center",
                    }}
                  >
                    {option.name}
                  </p>
                  <hr></hr>
                </div>
              ))}
            </div>
            
          </div>
          <div className="clubs-side">
            <p>Team 2</p>
            <input
              onChange={handleChange4}
              type="number"
              placeholder="Enter score"
              style={{ padding: "5px" }}
            />
            <div
              style={{
                color: "#fff",
                padding: "10px",
                height: "500px",
                width:'300px',
                overflow: "auto",
                borderRadius: "10px",
                boxShadow: "1px 1px 10px #fff",
                border: "1px solid #f1f1f1",
              }}
            >
              {clubs.map((option, index) => (
                <div onClick={() => handleClub2(option)}>
                  <img
                    style={{
                      wifth: "50px",
                      height: "40px",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "center",
                      margin: "0 auto",
                    }}
                    src={option.url}
                    alt="flag"
                  />
                  <p
                    key={index}
                    style={{
                      textAlign: "center",
                    }}
                  >
                    {option.name}
                  </p>
                  <hr></hr>
                </div>
              ))}
            </div>
            
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "10px",
          }}
        >
          <div className="selected-clubs">
            {selectedClub1 && selectedClub2 && (
              <p>
                The selected teams are <b>{selectedClub1}</b> and{" "}
                <b>{selectedClub2}</b>{" "}
              </p>
            )}
          </div>
        </div>
      </div>
      <button className="btn" onClick={handleClick}>
        Click here
      </button>
    </div>
  );
}
