import React from "react";
import "./PageNavigation.scss";

export default function PageNavigation(props: {
  links: Array<{ title: string; url: string }>;
}) {
  const getLinks = () => {
    return props.links.map((link) => {
      return (
        <>
          <a href={link.url}>{link.title}</a>
          <span className="page-navigation__separator"> | </span>
        </>
      );
    });
  };

  return <div className="page-navigation">{getLinks()}</div>;
}
