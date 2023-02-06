import React from "react";
import { Link } from "react-router-dom";
import "./ContentLink.scss";

function ContentLink(props: { url: string; title: string }) {
  return (
    <Link to={props.url} className="content-link">
      {props.title}
    </Link>
  );
}

export default ContentLink;
