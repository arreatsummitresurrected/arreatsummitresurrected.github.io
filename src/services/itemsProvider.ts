const items: Items = require("./../data/items.json");

export interface Items {
  normal: ItemsDifficulty;
  exceptional: ItemsDifficulty;
  elite: ItemsDifficulty;
}

export interface ItemsDifficulty {
  armor: Armor;
  weapons: Weapons;
  "class-specific-armors": ClassSpecificArmors;
  "class-specific-weapons": ClassSpecificWeapons;
}

export interface Armor {
  helms: ItemType;
  armor: ItemType;
  shields: ItemType;
  gloves: ItemType;
  boots: ItemType;
  belts: ItemType;
}

export interface Weapons {
  axes: ItemType;
  bows: ItemType;
  crossbows: ItemType;
  daggers: ItemType;
  javelins: ItemType;
  maces: ItemType;
  polearms: ItemType;
  scepters: ItemType;
  spears: ItemType;
  staves: ItemType;
  swords: ItemType;
  throwings: ItemType;
  wands: ItemType;
}

export interface ClassSpecificArmors {
  "barbarian-helms": ItemType;
  "druid-pelts": ItemType;
  "paladin-shields": ItemType;
  "necromancer-shrunken-heads": ItemType;
}

export interface ClassSpecificWeapons {
  "amazon-weapons": ItemType;
  "assassin-katars": ItemType;
  "sorceress-orbs": ItemType;
}

export interface ItemType {
  items: [{ [key: string]: string }];
}
export default items;
