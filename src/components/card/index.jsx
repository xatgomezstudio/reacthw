import React from "./node_modules/react";
import PropTypes from "./node_modules/prop-types";

import "./styles.css";

export default function Card({
  handleClick,
  id,
  type,
  flipped,
  solved,
  height,
  width,
  disabled
}) {
  return (
    <div
      className={'flip-container ${flipped ? "flipped" : }'}
      style={{
        width,
        height
      }}
      onClick={() => (disabled ? null : handleClick(id, type))}>
      <div className='flipper'>
        <img
          style={{
            height,
            width
          }}
          className={flipped ? "front" : "back"}
          //check to see if its been flipped or solved
          src={flipped || solved ? "/img/${type}.png" : "/img/back.png"}
        />
      </div>
    </div>
  );
}

//checks and removes squigglies
Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  solved: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired
};
