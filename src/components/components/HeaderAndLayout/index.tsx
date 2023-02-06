import { link } from "fs";
import React, { ReactNode } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ItemIndexPage from "../../pages/ItemPages/ItemIndexPage";
import Title from "../Title";
import "./HeaderAndLayout.scss";

interface HeaderLink {
  link: string;
  text: string;
}

const links = [
  { link: "/basics", text: "Item Basics" },
  { link: "/weaponsandarmor#normal", text: "Normal Items" },
  { link: "/weaponsandarmor#exceptional", text: "Exceptional Items" },
  { link: "/weaponsandarmor#elite", text: "Elite Items" },
  { link: "/socketeditems", text: "Socketed Items" },
  { link: "/gems", text: "Gems" },
  { link: "/jewels", text: "Jewels" },
  { link: "/runes", text: "Runes" },
  { link: "/runewords", text: "Rune words" },
  { link: "/magic", text: "Magic Items" },
  { link: "/crafteditems", text: "Crafted Items" },
  { link: "/sets", text: "Set Items" },
  { link: "/uniques", text: "Unique Items" },
  { link: "/charms", text: "Charms" },
  { link: "/cube", text: "The Horadric Cube" },
  { link: "", text: "Items Index" },
];

function HeaderAndLayout() {
  const mapLinks = () => {
    return links.map((link) => (
      <HeaderLink link={link.link} text={link.text} />
    ));
  };

  return (
    <>
      <div className="header">{mapLinks()}</div>
      <div className="page">
        <div className="page__content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

function HeaderLink(props: { link: string; text: string }) {
  const getSeparator = () => {
    return <span className="header__separator"> | </span>;
  };
  return (
    <>
      <NavLink
        to={"/items" + props.link}
        className={(data) =>
          "header__link" + (data.isActive ? " header__link--active" : "")
        }
      >
        {props.text}
      </NavLink>
      {getSeparator()}
    </>
  );
}

export default HeaderAndLayout;
