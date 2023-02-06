import React from "react";
import ColorText from "../../../components/ColorText";
import ContentLink from "../../../components/ContentLink";
import ItemsTable from "../../../components/ItemsTable";
import Title from "../../../components/Title";
import "./RunesPage.scss";

function RunesPage() {
  const runeData = require("./../../../../data/runes.json").runes as [Rune];

  return (
    <>
      <Title title="RUNES" />
      <div className="text">
        Runes are small stones inscribed with magical glyphs that can be
        inserted into Socketed Items. Runes are different from other Insertable
        Items: not only do individual Runes have set magical properties, certain
        combinations (or Rune Words), when inserted into an item in the proper
        order, give that item even more wondrous abilities.
      </div>

      <div className="text">
        Runes can be used to create{" "}
        <ContentLink url={"/items/crafteditems"} title={"Crafted Items"} />.
      </div>

      <div className="text">
        Runes appear in <ColorText text="Orange" color="orange" /> text.
      </div>

      <div className="text">
        <div className="bold-text">Common Runes</div>
        Runes are listed from most common to least common: El, Eld, Tir, Nef,
        Eth, Ith, Tal, Ral, Ort, Amn, Shael, and Thul are pretty common. You
        receive Ral, Ort and Tal as a quest reward in Act V. You shouldn't trade
        much for them since you can find them pretty easily with regular play.
        Don't fall for the "1 Shael or/+ Amn for 1 SOJ" scam. You can find these
        yourself. If you're thinking of freeing up space, throw those Runes away
        and save all Runes from Sol through Zod.
      </div>

      <div className="text">
        <div className="bold-text">Semi-Rare Runes</div>
        Listed from most common to most rare: Sol, Dol, Hel, Io, Lum, Ko, Fal,
        Lem, Pul, Um. Some of these Runes are more valuable than others
        depending on their stats and how they are used in Rune Words or Crafted
        Recipes.
      </div>

      <div className="text">
        <div className="bold-text">Extremely Rare Runes</div>
        Listed from most common to most rare: Mal, Ist, Gul, Vex, Ohm, Lo, Sur,
        Ber, Jah, Cham, Zod. Trade these for good stuff!
      </div>

      <div className="text">
        <div className="bold-text">Rune Words </div>
        If the player puts certain combinations of Runes in the correct order
        into an item with exactly that number of sockets and of the correct item
        type, the item's name will change into a "unique" name, displayed in
        gold, and the item will acquire extra powers, depending on the "rune
        word" that was used. [Learn more about{" "}
        <ContentLink url={"/items/runewords"} title={"Rune Words"} />
        .]
      </div>

      <ItemsTable
        items={runeData}
        fields={["name", "weapon", "armors", "level"]}
        fieldNames={["Name", "Weapon", "Armor/Helms/Shields", "Level"]}
        imagePathPrefix={"/images/runes/"}
        imageExtension={".jpeg"}
      />
    </>
  );
}

interface Rune {
  name: string;
  weapon: string;
  armors: string;
  level: string;
}

export default RunesPage;
