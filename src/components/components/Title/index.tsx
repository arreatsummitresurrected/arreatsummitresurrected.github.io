import React from "react";
import "./Title.scss";

function Title(props: { title: string }) {
  return <div className="title">{props.title}</div>;
}

export default Title;
