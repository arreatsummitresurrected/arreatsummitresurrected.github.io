import React from "react";
import "./ColorText.scss";

function ColorText(props: {
  color: string;
  text: string;
  fontWeight?: string;
}) {
  return (
    <span
      className="color-text"
      style={{ color: props.color, fontWeight: props.fontWeight || "700" }}
    >
      {props.text}
    </span>
  );
}

export default ColorText;
