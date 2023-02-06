import React from "react";
import ContentLink from "../../../components/ContentLink";
import HeaderAndLayout from "../../../components/HeaderAndLayout";
import ItemsTable from "../../../components/ItemsTable";
import Title from "../../../components/Title";

interface Gem {
  name: string;
  reqLevel: string;
  weapons: string;
  shields: string;
  armors: string;
}

function GemsPage() {
  const gemFields = ["name", "reqLevel", "weapons", "shields", "armors"];
  const gemFieldNames = [
    "Name",
    "Req Level",
    "Weapons",
    "Shields",
    "Helms and Armor",
  ];
  const gemImagePrefix = "/images/gems/";
  const gemImageExtension = ".png";
  const gems = require("./../../../../data/gems.json");

  return (
    <>
      <Title title="GEMS" />

      <div className="text">
        Precious gems embody innate magical abilities. When set into a socketed
        item these gems can add powerful magic effects. Higher grades of gems
        have stronger effects. There are five grades of gems: chipped, flawed,
        standard, flawless, and perfect. Once inserted, gems cannot be removed
        from a socket. Touching a gem shrine either produces a gem or upgrades
        one gem (randomly chosen from your character's inventory) to the next
        higher grade. The skulls of some demonic creatures, inscribed with
        eldritch symbols, are said to work much like gems.
      </div>

      <div className="text">
        <div className="bold-text">Upgrading Gems</div>
        You can upgrade gems by using a Gem Shrine or by using the Horadric
        Cube. You can use the{" "}
        <ContentLink title="Horadric Cube" url="/items/cube" /> to convert gems
        into higher quality gems. Place 3 Gems of one type into the Horadric
        Cube and hit the Transmute button.
      </div>

      <div className="text">
        <div className="bold-text">Vendors do not normally sell Gems</div>
        If another player in a multiplayer game sells a Gem to a Vendor you may
        be able to buy it.
      </div>

      <div className="text">
        Vendors also will not typically pay you full price for socketed items.
      </div>

      <div className="text">
        <div className="bold-text">Gem effects Stackable</div>
        If you place 3 Gems of the same type in a sword you will receive the
        bonus of all three.
      </div>

      <div className="text">
        The first Gem that is placed will determine the color of the weapon. If
        there are several different types of Gems in a sword, it will randomly
        display an attack based on those types of Gems in the sword. So one
        swing will show cold damage, while the next shows poison attack but all
        of them are working at the same time.
      </div>

      <div className="text">
        <span className="bold-text">Note: </span>
        For Emeralds, when calculating the final damage after the gems have been
        added, the damage (but not the length) is added up.
      </div>

      <div className="text">
        The real damage of poison internally is held as damage per frame and
        duration in frames, in many cases (including gems, skills, items and so
        on), the true poison damage is actually a non integer number and the
        shown value is truncated, meaning you can, if the fractions add up, see
        some "bonus" effects which is in fact not a bonus, just fractions adding
        up and being shown when the game truncates the poison damage.
      </div>

      <div className="text">
        Once the final damage has been calculated by adding the Emeralds, it
        does X damage total, over its Y duration.
      </div>

      <div className="text">
        <div className="bold-text">Sapphires</div>
        The Freeze Durations are cumulative.
      </div>

      <div className="text">
        <div className="bold-text">Skulls</div>
      </div>

      <div className="text">
        Weapons: Adds Mana and Life Steal to attack <br />
        Shields: Adds attacker takes damage <br />
        Helms and Armor: Adds Mana and Life regeneration
      </div>

      <ItemsTable
        items={gems.skulls}
        fields={gemFields}
        fieldNames={gemFieldNames}
        imagePathPrefix={gemImagePrefix}
        imageExtension={gemImageExtension}
      />

      <div className="text">
        <div className="bold-text">Amethyst</div>
      </div>

      <div className="text">
        Weapons: Adds to Attack Rating <br />
        Shields: Adds to Defense <br />
        Helms and Armor: Adds to Strength
      </div>

      <ItemsTable
        items={gems.amethysts}
        fields={gemFields}
        fieldNames={gemFieldNames}
        imagePathPrefix={gemImagePrefix}
        imageExtension={gemImageExtension}
      />

      <div className="text">
        <div className="bold-text">Sapphire</div>
      </div>

      <div className="text">
        Weapons: Adds Cold Damage <br />
        Shields: Adds Resistance to Cold <br />
        Helms and Armor: Adds Maximum Mana
      </div>

      <ItemsTable
        items={gems.sapphires}
        fields={gemFields}
        fieldNames={gemFieldNames}
        imagePathPrefix={gemImagePrefix}
        imageExtension={gemImageExtension}
      />

      <div className="text">
        <div className="bold-text">Emerald</div>
      </div>

      <div className="text">
        Weapons: Adds Poison Damage <br />
        Shields: Adds to Resistance to Poison <br />
        Helms and Armor: Adds to Dexterity
      </div>

      <ItemsTable
        items={gems.emeralds}
        fields={gemFields}
        fieldNames={gemFieldNames}
        imagePathPrefix={gemImagePrefix}
        imageExtension={gemImageExtension}
      />

      <div className="text">
        <div className="bold-text">Ruby</div>
      </div>

      <div className="text">
        Weapons: Adds Fire Damage <br />
        Shields: Adds Resistance to Fire <br />
        Helms and Armor: Adds to Maximum Life
      </div>

      <ItemsTable
        items={gems.rubies}
        fields={gemFields}
        fieldNames={gemFieldNames}
        imagePathPrefix={gemImagePrefix}
        imageExtension={gemImageExtension}
      />

      <div className="text">
        <div className="bold-text">Diamond</div>
      </div>

      <div className="text">
        Weapons: Adds to Damage vs. Undead <br />
        Shields: Adds to all Resistances <br />
        Helms and Armor: Adds to Attack Rating
      </div>

      <ItemsTable
        items={gems.diamonds}
        fields={gemFields}
        fieldNames={gemFieldNames}
        imagePathPrefix={gemImagePrefix}
        imageExtension={gemImageExtension}
      />

      <div className="text">
        <div className="bold-text">Topaz</div>
      </div>

      <div className="text">
        Weapons: Adds Lightning Damage <br />
        Shields: Adds to Resistance to Lightning <br />
        Helms and Armor: Adds Chance to find Magic Items
      </div>

      <ItemsTable
        items={gems.topazes}
        fields={gemFields}
        fieldNames={gemFieldNames}
        imagePathPrefix={gemImagePrefix}
        imageExtension={gemImageExtension}
      />
    </>
  );
}

export default GemsPage;
