import React from "react";
import ContentLink from "../../../components/ContentLink";
import HeaderAndLayout from "../../../components/HeaderAndLayout";
import PageNavigation from "../../../components/PageNavigation";
import Title from "../../../components/Title";

function ItemBasicPage() {
  return (
    <>
      <Title title="BASIC ITEM INFORMATION" />

      <PageNavigation
        links={[
          { url: "#durability", title: "Durability" },
          { url: "#ethereal", title: "Ethereal" },
          { url: "#superior", title: "Superior Armor and Weapons " },
          { url: "#chargeditems", title: "Charged Items" },
          { url: "#range", title: "Melee Range" },
          { url: "#qlevel", title: "Quality Level" },
        ]}
      />

      <div className="text">
        <div className="bold-text">Item Management</div>
        Diablo II requires intense item management. You will have to decide what
        to pick up to take back to sell to the vendors. It's up to you to figure
        out which items are worth more than others. Keep in mind that non
        magical items can still be worth a lot of money, especially Wands,
        Staves, Scepters and Armor. Do some experimentation and create lists of
        valuable items so you will learn which items to pick up. You can pick up
        every item you find and sell it but it will take much longer to clear
        areas. However you do it, it's up to you.
      </div>

      <div className="text">
        <div className="bold-text">Emergency Item Space</div>
        If you have run out of room in your Backpack, Stash or Horadric Cube,
        you can squeeze one more 4x2 slot by picking up an item, and leaving it
        on your mouse pointer. You can exit the game and join another, or just
        quit the game. The next time you play your character the item will still
        be on your mouse pointer.
      </div>

      <div className="text">
        You should not try this if you use an Iron Golem, as it might cause some
        problems.
      </div>

      <div className="text">
        <div className="bold-text">Stackable Items</div>
        Some items can be stacked to fit, one on top of the other, in the same
        inventory slot. Examples include: keys, and all items that can be thrown
        or shot by a bow - arrows, bolts, throwing knives, javelins, exploding
        potions, poison potions and such. Stackable items have as part of their
        property description a quantity (even if the quantity is 1) when
        highlighted. As you use the item, this number decreases until you have
        exhausted the stack.
      </div>

      <div className="text">
        You may consolidate stackable items of the same type, like quivers of
        arrows, by picking up one stack and dropping it onto another stack. The
        quantities in both stacks are added together to form a new stack. If the
        resulting stack would exceed the maximum allowable number of stacked
        items in a slot, any extras will form a separate stack. You cannot
        un-stack items once they have been stacked. Note that only items that
        are exactly alike may be stacked. When using ranged weapons, an icon of
        "crossed arrows" appears on the Play Area whenever your quiver is
        running low on ammunition.
      </div>

      <div className="text">
        <div className="bold-text">
          What is the general order of rarity of items?
        </div>
        From least rare, to most rare: Low Quality Items, Normal Items, High
        Quality Items, Magic Items, Rare Items, Set Items, Unique Items.
      </div>

      <div className="text">
        Lower Quality items start out being most common but ramp to less common
        than High Quality depending on the Monster Level (if dropped by a
        monster) or the Dungeon (Area) Level (if spawned from a chest).
      </div>

      <div className="text">
        <div className="bold-text">
          Items and Gold Disappear after time when left on the ground
        </div>
        Don't leave items or gold lying on the ground any longer than necessary,
        especially when transferring in town ("muling") as they disappear after
        a certain amount of time:
      </div>

      <ul>
        <li>
          10 minutes: Key, Potion, Scroll, Tome, and Ammo (Arrows, Bolts).
        </li>
        <li>
          10 minutes: Any Armor and Weapon of quality &lt; magic, regardless if
          flagged as ''Ethereal'', ''Socketed'' or not, and Rune Words.
        </li>
        <li>
          10 minutes: Pandemonium artifacts (Key of Terror/Hate/Destruction,
          Mephisto's Brain, Diablo's Horn, Baal's Eye).
        </li>
        <li>
          10 minutes: Essence (4 flavours) and Token of Absolution (these are
          new items from Patch 1.13x).
        </li>
        <li>20 minutes: Magic Items, Gems and Runes.</li>
      </ul>

      <div className="text">
        Picking an item onto your cursor and dropping it again resets the timer.
      </div>

      <div className="text">
        <div id="durability" className="bold-text">
          Durability
        </div>
        The rigors of battle inflict great wear and tear on a hero's equipment,
        eventually rendering the equipment unusable. Items subject to wear show
        a numeric Durability rating in their description, when highlighted. The
        first number indicates the current Durability of the item while the
        second number represents the item's total Durability. When an item's
        Durability is low, a silhouette appears in the upper right corner of the
        Play Area. Items with low Durability will appear in yellow. A red item
        has 0 Durability and cannot be used or re-equipped until repaired. A
        blacksmith can repair items restoring them to their original condition.
        Repairing magically enhanced items can be expensive, but often is worth
        the gold.
      </div>

      <div className="text">
        An NPC in town will repair your weapons and armor for a price. By
        repairing your items each time you visit town you will reduce the danger
        of having your weapons and armor becoming worn out during battle.
      </div>

      <div className="text">
        Items can be repaired partially if and only if you have gold on your
        person AND the item is not broken (0 Durability). Broken items must be
        repaired fully.
      </div>

      <div className="text">Durability is capped at 333.</div>

      <div className="text">
        <div id="ethereal" className="bold-text">
          Ethereal
        </div>
        Most types of armor or weapon, even one with magical properties, can be
        Ethereal. Bows and Crossbows cannot be Ethereal. These items appear
        translucent in the Inventory, and when equipped, they appear translucent
        on the character wielding them. Their ethereal nature gives them an
        improved fundamental ability. However, they have decreased Durability
        and cannot be repaired.
      </div>

      <div className="text">
        - Weapons: +50% base damage. <br />- Armor: +50% base defense
      </div>

      <ul>
        <li>
          You can place Zod Runes (Indestructible) in some Ethereal Items to
          prevent them from being destroyed.
        </li>
        <li>
          Ethereal items lose durability at a slower rate than normal items.
        </li>
        <li>
          The durability for Ethereal items is calculated as follows: (Normal
          durability divided by 2) + 1. Example: An Ethereal Giant Conch will
          have (30/2)+1 = 15+1 = 16 durability, provided it is not a failed Set
          or Failed Unique.
        </li>
        <li>
          Ethereal items spawn with full durability (albeit reduced maximum
          durability).
        </li>
        <li>
          Durability (maximum durability) values observed ingame agree with the
          following empirical formulae, Ethereal non-magic, magic, rare, or
          unique item: Durability = [normal durability / 2] + 1 Ethereal unique
          item with +durability (dur) as a magic property: Durability = [normal
          durability / 2] + 1 + dur Ethereal Superior item with 'Increase
          Maximum Durability X%' (X = dur%, 10 to 15): Durability = [[normal
          durability / 2] * (100 + dur%)/100] + 1
          <div className="text">
            Upgrading ethereal rare or unique items (using the proper Horadric
            Cube recipes) forces maximum durability to equal the normal maximum
            durability of the base item. Example: Ethereal Hone Sundan will have
            15 maximum durability as a Yari, but 28 maximum durability as a
            Ghost Spear (upgraded). The +durability magic property of the unique
            items that have it carries over. Example: Ethereal Duriel's Shell
            (+100 durability) will have 126 maximum durability as a Cuirass, but
            150 maximum durability as a Great Hauberk (upgraded).
          </div>
          <div className="text">
            Failed Set (double durability magic) and Failed Unique (triple
            durability rare) items spawn with twice and thrice the normal
            durability, respectively, hence:
          </div>
          <div className="text">
            Ethereal Failed Set: normal durability + 1 Ethereal Failed Unique:
            [normal durability * 3/2] + 1
          </div>
          <div className="text">
            Note: '[]' denotes rounding down (calculations are done with
            integers, there are no fractions at any step).
          </div>
          <div className="text"></div>
        </li>
        <li>Broken Ethereal Items sell for 1 Gold.</li>
        <li>
          Items that spawn as indestructible can not be ethereal at the same
          time. Hence, most elite unique items that are indestructable will
          never become ethereal.
        </li>
        <li>
          After being sold to a merchant, Ethereal items don't appear in the
          merchant's trade screen.
        </li>
        <li>
          Armor strength requirements are lowered by 10, and weapon
          strength/dexterity requirement is lowered by 10, when they are
          Ethereal.
        </li>
        <li>Ethereal Items do not lose Durability on Hirelings.</li>
        <li>
          Magic, Rare, and Unique Items can be Ethereal but Imbuing will not
          make a non-Ethereal item become Ethereal.
        </li>
        <li>
          Ethereal items CAN be Imbued, and still be Ethereal after the imbue.
        </li>
      </ul>

      <div className="text">
        <div className="bold-text">
          What are Low Quality, Cracked, Crude, Damaged items?
        </div>
        All of these items have a lower Maximum Durability than normal, except
        bows which are still indestructible. Weapons of this type have lower
        damage than their normal counterparts. Armor of this type has unusually
        low Defense, often going below the minimum Defense for that piece of
        armor.
      </div>

      <div className="text">
        Any low (Low Quality, Cracked, Crude, Damaged) Armor appears to have 75%
        of the normal defense (don't forget that normal defense varies), rounded
        down, and low Weapons do 75% of their normal damage (mindam, maxdam),
        rounded down. Minimum damage is modified to 1 if it would be {"<"} 1
        (e.g. a low Javelin has One-Hand Damage: 1 to 3 rather than the normal
        One-Hand Damage: 1 to 5). Both Any Armor and Weapons have their maximum
        durability degraded to [(normal durability - 1)/3], i.e. roughly 33%.
      </div>

      <div className="text">
        Low items cannot be ethereal and they cannot spawn with sockets. You
        can, however, add sockets to a low item using the reward from the first
        quest of Act 5 (Siege on Harrogath).
      </div>

      <div className="text">
        <div id="superior" className="bold-text">
          Superior Armor and Weapons
        </div>
        Superior items have improved Defense, Durability, Attack Rating, or
        enhanced Damage. More precisely:
      </div>

      <div className="inner-text">
        <div className="text">
          Any Superior Armor (Helm, Armor, Any Shield, Gloves, Belt, Boots){" "}
          <br />
          +5% to +15% Enhanced Defense <br />
          Increase Maximum Durability 10% to 15%
        </div>

        <div className="text">or both properties combined.</div>

        <div className="text">
          [Superior Weapons] <br />
          +5% to +15% Enhanced Damage (or +1 to Maximum Damage, see below){" "}
          <br />
          Increase Maximum Durability 10% to 15% <br />
          +1 to +3 to Attack Rating
        </div>

        <div className="text">
          or any two of those properties together. Note: it is impossible to
          have all three properties spawn together. Furthermore, increased
          durability will never display on Bows, Crossbows, and Phase Blade, as
          they are default indestructible, nor on Combo Weapons (Javelins,
          Throwing Weapons), as they display only quantity (they have hidden
          durability). If +5% to +15% Enhanced Damage does not increase weapon's
          base damage by at least 1 (Short Bow for instance), the bonus displays
          as '+1 to Maximum Damage' instead. In the case of Combo Weapons,
          One-Hand Damage is considered, whereas Two-Hand Damage is considered
          on two-handed swords.
        </div>
        <div className="text">
          Superior items can be ethereal, except if the base item is
          indestructible, and they may spawn with sockets if the base item can
          have sockets.
        </div>

        <div className="text">
          The Defense of Any Superior Armor spawned with +% Enhanced Defense
          (ac%) is calculated as follows,
        </div>

        <div className="text">
          Superior NOT Ethereal: Defense = [(maxac + 1) * (100 + ac%)/100]{" "}
          <br />
          Superior AND Ethereal: Defense = [[(maxac + 1) * 3/2] * (100 +
          ac%)/100]
        </div>

        <div className="text">
          where 'maxac' denotes the maximum base defense.
        </div>

        <div className="text">
          Notes <br />
          - '[]' denotes rounding down (calculations are done with integers,
          there are no fractions at any step). <br />- The above item defense
          formulae are valid for Any Armor spawned with +% Enhanced Defense and
          not just Superior with +% Enhanced Defense.
        </div>
      </div>

      <div className="text">
        <div className="bold-text">Circlets</div>
        Circlets are Helms that contain Magical Prefixes and Suffixes that you
        would not normally get in a helmet. They may also allow you to wear a
        hat without it showing on your character which will allow say an Amazon
        to play with her hair showing. Circlets typically have less Defense than
        regular Helms.
      </div>

      <div className="text">
        <div className="bold-text">Class-specific Items</div>
        There are specific items that are only usable by their intended class,
        possessing special abilities only pertinent to that class. Be sure to
        pay close attention to the requirements of each item as listed in its
        pop-up description to see if an item is class specific.
      </div>

      <div className="text">
        <div id="chargeditems" className="bold-text">
          Charged Items
        </div>
        Some new magic items grant the use of certain skills to any character.
        Some of these items have skills that are only triggered under certain
        conditions, such as striking an enemy or being struck by one. Charged
        Items allow the wielder to use the skill at will, but only a limited
        number of times. To engage the skill granted by a Charged Item,
        left-click your right mouse button Skill Selection (or press the S key).
        The Charged Item skill is listed near the top of your list of available
        skills; left-click on its icon to select it. The skill can now be
        performed by right-clicking on a target. Charged Item skills have a
        limited number of uses, so be sure to check the item's pop-up
        description or the lower right-hand corner of the skill icon to see how
        many charges remain. If any of an item's charges are depleted, you can
        return to a nearby town and recharge the item by having the local
        Blacksmith repair it.
      </div>

      <div className="text">
        There are a few related{" "}
        <ContentLink url="/items/cube" title="Cube recipes" />.
      </div>

      <div className="text">
        <div className="bold-text">Weapon Speeds vs Classes</div>
        Certain weapons are more effective in certain character classes' hands.
        The listed speed ('slow,'very fast,' etc.) is relative to other weapons
        for that specific character. Weapon Speed descriptions, as well as their
        actual swing rate, can change for a weapon when wielded by two different
        character classes. The listed speeds ('slow, 'very fast,' etc.) further
        describe a range of speeds; a 'fast' dagger might be slightly slower
        than a 'fast' mace, but both will be faster than a 'normal' club.
      </div>

      <div className="text">
        When numbers are listed for Weapon Speeds such as [0], [-20], [20], the
        higher the number is, the slower the Weapon Speed. So, [20] is the
        slowest of the three Weapon Speeds.
      </div>

      <div className="text">
        <div className="bold-text">
          If I have a 'very fast' sword, and I equip a magic item that Increases
          Attack Speed, will it be even faster?
        </div>
        The answer to this is yes as well, however at some point the speed maxes
        out, and they cease to get faster.
      </div>

      <div className="text">
        <div className="bold-text">
          Is there any way to tell when you have reached your maximum Weapon
          Speed?
        </div>
        No, there is no easy way to tell when you reach the limit. You can get
        faster than "very fast". (Try the Barbarian Frenzy skill to see just how
        fast you can get.) It would be very hard to reach the limit, you can
        almost always get faster. All weapon types probably peak at the same
        speed, so the fastest possible Polearm weapon swing would probably be
        just as fast as the fastest possible one-hand sword swing.
      </div>

      <div className="text">
        <div className="bold-text">
          How is extra damage calculated in magic weapons that get a certain
          amount of extra damage from a suffix as well as from a certain
          percentage of extra damage from a prefix: King's will give up to 200%
          extra damage and Slaughter will give up to 20 damage to maximum, so on
          a sword with normally maximum 80 damage will this give 200% over 80
          and then add 20 damage?
        </div>
        Yes. In this case, first we apply the percentage, then the addition.
        This calculation can become very, very complex when factoring in
        shrines, auras, etc.
      </div>

      <div className="text">
        <div className="bold-text">Weapon Damage</div>
        Damage vs Undead and Damage vs Demons do not display on the Character
        Screen. You must calculate them separately.
      </div>

      <div className="text">
        <div id="range" className="bold-text">
          Melee Range
        </div>
        For players, range = rangeadder + size, where rangeadder is a
        weapon-specific constant and size refers to the target. The weapon pages
        list the rangeadder for each weapon. Monsters are either size 1, 2 or 3
        (most are size 2 or 3).
      </div>

      <div className="text">
        <div id="qlevel" className="bold-text">
          Quality Level
        </div>
        Quality Level - Qlvl is an integer given to all items. This integer is
        primarily used for separating items into groups known as "Treasure
        Classes". It is also used in the formula that determines the affix level
        of an item. The determination of an item drop will also use this number
        to verify if the drop is successful.
      </div>

      <div className="text">
        <div className="bold-text">
          Does the tendency to drop an item vary from Monster to Monster?
        </div>
        No, however Unique Monsters and Bosses have a better chance to drop
        Magic Items. Champions will either drop Magic Items, Gold, or Gems.
        Otherwise, the type of monster doesn't matter.
      </div>

      <div className="text">
        <div className="bold-text">
          Does your Character Level figure into what items are dropped?
        </div>
        No. The items get better as Monster Levels and Dungeon Levels rise.
      </div>

      <div className="text">
        <div className="bold-text">
          Is there a better chance to find magic items in locked chests?
        </div>
        No. But they are usually double drops.
      </div>

      <div className="text">
        <div className="bold-text">
          Transferring Items between Characters{" "}
          <span>(Realm and Open Characters)</span>
        </div>
        You can transfer items between characters by having a friend stay in the
        game to keep the game open while you transfer characters.
      </div>

      <div className="text">
        For Realm Characters, you can also create a passworded game on
        Battle.net and not tell anyone what that password is. If you stay in the
        game for 5 minutes, it will be placed on a delayed expiration list. So
        when you leave the game and there are no longer any players in the game,
        it will still stay up for a while. If you're fast enough (it doesn't
        have to be too fast), you can drop items in town, quit, switch
        characters, rejoin your same passworded game, and pick them up with your
        other character. However be warned this method of transferring items can
        be risky. If you're unable to rejoin your game in time, you will lose
        all the items you dropped.
      </div>

      <div className="text">
        You cannot transfer items between single player characters.
      </div>

      <div className="text">
        <div className="bold-text">
          What is Blizzard's policy on transferring items between characters or
          "muling"?
        </div>
        The transferring of items between Diablo II characters is not supported
        by Blizzard. Users should be warned that attempts to transfer items
        between characters online are risky and Blizzard is not responsible for
        lost items. Storage space is limited in Diablo II both for performance
        and storage space issues and because the designers wanted players to
        make decisions as to which items to keep and which items must be thrown
        away or sold.
      </div>

      <div className="text">
        <div className="bold-text">Finding Good Items</div>
        Here are some tricks to use to get "good" items meaning more Rare, Set
        and Unique Items. You can trade the good items you find that are not
        useful to yourself for other items that you can use.
      </div>

      <div className="text">
        <ul>
          <li>
            <span className="bold-text">Get lots of Magic Find</span>. For more
            information{" "}
            <ContentLink title="go here" url="/items/magic/magicfind" />.
          </li>
          <li>
            <span className="bold-text">
              Open up all Chests, Rocks, Barrels, etc.
            </span>
            . Chests and other similar items have increased chances for drops.
            Combined with a good Magic Find % you can have a pretty good chance
            of getting a good item from a chest. There are also certain areas
            where chests are more common. Carry keys (except Assassins) so that
            you can open locked chests as well. You can carry some keys in your
            Horadric Cube. If you carry keys in the Horadric Cube they won't
            work so you have to take them out of the cube to use them.
          </li>
          <li>
            <span className="bold-text">
              Repeatedly Kill Champion and Unique Monsters.
            </span>{" "}
            Always kill these (if possible). They have a much better chance for
            good drops. You can even go to areas where they are more common or
            where they are easier to kill.
          </li>
          <li>
            <span className="bold-text">Kill more Monsters.</span> Generally the
            more monsters you kill within a general amount of time, the more
            drops you get and the more chances you have to get something good.
            This is why areas like the Flayer Jungle are popular. You may wish
            to find areas where you can kill a lot of monsters at once.
          </li>
          <li>
            <span className="bold-text">
              Activate Monster Shrines or Evil Urns.
            </span>{" "}
            This will create Unique Monsters or Champions that you can kill for
            better loot.
          </li>
        </ul>
      </div>
    </>
  );
}

export default ItemBasicPage;
