import React from "react";
import ContentLink from "../../../components/ContentLink";
import Title from "../../../components/Title";
import "./CharmsPage.scss";

function CharmsPage() {
  return (
    <>
      <Title title="Charms" />
      <div className="text">
        Charms are special magic items that grant magical enhancements without
        needing to be equipped to do so. Charms provide their abilities simply
        by being in the "Backpack" section of your character's Inventory. They
        do not function if placed inside your character's Stash or inside a
        Horadric Cube (even if that Horadric Cube is located in your hero's
        Backpack). Charms come in three sizes: Small, Medium, Large.
      </div>

      <div className="text">
        Charms can only be Magic or{" "}
        <ContentLink title="Unique" url="/items/normal/ucharms" />. There are no
        Rare, Set, or Crafted Charms.
      </div>

      <div className="text">
        Smaller is actually better as far as Charms are concerned, however, some
        Magic Prefixes and Suffixes are only available on the larger Charms.
      </div>

      <div className="text">
        When using Charms you can really dig yourself into a hole where you
        cannot pick up any more items. It's best to pick only the best Charms to
        keep and throw the rest away. As you find better Charms, get rid of
        older ones. Try to keep some space to pick up one or two large items. If
        you want to totally fill your inventory with Charms you certainly can.
        It's up to you. Just don't be surprised when other party members pick up
        good equipment dropped by monsters because you don't have enough room in
        your Backpack to pick them up!
      </div>

      <div className="text">
        Store Life or Resistance Charms in your Stash and equip them before
        facing a tough boss.
      </div>

      <div className="text">
        The artwork for Charms is not tied to their stats. You will receive a
        Charm that will look like one of these:
      </div>

      <div className="text">
        <div className="bold-text">
          Small Charms [
          <ContentLink
            title="Magic Prefixes and Suffixes"
            url="/items/magic/smallcharms"
          />
          ]
        </div>
      </div>

      <img
        className="small-charm"
        src="/images/charms/small_charm1.png"
        alt="Small Charm"
      />
      <img
        className="small-charm"
        src="/images/charms/small_charm2.png"
        alt="Small Charm"
      />
      <img
        className="small-charm"
        src="/images/charms/small_charm3.png"
        alt="Small Charm"
      />

      <div className="text">
        <div className="bold-text">
          Medium Charms <span className="text">(Large Charms)</span> [
          <ContentLink
            title="Magic Prefixes and Suffixes"
            url="/items/magic/mediumcharms"
          />
          ]
        </div>
      </div>

      <img
        className="medium-charm"
        src="/images/charms/medium_charm1.png"
        alt="Medium Charm"
      />
      <img
        className="medium-charm"
        src="/images/charms/medium_charm2.png"
        alt="Medium Charm"
      />
      <img
        className="medium-charm"
        src="/images/charms/medium_charm3.png"
        alt="Medium Charm"
      />

      <div className="text">
        <div className="bold-text">
          Large Charms <span className="text">(Grand Charms)</span> [
          <ContentLink
            title="Magic Prefixes and Suffixes"
            url="/items/magic/largecharms"
          />
          ]
        </div>
      </div>

      <img
        className="large-charm"
        src="/images/charms/large_charm1.png"
        alt="Small Charm"
      />
      <img
        className="large-charm"
        src="/images/charms/large_charm2.png"
        alt="Small Charm"
      />
      <img
        className="large-charm"
        src="/images/charms/large_charm3.png"
        alt="Small Charm"
      />
    </>
  );
}

export default CharmsPage;
