import React from "react";
import "./ContentForTini.scss";
import { Link } from "react-router-dom";
const ContentForTini = () => {
  return (
    <>
      <div className="tagdiv1" style={{ width: "100%" }}>
        <div className=" tagdiv first">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className=" tagdiv second">
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className=" tagdiv third">
          <ul>
            <li></li>
            <li></li>
            <li className="floating-1"></li>
            <li className="floating-1"></li>
            <li className="floating-2"></li>
            <li className="floating-2"></li>
          </ul>
        </div>
        <div className=" tagdiv fourth">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li className="floating"></li>
            <li className="floating"></li>
            <li className="floating"></li>
            <li className="floating"></li>
          </ul>
          <span className="smile"></span>
          <span className="eyes"></span>
          <span className="cheeks"></span>
        </div>

        <div className=" tagdiv random-stars-container">
          <span className="random-stars"></span>
          <span className="random-stars"></span>
          <span className="random-stars"></span>
          <span className="random-stars"></span>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: "0",
          right: "0",
          top: "70%",
          zIndex: 100000,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "#85EDE8",
            fontSize: 18,
            fontWeight: 600,
            width: "100%",
          }}
        >
          Anh tặng em bông hoa nè
        </span>
        <Link to="/flower">

            <button
            style={{
                maxWidth: "200px",
                padding: "8px 24px",
                fontSize: 16,
                fontWeight: 500,
                color: "#fff",
                backgroundColor: "#5048A0",
                border: "none",
                borderRadius: "5px",
                marginTop: 10,
                cursor: 'pointer'
            }}
            >
            Em bé bấm đây
            </button>
        </Link>
      </div>
    </>
  );
};

export default ContentForTini;
