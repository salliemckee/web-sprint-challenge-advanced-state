import React, { useEffect } from "react";
import { connect } from "react-redux";
import { moveClockwise, moveCounterClockwise } from "../state/action-creators";

function Wheel(props) {
  useEffect(() => {
    const cog = document.querySelector(`#wheel :nth-child(${props.wheel + 1})`);
    cog.textContent = "B";
    cog.classList.add("active");
  }, [props.wheel]);

  const clockwiseClick = () => {
    const cog = document.querySelector(`#wheel :nth-child(${props.wheel + 1})`);
    cog.textContent = "";
    cog.classList.remove("active");
    props.moveClockwise();
  };

  const counterClockwiseClick = () => {
    const cog = document.querySelector(`#wheel :nth-child(${props.wheel + 1})`);
    cog.textContent = "";
    cog.classList.remove("active");
    props.moveCounterClockwise();
  };

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className="cog" style={{ "--i": 0 }}></div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>
        {/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={counterClockwiseClick}>
          Counter clockwise
        </button>
        <button onClick={clockwiseClick} id="clockwiseBtn">
          Clockwise
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ wheel }) => {
  return {
    wheel,
  };
};

export default connect(mapStateToProps, {
  moveClockwise,
  moveCounterClockwise,
})(Wheel);
