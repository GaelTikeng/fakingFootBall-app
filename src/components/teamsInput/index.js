import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
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

  const handleSelectTeam1 = (selectedTeam1) => {
    setSelectTeam1(selectedTeam1.target.value);
    // console.log('selected value is', selectedTeam1.target.value);
  };

  const handleSelectTeam2 = (selectedTeam2) => {
    setSelectTeam2(selectedTeam2.target.value);
  };

  const handleClub1 = (selectClub1) => {
    setSelectedClub1(selectClub1.target.value);
  };

  const handleClub2 = (selectClub2) => {
    setSelectedClub2(selectClub2.target.value);
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
    localStorage.setItem("contry1", JSON.stringify(selectTeam1));
    localStorage.setItem("contry2", JSON.stringify(selectTeam2));
    localStorage.setItem("club1", JSON.stringify(selectedClub1));
    localStorage.setItem("club2", JSON.stringify(selectedClub2));
    localStorage.setItem("score1", JSON.stringify(scoreCountry1));
    localStorage.setItem("score2", JSON.stringify(scoreCountry2));
    localStorage.setItem("score3", JSON.stringify(scoreClub1));
    localStorage.setItem("score4", JSON.stringify(scoreClub2));
    console.log(scoreClub1);
    navigate("/TeamCart");
  };

  const renderImage = (data) => {
    return (
      <div>
        <img src={data} alt="country flag" />
      </div>
    )
  }

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
  console.log('names of contries', countries)

  return (
    <div style={{ paddingBottom: "15px" }}>
      <div style={{ width: "60%", margin: "0 auto" }}>
        <h3 style={{ color: "#fff", textAlign: "center" }}>
          Select team Country
        </h3>
        <div style={{ display: "flex", justifyContent: "space-between"}}>
          <div className="clubs-side">
            <p>Team 1</p>
            <select
              className="select"
              onChange={handleSelectTeam1}
              autoFocus={true}
            >
              {countries.map((option) => (
                <option className="select_option" value={option.country}
                >
                  {/* <img
                    src={option.flag}
                    alt="country flag"
                    style={{width:'20px', height:'20px'}}
                  /> */}
                  {option.country}
                </option>
              
              ))}
            </select>
            <input
              type="number"
              onChange={handleChange1}
              placeholder="Enter score"
              style={{ padding: "5px" }}
            />
            <ul style={{color:"#fff", listStyle:'none'}}>
              {countries.map((select, index) => (
                <li key={index}>
                  <img style={{wifth:'20px', height:'20px'}} src={select.flag} alt="flag"/>
                  | {select.country}
                </li>
              ))}
            </ul>
          </div>
          <div className="clubs-side">
            <p>Team 2</p>
            <select
              className="select"
              onChange={handleSelectTeam2}
              autoFocus={true}
            >
              {countries.map((option) => (
                <option value={option.country}> {renderImage(option.flag)} {option.country}</option>
              ))}
            </select>
            {/* <ReactSelect
              // name={'logo_' + attributes.option_id}
              // value={countries.filter(obj => selectedValue.value === obj.value)}
              formatOptionLabel = {option => (
                <div>
                  {option.image ? <img src={option.flag} /> : ''}
                  <span>{option.country}</span>
                </div>
              )}
            /> */}
            <input
              onChange={handleChange2}
              type="number"
              placeholder="Enter score"
              style={{ padding: "5px" }}
            />
          </div>
        </div>
        <div>
          <div className="selected-countres">{selectTeam1 && selectTeam2 && <p>The selected teams are <b>{selectTeam1}</b> and <b>{selectTeam2}</b></p>}</div>
        </div>

        <h3>Select Club</h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="clubs-side">
            <p>Team 1</p>
            <select
              className="select"
              onChange={handleClub1}
              autoFocus={true}
              >
              {clubs.map((option) => (
                <option value={option.code}>{option.name} </option>
              ))}
            </select>
            <input
              onChange={handleChange3}
              type="number"
              placeholder="Enter score"
              style={{ padding: "5px" }}
            />
          </div>
          <div className="clubs-side">
            <p>Team 2</p>
            <select className="select" onChange={handleClub2} autoFocus={true}>
              {clubs.map((option) => (
                <option value={option.code}>{option.name} </option>
              ))}
            </select>
            <input
              onChange={handleChange4}
              type="number"
              placeholder="Enter score"
              style={{ padding: "5px" }}
            />
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
            {selectedClub1 && selectedClub2 && <p>The selected teams are <b>{selectedClub1}</b> and <b>{selectedClub2}</b> </p>}
          </div>
        </div>
      </div>
      <button className="btn" onClick={handleClick}>
        Click here
      </button>
    </div>
  );
}
