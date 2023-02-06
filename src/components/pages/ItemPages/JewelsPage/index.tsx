import React from "react";
import ContentLink from "../../../components/ContentLink";
import Title from "../../../components/Title";
import "./JewelsPage.scss";

function JewelsPage() {
  return (
    <>
      <Title title="JEWELS" />

      <div className="text">
        Jewels are similar to Gems, except that instead of having predetermined
        magical abilities like a Gem, each Jewel possesses random magic
        properties, allowing you to bestow a wide variety of magical abilities
        to your Socketed Item. Rare Jewels can have up to four magical
        properties. Before inserting a Jewel, its magical properties must be
        "identified" either by the use of a Scroll of Identify, or by a wise
        sage who can provide such a service.
      </div>

      <div className="text">
        ewels can be Magic, Rare, or Unique, but there are no Set Jewels.
      </div>

      <div className="text">
        Jewels can be used in{" "}
        <ContentLink title="Horadric Cube Formulae" url="/items/cube" /> so hang
        on to each Jewel you find.
      </div>

      <div className="text">
        Check out the available{" "}
        <ContentLink
          title="Jewel Magic Prefixes and Suffixes"
          url="/items/magic/jewels"
        />
        .
      </div>

      <div className="text">
        The artwork for Jewels is not tied to their stats. You will receive a
        Jewel that will look like one of these:
      </div>

      <img
        src="/images/jewels/jewel1.png"
        alt="Jewel"
        className="jewel-image"
      />
      <img
        src="/images/jewels/jewel2.png"
        alt="Jewel"
        className="jewel-image"
      />
      <img
        src="/images/jewels/jewel3.png"
        alt="Jewel"
        className="jewel-image"
      />
      <img
        src="/images/jewels/jewel4.png"
        alt="Jewel"
        className="jewel-image"
      />
      <img
        src="/images/jewels/jewel5.png"
        alt="Jewel"
        className="jewel-image"
      />
      <img
        src="/images/jewels/jewel6.png"
        alt="Jewel"
        className="jewel-image"
      />
    </>
  );
}

export default JewelsPage;
