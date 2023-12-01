export class Character {
  public Strength: Ability;
  public Dexterity: Ability;
  public Constitution: Ability;
  public Wisdom: Ability;
  public Intelligence: Ability;
  public Charisma: Ability;

  constructor(
    public name: string,
    public ArmorClass: number,
    public HealthPoints: number,
    public HitDice: number,
    public Speed: number,
    public Skills: Skills,
    public Inventory: InventoryItem[],
    public Alignment?: Alignment
  ) {
    this.Strength = new Ability(10);
    this.Dexterity = new Ability(10);
    this.Constitution = new Ability(10);
    this.Wisdom = new Ability(10);
    this.Intelligence = new Ability(10);
    this.Charisma = new Ability(10);
  }
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

export class Ability {
  constructor(public score: number) {}
}

export class Skills {
  constructor(private character: Character) {}
  get athletics(): Skill {
    return {
      governingAbility: this.character.Strength,
      isProficient: false,
      hasExpertise: false,
    };
  }
  // Dexterity
  get acrobatics(): Skill {
    return {
      governingAbility: this.character.Dexterity,
      isProficient: false,
      hasExpertise: false,
    };
  }
  get sleightOfHand(): Skill {
    return {
      governingAbility: this.character.Dexterity,
      isProficient: false,
      hasExpertise: false,
    };
  }
  get stealth(): Skill {
    return {
      governingAbility: this.character.Dexterity,
      isProficient: false,
      hasExpertise: false,
    };
  }
  // Intelligence
  get arcana(): Skill {
    return {
      governingAbility: this.character.Intelligence,
      isProficient: false,
      hasExpertise: false,
    };
  }
  get history(): Skill {
    return {
      governingAbility: this.character.Intelligence,
      isProficient: false,
      hasExpertise: false,
    };
  }
  get investigation(): Skill {
    return {
      governingAbility: this.character.Intelligence,
      isProficient: false,
      hasExpertise: false,
    };
  }
  get nature(): Skill {
    return {
      governingAbility: this.character.Intelligence,
      isProficient: false,
      hasExpertise: false,
    };
  }
  get religion(): Skill {
    return {
      governingAbility: this.character.Intelligence,
      isProficient: false,
      hasExpertise: false,
    };
  }
  // wisdom
  get animalHandling(): Skill {
    return {
      governingAbility: this.character.Wisdom,
      isProficient: false,
      hasExpertise: false,
    };
  }
  get insight(): Skill {
    return {
      governingAbility: this.character.Wisdom,
      isProficient: false,
      hasExpertise: false,
    };
  }
  get medicine(): Skill {
    return {
      governingAbility: this.character.Wisdom,
      isProficient: false,
      hasExpertise: false,
    };
  }
  get perception(): Skill {
    return {
      governingAbility: this.character.Wisdom,
      isProficient: false,
      hasExpertise: false,
    };
  }
  get survival(): Skill {
    return {
      governingAbility: this.character.Wisdom,
      isProficient: false,
      hasExpertise: false,
    };
  }
  // Charisma
  get deception(): Skill {
    return {
      governingAbility: this.character.Charisma,
      isProficient: false,
      hasExpertise: false,
    };
  }
  get intimidation(): Skill {
    return {
      governingAbility: this.character.Charisma,
      isProficient: false,
      hasExpertise: false,
    };
  }
  get performance(): Skill {
    return {
      governingAbility: this.character.Charisma,
      isProficient: false,
      hasExpertise: false,
    };
  }
  get persuasion(): Skill {
    return {
      governingAbility: this.character.Charisma,
      isProficient: false,
      hasExpertise: false,
    };
  }
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
