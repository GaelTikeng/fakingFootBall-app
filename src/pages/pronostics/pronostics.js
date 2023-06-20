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
    console.log("teamCountry", teamCountry)
  }

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
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p>Home country</p>
          <p>Away country</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {/* <p>{countryTeam1}</p> */}
          <p
            style={{
              background: "#0f1127ce",
              padding: "10px",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            <b>
              {scoreCountry1} - <b>{scoreCountry2}</b>
            </b>
          </p>
          {/* <p>{countryTeam2}</p> */}
        </div>

        <hr></hr>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p>Home</p>
          <p>Away</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {/* <p>{clubTeam1}</p> */}
          <p
            style={{
              background: "#0f1127ce",
              padding: "10px",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            <b>
              {scoreClub1} - <b>{scoreClub2}</b>
            </b>
          </p>
          {/* <p>{clubTeam2}</p> */}
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
            textAlign:'center',
          }}
          onClick={() => handleClick()}
        >
          Download score
        </button>
      </div>
    </div>
  );
}
