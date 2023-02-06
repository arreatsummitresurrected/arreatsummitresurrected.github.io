import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./GlobalLayout.scss";

function GlobalLayout() {
  return (
    <div>
      <div className="sidenav">
        <MyLink path="/items" text="ITEMS" />
        <MyLink path="/monsters" text="MONSTERS" isDisabled={true} />
        <MyLink path="/skills" text="SKILLS" isDisabled={true} />
        <MyLink path="/quests" text="QUESTS" isDisabled={true} />
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

function MyLink(props: { path: string; text: string; isDisabled?: boolean }) {
  return (
    <NavLink
      to={props.path}
      onClick={(event) => props.isDisabled && event.preventDefault()}
      className={(data) =>
        "nav-button" +
        (props.isDisabled
          ? " nav-button--disabled"
          : data.isActive
          ? " nav-button--active"
          : "")
      }
    >
      {props.text}
    </NavLink>
  );
}

export default GlobalLayout;
