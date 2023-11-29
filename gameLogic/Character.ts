class Character {
  constructor(
    public name: string,
    public level: number,
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
    public Alignment?: Alignment
  ) {}
}

enum Alignment {
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

class Skills {
  Athletics: number;
  Acrobatics: number;
  SleightOfHand: number;
  Stealth: number;
  Arcana: number;
  History: number;
  Investigation: number;
  Nature: number;
  Religion: number;
  AnimalHandling: number;
  Insight: number;
  Medicine: number;
  Perception: number;
  Survival: number;
  Deception: number;
  Intimidation: number;
  Performance: number;
  Persuasion: number;
}
