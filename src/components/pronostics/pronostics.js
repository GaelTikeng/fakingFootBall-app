import React, { useContext, createRef } from "react";
import { createFileName, useScreenshot } from "use-react-screenshot";
import './pronostics.css';
import { Context } from "../../utiles/Context";

export default function TeamCart() {
  const {
    // teamCountry,
    pickedClub,
    scoreClub1,
    scoreClub2,
    scoreCountry1,
    scoreCountry2,
  } = useContext(Context);
  const teamCountry = JSON.parse(localStorage.getItem("teams"));
  const ref = createRef(null);
  const refference = createRef(null);
  const [takeScreenShot] = useScreenshot({
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

  const downloadScreenshot2 = () => {
    takeScreenShot(refference.current).then(download);
  };

  // const handleClick = () => {
  //   console.log("teamCountry", teamCountry);
  // };

  return (
    <div
      style={{
        width: "500px",
        height: "fit-content",
        borderRadius: "8px",
        boxShadow: "3px, 1px, 15px, #fff",
        margin: "0 auto",
        paddingBottom: "10px",
        background: "#131938b4"
      }}
    >
      <h1 style={{ textAlign: "center", margin: "10px auto" }}>Team cart</h1>
      <div
        style={{
          width: "500px",
          height: "fit-content",
          borderRadius: "8px",
          boxShadow: "3px 1px 15px #fff",
          margin: "0 auto",
          paddingBottom: "10px",
          background: "#131938b4",
        }}
      >
        <div style={{ borderRadius: "8px", background: "#131938b4" }} ref={ref}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p className="p-tag" style={{ width: "40%" }}>Home country</p>
            <p style={{ width: "40%" }}>Away country</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <img
                style={{
                  width: "60px",
                  background: "#131938b4",
                  height: "50px",
                }}
                ref={ref}
                src={teamCountry.team1.flag}
                alt="fag"
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
                  height: "20px",
                }}
              >
                <b>
                  {scoreCountry1} - <b>{scoreCountry2}</b>
                </b>
              </p>
              <small style={{ color: "#fff" }}>Full Time</small>
            </div>
            <div>
              <img
                src={teamCountry.team2.flag}
                style={{
                  width: "60px",
                  background: "#131938b4",
                  height: "50px",
                }}
                alt="flag"
              />
              <p>{teamCountry.team2.country}</p>
            </div>
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
      <br></br>
      <br></br>
      <div
        style={{
          width: "500px",
          height: "fit-content",
          borderRadius: "8px",
          boxShadow: "3px 1px 15px #fff",
          margin: "0 auto",
          paddingBottom: "10px",
          background: "#131938b4",
        }}
      >
        <div
          ref={refference}
          style={{ borderRadius: "8px", background: "#131938b4" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ width: "30%", textAlign: "center" }}>Home</p>
            <p style={{ width: "30%" }}>Away</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <img
                style={{
                  width: "60px",
                  height: "50px",
                }}
                src={pickedClub.club1.url}
                alt="fag"
              />
              <p style={{ width: "100px" }}>{pickedClub.club1.name}</p>
            </div>

            <div>
              <p
                style={{
                  background: "#0f1127ce",
                  padding: "10px",
                  borderRadius: "5px",
                  textAlign: "center",
                  height: "20px",
                }}
              >
                <b>
                  {scoreClub1} - <b>{scoreClub2}</b>
                </b>
              </p>
              <small style={{ color: "#fff" }}>Full Time</small>
            </div>
            <div>
              <img
                src={pickedClub.club2.url}
                style={{
                  width: "60px",
                  height: "50px",
                }}
                alt="flag"
              />
              <p style={{ width: "100px" }}>{pickedClub.club2.name}</p>
            </div>
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
          onClick={() => downloadScreenshot2()}
        >
          Download score
        </button>
      </div>
    </div>
  );
}
