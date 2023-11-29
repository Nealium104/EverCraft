export class Character {
  constructor(
    public name: string,
    public ArmorClass: number,
    public HealthPoints: number,
    public HitDice: number,
    public Speed: number,
    public Strength: number,
    public Dexterity: number,
    public Constitution: number,
    public Wisdom: number,
    public Intelligence: number,
    public Charisma: number,
    public Skills: Skills,
    public Inventory: InventoryItem[],
    public Alignment?: Alignment
  ) {}
}

export class PlayerCharacter extends Character {
  public level: number = 1;
  public class?: string;
}

export type SkillProfAndExp = {
  isProficient: boolean;
  hasExpertise: boolean;
};

export type SkillProficiencies = {
  athletics: SkillProfAndExp;
  acrobatics: SkillProfAndExp;
  sleightOfHand: SkillProfAndExp;
  stealth: SkillProfAndExp;
  arcana: SkillProfAndExp;
  history: SkillProfAndExp;
  investigation: SkillProfAndExp;
  nature: SkillProfAndExp;
  religion: SkillProfAndExp;
  animalHandling: SkillProfAndExp;
  insight: SkillProfAndExp;
  medicine: SkillProfAndExp;
  perception: SkillProfAndExp;
  survival: SkillProfAndExp;
  deception: SkillProfAndExp;
  intimidation: SkillProfAndExp;
  performance: SkillProfAndExp;
  persuasion: SkillProfAndExp;
};

export class Skills {
  // Stregnth
  athletics: number = 10;
  // Dexterity
  acrobatics: number = 10;
  sleightOfHand: number = 10;
  stealth: number = 10;
  // Intelligence
  arcana: number = 10;
  history: number = 10;
  investigation: number = 10;
  nature: number = 10;
  religion: number = 10;
  // wisdom
  animalHandling: number = 10;
  insight: number = 10;
  medicine: number = 10;
  perception: number = 10;
  survival: number = 10;
  // Charisma
  deception: number = 10;
  intimidation: number = 10;
  performance: number = 10;
  persuasion: number = 10;
}

export enum Alignment {
  LawfulGood = "Lawful Good",
  NeutralGood = "Neutral Good",
  ChaoticGood = "Chaotic Good",
  LawfulNeutral = "Lawful Neutral",
  TrueNeutral = "True Neutral",
  ChaoticNeutral = "Chaotic Neutral",
  LawfulEvil = "Lawful Evil",
  NeutralEvil = "Neutral Evil",
  ChaoticEvil = "Chaotic Evil",
}

export interface Item {
  name: string;
  description: string;
  weight: number;
}

export interface Weapon extends Item {
  damage: string;
  weaponType: string;
}

export interface InventoryItem {
  item: Item;
  quantity: number;
}
