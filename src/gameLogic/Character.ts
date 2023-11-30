export class Character {
  constructor(
    public name: string,
    public ArmorClass: number,
    public HealthPoints: number,
    public HitDice: number,
    public Speed: number,
    public Strength: Ability,
    public Dexterity: Ability,
    public Constitution: Ability,
    public Wisdom: Ability,
    public Intelligence: Ability,
    public Charisma: Ability,
    public Skills: Skills,
    public Inventory: InventoryItem[],
    public Alignment?: Alignment
  ) {}
}

export class PlayerCharacter extends Character {
  public level: number = 1;
  public class?: string;
}

export type Skill = {
  governingAbility: Ability;
  isProficient: boolean;
  hasExpertise: boolean;
};

export type Ability {
  score: number,
}

export class Skills {
  // Strength
  athletics: Skill = {
    governingAbility: Ability.Strength,
    isProficient: false,
    hasExpertise: false,
  };
  // Dexterity
  acrobatics: Skill = {
    governingAbility: Ability.Dexterity,
    isProficient: false,
    hasExpertise: false,
  };
  sleightOfHand: Skill = {
    governingAbility: Ability.Dexterity,
    isProficient: false,
    hasExpertise: false,
  };
  stealth: Skill = {
    governingAbility: Ability.Dexterity,
    isProficient: false,
    hasExpertise: false,
  };
  // Intelligence
  arcana: Skill = {
    governingAbility: Ability.Intelligence,
    isProficient: false,
    hasExpertise: false,
  };
  history: Skill = {
    governingAbility: Ability.Intelligence,
    isProficient: false,
    hasExpertise: false,
  };
  investigation: Skill = {
    governingAbility: Ability.Intelligence,
    isProficient: false,
    hasExpertise: false,
  };
  nature: Skill = {
    governingAbility: Ability.Intelligence,
    isProficient: false,
    hasExpertise: false,
  };
  religion: Skill = {
    governingAbility: Ability.Intelligence,
    isProficient: false,
    hasExpertise: false,
  };
  // wisdom
  animalHandling: Skill = {
    governingAbility: Ability.Wisdom,
    isProficient: false,
    hasExpertise: false,
  };
  insight: Skill = {
    governingAbility: Ability.Wisdom,
    isProficient: false,
    hasExpertise: false,
  };
  medicine: Skill = {
    governingAbility: Ability.Wisdom,
    isProficient: false,
    hasExpertise: false,
  };
  perception: Skill = {
    governingAbility: Ability.Wisdom,
    isProficient: false,
    hasExpertise: false,
  };
  survival: Skill = {
    governingAbility: Ability.Wisdom,
    isProficient: false,
    hasExpertise: false,
  };
  // Charisma
  deception: Skill = {
    governingAbility: Ability.Charisma,
    isProficient: false,
    hasExpertise: false,
  };
  intimidation: Skill = {
    governingAbility: Ability.Charisma,
    isProficient: false,
    hasExpertise: false,
  };
  performance: Skill = {
    governingAbility: Ability.Charisma,
    isProficient: false,
    hasExpertise: false,
  };
  persuasion: Skill = {
    governingAbility: Ability.Charisma,
    isProficient: false,
    hasExpertise: false,
  };
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
