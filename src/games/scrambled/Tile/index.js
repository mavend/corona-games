import React from "react";
import PropTypes from "prop-types";
import { BONUSES } from "../config";
import { Label } from "semantic-ui-react";

// import styles from "./Tile.module.css";

const propTypes = {
  letter: PropTypes.string,
  replacement: PropTypes.string,
  points: PropTypes.number,
  raised: PropTypes.bool,
  separate: PropTypes.bool,
  highlighted: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  bonus: PropTypes.object,
  label: PropTypes.string,
};
const Tile = ({
  letter,
  replacement,
  points,
  raised,
  separate,
  highlighted,
  disabled,
  bonus,
  onClick,
  label,
}) => (
  <div
    onClick={onClick}
    style={{
      cursor: onClick || highlighted ? "pointer" : "auto",
      opacity: onClick && disabled ? 0.5 : 1,
      userSelect: "none",
      borderRadius: 5,
      boxShadow: `3px 3px 0 0 #393434, 2px 2px 0 0 #393434, 1px 1px 0 0 #393434 ${
        raised ? ", rgba(0, 0, 0, 0.25) 3px 8px 4px 1px" : ""
      }`,
      background: highlighted || raised ? "#8f8880" : "#655D5D",
      color: "#FFFFFF",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 46,
      height: 46,
      position: "relative",
      top: raised ? "-8px" : "-3px",
      left: "-3px",
      fontWeight: 600,
      margin: separate ? "0 5px 0 0" : 0,
      transition: "top 0.3s, box-shadow 0.3s, opacity 0.3s, background 0.3s",
    }}
  >
    {letter ? (
      <div style={{ fontSize: 22 }}>{letter}</div>
    ) : (
      <div style={{ fontSize: 22, opacity: separate && !disabled ? 0.2 : 0.6 }}>{replacement}</div>
    )}
    {bonus && (
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          margin: 3,
          background: BONUSES[bonus.type][bonus.multiply],
          borderRadius: 3,
          width: 6,
          height: 6,
        }}
      ></div>
    )}
    {bonus && bonus.type === "letter" ? (
      <div
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          margin: 2,
          fontSize: 13,
          lineHeight: 1,
          WebkitTextFillColor: "#FFFFFF",
          WebkitTextStroke: `2px ${BONUSES[bonus.type][bonus.multiply]}`,
          paintOrder: "stroke fill",
        }}
      >
        {points * bonus.multiply}
      </div>
    ) : (
      <div
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          margin: 2,
          fontSize: 13,
          lineHeight: 1,
        }}
      >
        {points}
      </div>
    )}
    {label && (
      <Label color="grey" size="tiny" floating>
        {label}
      </Label>
    )}
  </div>
);
Tile.propTypes = propTypes;

export default Tile;