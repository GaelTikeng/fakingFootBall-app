import React, { useState, useContext, createRef, useEffect } from "react";
import { createFileName, useScreenshot } from "use-react-screenshot";
import "./pronostic.css";
import { Context } from "../../utiles/Context";

export default function TeamCart() {
  const {
    teamCountry,
    pickedClub,
    scoreClub1,
    scoreClub2,
    scoreCountry1,
    scoreCountry2,
  } = useContext(Context);
  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });

  console.log("teamCountry", teamCountry);

  const download = (image, { name = "TeamTicket", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => {
    takeScreenShot(ref.current).then(download);
  };

  const handleClick = () => {
    console.log("teamCountry", teamCountry);
  };

  
  console.log(pickedClub);
  useEffect(() => {
    console.log(teamCountry);
  },[])

  return (
    <div className="content">
      <h1 style={{ textAlign: "center" }}>Team cart</h1>
      <div
        style={{
          width: "500px",
          height: "400px",
          borderRadius: "8px",
          boxShadow: "3px 1px 15px #fff",
          margin: "0 auto",
        }}
        ref={ref}
      >
        <div style={{ display: "flex", justifyContent: "space-around"}}>
          <p style={{width:'50%'}}>Home country</p>
          <p>Away country</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <img
              style={{
                width:'60px',
                height:'50px',
              }}
              src={teamCountry.team1.flag} alt='fag'
            />
            <p>{teamCountry.team1.country}</p>
          </div>
          
          <div>
            <p
              style={{
                background: "#0f1127ce",
                padding: "10px",
                borderRadius: "5px",
                textAlign: "center",
                height:'20px',
              }}
            >
              <b>
                {scoreCountry1} - <b>{scoreCountry2}</b>
              </b>
            </p>
            <small style={{color:'#fff'}}>Full Time</small>
          </div>
          <div>
            <img
              src={teamCountry.team2.flag}
              style={{
                width:'60px',
                height:'50px'
              }}
            />
            <p>{teamCountry.team2.country}</p>
          </div>
        </div>

        <hr></hr>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p style={{width:'50%'}}>Home</p>
          <p>Away</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <img
              style={{
                marginRight:'50px',
                width:'60px',
                height:'50px',
              }}
              src={pickedClub.club1.url} alt='fag'
            />
            <p>{pickedClub.club1.name}</p>
          </div>
          
          <div>
            <p
              style={{
                background: "#0f1127ce",
                padding: "10px",
                borderRadius: "5px",
                textAlign: "center",
                height:'20px',
              }}
            >
              <b>
                {scoreClub1} - <b>{scoreClub2}</b>
              </b>
            </p>
            <small style={{color:'#fff'}}>Full Time</small>
          </div>
          <div>
            <img
              src={pickedClub.club2.url}
              style={{
                width:'60px',
                height:'50px'
              }}
            />
            <p>{pickedClub.club2.name}</p>
          </div>
        </div>

        <button
          style={{
            padding: "10px",
            borderRadius: "5px",
            color: "#fff",
            border: "none",
            boxShadow: "1px 2px 4px #fff",
            cursor: "pointer",
            background: "#131938b4",
            width: "120px",
            margin: "0 auto",
            display: "flex",
            button: "0",
            textAlign: "center",
          }}
          onClick={() => downloadScreenshot()}
        >
          Download score
        </button>
      </div>
    </div>
  );
}
