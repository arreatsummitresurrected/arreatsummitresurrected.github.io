import React from "react";
import ColorText from "../../../components/ColorText";
import ContentLink from "../../../components/ContentLink";
import Title from "../../../components/Title";

function CraftedItemsPage() {
  return (
    <>
      <Title title="CRAFTED ITEMS" />

      <div className="text">
        Crafted items are similar to rare items, but cannot be Gambled, dropped
        by Monsters or found in Chests. They can only be created with{" "}
        <ContentLink
          url="/items/cube"
          title="The
        Horadric Cube"
        />
        . Crafted Items are a form of Gambling for high level players or
        "hardcore" players. These serious players can have the ingredients and
        time to create a good Crafted Item. Crafted Items have the potential to
        be better than Rare Items and possibly certain Set or Unique Items.
      </div>

      <div className="text">
        Items in <ColorText text="Orange" color="orange" /> are Crafted Items.
      </div>

      <div className="text">
        <div className="bold-text">Crafted Items have 3-4 Fixed Properties</div>
        Each Crafted Item has one or more fixed properties. For example, there
        are some Crafted Items guaranteed to have from 5-10% Chance of Crushing
        Blow. Often the Fixed Properties are not available normally on Magic or
        Rare Items. It's also nice to be able to create an item knowing which
        fixed magical bonuses are going to always appear which is not the case
        with Magic or Rare Items.
      </div>

      <div className="text">
        <div className="bold-text">
          Crafted Items have 1-4 Random Magical Prefixes/Suffixes
        </div>
        On top of those fixed properties, a Crafted Item can have from 1-4
        standard Rare and Magic Prefix and Suffixes. These are generated pretty
        much the same way as a Rare item.
      </div>

      <div className="text">
        At ilvls 1-30, there's a 40% chance of 1 affix and a 20% chance each of
        2, 3 or 4 affixes.
        <br />
        At ilvls 31-50, there's a 60% chance of 2 affixes and a 20% chance each
        of 3 or 4 affixes.
        <br />
        At ilvls 51-70, there's an 80% chance of 3 affixes and a 20% chance of 4
        affixes.
        <br />
        At ilvls 71+, there's a 100% chance of 4 affixes.
      </div>

      <div className="text">
        When you Craft an item it loses all of its original Magical
        Prefixes/Suffixes. Creating a Crafted Item is just like the Imbue quest
        reward in that it takes the base item, and creates a new one with new
        properties.
      </div>

      <div className="text">
        The Level Requirement of crafted items will be higher than that of a
        rare item even if they have the same random prefixes/suffixes.
      </div>

      <div className="text">
        Crafted Items are pretty much a free shot of creating a Rare Item. You
        don't know if you'll get a "good" item since the bonuses are random but
        you do have a better chance than trying to find a Rare Item or Gambling
        for a Rare Item.
      </div>

      <div className="text">
        Because Crafted Items have fixed stats you have much more control over
        what magical bonuses will appear as opposed to finding or Gambling a
        Rare Item.
      </div>

      <div className="text">
        You can stack the "fixed" Magical Prefixes/Suffixes with regular Magical
        Prefixes/Suffixes that can appear on Rare Items to create bonuses that
        are much higher than would normally appear on a Rare Item. Note: this
        does not mean you will keep the Magical Bonuses on the item you place in
        the cube, this simply means that it's possible to combine the "fixed"
        Crafted Bonuses with normal Magic Prefixes and Suffixes.
      </div>

      <div className="text">
        To determine which pre- and suffixes can spawn on the Crafted Item the
        affix level has to be calculated. All pre- and suffixes with a level up
        to the calculated affix level can spawn on the Crafted Item.
      </div>

      <div className="text">
        The basis for the calculation of the affix level is the item level. The
        ilvl of a Crafted Item is equal to half the level of the crafting
        character (rounded down) plus half the ilvl of the input item (rounded
        down). Put another way:
      </div>

      <div className="text">
        <div className="bold-text">
          (1) ilvl = int(.5 * clvl) + int(.5 * ilvl)
        </div>
        The ilvl calculated in (1) has to undergo two checks and possible
        modifications. First, ilvl is capped at 99:
      </div>

      <div className="text">
        <div className="bold-text">(2) if ilvl {">"} 99 then ilvl = 99</div>
        Then qlvl and ilvl are compared. The higher number is used for further
        calculations:
      </div>

      <div className="text">
        <div className="bold-text">(3) if qlvl {">"} ilvl then ilvl = qlvl</div>
        The final step is to determine the affix level. If the ilvl is smaller
        than 99 – int(qlvl/2) then the affix level is ilvl – int(qlvl/2).
        Otherwise the affix level is ilvl*2 – 99:
      </div>

      <div className="text">
        <div className="bold-text">
          (4) if ilvl {"<"} (99 – int(qlvl/2)= then affix level = ilvl -
          int(qlvl/2) else affix level = ilvl * 2 - 99.
        </div>
        It's also worth noting that the ilvl, the quality and the properties of
        the jewel are completely irrelevant and don't affect the outcome at all.
      </div>

      <div className="text">
        <div className="bold-text">Example</div>
      </div>

      <div className="text">
        The Blood Weapon Recipe is used to craft a Berserker Axe (qlvl = 86)
        that was dropped by a monster in the Worldstone Tower in hell difficulty
        (ilvl = 85). The character used for crafting has level 78 (clvl = 78).
      </div>

      <div className="text">
        First, ilvl has to be calculated: ilvl = int(.5 * 78) + int(.5 * 85) =
        39 + 42 = 81.
      </div>

      <div className="text">
        Then it's checked if the calculated ilvl is higher than 99. This is not
        the case, so ilvl remains 81. But qlvl 86 is higher than ilvl 81, so the
        ilvl is set to 86.
      </div>

      <div className="text">
        Finally, the affix level can be determined: Since 86 is not smaller than
        (99 - int(86 / 2)) = 56 the affix level is ilvl * 2 - 99, in our example
        86 * 2 - 99 = 73.
      </div>

      <div className="text">
        So all pre- and suffixes with a level up to 73 can spawn on the Crafted
        Item.
      </div>

      <div className="text">
        <span className="bold-text">Note:</span> Since the qlvl of amulets is 1
        the term int(qlvl/2) is always 0, so the affix level is effectively
        determined by ilvl, so affix level = ilvl = int(.5 * clvl) + int(.5 *
        ilvl).
      </div>

      <div className="text">
        <div className="bold-text">Crafted Item Formulae</div>
        Place the listed Ingredients in the Horadric Cube and Transmute them.
        The ingredients must be exact, using the listed exact piece of Armor or
        Weapon.
      </div>

      <div className="text">
        Place the listed Ingredients in the Horadric Cube and Transmute them.
        The ingredients must be exact, using the listed exact piece of Armor or
        Weapon.
      </div>

      <div className="text">
        <ContentLink url="/items/crafted/hitpower" title="Hit Power Items" />
        <br />
        <ContentLink url="/items/crafted/blood" title="Blood Items" />
        <br />
        <ContentLink url="/items/crafted/caster" title="Caster Items" />
        <br />
        <ContentLink url="/crafted/safety" title="Safety Items" />
      </div>

      <div className="text">
        <div className="bold-text">The Crafted Recipe did not work</div>
        Make sure you use a Magic item, if it says Magic. Make sure you use the
        correct item type. If it's looking for a Belt, it's looking for the
        specific item "Belt" not any kind of Belt. It doesn't matter if the
        jewel is magic, rare, or even unique. They all work. If it doesn't work,
        you are probably doing something wrong. Make sure you have read all of
        the requirements.
      </div>

      <div className="text">
        Some Crafted Recipes were in the game for a time but have since been
        removed or changed.
      </div>
    </>
  );
}

export default CraftedItemsPage;
