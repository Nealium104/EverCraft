class Player {
  constructor(
    name,
    alignment,
    ArmorClass = 10,
    HitPoints = 5,
    Strength = 10,
    Dexterity = 10,
    Constitution = 10,
    Wisdom = 10,
    Intelligence = 10,
    Charisma = 10
  ) {
    (this.name = name),
      (this.alignment = alignment),
      (this.ArmorClass = ArmorClass),
      (this.HitPoints = HitPoints),
      (this.Strength = Strength),
      (this.Dexterity = Dexterity),
      (this.Constitution = Constitution),
      (this.Wisdom = Wisdom),
      (this.Intelligence = Intelligence),
      (this.Charisma = Charisma),
      (this.CanAttack = (opponentAC, opponentHP) => {
        Math.random * 20 > opponentAC || Math.random * 20 == 20
          ? (opponentHP -= this.baseDamage + this.weaponDamage)
          : "You did not hit";
      });
  }
  get strMod() {
    return Math.floor((this.Strength - 10) / 2);
  }
  get dexMod() {
    return Math.floor((this.Dexterity - 10) / 2);
  }
  get conMod() {
    return Math.floor((this.Constitution - 10) / 2);
  }
  get wisMod() {
    return Math.floor((this.Wisdom - 10) / 2);
  }
  get intMod() {
    return Math.floor((this.Intelligence - 10) / 2);
  }
  get chaMod() {
    return Math.floor((this.Charisma - 10) / 2);
  }
}

module.exports = Player;
