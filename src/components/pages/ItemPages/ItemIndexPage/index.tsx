import React from "react";
import ColorText from "../../../components/ColorText";
import ContentLink from "../../../components/ContentLink";
import Title from "../../../components/Title";

function ItemIndexPage() {
  return (
    <>
      <Title title="ITEMS" />

      <div className="text">
        As you journey through the lands of Sanctuary you will come across
        numerous items that can help you accomplish your goals.
      </div>

      <div className="text">
        <div className="bold-text">Item Basics</div>
        Learn about [<ContentLink title="Potions" url="/items/potions" />
        ].
      </div>

      <div className="text">
        <div className="bold-text">Potions</div>
        Learn about [
        <ContentLink title="Basic Item Information" url="/items/basics" />
        ].
      </div>

      <div className="text">
        <div className="bold-text">Rings and Amulets</div>
        Learn about [
        <ContentLink title="Weapons and Armor" url="/items/weaponsandarmor" />]
        available in the game.
      </div>

      <div className="text">
        <div className="bold-text">
          Socketed Items <span className="text">(Gems, Jewels, Runes)</span>
        </div>
      </div>

      <div className="inner-text">
        <div className="text">
          Learn more about [
          <ContentLink title="Socketed items" url="/items/socketeditems" />
          ].
        </div>

        <div className="text">
          <div className="bold-text">Gems</div>
          Precious gems embody innate magical abilities. When set into a
          socketed item these gems can add powerful magic effects. [
          <ContentLink
            title="Learn more
          about Gems"
            url="/items/gems"
          />
          .]
        </div>

        <div className="text">
          <div className="bold-text">Jewels</div>
          Jewels are similar to Gems, except that instead of having
          predetermined magical abilities like a Gem, each Jewel possesses
          random magic properties, allowing you to bestow a wide variety of
          magical abilities to your Socketed Item. [
          <ContentLink title="Learn more about Jewels" url="/items/jewels" />
          .]
        </div>

        <div className="text">
          <div className="bold-text">Runes</div>
          Runes are small stones inscribed with magical glyphs that can be
          inserted into Socketed Items. Runes are different from other
          Insertable Items: not only do individual Runes have magical
          properties, certain combinations (or Rune Sets), when inserted into an
          item in the proper order, give that item even more wondrous abilities.
          [Learn more about <ContentLink
            title="Runes"
            url="/items/runes"
          /> and <ContentLink title="Rune Words" url="/items/runewords" />
          .]
        </div>
      </div>

      <div className="text">
        <div className="bold-text">
          Magic, Rare, Crafted, Set, and Unique Items
        </div>
        The names of Magic, Rare, Crafted/Very Rare, Set, and Unique Items
        appear in <ColorText text="Violet" color="#4850b8" />,{" "}
        <ColorText text="Yellow" color="yellow" />,{" "}
        <ColorText text="Orange" color="orange" />,{" "}
        <ColorText text="Green" color="#00c400" />, and{" "}
        <ColorText text="Gold" color="#908858" /> text, respectively.
      </div>

      <div className="inner-text">
        <div className="text">
          <div className="bold-text">
            <ColorText text="Magic Items" color="#4850b8" />
          </div>
          As Hell's will has corrupted the land, mages and smiths crafted many
          magical means to keep the people safe from harm. Fine jewelry, armor,
          and weapons were often enchanted with arcane energies in an effort to
          assist those who battled against the tide of evil. During your travels
          you will likely encounter items imbued with these magics, whose names
          appear in blue when highlighted. Magic Items have one or two magical
          attributes applied to the basic item. Learn more about [
          <ContentLink title="Magic Items" url="/items/magic" />
          ]. Take a look at Magic [
          <ContentLink title="Prefixes and Suffixes" url="/items/magic/index" />
          ].
        </div>

        <div className="text">
          <div className="bold-text">
            <ColorText text="Rare Items" color="yellow" />
          </div>
          Some magic items radiate energy beyond that of a simple enchanted
          item. Although much less common, these rare items are significantly
          more powerful than standard magically enhanced items. A Rare item is
          distinguished by a yellow title when highlighted. Rare items contain
          two to six magic properties and are highly valued by those that have
          them. The names of rare items are not linked to their magical
          attributes. Learn more about [
          <ContentLink title="Rare Items" url="/items/magic" />
          ].
        </div>

        <div className="text">
          <div className="bold-text">
            <ColorText text="Crafted Items" color="orange" />
          </div>
          Crafted Items are similar to rare items but can only be created using
          the Horadric Cube. These items have fixed properties as well as random
          Magic Prefixes and Suffixes. [
          <ContentLink
            title="Learn more about Crafted Items"
            url="/items/crafteditems"
          />
          .]
        </div>

        <div className="text">
          <div className="bold-text">
            <ColorText text="Set Items" color="#00c400" />
          </div>
          Rumors persist of unique, distinguished item sets that once belonged
          to great champions and heroes from the past. These sets are said to
          bestow additional magic abilities once all its pieces have been found
          and equipped. Set items are recognizable by their green names. Once
          identified, each set item names the other pieces required to complete
          the set. Set Items are uniquely named and have several magic
          attributes. When a character is equipped with all the items of a Set,
          additional bonus magic attributes are added as well. When a set item
          is selected items in the entire set are listed, and the ones in the
          set you have in your possession are highlighted. See a list of [
          <ContentLink title="Set Items" url="/items/sets" />
          ].
        </div>

        <div className="text">
          <div className="bold-text">
            <ColorText text="Unique Items" color="#908858" />
          </div>
          Once in a long while, a dedicated and intrepid adventurer may come
          across an item of particularly legendary and unique power. Unique
          Items have unique names and attributes. Unique Items are more rare
          than Rare or Set Items. See some [
          <ContentLink title="Unique Items" url="/items/uniques" />
          ].
        </div>

        <div className="text">
          <span className="bold-text">Note:</span> Magical attributes are
          typically listed along with any regular and superior attributes an
          item may have. This may result in a list of what appears to be more
          than the limits described above for magical attributes of an item type
          (magic, rare, set or unique).
        </div>
      </div>

      <div className="text">
        <div className="bold-text">Charms</div>
        Charms are special magic items that grant magical enhancements without
        needing to be equipped to do so. Charms provide their abilities simply
        by being in the "Backpack" section of your character's Inventory. They
        do not function if placed inside your character's Stash or inside a
        Horadric Cube (even if that Horadric Cube is located in your hero's
        Backpack). Charms come in three sizes: Small, Medium, Large. [
        <ContentLink
          title="Learn more
        about Charms"
          url="/items/charms"
        />
        .]
      </div>

      <div className="text">
        <div className="bold-text">The Horadric Cube</div>
        More than just a Quest Item, the Horadric Cube can be used for several
        things. [
        <ContentLink
          title="Learn more about The Horadric Cube"
          url="/items/cube"
        />
        .]
      </div>
    </>
  );
}

export default ItemIndexPage;
